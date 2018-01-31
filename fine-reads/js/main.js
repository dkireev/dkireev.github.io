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
  if (document.getElementById('member') || document.getElementById('cart') || document.getElementById('checkout') || document.getElementById('details') || document.getElementById('books')) {
    memberTitleToggle();
  }
  if (document.getElementById('success')) {
    alignmentByHeight('success-item');
  }
  if (document.getElementById('cart')) {
    itemQuantity(this);
  }
  if (document.getElementsByClassName('sold-out')) {
    disableBuyButton();
  }
  if (document.getElementById('book')) {
    bookCoverHeight();
   // textClamping();
  }
  if (document.getElementById('author')) {
   // textClamping();
  }
  if (document.getElementById('authors')) {
    authorsRow();
  }
  if (document.getElementById('categories')) {
    popularBooksRow();
  }
  if (document.getElementsByClassName('category-section-item')) {
   toggleShortenTexts();
  }
}

window.onresize = function() {
  location.reload();
}

window.onscroll = function() {
  mobileLogoScroll();
  if (document.getElementById('category')) {
    toTopToggle();
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

// setup mobile logo scroll behavior
function toTopToggle() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    document.getElementById('to-top').style.display = 'block';
  } else {
    document.getElementById('to-top').style.display = 'none';
  }
}

// switch on and off titles for each row of cart items
function memberTitleToggle() {
  var a = document.getElementsByClassName('order-item')[0];
  var b = a.getElementsByClassName('order-item-title');
  for (var i = 0; i < b.length; i++) {
    b[i].style.display = 'block';
  }
}

// setup height of - and + buttons in cart
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

//setup position of SEE PREVIEW text
function bookCoverHeight() {
  var a = document.getElementsByClassName('book-cover')[0];
  var b = getComputedStyle(a);
  var c = parseInt(b.height) + 10;
  document.getElementsByClassName('see-preview')[0].style.top = c + 'px';
}

//setup disabeling of BUY BUTTONS
function disableBuyButton() { 
  var a = document.getElementsByClassName('sold-out');
  for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('onclick','return false');
    a[i].style.color = '#2a2e28';
    a[i].style.border = 'none';
    a[i].innerHTML = 'Sold out';
  }
}

//setup behavior of authors' row
function authorsRow() {
  var a = document.getElementsByClassName('pop-authors-row')[0];
  var b = a.getElementsByClassName('pop-authours-item');
  var width = 0;
  var margin = 0;
  var totalWidth = 0;
  var slideStep = 0;
  var slideCounter = 0;
  var slidesInRow = 0;
  var c = 0;
  var d = getComputedStyle(document.getElementsByClassName('pop-authors-wrapper')[0]);
  var e = parseInt(d.width);
  if (e > 303) {
    slidesInRow = 3;
  } else slidesInRow = 4;
  for (var i = 0; i < b.length; i++) {
    c = getComputedStyle(b[i]);
    width += parseInt(c.width);
    margin += parseInt(c.marginRight);
  }
  totalWidth = width + margin + 'px';
  slideStep = width/5 + margin/4;
  $('.pop-authors-row').css('width', totalWidth);
  $('.category-section-right').click(function(){
    slideCounter += 1;
    if (slideCounter < slidesInRow) {
      $('.pop-authors-row').animate({ marginLeft: '-=' + slideStep + 'px' });
      $('.category-section-left').addClass('left-active');
    } else {
      $('.pop-authors-row').animate({ marginLeft: '0' });
      $('.category-section-left').removeClass('left-active');
      slideCounter = 0;
    }
  });
  $('.category-section-left').click(function(){
    if (slideCounter > 0) {
      slideCounter -= 1;
      $('.pop-authors-row').animate({ marginLeft: '+=' + slideStep + 'px' });
    }
    if (slideCounter == 0) {
      $('.category-section-left').removeClass('left-active');
    }
  });
}

