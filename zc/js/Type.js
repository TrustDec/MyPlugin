  function $en(tit){return encodeURIComponent(tit)}
  var title="test！";
  var h=$(window).height();
  var w=$(window).width();
  $(".yutop").css("top",(h+150)+"px");
  $("#hjimg").css("top",(h+430)+"px");
  
  var yueAnimate={
    btntop :function(){

      $("#btntop").css({"margin-top": "0px"});
      $("#btntop").animate({"margin-top": "30px"
      },1000,'easeOutBounce');
      
    },
    yuFun:function(){
      var x=$(window).width()/2-1000;
      x=x<210?210:x;
      var y=460;
      $(".yutop").css("top",(h+150)+"px");
      $(".yu5").css({"left": "0px"});
      $(".yu6").css({"left": "0px"});
      $(".yu5").animate({
        "left": (x-100)+"px",
        "top":"168px"
      },400,'easeOutQuad',function(){
        $(".yu6").animate({
        "left": x+"px",
        "top":"268px"
        },200,'easeOutQuad');
      });
      
     },
     back_a1_title:function(){
      $(".back_a1_title").fadeIn(3000);
     },
      back_a4_title:function(){
      $(".back_a4_title").fadeIn(3000);
     },
     backBottom:function(){
      $(".Bottom").fadeOut(100,function(){
            $(".back_a4_header").fadeIn(2500);
            $(".back_a4_centent").fadeIn(2510);
            $(".back_a4_Bottom").fadeIn(2550);
            $(".Blogroll").fadeIn(2560);
            $(".back_Bottom").fadeIn(2565)  
        });
     }
  } 
  //鼠标滚动事件 
  var shubiao=true;
  var wheel = function(event) {  
    var delta = 0;  
    if (!event)
      event = window.event;  
      // alert(event);
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      //向下改变Header

      var i=$(window).scrollTop();
      if(delta ==-1){
        $(".Header").slideUp(200);
        $(".Header2").slideDown(100);
        // $(".Bottom").fadeOut(200);
      }else{
        $(".Header").slideDown(200);
        $(".Header2").slideUp(200);
        $(".Bottom").fadeIn(200);
      }
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    if (delta) handle(delta);
    if (event.preventDefault) event.preventDefault();  
    event.returnValue = false;  
  }
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  document.onmousewheel = wheel;
  var $f=true;
  var handle = function(delta) {
    if(!shubiao) return;
    shubiao=false;
    // var random_num = Math.floor((Math.random() * 100) + 50);
    if (delta < 0) {
      PicWheelScroll(1);
      $f=false;
       //console.log("鼠标滑轮向下滚动：" + delta + "次！"); // 1  
      return false;  
    } else {
      $f=true;
      PicWheelScroll(0);
      //console.log("鼠标滑轮向上滚动：" + delta + "次！"); // -1  
      return false;  
    }
  }
  $(".ac").each(function(i){
    $(this).click(function(){
      $(".ac").removeClass("active");
      $(".ac").eq(i).addClass("active");
      var num=i+1;
      if(num=="4") $("#btntop").hide();
      else $("#btntop").show();
      gotoAnchor($(".a"+num));
      getAnchroFun(num);
    })
  })
  var PicWheelScroll = function(n){   
    var num=$("#pic1").attr("num");   
    if((num===4&&n===1) || (num===1&&n===0)) return;
    if(n==1){
      if(num<4) num++;
    }else{
      if(num>1) num--;
    }
    $(".ac").removeClass("active");
    $(".ac").eq(num-1).addClass("active");
    if(num=="4") $("#btntop").hide();
    else $("#btntop").show();
    gotoAnchor($(".a"+num));
    getAnchroFun(num);
  }
  setInterval(yueAnimate.btntop,2000);
  var getAnchroFun=function(num){
    var h=$(window).height();
    var h=(h-500<30?30:h-580)+"px";
    $(".divtop").css("bottom","120px");
    var n=$("#pic1").attr("num");
    switch(parseInt(num)){
      case 1:
        
         yueAnimate.back_a1_title();
        break;
      case 2:
          yueAnimate.yuFun();       
        break;
      case 3:       
        break;
      case 4:
        yueAnimate.backBottom();
        break;
    }
    if(num<4){
      $(".back_a4_header").css("display","none");
      $(".back_a4_centent").css("display","none");
      $(".back_a4_Bottom").css("display","none");
      $(".Blogroll").css("display","none");
      $(".back_Bottom").css("display","none");
    }
     if(num>1){
      $(".back_a1_title").css("display","none");
    }
    $("#pic1").attr("num",num);
  }

  var gotoAnchor = function(selector,isauto){
    var anchor = $(selector);
    if (anchor.length < 0) return;
    var $win=$(window);
    var $body = $(window.document.documentElement);
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("webkit") > -1) {
      $body = $(window.document.body)
    }
    var pos=anchor.offset();
    if (isauto) {
      var t = pos.top - $win.scrollTop(); //相对于屏幕显示区
      var t2 = $win.height() - t;

      if (t2 < anchor.outerHeight()) {
        $body.animate({"scrollTop": pos.top}, 2000);
      }
      return;
    }
    $body.animate({"scrollTop": pos.top},{queue :false,complete: function(){shubiao=true;}});
  }

  gotoAnchor($(".a1"));
   yueAnimate.back_a1_title();
  $(window).resize(function(){
    var h=$(window).height();
    $(".back").css("height",h+"px");
    var n=$("#pic1").attr("num");
    var h1=(h-500<30?30:h-580)+"px";
    //if(n==1) $(".divtop").css("bottom",h1);
    //else 
    $(".divtop").css("bottom","120px");
    gotoAnchor($(".a"+n));
  });
  $(".divtop").click(function(){
    var n=$("#pic1").attr("num");
    if(n=="3") $("#btntop").hide();
    n=parseInt(n)+1;
    if(n==5) {return;}
    $(".ac").removeClass("active");
    $(".ac").eq(n-1).addClass("active");
    gotoAnchor($(".a"+n));
    getAnchroFun(n);
    $("#pic1").attr("num",n);
  });
