var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

var lang = 'en-US';
var greeting = 'Egor is awesome!';
var title = 'Test';

var htmlLang;
var currency;

if (lang == 'en-US') {
	htmlLang = 'en';
	currency = lang;
}

gulp.task('default', function() {
  return gulp.src(['header.html', 'body.html', 'footer.html'])
    .pipe(concat('all.html'))
    .pipe(replace('{lang}', lang))
    .pipe(replace('{title}', title))
    .pipe(replace('{Hello}', greeting))
    .pipe(gulp.dest('./dist/'));
});