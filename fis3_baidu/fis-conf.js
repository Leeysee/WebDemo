fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {//js css jpg png都使用哈希
  useHash: true
});

fis.match('*.js', {//js做压缩
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {//*.png这块是文件
  optimizer: fis.plugin('png-compressor')//插件
});

fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});