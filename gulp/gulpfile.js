var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

var width = 650;
var currency = 'en-US';
var previewText = 'Slam dunk: get your hands on the downloads you’ve been waiting for.';
var altText = 'Extra 10% off download versions. Shop March Madness.';
var imagePathLeft = 'http://edm.coreldm.com/2018/';
var imagePathCampaign = '/03-20-hzl-march-madness-esd-sale/2/';
var projectFolder = '20180320 - HZL - March Madness ESD Sale [JAS] (eDM-xPrds)';
var expireText = 'Hurry! Offer ends April 2, 2018 EST.';
var linkText = 'Start Shopping';
var product = 'corel';	//Options: cdgs, ptr, vs, psp, corel
var disclaimer = 'Offer excludes CorelDRAW Graphic Suite 2017, subscription, Wacom tablet and newly released products.';
var backgroundColor = '#ffffff';
var fontColor = '#000000';

var macAfee;
var facebook;
var twitter;
var youtube;
var htmlLang;
var imageFolder;
var siteLocation;
var followUs;
var edmLocation;
var footerButton1;
var footerButton2;
var footerButton3;
var systemReqs;

if (currency == 'en-US') {
	htmlLang = 'en';
	imageFolder = 'enu';
	siteLocation = 'en';
	edmLocation = 'us';
	followUs = 'Follow us:';
	footerButton1 = 'PURCHASE BY PHONE';
	footerButton2 = 'SYSTEM REQUIREMENTS';
	footerButton3 = 'MY ACCOUNT';
} else if (currency == 'en-CA') {
	htmlLang = 'en';
	imageFolder = 'enc';
	siteLocation = 'en';
	edmLocation = 'ca';
	followUs = 'Follow us:';
	footerButton1 = 'PURCHASE BY PHONE';
	footerButton2 = 'SYSTEM REQUIREMENTS';
	footerButton3 = 'MY ACCOUNT';
} else if (currency == 'en-GB') {
	htmlLang = 'en';
	imageFolder = 'eng';
	siteLocation = 'en';
	edmLocation = 'gb';
	followUs = 'Follow us:';
	footerButton1 = 'PURCHASE BY PHONE';
	footerButton2 = 'SYSTEM REQUIREMENTS';
	footerButton3 = 'MY ACCOUNT';
} else if (currency == 'en-AU') {
	htmlLang = 'en';
	imageFolder = 'ena';
	siteLocation = 'en';
	edmLocation = 'au';
	followUs = 'Follow us:';
	footerButton1 = 'PURCHASE BY PHONE';
	footerButton2 = 'SYSTEM REQUIREMENTS';
	footerButton3 = 'MY ACCOUNT';
} else if (currency == 'en-IE') {
	htmlLang = 'en';
	imageFolder = 'eur';
	siteLocation = 'en';
	edmLocation = 'eu';
	followUs = 'Follow us:';
	footerButton1 = 'PURCHASE BY PHONE';
	footerButton2 = 'SYSTEM REQUIREMENTS';
	footerButton3 = 'MY ACCOUNT';
} else if (currency == 'de-DE') {
	htmlLang = 'de';
	imageFolder = 'deu';
	siteLocation = 'de';
	edmLocation = 'de';
	followUs = 'Folgen Sie uns:';
	footerButton1 = 'TELEFONISCHE BESTELLUNGEN';
	footerButton2 = 'SYSTEMANFORDERUNGEN';
	footerButton3 = 'MEIN KONTO';
} else if (currency == 'fr-FR') {
	htmlLang = 'fr';
	imageFolder = 'fra';
	siteLocation = 'fr';
	edmLocation = 'fr';
	followUs = 'Nous suivre :';
	footerButton1 = 'ACHETER PAR TÉLÉPHONE';
	footerButton2 = 'CONFIGURATION REQUISE';
	footerButton3 = 'COMPTE PERSONNEL';
} else if (currency == 'ja-JP') {
	htmlLang = 'ja';
	imageFolder = 'jpn';
	siteLocation = 'jp';
	edmLocation = 'ja';
	followUs = 'Corel をフォロー:';
	footerButton1 = 'お電話による購入';
	footerButton2 = 'システム要件';
	footerButton3 = 'マイアカウント';
}

