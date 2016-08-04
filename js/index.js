/**
 * Created by weimin on 16-8-3.
 */
window.onload = function(){
   var navScroll = new IScroll('#nav',{
       mouseWheel:true,
       scrollbars:true
   });
   $(".iScrollVerticalScrollbar").css({
       opacity:0.3
   })
}