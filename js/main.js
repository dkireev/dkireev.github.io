$(document).ready(function() {
    $('.main').animate({ opacity: "1" }, 1000);

    $('.buttonRecent').hover(function() {
        $('.buttonRecent').css('background-color', 'lightgrey');
    }, function() {
        $('.buttonRecent').css('background-color', 'white');
    });
    $('.buttonContact').hover(function() {
        $('.buttonContact').css('background-color', 'lightgrey');
    }, function() {
        $('.buttonContact').css('background-color', 'white');
    });

    $('.buttonContact').click(function() {
        $('.contactFrom').animate({ opacity: "1" }, 1000);
        $('.sections').animate({ opacity: "0" }, 500);
    });
});
