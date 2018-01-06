var categoryRow = document.getElementsByClassName('category-section-row');
for (var i = 0; i < categoryRow.length; i++) {
    categoryRow[i].getElementsByClassName('category-section-item')[4].style.marginRight = 0;
}

var articlesRowWidth = 0;
var articlesRow = document.getElementsByClassName('articles-item');
for (var i = 0; i < articlesRow.length; i++) {
	var itemWidth = getComputedStyle(articlesRow[i]);
	articlesRowWidth = articlesRowWidth + parseInt(itemWidth.width) + parseInt(itemWidth.marginRight);
}
document.getElementById('articles-items-wrapper').style.width = articlesRowWidth + 'px';

function specialOfferImageSet() {
	var screenWidth = document.documentElement.clientWidth;
	articlesImageSet();
	if (screenWidth < 575) {
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
	if (screenWidth < 575) {
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

articlesImageSet();
specialOfferImageSet();