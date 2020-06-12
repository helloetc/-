$(function () {
	var timer1, timer2, timer3;
	var dom = $("#Tu");
	changeBackground( dom, 1);

	$('#BDaMingShan').click(function () {
		// body...
		$("#DaMingShan").css('display', 'block');
		$("#qingxiushan").css('display', 'none');
		$("#YiLingYan").css('display', 'none');
		changeBackground( dom, 1);
	})



	$('#Bqingxiushan').click(function () {
		// body...
		$("#qingxiushan").css('display', 'block');
		$("#DaMingShan").css('display', 'none');
		$("#YiLingYan").css('display', 'none');
		var dom2 = $("#Tu2");
		console.log(22222)

		changeBackground( dom2, 2);


	})
	$('#BYiLingYan').click(function () {
		// body...
		$("#YiLingYan").css('display', 'block');
		$("#DaMingShan").css('display', 'none');
		$("#qingxiushan").css('display', 'none');
		var dom3 = $("#Tu3");

		console.log(3333333333)
		clearInterval(timer)
		timer=undefined;

		changeBackground(dom3, 3);


	})



	function changeBackground( dom, change) {
		var i = 2;
		timer = setInterval(function () {
			var myurl = "url(./images/" + change + "_" + i + ".jpg)";
			dom.css('background-image', myurl)
			i++;
			if (i > 4) {
				i = 1;
			}
			console.log(i)
			console.log(myurl)
		}, 2500)

	}

})