import React from 'react';

const data = {
    bar1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    },
    bar2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        series: [
            [5, 4, 3, 7, 5],
            [3, 2, 9, 5, 4]
        ]
    },
    pie1: {
        labels: ['50%', '30%', '40%', '15%', '10%', '5%'],
        series: [50, 30, 40, 15, 10, 5]
    },
    pie2: {
        labels: ['20%', '80%'],
        series: [20, 80]
    },
    pie3: {
        labels: ['60%', '30%', '10%'],
        series: [60, 30, 10]
    },
    stackedBar1: {
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
            series: [
                [3000, 1200, 1400, 530, 2000, 600],
                [2000, 4000, 5000, 3000, 700, 800],
                [1000, 2000, 400, 600, 400, 3000]
            ]
        },
        options: {
            stackBars: true,
            horizontalBars: true,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return (value / 1000) + 'k';
                }
            }
        },
    },
    lineChart1: {
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
            series: [
                [42, 9, 17, 38, 5],
                [2, 41, 3.5, 1, 42],
                [1, 3, 30, 5, 6]
            ]
        },
        options: {
            fullWidth: true
        }
    },
    lineChart2: {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            series: [
                [740, 20, 450, 208, 5],
                [20, 441, 300, 1, 640]
            ]
        },
        options: {
            fullWidth: true,
            chartPadding: {
                right: 30
            },
            low: 0,
            showPoint: true,
            showArea: true,
            high: 750,
            height: "250px",
            axisX: {
                showGrid: false,
                offset: 20
            }
        }
    },
    bipolarChart1: {
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -2.5, -1, -2, -1],
                [0, 0, 0, 1, 2, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        },
        options: {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        }
    },
    donut1: {
        data: {
            labels: [5, 3, 4, 2, 1, 4],
            series: [5, 3, 4, 2, 1, 4]
        },

        options: {
            donut: true,
            donutWidth: 30,
            donutSolid: true,
            startAngle: 270,
            showLabel: true
        }
    },
    donut2: {
        data: {
            labels: ["UK", "Canada", "Australia"],
            series: [25, 30, 45]
        },

        options: {
            donut: true,
            donutWidth: 30,
            donutSolid: true,
            startAngle: 270,
            showLabel: true
        }
    },
    bipolarBar1: {
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [5, 4, 3, 7, -5, -10, -3, -4, 8, 10, 6, 8],
            ]
        },
        options: {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        }
    },
    gauge1: {
        data: {
            labels: [20, 10, 30, 40],
            series: [20, 10, 30, 40]
        },

        options: {
            donut: true,
            donutWidth: 30,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: true
        }
    },
    gauge2: {
        data: {
            labels: ["80%", "20%"],
            series: [80, 20]
        },

        options: {
            donut: true,
            donutWidth: 25,
            donutSolid: true,
            startAngle: 270,
            total: 200,
            showLabel: true
        }
    },
    post1: {
        title: "Fruit Sorbet",
        subheader: "June 14, 2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie scelerisque rutrum. Mauris quis rutrum nisi. Aenean in augue ut quam mattis porta eget sit amet purus. Fusce sed consectetur ipsum, ut luctus ante.",
        image: "images/sorbet.jpg"
    },
    post2: {
        title: "Orange Cookies",
        subheader: "June 10, 2018",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie scelerisque rutrum. Mauris quis rutrum nisi. Aenean in augue ut quam mattis porta eget sit amet purus. Fusce sed consectetur ipsum, ut luctus ante.",
        image: "images/cookies.jpg"
    }
};

export default data;