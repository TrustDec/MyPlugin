/**
*date from:2016.4.13
*performer:sm
*兼容: IE6+
*/

var timer=null;	
var alpha=30;
var fast=20;	

//获取ID,用JQuery方式获取
function $(id){
	return document.getElementById(id);
}

//get css  inline style ;
function getStyle(obj,attribute){
	if(obj.currentStyle){
		// IE5+
		return obj.currentStyle[attribute];
	}else{
		// FF/Chrome/Open
		return getComputedStyle(obj,false)[attribute];
	}
}
// 浏览器左边边框显示与隐藏
function slideLeft(juli){
	var obj=document.getElementById("box");
	clearInterval(timer);
	timer=setInterval(function(){
		obj.offsetLeft==juli?clearInterval(timer):obj.style.left=obj.offsetLeft+(juli>=0?2:-2)+"px";
	},2);
}
// 匀速淡入淡出
function InOut(num){
	clearInterval(timer);
	timer=setInterval(function(){
		alpha==num?clearInterval(timer):alpha+=alpha<num?5:-5,box.style.filter="alpha(opacity:"+alpha+")",box.style.opacity=alpha/100;
	},fast);	
}
// 获取className,兼容所有浏览器;document.getElementByClassName()方法不兼容低版本浏览器
// oParent:父级元素;oClass:class name
function getClassName(oParent,oClass){
	var claName=[];
	var className=oParent.getElementsByTagName('*');
	for (var i = 0; i < className.length; i++) {
		if(className[i].className==oClass){
			claName.push(className[i]);
		}
	}
	return claName;
}
// 页面动态滚动指定的位置
// element:事件触发,position:指定位置
function scrollTop(element,position){
	element.onclick=function(){
		alert("待完成..........................................");
	}
}
// Dom节点获取元素方法封装,及解决浏览器兼容问题
// 获取第一个子元素
function firstName(oParent){
	if (oParent.firstElementChild) {
		return oParent.firstElementChild;
	}else{
		return oParent.firstChild;
	}
}
//事件对象封装
function eventObj(event){
	if (window.event) {
		return window.event;
	}else{
		return event;
	}
}
/*
------------------------------------------------------------------------------
	以下是针对IE 模型及W3C模型做兼容封装
*/
//事件绑定及事件删除
	/**
		* 事件监听绑定兼容处理
		* obj:元素对象,
		* type:事件类型
		* fn:执行代码块
	*/
	function addEvent(obj,type,fn){
		obj.addEventListener?obj.addEventListener(type,fn):obj.attachEvent("on"+type,fn);
	}
	/**
		*删除事件监听
	*/
	function removeEvent(obj,type,fn){
		obj.removeEventListener?obj.removeEventListener(type,fn):obj.detachEvent("on"+type,fn);
	}
	/**
		* 解决事件冒泡
		* <1>.教学视屏中传入了event,我自己写的没有,也可以......
	*/
	function stopBubble(){
		window.event.cancelBubble?window.event.cancelBubble=true:event.stopPropagation();
	}
	/**
		* 默认事件行为阻止,解决默认行为一般最常用的是return false;
		* 以下是另一种方式
	*/
	function stopDefaultEvent(){
		window.event.returnValue?window.event.returnValue=false:event.preventDefault();
	}
