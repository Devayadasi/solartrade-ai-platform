// ========================================
// MAIN ENERGY ANALYTICS CHART
// ========================================

const energyChart =
document.getElementById('energyChart');

if (energyChart) {

    new Chart(energyChart, {

        type: 'line',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul'
            ],

            datasets: [{

                label: 'Energy Revenue',

                data: [
                    120,
                    180,
                    300,
                    250,
                    420,
                    390,
                    500
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.18)',

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 3,

                pointHoverRadius: 6
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {

                    backgroundColor: '#0f172a',

                    titleColor: '#ffffff',

                    bodyColor: '#ffffff',

                    padding: 12,

                    displayColors: false
                }
            },

            scales: {

                x: {

                    grid: {
                        color: '#eef2f7'
                    },

                    ticks: {
                        color: '#64748b'
                    }
                },

                y: {

                    beginAtZero: true,

                    grid: {
                        color: '#eef2f7'
                    },

                    ticks: {
                        color: '#64748b'
                    }
                }
            }
        }
    });
}

// ========================================
// MINI CHART
// ========================================

const smallChart =
document.getElementById('smallChart');

if (smallChart) {

    new Chart(smallChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ],

            datasets: [{

                data: [
                    20,
                    50,
                    40,
                    80,
                    70,
                    95
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.12)',

                fill: true,

                tension: 0.5,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// ADVANCED ENERGY CHART
// ========================================

const advancedEnergyChartCanvas =
document.getElementById(
'advancedEnergyChart'
);

if (advancedEnergyChartCanvas) {

    const buyData =
    [20, 28, 24, 42, 38, 36, 40];

    const sellData =
    [18, 24, 22, 46, 40, 37, 35];

    const advancedChart =
    new Chart(
        advancedEnergyChartCanvas,
        {

            type: 'line',

            data: {

                labels: [
                    'Jan 10',
                    'Jan 11',
                    'Jan 12',
                    'Jan 13',
                    'Jan 14',
                    'Jan 15',
                    'Jan 16'
                ],

                datasets: [{

                    label: 'Buy Energy',

                    data: buyData,

                    borderColor: '#facc15',

                    backgroundColor:
                    'rgba(250,204,21,0.16)',

                    fill: true,

                    tension: 0.4,

                    borderWidth: 3,

                    pointRadius: 3
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: true
                    }
                },

                scales: {

                    x: {

                        grid: {
                            color: '#eef2f7'
                        },

                        ticks: {
                            color: '#64748b'
                        }
                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: '#eef2f7'
                        },

                        ticks: {
                            color: '#64748b'
                        }
                    }
                }
            }
        }
    );

    const buyBtn =
    document.getElementById('buyBtn');

    const sellBtn =
    document.getElementById('sellBtn');

    if (buyBtn && sellBtn) {

        // BUY BUTTON

        buyBtn.addEventListener('click', () => {

            advancedChart.data.datasets[0].data =
            buyData;

            advancedChart.data.datasets[0].label =
            'Buy Energy';

            advancedChart.data.datasets[0].borderColor =
            '#facc15';

            advancedChart.data.datasets[0].backgroundColor =
            'rgba(250,204,21,0.16)';

            advancedChart.update();

            buyBtn.classList.add(
                'active-graph-tab'
            );

            sellBtn.classList.remove(
                'active-graph-tab'
            );

        });

        // SELL BUTTON

        sellBtn.addEventListener('click', () => {

            advancedChart.data.datasets[0].data =
            sellData;

            advancedChart.data.datasets[0].label =
            'Sell Energy';

            advancedChart.data.datasets[0].borderColor =
            '#27a9ee';

            advancedChart.data.datasets[0].backgroundColor =
            'rgba(39,169,238,0.16)';

            advancedChart.update();

            sellBtn.classList.add(
                'active-graph-tab'
            );

            buyBtn.classList.remove(
                'active-graph-tab'
            );

        });
    }
}

// ========================================
// PROFIT MINI CHART
// ========================================

const profitChart =
document.getElementById('profitChart');

if (profitChart) {

    new Chart(profitChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5'
            ],

            datasets: [{

                data: [
                    2,
                    6,
                    5,
                    9,
                    7
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.12)',

                fill: true,

                tension: 0.4,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// EARNINGS CHART
// ========================================

const earningsChart =
document.getElementById('earningsChart');

if (earningsChart) {

    new Chart(earningsChart, {

        type: 'line',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                data: [
                    120,
                    180,
                    150,
                    190,
                    240,
                    210
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.22)',

                fill: true,

                tension: 0.5,

                borderWidth: 3,

                pointRadius: 2
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// CONSUMER ANALYTICS CHART
// ========================================

const consumerAnalyticsChart =
document.getElementById(
'consumerAnalyticsChart'
);

if (consumerAnalyticsChart) {

    const usageData =
    [120, 180, 150, 240, 210, 300, 280];

    const spendingData =
    [400, 520, 470, 610, 580, 720, 690];

    const consumerChart =
    new Chart(
        consumerAnalyticsChart,
        {

            type: 'line',

            data: {

                labels: [
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun'
                ],

                datasets: [{

                    label: 'Energy Usage',

                    data: usageData,

                    borderColor: '#22c55e',

                    backgroundColor:
                    'rgba(34,197,94,0.12)',

                    fill: true,

                    tension: 0.4,

                    borderWidth: 3,

                    pointRadius: 3
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }
                },

                scales: {

                    x: {

                        grid: {
                            color: '#eef2f7'
                        }
                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: '#eef2f7'
                        }
                    }
                }
            }
        }
    );

    const usageBtn =
    document.getElementById('usageBtn');

    const spendingBtn =
    document.getElementById('spendingBtn');

    if (usageBtn && spendingBtn) {

        usageBtn.addEventListener(
            'click',
            () => {

                consumerChart.data.datasets[0].data =
                usageData;

                consumerChart.data.datasets[0].label =
                'Energy Usage';

                consumerChart.data.datasets[0].borderColor =
                '#22c55e';

                consumerChart.data.datasets[0].backgroundColor =
                'rgba(34,197,94,0.12)';

                consumerChart.update();

                usageBtn.classList.add(
                    'active-graph-tab'
                );

                spendingBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );

        spendingBtn.addEventListener(
            'click',
            () => {

                consumerChart.data.datasets[0].data =
                spendingData;

                consumerChart.data.datasets[0].label =
                'Spending';

                consumerChart.data.datasets[0].borderColor =
                '#16a34a';

                consumerChart.data.datasets[0].backgroundColor =
                'rgba(22,163,74,0.12)';

                consumerChart.update();

                spendingBtn.classList.add(
                    'active-graph-tab'
                );

                usageBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }
}

// ========================================
// CONSUMER IMPACT CHART
// ========================================

const consumerImpactChart =
document.getElementById(
'consumerImpactChart'
);

if (consumerImpactChart) {

    new Chart(consumerImpactChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ],

            datasets: [{

                data: [
                    10,
                    30,
                    25,
                    45,
                    40,
                    60
                ],

                borderColor: '#22c55e',

                backgroundColor:
                'rgba(34,197,94,0.10)',

                fill: true,

                tension: 0.4,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// CONSUMER SPENDING CHART
// ========================================

const consumerSpendingChart =
document.getElementById(
'consumerSpendingChart'
);

if (consumerSpendingChart) {

    new Chart(consumerSpendingChart, {

        type: 'bar',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                data: [
                    1200,
                    1900,
                    1600,
                    2400,
                    2100,
                    2800
                ],

                backgroundColor: [
                    '#22c55e',
                    '#16a34a',
                    '#4ade80',
                    '#22c55e',
                    '#16a34a',
                    '#4ade80'
                ],

                borderRadius: 8
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {

                    grid: {
                        display: false
                    }
                },

                y: {

                    beginAtZero: true,

                    grid: {
                        color: '#eef2f7'
                    }
                }
            }
        }
    });
}

// ========================================
// LIVE ENERGY MAP
// ========================================

const mapContainer =
document.getElementById('energyMap');

if (mapContainer) {

    const map = L.map('energyMap')
    .setView([20.5937, 78.9629], 5);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
            'P2P Energy Trading'
        }
    ).addTo(map);

    const producerMarker =
    L.marker([17.3850, 78.4867])
    .addTo(map);

    producerMarker.bindPopup(`
        <b>P2P Energy Trading</b><br>
        Producer Energy Zone
    `);

    const zones = [

        {
            coords:[13.0827,80.2707],
            color:'#22c55e',
            text:'Chennai Renewable Hub'
        },

        {
            coords:[12.9716,77.5946],
            color:'#27a9ee',
            text:'Bangalore Solar Zone'
        },

        {
            coords:[19.0760,72.8777],
            color:'#f59e0b',
            text:'Mumbai Energy Grid'
        },

        {
            coords:[28.6139,77.2090],
            color:'#ef4444',
            text:'Delhi Smart Energy Zone'
        }
    ];

    zones.forEach(zone => {

        L.circle(zone.coords, {

            color: zone.color,

            fillColor: zone.color,

            fillOpacity: 0.25,

            radius: 50000

        }).addTo(map)
        .bindPopup(zone.text);

    });
}

// ========================================
// PREMIUM BUTTON EFFECTS
// ========================================

const premiumButtons =
document.querySelectorAll(
'.premium-sell-btn, .widget-btn'
);

premiumButtons.forEach(button => {

    button.addEventListener(
        'mouseenter',
        () => {

            button.style.transform =
            'translateY(-2px)';

        }
    );

    button.addEventListener(
        'mouseleave',
        () => {

            button.style.transform =
            'translateY(0px)';

        }
    );
});

// ========================================
// LIVE CLOCK
// ========================================

function updateClock() {

    const clockElement =
    document.getElementById(
    'liveClock'
    );

    if (clockElement) {

        const now = new Date();

        clockElement.innerHTML =
        now.toLocaleTimeString();
    }
}

setInterval(updateClock, 1000);

// ========================================
// LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});


// ========================================
// MARKET PRICE CHART
// ========================================

const marketChart =
document.getElementById('marketChart');

if (marketChart) {

    new Chart(marketChart, {

        type: 'line',

        data: {

            labels: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ],

            datasets: [{

                label: 'Market Price',

                data: [
                    6.2,
                    7.1,
                    7.8,
                    8.2,
                    8.4,
                    8.1,
                    8.42
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.12)',

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 3
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {

                    display: false
                },

                y: {

                    display: false
                }
            }
        }
    });
}

// ========================================
// MARKET MINI CHART
// ========================================

const marketMiniChart =
document.getElementById(
'marketMiniChart'
);

if (marketMiniChart) {

    new Chart(marketMiniChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ],

            datasets: [{

                data: [
                    12,
                    22,
                    18,
                    30,
                    28,
                    36
                ],

                borderColor: '#22c55e',

                backgroundColor:
                'rgba(34,197,94,0.10)',

                fill: true,

                tension: 0.4,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// MARKET DEMAND CHART
// ========================================

const marketDemandChart =
document.getElementById(
'marketDemandChart'
);

if (marketDemandChart) {

    const demandData =
    [120, 180, 150, 240, 210, 300, 280];

    const supplyData =
    [100, 140, 170, 200, 260, 230, 250];

    const marketDemand =
    new Chart(
        marketDemandChart,
        {

            type: 'line',

            data: {

                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ],

                datasets: [{

                    label: 'Demand',

                    data: demandData,

                    borderColor: '#27a9ee',

                    backgroundColor:
                    'rgba(39,169,238,0.12)',

                    fill: true,

                    tension: 0.4,

                    borderWidth: 3,

                    pointRadius: 4
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }
                },

                scales: {

                    x: {

                        grid: {
                            color: '#eef2f7'
                        }
                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: '#eef2f7'
                        }
                    }
                }
            }
        }
    );

    const demandBtn =
    document.getElementById('demandBtn');

    const supplyBtn =
    document.getElementById('supplyBtn');

    if (demandBtn && supplyBtn) {

        // DEMAND

        demandBtn.addEventListener(
            'click',
            () => {

                marketDemand.data.datasets[0].data =
                demandData;

                marketDemand.data.datasets[0].label =
                'Demand';

                marketDemand.data.datasets[0].borderColor =
                '#27a9ee';

                marketDemand.data.datasets[0].backgroundColor =
                'rgba(39,169,238,0.12)';

                marketDemand.update();

                demandBtn.classList.add(
                    'active-graph-tab'
                );

                supplyBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );

        // SUPPLY

        supplyBtn.addEventListener(
            'click',
            () => {

                marketDemand.data.datasets[0].data =
                supplyData;

                marketDemand.data.datasets[0].label =
                'Supply';

                marketDemand.data.datasets[0].borderColor =
                '#22c55e';

                marketDemand.data.datasets[0].backgroundColor =
                'rgba(34,197,94,0.12)';

                marketDemand.update();

                supplyBtn.classList.add(
                    'active-graph-tab'
                );

                demandBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }
}




// ========================================
// TRANSACTIONS REVENUE ANALYTICS
// ========================================

const transactionsAnalyticsChart =
document.getElementById(
'transactionsAnalyticsChart'
);

if (transactionsAnalyticsChart) {

    const weeklyRevenue =
    [1200, 1800, 1500, 2400, 2100, 3200, 2800];

    const monthlyRevenue =
    [8200, 9100, 10400, 11300, 12800, 14200, 15600];

    const revenueChart =
    new Chart(
        transactionsAnalyticsChart,
        {

            type: 'line',

            data: {

                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ],

                datasets: [{

                    label: 'Revenue',

                    data: weeklyRevenue,

                    borderColor: '#27a9ee',

                    backgroundColor:
                    'rgba(39,169,238,0.12)',

                    fill: true,

                    tension: 0.4,

                    borderWidth: 3,

                    pointRadius: 4,

                    pointBackgroundColor:
                    '#27a9ee'
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }
                },

                scales: {

                    x: {

                        grid: {
                            color: '#eef2f7'
                        },

                        ticks: {
                            color: '#64748b'
                        }
                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: '#eef2f7'
                        },

                        ticks: {
                            color: '#64748b'
                        }
                    }
                }
            }
        }
    );

    const weeklyRevenueBtn =
    document.getElementById(
    'weeklyRevenueBtn'
    );

    const monthlyRevenueBtn =
    document.getElementById(
    'monthlyRevenueBtn'
    );

    if (
        weeklyRevenueBtn &&
        monthlyRevenueBtn
    ) {

        // WEEKLY

        weeklyRevenueBtn.addEventListener(
            'click',
            () => {

                revenueChart.data.datasets[0].data =
                weeklyRevenue;

                revenueChart.data.datasets[0].label =
                'Weekly Revenue';

                revenueChart.data.datasets[0].borderColor =
                '#27a9ee';

                revenueChart.data.datasets[0].backgroundColor =
                'rgba(39,169,238,0.12)';

                revenueChart.update();

                weeklyRevenueBtn.classList.add(
                    'active-graph-tab'
                );

                monthlyRevenueBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );

        // MONTHLY

        monthlyRevenueBtn.addEventListener(
            'click',
            () => {

                revenueChart.data.datasets[0].data =
                monthlyRevenue;

                revenueChart.data.datasets[0].label =
                'Monthly Revenue';

                revenueChart.data.datasets[0].borderColor =
                '#22c55e';

                revenueChart.data.datasets[0].backgroundColor =
                'rgba(34,197,94,0.12)';

                revenueChart.update();

                monthlyRevenueBtn.classList.add(
                    'active-graph-tab'
                );

                weeklyRevenueBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }
}

// ========================================
// TRANSACTION MINI CHART
// ========================================

const transactionMiniChart =
document.getElementById(
'transactionMiniChart'
);

if (transactionMiniChart) {

    new Chart(transactionMiniChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ],

            datasets: [{

                data: [
                    12,
                    22,
                    18,
                    34,
                    28,
                    42
                ],

                borderColor: '#22c55e',

                backgroundColor:
                'rgba(34,197,94,0.10)',

                fill: true,

                tension: 0.4,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// REVENUE BAR CHART
// ========================================

const transactionsRevenueChart =
document.getElementById(
'transactionsRevenueChart'
);

if (transactionsRevenueChart) {

    new Chart(transactionsRevenueChart, {

        type: 'bar',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                label: 'Revenue',

                data: [
                    1200,
                    1900,
                    1600,
                    2400,
                    2100,
                    3200
                ],

                backgroundColor: [
                    '#27a9ee',
                    '#0ea5e9',
                    '#38bdf8',
                    '#27a9ee',
                    '#0ea5e9',
                    '#38bdf8'
                ],

                borderRadius: 8
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {

                    grid: {
                        display: false
                    }
                },

                y: {

                    beginAtZero: true,

                    grid: {
                        color: '#eef2f7'
                    }
                }
            }
        }
    });
}


// ========================================
// ANALYTICS REVENUE CHART
// ========================================

const analyticsRevenueChart =
document.getElementById(
'analyticsRevenueChart'
);

if (analyticsRevenueChart) {

    new Chart(analyticsRevenueChart, {

        type: 'line',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                data: [
                    1200,
                    1800,
                    1600,
                    2400,
                    2200,
                    3200
                ],

                borderColor: '#27a9ee',

                backgroundColor:
                'rgba(39,169,238,0.15)',

                fill: true,

                tension: 0.4,

                borderWidth: 3,

                pointRadius: 2
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// ANALYTICS MINI CHART
// ========================================

const analyticsMiniChart =
document.getElementById(
'analyticsMiniChart'
);

if (analyticsMiniChart) {

    new Chart(analyticsMiniChart, {

        type: 'line',

        data: {

            labels: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
            ],

            datasets: [{

                data: [
                    10,
                    20,
                    18,
                    34,
                    28,
                    40
                ],

                borderColor: '#22c55e',

                backgroundColor:
                'rgba(34,197,94,0.10)',

                fill: true,

                tension: 0.4,

                borderWidth: 2,

                pointRadius: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {
                    display: false
                },

                y: {
                    display: false
                }
            }
        }
    });
}

// ========================================
// MAIN ANALYTICS GRAPH
// ========================================

const analyticsMainChart =
document.getElementById(
'analyticsMainChart'
);

if (analyticsMainChart) {

    const dailyData =
    [120, 180, 160, 240, 210, 300, 280];

    const weeklyData =
    [900, 1200, 1500, 1800, 2100, 2400, 2800];

    const monthlyData =
    [4200, 5200, 6100, 7200, 8600, 9400, 11000];

    const analyticsChart =
    new Chart(
        analyticsMainChart,
        {

            type: 'line',

            data: {

                labels: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul'
                ],

                datasets: [{

                    label: 'Energy Production',

                    data: dailyData,

                    borderColor: '#27a9ee',

                    backgroundColor:
                    'rgba(39,169,238,0.12)',

                    fill: true,

                    tension: 0.4,

                    borderWidth: 3,

                    pointRadius: 4
                }]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }
                },

                scales: {

                    x: {

                        grid: {
                            color: '#eef2f7'
                        }
                    },

                    y: {

                        beginAtZero: true,

                        grid: {
                            color: '#eef2f7'
                        }
                    }
                }
            }
        }
    );

    const dailyAnalyticsBtn =
    document.getElementById(
    'dailyAnalyticsBtn'
    );

    const weeklyAnalyticsBtn =
    document.getElementById(
    'weeklyAnalyticsBtn'
    );

    const monthlyAnalyticsBtn =
    document.getElementById(
    'monthlyAnalyticsBtn'
    );

    // DAILY

    if (dailyAnalyticsBtn) {

        dailyAnalyticsBtn.addEventListener(
            'click',
            () => {

                analyticsChart.data.datasets[0].data =
                dailyData;

                analyticsChart.data.datasets[0].borderColor =
                '#27a9ee';

                analyticsChart.data.datasets[0].backgroundColor =
                'rgba(39,169,238,0.12)';

                analyticsChart.update();

                dailyAnalyticsBtn.classList.add(
                    'active-graph-tab'
                );

                weeklyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

                monthlyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }

    // WEEKLY

    if (weeklyAnalyticsBtn) {

        weeklyAnalyticsBtn.addEventListener(
            'click',
            () => {

                analyticsChart.data.datasets[0].data =
                weeklyData;

                analyticsChart.data.datasets[0].borderColor =
                '#22c55e';

                analyticsChart.data.datasets[0].backgroundColor =
                'rgba(34,197,94,0.12)';

                analyticsChart.update();

                weeklyAnalyticsBtn.classList.add(
                    'active-graph-tab'
                );

                dailyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

                monthlyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }

    // MONTHLY

    if (monthlyAnalyticsBtn) {

        monthlyAnalyticsBtn.addEventListener(
            'click',
            () => {

                analyticsChart.data.datasets[0].data =
                monthlyData;

                analyticsChart.data.datasets[0].borderColor =
                '#f59e0b';

                analyticsChart.data.datasets[0].backgroundColor =
                'rgba(245,158,11,0.12)';

                analyticsChart.update();

                monthlyAnalyticsBtn.classList.add(
                    'active-graph-tab'
                );

                dailyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

                weeklyAnalyticsBtn.classList.remove(
                    'active-graph-tab'
                );

            }
        );
    }
}

// ========================================
// ENERGY SOURCE DONUT CHART
// ========================================

const energySourceChart =
document.getElementById(
'energySourceChart'
);

if (energySourceChart) {

    new Chart(energySourceChart, {

        type: 'doughnut',

        data: {

            labels: [
                'Solar',
                'Wind',
                'Hybrid',
                'Hydro'
            ],

            datasets: [{

                data: [
                    45,
                    25,
                    20,
                    10
                ],

                backgroundColor: [
                    '#27a9ee',
                    '#22c55e',
                    '#f59e0b',
                    '#8b5cf6'
                ],

                borderWidth: 0
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: '70%',

            plugins: {

                legend: {

                    position: 'bottom'
                }
            }
        }
    });
}

// ========================================
// MARKET PERFORMANCE BAR CHART
// ========================================

const marketPerformanceChart =
document.getElementById(
'marketPerformanceChart'
);

if (marketPerformanceChart) {

    new Chart(marketPerformanceChart, {

        type: 'bar',

        data: {

            labels: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ],

            datasets: [{

                data: [
                    1200,
                    1900,
                    1600,
                    2400,
                    2100,
                    3200
                ],

                backgroundColor: [
                    '#27a9ee',
                    '#0ea5e9',
                    '#38bdf8',
                    '#22c55e',
                    '#16a34a',
                    '#4ade80'
                ],

                borderRadius: 8
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }
            },

            scales: {

                x: {

                    grid: {
                        display: false
                    }
                },

                y: {

                    beginAtZero: true,

                    grid: {
                        color: '#eef2f7'
                    }
                }
            }
        }
    });
}