/*头部*/
// $(function(){
//       var login_pop_ajaxurl = APP_ROOT+"/index.php?ctl=ajax&act=login";
//       $.get(login_pop_ajaxurl, function(data) {
//         var login_pop_html = data;
//           loginDialog(login_pop_html);
//       });
//     });
    /*登录*/
(function(){
    if(!($(".zc_phone_drop").children().length)){
      $(".zc_phone").remove();
    }

    var iWinWidth = $(window).width();  // 获取当前屏幕分辨率
      if(iWinWidth <= 1280){               // 小于等于1280更改css样式路径
          $("#screenCss").attr("href","http://localhost/161/app/Tpl/fanwe_1/css/common_css/less1280.css");
      }
  })();
  $(function(){
    $(".search_cate").bind('click',function(){
      $(this).attr("checked",true).addClass("cur").siblings().attr("checked",false).removeClass("cur");
      $("input[name='type']").val($(this).attr("livalue"));
      
      if($(this).attr("livalue")==4){
        $("#header_search_form").attr("action","/161/index.php?ctl=finance");
      }
    });
    
    //解决input中placeholder值在ie中无法支持的问题
    var doc=document,inputs=doc.getElementsByTagName('input'),supportPlaceholder='placeholder'in doc.createElement('input'),placeholder=function(input){var text=input.getAttribute('placeholder'),defaultValue=input.defaultValue;
    if(defaultValue==''){
      input.value=text}
      input.onfocus=function(){
        if(input.value===text){
        this.value=''
        }
      };
      input.onblur=function(){
        if(input.value===''){
          this.value=text
        }
      }
    };
    if(!supportPlaceholder){
      for(var i=0,len=inputs.length;i<len;i++){
        var input=inputs[i],text=input.getAttribute('placeholder');
        if(input.type==='text'&&text){
          placeholder(input)
        }
      }
    }
  });

  function check_tg(){
    var is_tg=0,
      is_user_tg=0,
      is_user_investor=0,
      check_login=$("input[name='check_login']").val();
    if(check_login){
      if(is_tg){
        if(!is_user_tg){
          $.showErr("您未绑定资金托管账户，无法发起项目，点击确定后跳转到绑定页面",function(){
            window.location.href=APP_ROOT +"/index.php?ctl=collocation&act=CreateNewAcct&user_type=0&user_id=";
          });
        }else{
          window.location.href="/161/index.php?ctl=project&act=choose";
        }
      }else{
        
        if(is_user_investor ==1){
          window.location.href="/161/index.php?ctl=project&act=choose";
        }else if(is_user_investor ==2){
          $.showErr("您的实名认证正在审核中，还不能发起项目，请联系网站管理员");
        }
        else{
          $.showErr("您未进行身份认证，无法发起项目，点击确定后跳转到身份认证页面",function(){
            window.location.href="/161/index.php?ctl=settings&act=security&method=setting-id-box";
          });
        }
        
      }
    }
    else{
      $.showErr("请先登录再进行发起项目",function(){
        show_pop_login();
      });
    }
  }
