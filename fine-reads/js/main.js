// variables block

var categoryItemsCount = 20;
var categorySlideItems = 0;
var categoryFirstWidth = 0;
var categoryItemWidth = 0;
var categoryItemMargin = 0;
var categoryFirstCount = 0;
var categorySecondCount = 0;
var categorySlideWidth = 0;
var categorySlidesCount = 0;

// functions call

articlesImageSet();
mainBannerImageSet();
specialOfferImageSet();
categoryRowWidthSet();
CategoryItemsInSlideSet();

// setup path to Main Banner section's image for mobile and desktop versions

function mainBannerImageSet() {
  var screenWidth = document.documentElement.clientWidth;
  if (screenWidth <= 558) {
    document.getElementById("main-banner-image").src = "img/mobile/bookshelf.png";
  } else document.getElementById("main-banner-image").src = "img/bookshelf.png";
}

// setup path to Special Offer section's images for mobile and desktop versions

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

// setup path to Articles section's images for mobile and desktop versions

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

// setup width of Category section's row of products

function categoryRowWidthSet() {
  var categoryItems = document.getElementsByClassName('category-section-item');
  var categoryItemStyle = getComputedStyle(categoryItems[0]);
  categoryItemWidth = parseInt(categoryItemStyle.width);
  categoryItemMargin = parseInt(categoryItemStyle.marginRight);
  categoryFirstWidth = (categoryFirstWidth + categoryItemWidth + categoryItemMargin) * categoryItemsCount - parseInt(categoryItemStyle.marginRight);
  document.getElementById('category-first-row').style.width = categoryFirstWidth + 'px';
  document.getElementById('category-second-row').style.width = categoryFirstWidth + 'px';
}

// setup amount of category items in one slide

function CategoryItemsInSlideSet() {
  var a = document.getElementsByClassName('category-section-row');
  var b = getComputedStyle(a[0]);
  var c = parseInt(b.width);
  if (c >= 942) {
  	categorySlideItems = 5;
  	categorySlidesCount = 3;
  } else if (c >= 702) {
    categorySlideItems = 4;
  	categorySlidesCount = 4;
  } else if (c >= 522) {
    categorySlideItems = 3;
  	categorySlidesCount = 6;
  } else {
  	categorySlideItems = 2;
  	categorySlidesCount = 9;
  }
}

// setup step of sliding for Category section

categorySlideWidth = (categoryItemWidth + categoryItemMargin) * categorySlideItems;

// setup behavior of right arrow of Category section's first row

$(document).ready(function() {
  $('#category-first-right').click(function() {
  	if (categoryFirstCount < categorySlidesCount) {
      $('#category-first-row').animate({ marginLeft: '-=' + categorySlideWidth + 'px' });
      categoryFirstCount++;
      $('#category-first-left').addClass('left-active');
    } else {
      $('#category-first-row').animate({ marginLeft: '0' });
      categoryFirstCount = 0;
      $('#category-first-left').removeClass('left-active');
    }
  });
});

// setup behavior of right arrow of Category section's second row

$(document).ready(function() {
  $('#category-second-right').click(function() {
  	if (categorySecondCount < categorySlidesCount) {
      $('#category-second-row').animate({ marginLeft: '-=' + categorySlideWidth + 'px' });
      categorySecondCount++;
      $('#category-second-left').addClass('left-active');
    } else {
      $('#category-second-row').animate({ marginLeft: '0' });
      categorySecondCount = 0;
      $('#category-second-left').removeClass('left-active');
    }
  });
});

// setup behavior of left arrow of Category section's first row

$(document).ready(function() {
  $('#category-first-left').click(function() {
  	if (categoryFirstCount !== 0) {
  	  $('#category-first-row').animate({ marginLeft: '+=' + categorySlideWidth + 'px' });
  	  categoryFirstCount--;
  	  $('#category-first-left').add('left-active');
  	  if (categoryFirstCount == 0) {
  	  	$('#category-first-left').removeClass('left-active');
  	  }
  	}
  });
});

// setup behavior of left arrow of Category section's second row

$(document).ready(function() {
  $('#category-second-left').click(function() {
  	if (categoryFirstCount !== 0) {
  	  $('#category-second-row').animate({ marginLeft: '+=' + categorySlideWidth + 'px' });
  	  categoryFirstCount--;
  	  $('#category-second-left').add('left-active');
  	  if (categoryFirstCount == 0) {
  	  	$('#category-second-left').removeClass('left-active');
  	  }
  	}
  });
});

// setup burger menu desktop button behavior

$(document).ready(function(){
  $('#burger-desktop').mouseenter(function() {
    $('#menu-desktop').toggleClass('drop-down-menu');
  });
  $('#menu-desktop').mouseleave(function() {
    $('#menu-desktop').removeClass('drop-down-menu');
  });
  $(document).click(function() {
    $('#menu-desktop').removeClass('drop-down-menu');
  });
});

// setup burger menu mobile button behavior

$(document).ready(function(){
  $('#burger-mobile').mouseenter(function() {
    $('#menu-mobile').toggleClass('drop-down-menu');
  });
  $('#menu-mobile').mouseleave(function() {
    $('#menu-mobile').removeClass('drop-down-menu');
  });
  $(document).click(function() {
    $('#menu-mobile').removeClass('drop-down-menu');
  });
});