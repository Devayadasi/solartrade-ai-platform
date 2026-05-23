from flask import Flask, render_template, redirect, request, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

# =========================================
# APP CONFIGURATION
# =========================================

app = Flask(__name__)

app.config["SECRET_KEY"] = "p2p-energy-secret"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# =========================================
# DATABASE MODELS
# =========================================

class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    password = db.Column(db.String(300), nullable=False)

    role = db.Column(db.String(50), nullable=False)

    city = db.Column(db.String(100))

    state = db.Column(db.String(100))


class EnergyListing(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    producer_id = db.Column(db.Integer, nullable=False)

    producer_name = db.Column(db.String(100))

    energy_amount = db.Column(db.Float, nullable=False)

    price = db.Column(db.Float, nullable=False)

    energy_type = db.Column(db.String(100), nullable=False)

    status = db.Column(db.String(50), default="Available")

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


class Transaction(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    consumer_id = db.Column(db.Integer, nullable=False)

    consumer_name = db.Column(db.String(100))

    producer_id = db.Column(db.Integer, nullable=False)

    producer_name = db.Column(db.String(100))

    listing_id = db.Column(db.Integer, nullable=False)

    energy_amount = db.Column(db.Float, nullable=False)

    total_price = db.Column(db.Float, nullable=False)

    carbon_saved = db.Column(db.Float, nullable=False)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )

# =========================================
# CREATE DATABASE
# =========================================

with app.app_context():
    db.create_all()

# =========================================
# SECRET ADMIN LOGIN
# =========================================

@app.route("/admin-login", methods=["GET", "POST"])
def admin_login():

    session["admin_login"] = True

    if request.method == "POST":

        email = request.form.get("email")

        password = request.form.get("password")

        role = request.form.get("role")

        # =========================================
        # PERMANENT ADMIN CREDENTIALS
        # =========================================

        if (
            email == "admin@solartrade.com"
            and password == "Solar@Admin2026"
            and role == "admin"
        ):

            session["user_id"] = 0

            session["role"] = "admin"

            session["name"] = "Administrator"

            session.pop("admin_login", None)

            return redirect(
                url_for("admin_dashboard")
            )

        flash("Invalid admin credentials")

        return redirect(
            url_for("admin_login")
        )

    return render_template("login.html")

# =========================================
# LOGIN PAGE
# =========================================

@app.route("/", methods=["GET", "POST"])
def home():

    if request.method == "POST":

        email = request.form.get("email")

        password = request.form.get("password")

        role = request.form.get("role")

        user = User.query.filter_by(
            email=email
        ).first()

        if user and check_password_hash(
            user.password,
            password
        ):

            if user.role != role:

                flash("Invalid account type")

                return redirect(
                    url_for("home")
                )

            # Set session for logged in user
            session["user_id"] = user.id

            session["role"] = user.role

            session["name"] = user.name

            # Clear temporary admin login flag
            session.pop("admin_login", None)

            # Redirect based on role
            if user.role == "producer":

                return redirect(
                    url_for("producer_dashboard")
                )

            elif user.role == "consumer":

                return redirect(
                    url_for("consumer_dashboard")
                )

            elif user.role == "admin":

                return redirect(
                    url_for("admin_dashboard")
                )

        # Invalid login
        flash("Invalid email or password")

        return redirect(
            url_for("home")
        )

    return render_template("login.html")

# =========================================
# REGISTER PAGE
# =========================================

@app.route("/register")
def register():

    return render_template(
        "register.html"
    )

# =========================================
# REGISTER USER
# =========================================

@app.route("/register-user", methods=["POST"])
def register_user():

    name = request.form.get("name")

    email = request.form.get("email")

    password = request.form.get("password")

    role = request.form.get("role")

    city = request.form.get("city")

    state = request.form.get("state")

    existing_user = User.query.filter_by(
        email=email
    ).first()

    if existing_user:

        flash("Email already exists")

        return redirect(
            url_for("register")
        )

    hashed_password = generate_password_hash(
        password
    )

    new_user = User(

        name=name,

        email=email,

        password=hashed_password,

        role=role,

        city=city,

        state=state

    )

    db.session.add(new_user)

    db.session.commit()

    flash("Registration successful")

    return redirect(
        url_for("home")
    )

# =========================================
# LOGOUT
# =========================================

@app.route("/logout")
def logout():

    session.clear()

    return redirect(
        url_for("home")
    )

# =========================================
# PRODUCER DASHBOARD
# =========================================

@app.route("/producer-dashboard")
def producer_dashboard():

    if "user_id" not in session:
        return redirect(url_for("home"))

    listings = EnergyListing.query.filter_by(
        producer_id=session["user_id"]
    ).all()

    transactions = Transaction.query.filter_by(
        producer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        listing.energy_amount
        for listing in listings
    ), 2)

    total_revenue = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    carbon_saved = round(
        total_energy * 0.85,
        2
    )

    return render_template(

        "producer_dashboard.html",

        listings=listings,

        transactions=transactions,

        total_energy=total_energy,

        total_revenue=total_revenue,

        carbon_saved=carbon_saved

    )

