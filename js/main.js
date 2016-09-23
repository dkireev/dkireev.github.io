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

    //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/send.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
