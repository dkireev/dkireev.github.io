//setting-up feature-1 images
document.getElementById('feature-1').onmouseover = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-1-active.png");
}
document.getElementById('feature-1').onmouseleave = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-1.png");
}

//setting-up feature-2 images
document.getElementById('feature-2').onmouseover = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-2-active.png");
}
document.getElementById('feature-2').onmouseleave = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-2.png");
}

//setting-up feature-3 images
document.getElementById('feature-3').onmouseover = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-3-active.png");
}
document.getElementById('feature-3').onmouseleave = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-3.png");
}

//setting up feature-4 images
document.getElementById('feature-4').onmouseover = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-4-active.png");
}
document.getElementById('feature-4').onmouseleave = function() {
	this.getElementsByTagName('img')[0].setAttribute("src", "img/feature-4.png");
}

//setting up video playback
document.getElementById('play-video').onclick = function() {
	document.getElementById('promo-video').style.display = 'block';
	document.getElementById('promo-video').play();
}
document.getElementById('watch-text').onclick = function() {
	document.getElementById('promo-video').style.display = 'block';
	document.getElementById('promo-video').play();
}

// setting up logo switching on mobiles
window.onload = function() {
  logoSwith();
}
window.onresize = function() {
  logoSwith();
}
function logoSwith() {
	var a = document.getElementsByClassName('mobile-banner')[0];
	var b = getComputedStyle(a);
	var c = b.display;
	if (c == "block") {
		document.getElementById('logo').setAttribute('src', 'img/logo-light.png');
	} else document.getElementById('logo').setAttribute('src', 'img/logo.svg');
}