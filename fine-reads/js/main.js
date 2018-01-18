// variables block

var categoryItemsCount = 20;
var articleItemsCount = 6;

var categorySlideItems = 0;
var categoryFirstWidth = 0;
var categoryItemWidth = 0;
var categoryItemMargin = 0;
var categoryFirstCount = 0;
var categorySecondCount = 0;
var categorySlideWidth = 0;
var categorySlidesCount = 0;

var articleSlideItems = 0;
var articleRowWidth = 0;
var articleItemWidth = 0;
var articleItemMargin = 0;
var articleCount = 0;
var articleSlideWidth = 0;
var articleSlidesCount = 0;

var screenWidth = document.documentElement.clientWidth;

// functions call

mainBannerImageSet();
specialOfferImageSet();
categoryRowWidthSet();
categoryItemsInSlideSet();
articleRowWidthSet();
articleItemsInSlideSet();

// setup path to Main Banner section's image for mobile and desktop versions

function mainBannerImageSet() {
  if (window.location.pathname == '/index.html') {
    if (screenWidth <= 558) {
      document.getElementById("main-banner-image").src = "img/mobile/bookshelf.png";
    } else document.getElementById("main-banner-image").src = "img/bookshelf.png";
  }
}

// setup path to Special Offer section's images for mobile and desktop versions

function specialOfferImageSet() {
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

// setup width of Category section's row of products

function categoryRowWidthSet() {
  if (window.location.pathname == '/index.html') {
    var categoryItems = document.getElementsByClassName('category-section-item');
    var categoryItemStyle = getComputedStyle(categoryItems[0]);
    categoryItemWidth = parseInt(categoryItemStyle.width);
    categoryItemMargin = parseInt(categoryItemStyle.marginRight);
    categoryFirstWidth = (categoryFirstWidth + categoryItemWidth + categoryItemMargin) * categoryItemsCount - parseInt(categoryItemStyle.marginRight);
    document.getElementById('category-first-row').style.width = categoryFirstWidth + 'px';
    document.getElementById('category-second-row').style.width = categoryFirstWidth + 'px';
  }
}

// setup amount of category items in one slide

function categoryItemsInSlideSet() {
  if (window.location.pathname == '/index.html') {
    var a = document.getElementsByClassName('category-section-row');
    var b = getComputedStyle(a[0]);
    var c = parseInt(b.width);
    if (c >= 942) {
      categorySlideItems = 5;
      categorySlidesCount = (categoryItemsCount / categorySlideItems).toFixed(0) - 1;
    } else if (c >= 702) {
      categorySlideItems = 4;
      categorySlidesCount = (categoryItemsCount / categorySlideItems).toFixed(0) - 1;
    } else if (c >= 522) {
      categorySlideItems = 3;
      categorySlidesCount = (categoryItemsCount / categorySlideItems).toFixed(0) - 1;
    } else {
      categorySlideItems = 2;
      categorySlidesCount = (categoryItemsCount / categorySlideItems).toFixed(0) - 1;
    }
  }
}

// setup step of sliding for Category section

categorySlideWidth = (categoryItemWidth + categoryItemMargin) * categorySlideItems;

// setup behavior of right and left arrows of Category section's first row

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
  $('#category-first-left').click(function() {
    if (categoryFirstCount !== 0) {
      $('#category-first-row').animate({ marginLeft: '+=' + categorySlideWidth + 'px' });
      categoryFirstCount--;
      $('#category-first-left').add('left-active');
      if (categoryFirstCount === 0) {
        $('#category-first-left').removeClass('left-active');
      }
    }
  });
});

// setup behavior of right and left arrows of Category section's second row

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
  $('#category-second-left').click(function() {
    if (categorySecondCount !== 0) {
      $('#category-second-row').animate({ marginLeft: '+=' + categorySlideWidth + 'px' });
      categorySecondCount--;
      $('#category-second-left').add('left-active');
      if (categorySecondCount === 0) {
        $('#category-second-left').removeClass('left-active');
      }
    }
  });
});

// setup width of Article section's row of products

function articleRowWidthSet() {
  if (window.location.pathname == '/index.html') {
    var articleItems = document.getElementsByClassName('articles-item');
    var articleItemStyle = getComputedStyle(articleItems[0]);
    articleItemWidth = parseInt(articleItemStyle.width);
    articleItemMargin = parseInt(articleItemStyle.marginRight);
    articleRowWidth = (articleItemWidth + articleItemMargin) * articleItemsCount - parseInt(articleItemStyle.marginRight);
    document.getElementById('articles-items-wrapper').style.width = articleRowWidth + 'px';
  }
}

// setup amount of article items in one slide

function articleItemsInSlideSet() {
  if (window.location.pathname == '/index.html') {
    var a = document.getElementById('articles-col-width');
    var b = getComputedStyle(a);
    var c = parseInt(b.width);
    if (c >= 942) {
      articleSlideItems = 3;
      articleSlidesCount = (articleItemsCount / articleSlideItems).toFixed(0) - 1;
    } else if (c >= 522) {
      articleSlideItems = 2;
      articleSlidesCount = (articleItemsCount / articleSlideItems).toFixed(0) - 1;
    } else {
      articleSlideItems = 1;
      articleSlidesCount = (articleItemsCount / articleSlideItems).toFixed(0) - 1;
    }
  }
}

// setup step of sliding for article section

articleSlideWidth = (articleItemWidth + articleItemMargin) * articleSlideItems;

// setup behavior of right and left arrows of article section's row

$(document).ready(function() {
  $('#articles-arrow-right').click(function() {
    if (articleCount < articleSlidesCount) {
      $('#articles-items-wrapper').animate({ marginLeft: '-=' + articleSlideWidth + 'px' });
      articleCount++;
    } else {
      $('#articles-items-wrapper').animate({ marginLeft: '0' });
      articleCount = 0;
    }
  });
  $('#articles-arrow-left').click(function() {
    if (articleCount !== 0) {
      $('#articles-items-wrapper').animate({ marginLeft: '+=' + articleSlideWidth + 'px' });
      articleCount--;
    }
  });
});

// setup burger-menu-desktop, burger-menu-mobile and search-mobile buttons behavior

$(document).ready(function(){
  $('#burger-desktop').click(function() {
    $('#menu-desktop').toggleClass('drop-down-menu');
  });
  $('#menu-desktop').mouseleave(function() {
    $('#menu-desktop').toggleClass('drop-down-menu');
  });
  $('#burger-mobile').click(function() {
    $('#menu-mobile').toggleClass('drop-down-menu');
    $('.search-mobile-wrapper').hide();
  });
  $('#menu-mobile').mouseleave(function() {
    $('#menu-mobile').toggleClass('drop-down-menu');
  });
  $('#search-mobile').click(function(){
    $('.search-mobile-wrapper').toggle();
    $('#menu-mobile').removeClass('drop-down-menu');
  });
  $('.search-mobile-wrapper').mouseleave(function() {
    $('.search-mobile-wrapper').toggle();
  });
});

// setup mobile logo scroll behavior
window.onscroll = function() {mobileLogoScroll()};
function mobileLogoScroll() {
  if (screenWidth <= 558) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementsByClassName('header-desktop')[0].style.display = 'none';
      document.getElementsByClassName('header-mobile')[0].style.borderTopWidth = '0';
      document.getElementById('scroll-logo').style.display = 'inline';
    } else {
      document.getElementsByClassName('header-desktop')[0].style.display = 'block';
      document.getElementsByClassName('header-mobile')[0].style.borderTopWidth = '1px';
      document.getElementById('scroll-logo').style.display = 'none';
    }
  }
}