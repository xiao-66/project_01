$(function() {
    // 节流阀 互斥锁
    var flag = true;
    var referralTop = $(".referral").offset().top;
    // console.log(referralTop);
    togletool();  // 防止刷新页面不显示电梯栏
    // 封装函数 
    function togletool() {
        if($(document).scrollTop() >= referralTop) {
            $(".fixedtool").fadeIn();
        }else {
            $(".fixedtool").fadeOut();
        }
    }
    // 页面滚动时调用
    $(window).scroll(function() {
        togletool();

        // 3. 内容区滚动到某个区，电梯导航li添加类 
        if(flag) {
            $(".floor .w").each(function(i,ele) {
                // 页面滚动大于等于 内容区offsetp
                    if($(document).scrollTop() >= $(ele).offset().top) {
                        // console.log(i);
                        $(".fixedtool li").eq(i).addClass("cloor_gb").siblings().removeClass();
                    }
                })
        }


    })
// 点击点击导航可以滚动到相应内容区
$(".fixedtool li").click(function() {
    // 节流阀 每次点击li时 flag为false 防止页面滚动bug
    flag = false;
    console.log($(this).index());
    var current = $(".floor .w").eq($(this).index()).offset().top;
    // console.log(current);
    $("body, html").stop().animate({
        scrollTop:current
        
    },function() {
        flag = true;
    })
})
// 点击li 时添加背景色
$(".fixedtool li").click(function() {
    $(this).addClass("cloor_gb").siblings().removeClass();
})



})