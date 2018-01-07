/**
 * Created by jiangzhaojin on 2016/7/15.
 */
$(function(){
/*
    // 发现chrome浏览器对于rem的计算似乎有点异样，随着浏览器的更新原来的嗅探技术失效，故而弃用

    var isChrome = !!(window.chrome && widow.google);
    if(isChrome) { $('.workers-box').css('width','26rem').css('height','30rem');}

*/

    $('#main').fullpage({
        sectionsColor: ['#2B2B2B', '#2B2B2B', '#2B2B2B', '#2B2B2B'],
        afterLoad: function(anchorLink, index){
            $('.anchor').find('li').eq(index-1).css('backgroundColor', '#555');
        },
        onLeave: function(index, direction){
            setTimeout( function() {
                $('.anchor').find('li').eq(index-1).css('backgroundColor', 'transparent');
            }, 50);
            
        }
    });
});

