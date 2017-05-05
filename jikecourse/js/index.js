//aside课程标签
$(document).ready(function() { //显示新标签
    $('.aside_course ul li').each(function(index) {
        $(this).hover(function() {
            $('.aside_course_show').eq(index).css('display', 'block');
        }, function() {
            $('.aside_course_show').eq(index).css('display', 'none');
            $('.aside_course ul li a').removeClass('aside_course_change');
        });
    })


});



$(document).ready(function() { //改变aside标签样式
    $('.aside_course>ul>li>a').each(function(index1) {
        $(this).hover(function() {
            $('.aside_course>ul>li>a').eq(index1).addClass('aside_course_change');
        })
    })
});



//aside课程标签end


$('.main_title_l ul>li').hover(function() { //main课程下拉标签
    $(this).children('ul').css('display', 'block');
}, function() {
    $(this).children('ul').css('display', 'none');
});





$('.main_title_l ul>li ul li').hover(function() { //aside课程下拉标签hover颜色 
    $(this).children('a').css('color', '#35b558');
}, function() {
    $(this).children('a').css('color', '#666');
});





$('.main_lesson-list2 li').hover(function() { //table2渐变
    $(this).find('.lessonplay').css('opacity', '1');
    $(this).find('.lessonplay').fadeIn();
    $(this).find('.lesson-shoucang').css('opacity', '1');
    $(this).find('.lesson-shoucang').fadeIn();


}, function() {
    $(this).find('.lesson-shoucang').fadeOut();
    $(this).find('.lessonplay').fadeOut();
    $(this).find('.lesson-shoucang').css('opacity', '0');
});





$('.main_lesson-list li').hover(function() { //main里的课程移入
    $(this).find('.lessonplay').css('opacity', '1');
    $(this).find('.lessonplay').fadeIn();
    $(this).find('.p_increse').css('height', '55px');
    $(this).find('.p_increse').css('opacity', '1');
    $(this).find('.p_increse').fadeIn();
    $(this).find('.lesson_level').css('display', 'block');
}, function() { //main里的课程移出
    $(this).find('.lessonplay').fadeOut();
    $(this).find('.p_increse').css('height', '0px');
    $(this).find('.p_increse').css('display', 'none');
    $(this).find('.p_increse').css('opacity', '0');
    $(this).find('.lesson_level').css('display', 'none');
});



$('.header_nav ul li').hover(function() { //顶部header课程移入
    $(this).find('.vip-lesson').css('opacity', '1');
    $(this).find('.vip-lesson').css('display', 'block');

}, function() { //顶部header课程移出
    $(this).find('.vip-lesson').css('opacity', '0');
    $(this).find('.vip-lesson').css('display', 'none');

});





$('.header_nav>ul>li').hover(function() { //顶部header课程移入
    $(this).find('.a_hover').css('color', '#35b558');


}, function() { //顶部header课程移出
    $(this).find('.a_hover').css('color', '#333');


});














//鼠标移入main课程增加或者减少高度
$('.main_lesson-list li').on('mouseover', increaseHeight);
$('.main_lesson-list li').on('mouseout', decreaseHeight);

function increaseHeight() {
    $(this).find('.lesson_info').css('height', '175px');
}

function decreaseHeight() {
    $(this).find('.lesson_info').css('height', '88px');
}
//鼠标移入增加或者减少高度end




$(document).ready(function() { //切换main的table1
    $('.main_title_r ul li:first-child').click(function() {
        $('.main_lesson-list2').css('display', 'block');
        $('.main_lesson-list').css('display', 'none');
        window.localStorage.setItem('load-storage', 'a') //存储localStroage




    });
});


$(document).ready(function() { //切换main的table2
    $('.main_title_r ul li:last-child').click(function() {
        $('.main_lesson-list2').css('display', 'none');
        $('.main_lesson-list').css('display', 'block');
        window.localStorage.setItem('load-storage', 'b') //存储localStroage

    });
});


$(function() { //加载localStorage
    window.localStorage.getItem('load-storage');
    var i = window.localStorage.getItem('load-storage');
    if (i == 'b') {
        $('.main_lesson-list').css('display', 'block');
        $('.main_lesson-list2').css('display', 'none');
    } else {
        $('.main_lesson-list2').css('display', 'block');
        $('.main_lesson-list').css('display', 'none');
    }




});








$(document).ready(function() { //搜索框部分点击搜索
    $('.serach').click(function() {
        $('.login_area').css('display', 'none');
        $('.header_nav').css('opacity', '0');
        //$('.header_nav').css('display', 'none');
        $('.searchbox').css('display', 'block');
        $('.searchbox').css('opacity', '1');
        $('.searchbox').css('transform', 'scale(1)');
    })
});


$(document).ready(function() { //搜索框部分点击取消
    $('.close-icon').click(function() {
        $('.login_area').css('display', 'block');
        $('.header_nav').css('opacity', '1');
        // $('.header_nav').css('display', 'block');
        $('.searchbox').css('display', 'none');
        $('.searchbox').css('opacity', '0');
        $('.searchbox').css('transform', 'scale(0.1)');

    })
});
