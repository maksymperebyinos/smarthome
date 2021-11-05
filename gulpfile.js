const { src, dest, watch } = require("gulp");
const less = require("gulp-less");

function styles() {
  return src("less/style.less")
    .pipe(less())
    .pipe(dest("css"))
}

function watching() {
  watch(["less/**/*.less"], styles)
}

exports.styles = styles;
exports.watching = watching;