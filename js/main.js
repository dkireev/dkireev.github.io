$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        singleItem: true,
        slideSpeed: 500,
        pagination: true,
        responsive: true,
        touchDrag: true
    });

    $('td:nth-child(2)').hover(function() {
        $('td:nth-child(2)').css('background-color', '#fef6f1')
    }, function() {
        $('td:nth-child(2)').css('background-color', '#ffffff')
    });
    $('td:nth-child(3)').hover(function() {
        $('td:nth-child(3)').css('background-color', '#f1f9f5')
    }, function() {
        $('td:nth-child(3)').css('background-color', '#ffffff')
    });
    $('td:nth-child(4)').hover(function() {
        $('td:nth-child(4)').css('background-color', '#fbe8e8')
    }, function() {
        $('td:nth-child(4)').css('background-color', '#ffffff')
    });
    $('td:last-child').hover(function() {
        $('td:last-child').css('background-color', '#fbf6fa')
    }, function() {
        $('td:last-child').css('background-color', '#ffffff')
    });

    var screenHeight = $(window).height();
    var varHeight;
    if (screenHeight >= 900) {
        varHeight = screenHeight;
    } else {
        varHeight = screenHeight*screenHeight/900;
    }
    var headerHeight = $('.header').height();
    var carouselHeight = screenHeight - headerHeight;
    console.log(screenHeight);

    $('.section1_cam').height(carouselHeight+'px');
    $('.section1_view').height(carouselHeight+'px');
    $('.section1_power').height(carouselHeight+'px');
    $('.section1_style').height(carouselHeight+'px');
    $('.text_sec1').css('padding-top',varHeight*0.3+'px');
    $('.section1_camImg').height(carouselHeight*0.793+'px');
    $('.section1_viewImg').height(carouselHeight*0.767+'px');
    $('.section1_powerImg').height(carouselHeight*0.8+'px');
    $('.section1_styleImg').height(carouselHeight*0.779+'px');

    $('.section2').height(screenHeight+'px');
    $('.sectionLogo2').css('top',screenHeight*0.072+'px');
    $('.text_sec2').css('padding-top',varHeight*0.23+'px');
    $('.sectionDouble').css('bottom',varHeight*0.015+'px');
    $('#doubleCamera').height(screenHeight*0.894+'px');
    $('.sectionAngle').css('bottom',varHeight*0.1+'px');
    $('#angle120').height(varHeight*0.24+'px');

    $('.section3').height(screenHeight+'px');
    $('.sectionLogo3').css('top',screenHeight*0.072+'px');
    $('.text_sec3').css('padding-top',varHeight*0.23+'px');
    $('#viewMain').height(screenHeight*0.672+'px');
    $('.section3Drawing').css('bottom',varHeight*0.153+'px');
    $('#viewDrawing').height(varHeight*0.12+'px');

    $('.section4').height(screenHeight+'px');
    $('.sectionLogo4').css('top',screenHeight*0.072+'px');
    $('.text_sec4').css('padding-top',varHeight*0.23+'px');
    $('#powerMain').height(screenHeight*0.817+'px');
    $('.section4Drawing').css('bottom',varHeight*0.173+'px');
    $('#powerDrawing').height(varHeight*0.128+'px');
    $('.section4Hour').css('bottom',varHeight*0.402+'px');

    $('.section5').height(screenHeight+'px');
    $('.sectionLogo5').css('top',screenHeight*0.072+'px');
    $('.text_sec5').css('padding-top',varHeight*0.23+'px');
    $('#styleMain').height(screenHeight*0.817+'px');
    $('.section5Drawing').css('bottom',varHeight*0.147+'px');
    $('#styleDrawing').height(varHeight*0.169+'px');

    $('.section6').height(screenHeight+'px');
});