//setup behavior of popular books' row
function popularBooksRow() {
  var a = document.getElementsByClassName('categories-books-row')[0];
  var b = a.getElementsByClassName('category-section-item');
  var width = 0;
  var margin = 0;
  var totalWidth = 0;
  var slideStep = 0;
  var slideCounter = 0;
  var slidesInRow = 0;
  var c = 0;
  var d = getComputedStyle(document.getElementsByClassName('categories-pop-books')[0]);
  var e = parseInt(d.width);
  if (e > 303) {
    slidesInRow = 3;
  } else slidesInRow = 4;
  for (var i = 0; i < b.length; i++) {
    c = getComputedStyle(b[i]);
    width += parseInt(c.width);
    margin += parseInt(c.marginRight);
  }
  totalWidth = width + margin + 'px';
  slideStep = width/5 + margin/4;
  $('.categories-books-row').css('width', totalWidth);
  $('.category-section-right').click(function(){
    slideCounter += 1;
    if (slideCounter < slidesInRow) {
      $('.categories-books-row').animate({ marginLeft: '-=' + slideStep + 'px' });
      $('.category-section-left').addClass('left-active');
    } else {
      $('.categories-books-row').animate({ marginLeft: '0' });
      $('.category-section-left').removeClass('left-active');
      slideCounter = 0;
    }
  });
  $('.category-section-left').click(function(){
    if (slideCounter > 0) {
      slideCounter -= 1;
      $('.categories-books-row').animate({ marginLeft: '+=' + slideStep + 'px' });
    }
    if (slideCounter == 0) {
      $('.category-section-left').removeClass('left-active');
    }
  });
}

//clamping all spare texts
function textClampings() {
  var ua = window.navigator.userAgent;
  var ms_ie = !!ua.match(/MSIE|Trident|Edge/);
  if (document.getElementsByClassName('category-section-item')) {
    var bookTitle = document.getElementsByClassName('section-item-title');
    for (var i = 0; i < bookTitle.length; i++) {
      $clamp(bookTitle[i], {clamp: 2});
    }
    var bookAuthor = document.getElementsByClassName('section-item-author');
    for (var i = 0; i < bookAuthor.length; i++) {
      if (ms_ie) {
        $clamp(bookAuthor[i], {clamp: 2});
      } else {
        $clamp(bookAuthor[i], {clamp: 1});
      }
    }
  }
  if (document.getElementById('book')) {
    var bookDescription = document.getElementsByClassName('book-description-text')[0];
    var bookComment = document.getElementsByClassName('book-review-feedback');
    for (var i = 0; i < bookComment.length; i++) {
      if (ms_ie) {
        $clamp(bookComment[i], {clamp: 7});
      } else {
        $clamp(bookComment[i], {clamp: 6});
      }
    }
    if (ms_ie) {
      $clamp(bookDescription, {clamp: 11});
    } else {
      $clamp(bookDescription, {clamp: 10});
    }
  }
  if (document.getElementById('author')) {
    var authorDescription = document.getElementsByClassName('author-description-text')[0];
    console.log(authorDescription);
    if (ms_ie) {
      $clamp(authorDescription, {clamp: 11});
    } else {
      $clamp(authorDescription, {clamp: 10});
    }
  }
}

// $(".section-item-title").ready(function(){
//   var a = document.getElementsByClassName('section-item-title');
//   for (var i = Things.length - 1; i >= 0; i--) {
    
//   }
//   //console.log(a);
// });
$(".section-item-title").each(function () {
  $(this).parent().append('<h5 class="section-item-title-hidden">' + $(this).text() + '</h5>');
});
$(".section-item-title-hidden").hide();
$(".section-item-title").click(function(){
  $(this).hide();
  $(this).siblings(".section-item-title-hidden").show();
});


function toggleShortenTexts() {
  bookItemEllipsisText();
}

function bookItemEllipsisText() {
  var ellipsisText = function (e) {
    var wordArray = e.innerHTML.split(" ");
    while (e.scrollHeight > e.offsetHeight) {
        wordArray.pop();
        e.innerHTML = wordArray.join(" ") + ("...");
    }
  };
  $(".section-item-title").ready(function(){
    var a = document.getElementsByClassName('section-item-title');
    for (var i = 0; i < a.length; i++) {
      ellipsisText(a[i]);
    }
  });
  $(".section-item-author").ready(function(){
    var a = document.getElementsByClassName('section-item-author');
    for (var i = 0; i < a.length; i++) {
      ellipsisText(a[i]);
    }
  });
}