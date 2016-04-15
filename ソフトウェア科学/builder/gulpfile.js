var fs = require("fs");
var gulp = require("gulp");
var notify = require("gulp-notify");
var buffer = require("gulp-buffer");
var webserver = require("gulp-webserver");
var mathjax = require("mathjax_markdown");
var errHandler = function(){
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  this.emit("end");
};

gulp.task("build", function () {
  fs.readdir("./src",function(err, files){
    files.forEach(function(file){
      if(/\.md$/.test(file)) {
        var dist = file.replace(/.md$/, "");
        mathjax.md_to_html(`./src/${file}`, `./${dist}.html`);
        // mathjax.md_to_pdf(`./src/${file}`, `./${dist}.pdf`);
      }
    });
  }); 
});

gulp.task("server", function(){
  gulp.src("./")
    .pipe(webserver({
      livereload: true,
      https: false,
      open: true
    }));
});

gulp.task("watch",["server"], function(){
  gulp.watch("./src/*.md ",["build"]);
});

gulp.task("default", ["build", "watch", "server"]);
