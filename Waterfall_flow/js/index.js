$(document).ready(function(){
    $(window).on('load',function(){
        imgLocation()
        window.onscroll =function(){
        var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
        if(scrollside()){
        	$.each(dataImg.data,function(index,value){
              var box = $('<div>').addClass('box').appendTo($('#container'));
              var content = $('<div>').addClass('content').appendTo(box);
              //console.log('./image/'+$(value).attr('src'));
              $('<img>').attr('src','./image/'+$(value).attr('src')).appendTo(content);
        	});
        	imgLocation()
        }
        };
    });
});



function scrollside(){
	var box = $('.box');
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}









function imgLocation(){
	var box = $('.box');
	var boxWidth = box.eq(0).width();//获取第一个图片宽度
	var num = Math.floor($(window).width()/boxWidth);
	//一排能放几张图
	var boxArr=[];//承载所有盒子的高度
	box.each(function(index,value){//index确定哪一个位置 value确当前哪一个元素
       // console.log(index+'--'+value);
       var boxHeight = box.eq(index).height();//获取盒子高度
       if(index<num){
       	boxArr[index] = boxHeight;
       	//console.log(boxHeight);
       }else{
       	var minboxHeight = Math.min.apply(null,boxArr);
       	//console.log(minboxHeight);
       	var minboxIndex = $.inArray(minboxHeight,boxArr);
       	//console.log(value);
       	$(value).css({
       		'position':'absolute',
       		'top':minboxHeight,
       		'left':box.eq(minboxIndex).position().left
       	});
       	boxArr[minboxIndex]+=box.eq(index).height();
       }
	});
}