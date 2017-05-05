//视频 导航 购物切换标签
$(document).ready(function() {
    $('.main_head li').each(function(index) {
        var liNode = $(this);
        $(this).click(function() {

            $('div.currentshow').removeClass('currentshow');
            $('.main_head li.tabin').removeClass('tabin');
            $('.main_body').eq(index).addClass('currentshow');
            liNode.addClass('tabin');
        })
    })
})




//点击换肤触发显示换肤页面
var $popBox = $(".pop-box");
var $posMaxBox = $(".pos-max-box");
$posMaxBox.height($(window).height());
$(".change-skin").click(function() {
    $posMaxBox.show();
    $popBox.animate({
        top: 0,
        opacity: 1
    }, 450)
});

$(".hide-but").click(function() {
    $popBox.animate({
        top: -308,
        opacity: 0
    }, 450)
    $posMaxBox.hide();
});
//点击换肤触发显示换肤页面end





$posMaxBox.click(function() { //隐藏换肤功能
    $popBox.animate({
        top: -308,
        opacity: 0
    }, 450)
    $posMaxBox.hide();
});





var $hovfla = $("#moshover");
$hovfla.find("li").hover(function() {
        var path = $(this).find("img").attr("src");
        //console.log(path);
        var selected = $('.background-skin').css('backgroundImage');
        //console.log(selected);
        $(this).click(function() {
            $('.background-skin').css({
                "background-image": "url(" + path + ")"
            });
            window.localStorage.setItem('load-storage', path) //存储localStroage

        });
        $(".pos-in-this").find("img").attr("src", path); //鼠标移入替换当前图片
    },
    function() {
        $(".pos-in-this").find("img").attr("src", "image/tet-1.jpg"); //鼠标移出后显示的图片
    });





$('.mousein').hover(function() { //更多产品移入
    $('.nav').find('.s_bdbri').css('display', 'block');


}, function() { //更多产品移出
    $('.nav').find('.s_bdbri').css('display', 'none');


});



$(document).ready(function() { //加载localstorage
    window.localStorage.getItem('load-storage');
    var Load = window.localStorage.getItem('load-storage');
    //console.log(Load);
    //var find = $('.background-skin').css('backgroundImage');
    if (Load == null) { //判断localstorage是否为空
        $('.background-skin').css({
            "background-image": "url(https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/836.jpg?2)"
        });
    } else {
        $('.background-skin').css({
            "background-image": "url(" + Load + ")"
        });
    }








});




$('#weather').leoweather({ format: '{城市}<br/>天气 {天气} <br/>{夜间气温}℃ ~ {白天气温}℃' }); //天气
$('#weathertime').leoweather({ format: '{时段}好！现在时间是：{年}年{月}月{日}日' });
$('#weatherday').leoweather({ format: '今天星期{周}' });




var timeoutid;
$('.getweather').hover(function() { //顶部天气
    timeoutid = setTimeout(function() {
        $('.weather_block').css('display', 'block');
    }, 600);

}, function() {
    timeoutid = setTimeout(function() {
        $('.weather_block').css('display', 'none');
    }, 600);
});
