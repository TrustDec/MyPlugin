window.onresize=function (){
		var x=document.documentElement.clientWidth;
		var y=document.documentElement.clientHeight;
		
		for (var i = 0; i < $(".box li").length; i++) {
			$(".box li").eq(i).css({"width":x,"height":y});
		}
		console.log(x+"   "+y);
};
window.onload=function(){
var num=0;
var top=$(".box li").offset().top;
!function($){
    $(document).on("mousewheel DOMMouseScroll",function(e){
        var $b=true;
        if (num<0||num>3) return;
        if (num>=0||num<=3) {
    		e.preventDefault();
    		var value=e.originalEvent.wheelDelta || -e.originalEvent.detail;
    		//var value=e.originalEvent.wheelDelta || -e.originalEvent.detail;
    		var returnValue=Math.max(-1,Math.min(1,value));
            var x=document.documentElement.clientWidth;
            var y=document.documentElement.clientHeight;
    		
    		if (returnValue===1) {			//向上
    			if (!$b||(num<0||num>3)) return;
                 else{
                $b=false;
    				$("body").attr({"num":num-=1});
                    top-=y;
                    console.log(top);
                   $("html,body").animate({scrollTop:top},700,"easeOutQuart");
               }
    		}
            if(returnValue===-1){
    			if (!$b||(num<0||num>3)) return;
                else{
                $b=false;
    				$("body").attr({"num":num+=1});
                    
                    top=y*num;
                    console.log(top);
                   $("html,body").animate({scrollTop:top},700,"easeOutQuart");
                }    
    		}
        }
	});
}(jQuery);

}



























































































































































































































































































































































































































































































































































































 /*!function ($) {
        $(document).on('mousewheel DOMMouseScroll', function (e) {
            //WebKit内核，Trident内核 => mousewheel
            //Gecko内核 => DOMMouseScroll
            e.preventDefault();	//取消与事件关联的事件
            var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
            //e.originalEvent.wheelDelta => 120(up) or -120(down) 谷歌IE内核
            //e.originalEvent.detail => -3(up) or 3(down) 火狐内核
            var delta = Math.max(-1, Math.min(1, value));
            alert(value);
        });
    }(jQuery);*/

    /*!function () {
        var EventUtil = {
            addHandler: function (element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else if (element.attachEvent) {
                    element.attachEvent('on' + type, handler);
                } else {
                    element['on' + type] = handler;
                }
            },
            getEvent: function (event) {
                return event ? event : window.event;
            },
            stopPropagation: function (event) {
                event = event || window.event;
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
            }
        };
 
        function handleMouseWheel(event) {
            EventUtil.stopPropagation(event);
            event = EventUtil.getEvent(event);
            var value = event.wheelDelta || -event.detail;
            var delta = Math.max(-1, Math.min(1, value));
            console.log(delta < 0 ? 'down' : 'up');
        }
 
        EventUtil.addHandler(document, 'mousewheel', handleMouseWheel);
        EventUtil.addHandler(document, 'DOMMouseScroll', handleMouseWheel);
    }();*/
