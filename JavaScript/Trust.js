/**
* 	auto--> IE9+
*/
function $(element){
	return document.getElementById(element);
}
// 双向数据绑定 or 实时监听
function realTime(object,script){
	$("inp").addEventListener("input",script);
}
