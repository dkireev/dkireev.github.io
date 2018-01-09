articlesImageSet();
mainBannerImageSet();
specialOfferImageSet();

function specialOfferImageSet() {
  var screenWidth = document.documentElement.clientWidth;
  var specialOffer;
  if (screenWidth <= 558) {
    specialOffer = document.getElementsByClassName("special-offer-images");
    for (var i = 1; i <= specialOffer.length; i++) {
      specialOffer[i-1].src = "img/mobile/special-offer-"+[i]+".jpg";
    }
  } else {
    specialOffer = document.getElementsByClassName("special-offer-images");
    for (var a = 1; a <= specialOffer.length; a++) {
      specialOffer[a-1].src = "img/special-offer-"+[a]+".jpg";
    }
  }
}

function articlesImageSet() {
  var screenWidth = document.documentElement.clientWidth;
  var articles;
  if (screenWidth <= 558) {
    articles = document.getElementsByClassName("articles-item-image");
    for (var i = 1; i <= articles.length; i++) {
      articles[i-1].src = "img/mobile/article-"+[i]+".jpg";
    }
  } else {
    articles = document.getElementsByClassName("articles-item-image");
    for (var a = 1; a <= articles.length; a++) {
      articles[a-1].src = "img/article-"+[a]+".jpg";
    }
  }
}

function mainBannerImageSet() {
  var screenWidth = document.documentElement.clientWidth;
  if (screenWidth <= 558) {
    document.getElementById("main-banner-image").src = "img/mobile/bookshelf.png";
  } else document.getElementById("main-banner-image").src = "img/bookshelf.png";
}

function slide() {
  document.getElementById('ddd').style.marginLeft = '-400px';
}