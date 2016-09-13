 $(function(){
    $("html,body").animate({scrollTop:top},700,"easeOutQuart");   
    animate.resize();
 });    
window.onresize=function (){
    animate.initialize();
    animate.resize();
};
window.onload=function(){
    animate.initialize();  
    var setTime;    
    var num=animate.num();
    var top=$(".box li").eq(num).offset().top;    
    $(document).on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        console.log(num);
        clearTimeout(setTime);
        var $b=true;
        if (num<1||num>4) return;
        if (num>=1||num<=4) {           
            var value=e.originalEvent.wheelDelta || -e.originalEvent.detail;
            var returnValue=Math.max(-1,Math.min(1,value));  
            setTime=setTimeout(function(){  
                    var returnV= returnValue<0;
                    if(returnV?!$b||num>=4:!$b||num<=1)return;
                    else{
                        $b=false;
                        $("body").attr({"num":returnV?++num:--num});
                        returnV?top=animate.Height()*(num-1) : top-=animate.Height();
                        console.log(top+"top");
                        $("html,body").animate({scrollTop:top},1000,"easeInOutBack");
                    }
            },300); 
        }
    });
}
var animate={
    Width:function(){        
        return document.documentElement.clientWidth || document.body.scrollWidth;
    },
    Height:function(){        
        return document.documentElement.clientHeight || document.body.scrollHeight;
    },
    initialize:function(){
        $("html,body").scrollTop(0); 
        $("body").attr({"num":1});  
    },
    resize:function(){    
        for (var i = 0; i < $(".box li").length; i++) {
            $(".box li").eq(i).css({"width":animate.Width(),"height":animate.Height()});
        }
    },
    num:function (){
         return parseInt($("body").attr("num"));
    }
}
