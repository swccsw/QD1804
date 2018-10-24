const gulp = require('gulp');

/*拷贝html文件*/

gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

/*拷贝图片*/
gulp.task("images", function(){
	return gulp.src("images/*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*使用gulp-sass-china 编译scss文件
	gulp-minify-css
	rename
*/
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("scripts", function(){
	return gulp.src(["js/*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

gulp.task("data", function(){
	return gulp.src(["data/*.json", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

gulp.task("build", ["copy-html", "scss", "images", "scripts", "data"], function(){
	console.log('编译成功');
});

gulp.task("watch", function(){
	gulp.watch(["*.json", "!package.json"], ['data']);
	gulp.watch(["*.js", "!gulpfile.json"], ['scripts']);
	gulp.watch(["stylesheet/index.scss",], ['scss']);
	gulp.watch(["*.{jpg,png}", ], ['images']);
	gulp.watch(["*.html", ], ['copy-html']);
})

const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: 'dist',
		port: 8888,
		livereload: true
	})
})

gulp.task("default", ['watch', "server"]);