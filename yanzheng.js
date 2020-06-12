$(function () 
{
	//验证用户名
	$('#username').blur(function () {
		var str=$('#username').val();
		userOut(str);
	})
	$('#username').focus(function () {
		Onagin("#userWarn");	
	})
	//密码验证
	$('#psd').blur(function ()
	{
		var padstr=$('#psd').val();
		var psdre=ispad(padstr);
		if (padstr=="" ||!psdre||6>padstr.length||padstr.length>24) 
		{
			labelWarn("#psdWarn");
		}
	})
	$('#psd').focus(function () {
		Onagin("#psdWarn");	
	})
	//验证两次密码是否一致
	$('#repsd').blur(function (){
		repsdOut();
	})
	//身份证长度验证
	$('#theiD').blur(function () {
		labelWarn("#theidWarn");
	})
	$('#theiD').focus(function () {
		Onagin("#theidWarn");	
	})

	$('#thePone').blur(function () {
		labelWarn("#PWarn");
	})
	$('#thePone').focus(function () {
		Onagin("#PWarn");	
	})
	//邮箱验证
	$('#emailId').blur(function () {
		var strEil=$('#emailId').val();
		if (!isEmail(strEil)) {
			labelWarn("#emailWarn");
			$('#emailWarn').text('*输入格式不正确！');
		}
	}) 
	$('#emailId').focus(function () {
		Onagin("#emailWarn");
		$('#emailWarn').text('*');
	})
	
})
//正则表达式验证用户名
function userOut(str) {
	var re=/^[a-zA-Z][a-zA-Z0-9_]*$/;
	if (str==''|| 4>str.length||str.length>16 || !re.text(str)) {
			labelWarn("#userWarn");
			return false;
		}
}
//再次获得焦点还原样式
function Onagin(str) {
		 	$(str).css('color','#000');
		 } 
function repsdOut() {
	var psd1= $('#psd').val();
	var psd2= $('#repsd').val();
	if (psd1!=psd2) {
			$('#pstDeficul').css('color','red');
			$('#pstDeficul').css('font-size','0.7em');
			$('#pstDeficul').text('*输入两次密码不一致！');
		}
}
//红色警告
function labelWarn(IdName) {
	$(IdName).css('color','red');
	return false;
}
function isEmail(str){ 
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
    return reg.test(str); 
}
function ispad(str){ 
    var reg = /[a-zA-Z][a-zA-Z0-9_]*$/; 
    return reg.test(str); 
}
function Theverify() {
	// body...
	var v1="用户名输入不正确！\n电子邮箱输入不正确！\n密码输入不正确！\n请再次输入密码！\n身份证号码格式输入不正确！\n电话号码输入不正确！"
	alert(""+v1);
}
