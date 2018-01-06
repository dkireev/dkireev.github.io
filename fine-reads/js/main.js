var categoryFirstWidth = 0;
var categoryFirstRow = document.getElementById('category-row-first').getElementsByClassName('category-section-item');
for (var i = 0; i < categoryFirstRow.length; i++) {
	var itemCategoryWidth = getComputedStyle(categoryFirstRow[i]);
	categoryFirstWidth = categoryFirstWidth + parseInt(itemCategoryWidth.width) + parseInt(itemCategoryWidth.marginRight);
}
document.getElementById('category-row-first').style.width = categoryFirstWidth + 'px';

var categorySecondWidth = 0;
var categorySecondRow = document.getElementById('category-row-second').getElementsByClassName('category-section-item');
for (var i = 0; i < categorySecondRow.length; i++) {
	var itemCategoryWidth = getComputedStyle(categorySecondRow[i]);
	categorySecondWidth = categorySecondWidth + parseInt(itemCategoryWidth.width) + parseInt(itemCategoryWidth.marginRight);
}
document.getElementById('category-row-second').style.width = categorySecondWidth + 'px';

var articlesRowWidth = 0;
var articlesRow = document.getElementsByClassName('articles-item');
for (var i = 0; i < articlesRow.length; i++) {
	var itemArticleWidth = getComputedStyle(articlesRow[i]);
	articlesRowWidth = articlesRowWidth + parseInt(itemArticleWidth.width) + parseInt(itemArticleWidth.marginRight);
}
document.getElementById('articles-items-wrapper').style.width = articlesRowWidth + 'px';

function specialOfferImageSet() {
	var screenWidth = document.documentElement.clientWidth;
	if (screenWidth <= 558) {
		var specialOffer = document.getElementsByClassName('special-offer-images');
		for (var i = 1; i <= specialOffer.length; i++) {
			specialOffer[i-1].src = 'img/mobile/special-offer-'+[i]+'.jpg';
		}
	} else {
		var specialOffer = document.getElementsByClassName('special-offer-images');
		for (var i = 1; i <= specialOffer.length; i++) {
			specialOffer[i-1].src = 'img/special-offer-'+[i]+'.jpg';
		}
	}
}

function articlesImageSet() {
	var screenWidth = document.documentElement.clientWidth;
	if (screenWidth <= 558) {
		var articles = document.getElementsByClassName('articles-item-image');
		for (var i = 1; i <= articles.length; i++) {
			articles[i-1].src = 'img/mobile/article-'+[i]+'.jpg';
		}
	} else {
		var articles = document.getElementsByClassName('articles-item-image');
		for (var i = 1; i <= articles.length; i++) {
			articles[i-1].src = 'img/article-'+[i]+'.jpg';
		}
	}
}

function mainBannerImageSet() {
	var screenWidth = document.documentElement.clientWidth;
	if (screenWidth <= 558) {
		document.getElementById('main-banner-image').src = 'img/mobile/bookshelf.png';
	} else document.getElementById('main-banner-image').src = 'img/bookshelf.png';
}

articlesImageSet();
mainBannerImageSet();