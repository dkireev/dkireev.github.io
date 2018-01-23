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

window.onload = function() {
  if (document.getElementById('main-banner-section')) {
    mainBannerImageSet();
  }
  if (document.getElementById('special-offer-section')) {
    specialOfferImageSet();
  }
  if (document.getElementById('category-section') || document.getElementById('book')) {
    categoryRowWidthSet();
    categoryItemsInSlideSet();
    categorySlideWidth = (categoryItemWidth + categoryItemMargin) * categorySlideItems;
  }
  if (document.getElementById('articles-section')) {
    articleRowWidthSet();
    articleItemsInSlideSet();
    articleSlideWidth = (articleItemWidth + articleItemMargin) * articleSlideItems;
  }
  if (document.getElementById('member') || document.getElementById('cart')) {
    memberTitleToggle();
  }
  if (document.getElementById('success')) {
    alignmentByHeight('success-item');
  }
  if (document.getElementById('cart')) {
    itemQuantity(this);
  }
}

window.onresize = function() {
  if (document.getElementById('main-banner-section')) {
    mainBannerImageSet();
  }
  if (document.getElementById('special-offer-section')) {
    specialOfferImageSet();
  }
  if (document.getElementById('category-section') || document.getElementById('book')) {
    categoryRowWidthSet();
    categoryItemsInSlideSet();
    categorySlideWidth = (categoryItemWidth + categoryItemMargin) * categorySlideItems;
  }
  if (document.getElementById('articles-section')) {
    articleRowWidthSet();
    articleItemsInSlideSet();
    articleSlideWidth = (articleItemWidth + articleItemMargin) * articleSlideItems;
  }
  if (document.getElementById('member') || document.getElementById('cart')) {
    memberTitleToggle();
  }
  if (document.getElementById('success')) {
    alignmentByHeight('success-item');
  }
  if (document.getElementById('cart')) {
    itemQuantity(this);
  }
}

// setup path to Main Banner section's image for mobile and desktop versions
function mainBannerImageSet() {
    if (screenWidth <= 558) {
      document.getElementById("main-banner-image").src = "img/mobile/bookshelf.png";
    } else document.getElementById("main-banner-image").src = "img/bookshelf.png";
}

// setup path to Special Offer section's images for mobile and desktop versions
function specialOfferImageSet() {
  var a;
  if (screenWidth <= 558) {
    a = document.getElementsByClassName("special-offer-images");
    for (var i = 1; i <= a.length; i++) {
      a[i-1].src = "img/mobile/special-offer-"+[i]+".jpg";
    }
  } else {
    a = document.getElementsByClassName("special-offer-images");
    for (var a = 1; a <= a.length; a++) {
      a[a-1].src = "img/special-offer-"+[a]+".jpg";
    }
  }
}

// setup width of Category section's row of products and amount of category items in one slide
function categoryRowWidthSet() {
  var a = document.getElementsByClassName('category-section-item');
  var b = getComputedStyle(a[0]);
  categoryItemWidth = parseInt(b.width);
  categoryItemMargin = parseInt(b.marginRight);
  categoryFirstWidth = (categoryFirstWidth + categoryItemWidth + categoryItemMargin) * categoryItemsCount - parseInt(b.marginRight);
  var c = document.getElementsByClassName('category-items-wrapper');
  for (var i = 0; i < c.length; i++) {
    c[i].style.width = categoryFirstWidth + 'px';
  }
}
function categoryItemsInSlideSet() {
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

// setup width of Article section's row of products and amount of article items in one slide
function articleRowWidthSet() {
  var a = document.getElementsByClassName('articles-item');
  var a = getComputedStyle(a[0]);
  articleItemWidth = parseInt(a.width);
  articleItemMargin = parseInt(a.marginRight);
  articleRowWidth = (articleItemWidth + articleItemMargin) * articleItemsCount - parseInt(a.marginRight);
  document.getElementById('articles-items-wrapper').style.width = articleRowWidth + 'px';
}
function articleItemsInSlideSet() {
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

function memberTitleToggle() {
  var a = document.getElementsByClassName('order-item')[0];
  var b = a.getElementsByClassName('order-item-title');
  for (var i = 0; i < b.length; i++) {
    b[i].style.display = 'block';
  }
}

function alignmentByHeight(classname) {
  if (screenWidth > 974) {
    var divs = $("div ."+classname);
    var a = document.getElementsByClassName('success-item-title');
    var b = getComputedStyle(a[0]);
    var c = parseInt(b.height);
    var d = parseInt(b.marginTop);
    var e = document.getElementsByClassName('success-item');
    var f = getComputedStyle(a[0]);
    var g = parseInt(b.marginTop);
    var max = 0;
    for(var i=0; i<divs.length; i++) {
        max = Math.max(max, $(divs[i]).height());
    }
    max += c + d + g;
    $(divs).css('min-height', max+'px');
  }
}

// setup behavior of - and + buttons in cart
function itemQuantity() {
  $('.plus').click(function() {
    var a = $(this).prev('.amount').html();
    a++;
    $(this).prev('.amount').html(a);
  });
  $('.minus').click(function() {
    var a = $(this).next('.amount').html();
    a--;
    if (a > 0) {
      $(this).next('.amount').html(a);
    }
  });
}