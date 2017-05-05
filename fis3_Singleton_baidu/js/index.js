

$(document).ready(function() {
    //顶部天气更多产品功能
    //Javascript单例模式
    //减少全局变量泛滥,保护命名空间下对象的安全性,防止它们与全局变量混淆。
    var Weather = {
        init: function(){
            var me = this;
            me.render();
            me.bind();
        },
        render: function(){
            var me = this;
            me.weather = $('#weather');
            me.getweather = $('.getweather');
            me.weathertime = $('#weathertime');
            me.weatherday = $('#weatherday');
            me.weather_block = $('.weather_block')


        },
        bind: function(){
            var me = this;
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
            me.weather.leoweather({ format: '{城市}<br/>天气 {天气} <br/>{夜间气温}℃ ~ {白天气温}℃' }); //天气
            me.weathertime.leoweather({ format: '{时段}好！现在时间是：{年}年{月}月{日}日' });
            me.weatherday.leoweather({ format: '今天星期{周}' });

        }
    }
    //顶部天气更多产品功能end




    //换肤功能
    //Javascript单例模式
    //减少全局变量泛滥,保护命名空间下对象的安全性,防止它们与全局变量混淆。
    var Skin = { //换皮肤
        init: function() {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.$popBox = $(".pop-box");
            me.$posMaxBox = $(".pos-max-box");
            me.$changeSkin =  $(".change-skin");
            me.$hidebut = $(".hide-but");
            me.$hovfla = $("#moshover");
            me.posIn = $(".pos-in-this")
            me.bgskin = $('.background-skin')

        },
        bind: function() {
            var me = this;
            //初始化换肤
            me.$posMaxBox.height($(window).height());
            me.$changeSkin.click(function() {
                me.$posMaxBox.show();
                me.$popBox.animate({
                    top: 0,
                    opacity: 1
                }, 450)
            });

            me.$hidebut.click(function() {//隐藏换肤功能
                me.$popBox.animate({
                    top: -308,
                    opacity: 0
                }, 450)
                me.$posMaxBox.hide();
            });


            me.$posMaxBox.click(function() { //隐藏换肤功能
                me.$popBox.animate({
                    top: -308,
                    opacity: 0
                }, 450)
                me.$posMaxBox.hide();
            });


            
            me.$hovfla.find("li").hover(function() {
            var path = $(this).find("img").attr("src");
            //console.log(path);
            var selected = $('.background-skin').css('backgroundImage');
            //console.log(selected);
            $(this).click(function() {
                me.bgskin.css({
                    "background-image": "url(" + path + ")"
                });
                window.localStorage.setItem('load-storage', path) //存储localStroage

            });

            me.posIn.find("img").attr("src", path); //鼠标移入替换当前图片
            },
            function() {
            me.posIn.find("img").attr("src", "image/tet-1.jpg"); //鼠标移出后显示的图片
            });


        }
    };
    //换肤功能end





    //全局功能
    //视频-导航-购物切换标签
    $('.main_head li').each(function(index) {
        var liNode = $(this);
        $(this).click(function() {

            $('div.currentshow').removeClass('currentshow');
            $('.main_head li.tabin').removeClass('tabin');
            $('.main_body').eq(index).addClass('currentshow');
            liNode.addClass('tabin');
        })
    });
    //视频-导航-购物切换标签end



    //全局功能-更多产品
    $('.mousein').hover(function() { //更多产品移入
        $('.nav').find('.s_bdbri').css('display', 'block');
    }, function() { //更多产品移出
        $('.nav').find('.s_bdbri').css('display', 'none');
    });


    //全局功能-加载localstorage
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



    

    //设计模式初始化
    Skin.init();
    Weather.init();



});










