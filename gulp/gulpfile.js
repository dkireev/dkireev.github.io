var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

var width = 650;
var currency = 'en-IE';
var previewText = 'Today is the Day to SAVE BIG';
var altText = 'Corel Deals. Save up to 40% &lt;Shop Now&gt;';
var imagePathLeft = 'http://edm.coreldm.com/2018/';
var imagePathCampaign = '/02-20-hzl-eoq-sale/';

var macAfee = 'corel';
var facebook = 'https://www.facebook.com/Corel';
var twitter = 'https://twitter.com/corelsoftware';
var youtube = 'https://www.youtube.com/user/corelcorp';

var htmlLang;
var imageFolder;
var siteLocation;
var followUs;
var edmLocation;

if (currency == 'en-US') {
	htmlLang = 'en';
	imageFolder = 'enu';
	siteLocation = 'en';
	edmLocation = 'us';
	followUs = 'Follow us:';
} else if (currency == 'en-CA') {
	htmlLang = 'en';
	imageFolder = 'enc';
	siteLocation = 'en';
	edmLocation = 'ca';
	followUs = 'Follow us:';
} else if (currency == 'en-GB') {
	htmlLang = 'en';
	imageFolder = 'eng';
	siteLocation = 'en';
	edmLocation = 'gb';
	followUs = 'Follow us:';
} else if (currency == 'en-AU') {
	htmlLang = 'en';
	imageFolder = 'ena';
	siteLocation = 'en';
	edmLocation = 'au';
	followUs = 'Follow us:';
} else if (currency == 'en-IE') {
	htmlLang = 'en';
	imageFolder = 'eur';
	siteLocation = 'en';
	edmLocation = 'eu';
	followUs = 'Follow us:';
} else if (currency == 'de-DE') {
	htmlLang = 'de';
	imageFolder = 'deu';
	siteLocation = 'de';
	edmLocation = 'de';
} else if (currency == 'fr-FR') {
	htmlLang = 'fr';
	imageFolder = 'fra';
	siteLocation = 'fr';
	edmLocation = 'fr';
} else if (currency == 'ja-JP') {
	htmlLang = 'ja';
	imageFolder = 'jpn';
	siteLocation = 'jp';
	edmLocation = 'ja';
} else if (currency == 'zh-TW') {
	htmlLang = 'zh';
	imageFolder = 'twn';
	siteLocation = 'tw';
	edmLocation = 'tw';
}

var imagePath = imagePathLeft + imageFolder + imagePathCampaign;
var trackingFull = '?currency=' + currency + '&utm_medium=eDM&utm_source=`ym_mid`&utm_campaign=`campaignID`&x-vehicle=edm';
var trackingUpgrade = '?currency=' + currency + '&skuId=UG&utm_medium=eDM&utm_source=`ym_mid`&utm_campaign=`campaignID`&x-vehicle=edm';

gulp.task('default', function() {
  return gulp.src(['header.html', 'body.html', 'footer.html', 'end.html'])
    .pipe(concat('index-' + edmLocation + '.html'))
    .pipe(replace('{htmlLang}', htmlLang))
    .pipe(replace('{previewText}', previewText))
    .pipe(replace('{width}', width))
    .pipe(replace('{siteLocation}', siteLocation))
    .pipe(replace('{altText}', altText))
    .pipe(replace('{imagePath}', imagePath))
    .pipe(replace('{trackingFull}', trackingFull))
    .pipe(replace('{trackingUpgrade}', trackingUpgrade))
    .pipe(replace('{macAfee}', macAfee))
    .pipe(replace('{followUs}', followUs))
    .pipe(replace('{facebook}', facebook))
    .pipe(replace('{twitter}', twitter))
    .pipe(replace('{youtube}', youtube))
    .pipe(gulp.dest('./dist/'));
});