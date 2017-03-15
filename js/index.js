//定时轮播
$(function(){
    var n=0;
    function run(){
        n++;
        n = (n==6)?0:n;
        // if(n==6){
        //     n=0;
        // }
        $('#fk img').eq(n).fadeIn(500).siblings('img').fadeOut(500);
        //$('#fk ul li').eq(n).css({'background':'#a10000'}).siblings('li').css({'background':'#000'});
        $('#fk ul li').eq(n).addClass('li_run').siblings('li').removeClass('li_run');
    }
    var timer=setInterval(run,3000);

    //鼠标移入切换
    $('#fk ul li').mouseenter(function(){
        var nthis=$(this);
        //停止定时器
        clearInterval(timer);
        //快速移动时停止轮播动作
        timeout = setTimeout(function(){
            n=nthis.index();
            $('#fk img').eq(n).stop().fadeIn(500).siblings('img').stop().fadeOut(500);
            //$('#fk ul li').eq(n).css({'background':'#a10000'}).siblings('li').css({'background':'#000'});
            $('#fk ul li').eq(n).addClass('li_run').siblings('li').removeClass('li_run');
        },200);     
    });
    //鼠标移出停止切换，转回定时器
    $('#fk ul li').mouseleave(function(){
        clearTimeout(timeout);
        timer=setInterval(run,3000);
    });
});