# =========================================
# PRODUCER MARKETPLACE
# =========================================

@app.route("/producer-marketplace")
def producer_marketplace():

    if "user_id" not in session:
        return redirect(url_for("home"))

    listings = EnergyListing.query.filter_by(
        producer_id=session["user_id"]
    ).all()

    return render_template(

        "producer_marketplace.html",

        listings=listings

    )

# =========================================
# PRODUCER ANALYTICS
# =========================================

@app.route("/producer-analytics")
def producer_analytics():

    if "user_id" not in session:
        return redirect(url_for("home"))

    transactions = Transaction.query.filter_by(
        producer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_revenue = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    carbon_saved = round(
        total_energy * 0.85,
        2
    )

    return render_template(

        "producer_analytics.html",

        transactions=transactions,

        total_energy=total_energy,

        total_revenue=total_revenue,

        carbon_saved=carbon_saved

    )

# =========================================
# PRODUCER SETTINGS
# =========================================

@app.route("/producer-settings")
def producer_settings():

    if "user_id" not in session:
        return redirect(url_for("home"))

    user = User.query.get(
        session["user_id"]
    )

    return render_template(

        "producer_settings.html",

        user=user

    )

# =========================================
# PRODUCER TRANSACTIONS
# =========================================

@app.route("/producer-transactions")
def producer_transactions():

    if "user_id" not in session:
        return redirect(url_for("home"))

    transactions = Transaction.query.filter_by(
        producer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_revenue = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    return render_template(

        "producer_transactions.html",

        transactions=transactions,

        total_energy=total_energy,

        total_revenue=total_revenue

    )

# =========================================
# CONSUMER DASHBOARD
# =========================================

@app.route("/consumer-dashboard")
def consumer_dashboard():

    if "user_id" not in session:
        return redirect(url_for("home"))

    listings = EnergyListing.query.filter_by(
        status="Available"
    ).all()

    transactions = Transaction.query.filter_by(
        consumer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_spent = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    carbon_saved = round(
        total_energy * 0.85,
        2
    )

    return render_template(

        "consumer_dashboard.html",

        listings=listings,

        transactions=transactions,

        total_energy=total_energy,

        total_spent=total_spent,

        carbon_saved=carbon_saved

    )

# =========================================
# CONSUMER MARKETPLACE
# =========================================

@app.route("/consumer-marketplace")
def consumer_marketplace():

    if "user_id" not in session:
        return redirect(url_for("home"))

    listings = EnergyListing.query.filter_by(
        status="Available"
    ).all()

    return render_template(

        "consumer_marketplace.html",

        listings=listings

    )

# =========================================
# CONSUMER ANALYTICS
# =========================================

@app.route("/consumer-analytics")
def consumer_analytics():

    if "user_id" not in session:
        return redirect(url_for("home"))

    transactions = Transaction.query.filter_by(
        consumer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_spent = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    carbon_saved = round(
        total_energy * 0.85,
        2
    )

    return render_template(

        "consumer_analytics.html",

        transactions=transactions,

        total_energy=total_energy,

        total_spent=total_spent,

        carbon_saved=carbon_saved

    )

# =========================================
# CONSUMER SETTINGS
# =========================================

@app.route("/consumer-settings")
def consumer_settings():

    if "user_id" not in session:
        return redirect(url_for("home"))

    user = User.query.get(
        session["user_id"]
    )

    return render_template(

        "consumer_settings.html",

        user=user

    )

# =========================================
# CONSUMER TRANSACTIONS
# =========================================

@app.route("/consumer-transactions")
def consumer_transactions():

    if "user_id" not in session:
        return redirect(url_for("home"))

    transactions = Transaction.query.filter_by(
        consumer_id=session["user_id"]
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_spent = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    return render_template(

        "consumer_transactions.html",

        transactions=transactions,

        total_energy=total_energy,

        total_spent=total_spent

    )

# =========================================
# ADMIN DASHBOARD
# =========================================

@app.route("/admin-dashboard")
def admin_dashboard():

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    total_users = User.query.count()

    total_consumers = User.query.filter_by(
        role="consumer"
    ).count()

    total_producers = User.query.filter_by(
        role="producer"
    ).count()

    total_transactions = Transaction.query.count()

    total_energy = db.session.query(
        db.func.sum(Transaction.energy_amount)
    ).scalar() or 0

    total_revenue = db.session.query(
        db.func.sum(Transaction.total_price)
    ).scalar() or 0

    recent_transactions = Transaction.query.order_by(
        Transaction.id.desc()
    ).limit(6).all()

    return render_template(

        "admin_dashboard.html",

        total_users=total_users,

        total_consumers=total_consumers,

        total_producers=total_producers,

        total_transactions=total_transactions,

        total_energy=round(total_energy, 2),

        total_revenue=round(total_revenue, 2),

        recent_transactions=recent_transactions

    )

# =========================================
# ADMIN MARKETPLACE
# =========================================

@app.route("/admin-marketplace")
def admin_marketplace():

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    listings = EnergyListing.query.filter_by(
        status="Available"
    ).all()

    total_energy = round(sum(
        listing.energy_amount
        for listing in listings
    ), 2)

    return render_template(

        "admin_marketplace.html",

        listings=listings,

        total_energy=total_energy

    )

# =========================================
# REMOVE LISTING
# =========================================

@app.route("/remove-listing/<int:listing_id>")
def remove_listing(listing_id):

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    listing = EnergyListing.query.get_or_404(
        listing_id
    )

    related_transactions = Transaction.query.filter_by(
        listing_id=listing.id
    ).all()

    for transaction in related_transactions:

        db.session.delete(transaction)

    db.session.delete(listing)

    db.session.commit()

    flash("Listing removed successfully")

    return redirect(
        url_for("admin_marketplace")
    )

# =========================================
# ADMIN TRANSACTIONS
# =========================================

@app.route("/admin-transactions")
def admin_transactions():

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    transactions = Transaction.query.order_by(
        Transaction.id.desc()
    ).all()

    total_energy = round(sum(
        transaction.energy_amount
        for transaction in transactions
    ), 2)

    total_revenue = round(sum(
        transaction.total_price
        for transaction in transactions
    ), 2)

    total_carbon = round(sum(
        transaction.carbon_saved
        for transaction in transactions
    ), 2)

    return render_template(

        "admin_transactions.html",

        transactions=transactions,

        total_energy=total_energy,

        total_revenue=total_revenue,

        total_carbon=total_carbon

    )

# =========================================
# ADMIN ANALYTICS
# =========================================

@app.route("/admin-analytics")
def admin_analytics():

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    total_users = User.query.count()

    total_consumers = User.query.filter_by(
        role="consumer"
    ).count()

    total_producers = User.query.filter_by(
        role="producer"
    ).count()

    total_transactions = Transaction.query.count()

    total_energy = db.session.query(
        db.func.sum(Transaction.energy_amount)
    ).scalar() or 0

    total_revenue = db.session.query(
        db.func.sum(Transaction.total_price)
    ).scalar() or 0

    total_carbon = db.session.query(
        db.func.sum(Transaction.carbon_saved)
    ).scalar() or 0

    return render_template(

        "admin_analytics.html",

        total_users=total_users,

        total_consumers=total_consumers,

        total_producers=total_producers,

        total_transactions=total_transactions,

        total_energy=round(total_energy, 2),

        total_revenue=round(total_revenue, 2),

        total_carbon=round(total_carbon, 2)

    )

# =========================================
# ADMIN SETTINGS
# =========================================

@app.route("/admin-settings")
def admin_settings():

    if "user_id" not in session:
        return redirect(url_for("home"))

    if session.get("role") != "admin":
        return redirect(url_for("home"))

    user = User.query.get(
        session["user_id"]
    )

    return render_template(

        "admin_settings.html",

        user=user

    )

# =========================================
# ADD ENERGY LISTING
# =========================================

@app.route("/add-listing", methods=["POST"])
def add_listing():

    if "user_id" not in session:
        return redirect(url_for("home"))

    energy_amount = request.form.get(
        "energy_amount"
    )

    price = request.form.get("price")

    energy_type = request.form.get(
        "energy_type"
    )

    listing = EnergyListing(

        producer_id=session["user_id"],

        producer_name=session["name"],

        energy_amount=float(energy_amount),

        price=float(price),

        energy_type=energy_type,

        status="Available"

    )

    db.session.add(listing)

    db.session.commit()

    flash("Energy listing added successfully")

    return redirect(
        url_for("producer_marketplace")
    )

# =========================================
# BUY ENERGY
# =========================================

@app.route("/buy-energy/<int:listing_id>")
def buy_energy(listing_id):

    if "user_id" not in session:
        return redirect(url_for("home"))

    listing = EnergyListing.query.get_or_404(
        listing_id
    )

    if listing.status == "Sold":

        flash("Energy already sold")

        return redirect(
            url_for("consumer_marketplace")
        )

    producer = User.query.get(
        listing.producer_id
    )

    consumer = User.query.get(
        session["user_id"]
    )

    transaction = Transaction(

        consumer_id=consumer.id,

        consumer_name=consumer.name,

        producer_id=producer.id,

        producer_name=producer.name,

        listing_id=listing.id,

        energy_amount=listing.energy_amount,

        total_price=listing.price,

        carbon_saved=round(
            listing.energy_amount * 0.85,
            2
        )

    )

    listing.status = "Sold"

    db.session.add(transaction)

    db.session.commit()

    flash("Energy purchased successfully")

    return redirect(
        url_for("consumer_marketplace")
    )

# =========================================
# UPDATE PROFILE
# =========================================

@app.route("/update-profile", methods=["POST"])
def update_profile():

    if "user_id" not in session:
        return redirect(url_for("home"))

    user = User.query.get(
        session["user_id"]
    )

    user.name = request.form.get("name")

    user.email = request.form.get("email")

    user.city = request.form.get("city")

    user.state = request.form.get("state")

    password = request.form.get("password")

    if password:

        user.password = generate_password_hash(
            password
        )

    db.session.commit()

    flash("Profile updated successfully")

    if user.role == "producer":

        return redirect(
            url_for("producer_settings")
        )

    elif user.role == "consumer":

        return redirect(
            url_for("consumer_settings")
        )

    elif user.role == "admin":

        return redirect(
            url_for("admin_settings")
        )



# =========================================
# RUN SERVER
# =========================================

if __name__ == "__main__":

    app.run(debug=True)