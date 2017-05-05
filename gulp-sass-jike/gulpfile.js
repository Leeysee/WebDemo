var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var sass = require('gulp-sass');
var path = require('path');
//var uglify = require('gulp-uglify');//压缩JS用这里暂时没有用到
//var concat = require('gulp-concat');//合并JS用这里暂时没有用到
var htmlmin = require('gulp-htmlmin');//压缩html


//任务
gulp.task('sass', function () {
    var processors = [
    	autoprefixer({//优化less sass
    		browsers:['last 4 version']//优化上4个版本
    	}),
    	mqpacker,
    	csswring
    ];

    return gulp.src('./src/*.scss')//未编译sass在src下
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./stylesheets'));
});


gulp.task('htmlmin', function () {
    

    var options = {//压缩html
    //removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    //removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
    };
    return gulp.src('./src/*.html')//未压缩HTML在src下
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./'));

});


 gulp.task('default',['htmlmin','sass']);
 gulp.watch('./src/*', ['default']);//监听sass变化也可以写成下面的方法
 //gulp.watch('./src/*.scss', ['sass']);
 //gulp.watch('./src/*.html', ['htmlmin']);