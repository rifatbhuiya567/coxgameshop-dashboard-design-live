let myToggleNav = document.querySelector(".openbar");

myToggleNav.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
    document.querySelector(".hidden-menu").style.display = "none";
    document.querySelector(".hidden-menu-two").style.display = "none";
    document.querySelector(".hidden-menu-there").style.display = "none";
    document.querySelector(".hidden-menu-four").style.display = "none";
    document.querySelector(".hidden-menu-five").style.display = "none";
});

$(".hidden-menu-parent .drop-relative").click(function(){
    $(".hidden-menu").toggle(300);
    $(".hidden-menu-parent .drop-child i").toggleClass("arrow-rotate");
});

$(".hidden-menu-parent-two .drop-relative").click(function(){
    $(".hidden-menu-two").toggle(300);
    $(".hidden-menu-parent-two .drop-child i").toggleClass("arrow-rotate");
});

$(".hidden-menu-parent-there .drop-relative").click(function(){
    $(".hidden-menu-there").toggle(300);
    $(".hidden-menu-parent-there .drop-child i").toggleClass("arrow-rotate");
});

$(".hidden-menu-parent-four .drop-relative").click(function(){
    $(".hidden-menu-four").toggle(300);
    $(".hidden-menu-parent-four .drop-child i").toggleClass("arrow-rotate");
});

$(".hidden-menu-parent-five .drop-relative").click(function(){
    $(".hidden-menu-five").toggle(300);
    $(".hidden-menu-parent-five .drop-child i").toggleClass("arrow-rotate");
});

// Dashboard sidenavbar end

$(".user-menu .user-img").click(function(){
    $(".user-main-menu").toggle(300);
});

// User menu end

$(".packageToggle-one").click(function(){
    $(".package-hidden-content-one").toggle(400);
    $(".packageToggle-one .arrow").toggleClass("arrow-move");
    $(".packageToggle-one").toggleClass("shadow");
});

$(".packageToggle-two").click(function(){
    $(".package-hidden-content-two").toggle(400);
    $(".packageToggle-two .arrow").toggleClass("arrow-move");
    $(".packageToggle-two").toggleClass("shadow");
});

$(".packageToggle-there").click(function(){
    $(".package-hidden-content-there").toggle(400);
    $(".packageToggle-there .arrow").toggleClass("arrow-move");
    $(".packageToggle-there").toggleClass("shadow");
});

$(".packageToggle-four").click(function(){
    $(".package-hidden-content-four").toggle(400);
    $(".packageToggle-four .arrow").toggleClass("arrow-move");
    $(".packageToggle-four").toggleClass("shadow");
});

$(".packageToggle-five").click(function(){
    $(".package-hidden-content-five").toggle(400);
    $(".packageToggle-five .arrow").toggleClass("arrow-move");
    $(".packageToggle-five").toggleClass("shadow");
});

$(".packageToggle-six").click(function(){
    $(".package-hidden-content-six").toggle(400);
    $(".packageToggle-six .arrow").toggleClass("arrow-move");
    $(".packageToggle-six").toggleClass("shadow");
});

// Pages toggle function end

let orderChart = document.getElementById('orderGraph');

Chart.defaults.borderColor = '#d1d1d1';
Chart.defaults.color = '#000';
        
new Chart(orderChart, {
            type: 'line',
            data: {
                labels: [
                '1 Dec', 
                '2 Dec', 
                '3 Dec', 
                '4 Dec', 
                '6 Dec', 
                '7 Dec',
                '8 Dec',
                '9 Dec',
                '10 Dec',
                '11 Dec', 
                '12 Dec', 
                '13 Dec', 
                '14 Dec', 
                '16 Dec', 
                '17 Dec',
                '18 Dec',
                '19 Dec',
                '20 Dec',
                '21 Dec', 
                '22 Dec', 
                '23 Dec', 
                '24 Dec', 
                '26 Dec', 
                '27 Dec',
                '28 Dec',
                '29 Dec',
                '30 Dec',
                ],
                datasets: [{
                label: 'Order',
                data: [
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    12,
                    17,
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    25
                ],
                borderWidth: 1,
                borderColor: '#06569e',
                backgroundColor: '#06569e',
                }]
            },
            options: {
                scales: {
                y: {
                    beginAtZero: true
                }
                },
                plugins: {
                customCanvasBackgroundColor: {
                    color: '#f5f5f5',
                }
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 14
                        }
                    }
                }
            }
});

// Order chart end

let sellChart = document.getElementById('sellGraph');

Chart.defaults.borderColor = '#d1d1d1';
Chart.defaults.color = '#000';
        
new Chart(sellChart, {
            type: 'line',
            data: {
                labels: [
                '1 Dec', 
                '2 Dec', 
                '3 Dec', 
                '4 Dec', 
                '6 Dec', 
                '7 Dec',
                '8 Dec',
                '9 Dec',
                '10 Dec',
                '11 Dec', 
                '12 Dec', 
                '13 Dec', 
                '14 Dec', 
                '16 Dec', 
                '17 Dec',
                '18 Dec',
                '19 Dec',
                '20 Dec',
                '21 Dec', 
                '22 Dec', 
                '23 Dec', 
                '24 Dec', 
                '26 Dec', 
                '27 Dec',
                '28 Dec',
                '29 Dec',
                '30 Dec',
                ],
                datasets: [{
                label: 'Sale',
                data: [
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    12,
                    17,
                    12, 
                    19, 
                    3, 
                    5, 
                    2, 
                    3,
                    10,
                    12,
                    17,
                    25
                ],
                borderWidth: 1,
                borderColor: '#06569e',
                backgroundColor: '#06569e',
                }]
            },
            options: {
                scales: {
                y: {
                    beginAtZero: true
                }
                },
                plugins: {
                customCanvasBackgroundColor: {
                    color: '#f5f5f5',
                }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
});

// Sale chart end


