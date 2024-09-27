(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#000";
    Chart.defaults.borderColor = "#000000";


    // current Chart
    var ctx1 = $("#current").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
            datasets: [{
                    label: "廠商數",
                    data: [528, 549, 572, 591, 600, 626, 630],
                    backgroundColor: "rgba(16,173,139, .7)",
                    yAxisID: 'y'
                },
                {
                    label: "員工數",
                    data: [13760, 14141, 14780, 15531, 16568, 17044, 19653],
                    backgroundColor: "rgba(16,173,139, .3)",
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: '廠商數'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: '員工數'
                    },
                    grid: {
                        drawOnChartArea: false  // 這樣可以避免右側軸的格線和左側軸的重疊
                    }
                }
            }
        }
    });
    


    // Salse & Revenue Chart
    var ctx2 = $("#VOCs").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: [ "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "VOCs 排放量",
                    data: [336.22, 363.43, 334.90, 344.92],
                    backgroundColor: "rgba(16,173,139, .3)",
                    fill: true
                },
                {
                    label: "VOCs 許可量",
                    data: [124.71, 80.21, 256.64, 139.59, 371.52],
                    backgroundColor: "rgba(16,173,139, .7)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(16,173,139, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

