/**
 * Created by weimin on 16-8-3.
 */
window.onload = function(){
    var oNav = $("#nav");
    var oSection = $(".section");
    var oHeader = $("header");
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
}