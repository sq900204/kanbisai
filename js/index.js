/**
 * Created by weimin on 16-8-3.
 */
window.onload = function(){
    var oNav = $("#nav");
    var oSection = $(".section");
    var oHeader = $("header");
    var closeBtn = $(".qrCode").find(".close");
    var feedback = $(".fixedMenu").children("a");
   var navScroll = new IScroll('#nav',{
       mouseWheel:true,
       scrollbars:true
   });
    var sectionScroll = new IScroll(".section",{
        mouseWheel:true,
        scrollbars:true
    });
   $(".iScrollVerticalScrollbar").css({
       opacity:0.3
   });

    scrollRefresh();

    $(window).on("resize",scrollRefresh);

    function scrollRefresh(){
        var winHeight=$(window).innerHeight();
        var curHeight=winHeight-oHeader.outerHeight(true);
        oSection.css("height",curHeight);
        oNav.css("height",curHeight);
        navScroll.refresh();
        sectionScroll.refresh();
    }

    closeBtn.css({
        cursor:"pointer"
    });

    closeBtn.on("click",function(){
        $(this).parent().slideUp(500);
    });

    feedback.on("mouseover",function(){
        $(this).addClass("over");
    })
    feedback.on("mouseleave",function(){
        $(this).removeClass("over");
    })//用增加和移除class的方法改变样式
}