if (product == 'cdgs') {
	macAfee = 'coreldraw';
	facebook = 'https://www.facebook.com/coreldrawgraphicssuite';
	twitter = 'https://twitter.com/coreldraw';
	youtube = 'https://www.youtube.com/user/CorelDRAWchannel';
	systemReqs = '#sys-reqs';
} else if (product == 'ptr') {
	macAfee = 'painterartist';
	facebook = 'https://www.facebook.com/corelpainter';
	twitter = 'https://twitter.com/corelpainter';
	youtube = 'https://www.youtube.com/user/PainterTutorials';
	systemReqs = '#sysreqs';
} else if (product == 'vs') {
	macAfee = 'corel';
	facebook = 'https://www.facebook.com/corelvideostudio';
	twitter = 'https://twitter.com/VideoStudio';
	youtube = 'https://www.youtube.com/channel/UCI05ia_jbSKgC9E7uvLA76Q';
	systemReqs = '#system-requirements';
} else if (product == 'psp') {
	macAfee = 'corel';
	facebook = 'https://www.facebook.com/corelpaintshop';
	twitter = 'https://twitter.com/CPaintShopPro';
	youtube = 'https://www.youtube.com/user/CorelPaintShopPro';
	systemReqs = '#tech-specs';
} else if (product == 'corel') {
	macAfee = 'corel';
	facebook = 'https://www.facebook.com/Corel';
	twitter = 'https://twitter.com/corelsoftware';
	youtube = 'https://www.youtube.com/user/corelcorp';
	systemReqs = '';
}

var imagePath = imagePathLeft + imageFolder + imagePathCampaign;
var tracking = '&utm_medium=eDM&utm_source=`ym_mid`&utm_campaign=`campaignID`&x-vehicle=edm';
var trackingFooter = '?utm_medium=eDM&utm_source=`ym_mid`&utm_campaign=`campaignID`&x-vehicle=edm';
var trackingFull = '?currency=' + currency + tracking;
var trackingUpgrade = '?currency=' + currency + '&skuId=UG' + tracking;

gulp.task('default', function() {
  return gulp.src(['header.html', 'body.html', 'footer.html', 'disclaimer.html', 'end.html'])
    .pipe(concat('index-' + edmLocation + '.html'))
    .pipe(replace('{htmlLang}', htmlLang))
    .pipe(replace('{previewText}', previewText))
    .pipe(replace('{width}', width))
    .pipe(replace('{siteLocation}', siteLocation))
    .pipe(replace('{altText}', altText))
    .pipe(replace('{expireText}', expireText))
    .pipe(replace('{linkText}', linkText))
    .pipe(replace('{imagePath}', imagePath))
    .pipe(replace('{trackingFull}', trackingFull))
    .pipe(replace('{trackingUpgrade}', trackingUpgrade))
    .pipe(replace('{trackingFooter}', trackingFooter))
    .pipe(replace('{macAfee}', macAfee))
    .pipe(replace('{footerButton1}', footerButton1))
    .pipe(replace('{footerButton2}', footerButton2))
    .pipe(replace('{footerButton3}', footerButton3))
    .pipe(replace('{followUs}', followUs))
    .pipe(replace('{facebook}', facebook))
    .pipe(replace('{twitter}', twitter))
    .pipe(replace('{youtube}', youtube))
    .pipe(replace('{disclaimer}', disclaimer))
    .pipe(replace('{backgroundColor}', backgroundColor))
    .pipe(replace('{fontColor}', fontColor))
    .pipe(replace('{systemReqs}', systemReqs))
    .pipe(gulp.dest('../TASKS/' + projectFolder));
});