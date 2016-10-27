$(document).ready(function() {

	$("#carousel_1").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});

	$("#carousel_2").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});
 
	$("#carousel_3").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});

	$("#carousel_4").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});

	$("#carousel_5").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});

	$("#carousel_6").owlCarousel({
 
    // Most important owl features
    items : 1,
    singleItem : true,
 
    //Basic Speeds
    slideSpeed : Math.floor((Math.random() * 200) + 100),
    paginationSpeed : Math.floor((Math.random() * 800) + 400),
    rewindSpeed : Math.floor((Math.random() * 1000) + 500),
 
    //Autoplay
    autoPlay : true,
    pagination : true 
	});

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
});