var categoryFirstWidth = 0;
var categorySecondWidth = 0;
var articlesRowWidth = 0;

articlesImageSet();
mainBannerImageSet();
specialOfferImageSet();
categoryFirstRowWidthSet();
categorySecondRowWidthSet();
articlesRowWidthSet();

function categoryFirstRowWidthSet() {
  var categoryFirstRow = document.getElementById("category-row-first").getElementsByClassName("category-section-item");
  for (var i = 0; i < categoryFirstRow.length; i++) {
    var itemCategoryWidth = getComputedStyle(categoryFirstRow[i]);
    categoryFirstWidth = categoryFirstWidth + parseInt(itemCategoryWidth.width) + parseInt(itemCategoryWidth.marginRight);
  }
  document.getElementById("category-row-first").style.width = categoryFirstWidth + "px";
}

function categorySecondRowWidthSet() {
  var categorySecondRow = document.getElementById("category-row-second").getElementsByClassName("category-section-item");
  for (var i = 0; i < categorySecondRow.length; i++) {
    var itemCategoryWidth = getComputedStyle(categorySecondRow[i]);
    categorySecondWidth = categorySecondWidth + parseInt(itemCategoryWidth.width) + parseInt(itemCategoryWidth.marginRight);
  }
  document.getElementById("category-row-second").style.width = categorySecondWidth + "px";
}

function articlesRowWidthSet() {
  var articlesRow = document.getElementsByClassName("articles-item");
  for (var i = 0; i < articlesRow.length; i++) {
    var itemArticleWidth = getComputedStyle(articlesRow[i]);
    articlesRowWidth = articlesRowWidth + parseInt(itemArticleWidth.width) + parseInt(itemArticleWidth.marginRight);
  }
  document.getElementById("articles-items-wrapper").style.width = articlesRowWidth + "px";
}

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