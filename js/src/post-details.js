"use strict";$(document).ready(function(){!function(){var s=".post-toc",e=$(s),t=".active-current";function o(){$(s+" "+t).removeClass(t.substring(1))}e.on("activate.bs.scrollspy",function(){var t=$(s+" .active").last();o(),t.addClass("active-current"),e.scrollTop(t.offset().top-e.offset().top+e.scrollTop()-e.height()/2)}).on("clear.bs.scrollspy",o),$("body").scrollspy({target:s})}()}),$(document).ready(function(){var o=$("html"),i=200,l=$.isFunction(o.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this),s="sidebar-nav-active",e="sidebar-panel-active";if(!t.hasClass(s)){var o=$("."+e),a=$("."+t.data("target"));l?o.velocity("transition.slideUpOut",i,function(){a.velocity("stop").velocity("transition.slideDownIn",i).addClass(e)}):o.animate({opacity:0},i,function(){o.hide(),a.stop().css({opacity:0,display:"block"}).animate({opacity:1},i,function(){o.removeClass(e),a.addClass(e)})}),t.siblings().removeClass(s),t.addClass(s)}}),$(".post-toc a").on("click",function(t){t.preventDefault();var s=NexT.utils.escapeSelector(this.getAttribute("href")),e=$(s).offset().top;l?o.velocity("stop").velocity("scroll",{offset:e+"px",mobileHA:!1}):$("html, body").stop().animate({scrollTop:e},500)});var t=$(".post-toc-content"),s=CONFIG.page.sidebar;if("boolean"!=typeof s){var e="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,a=0<t.length&&0<t.html().trim().length;s=e&&a}s&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});