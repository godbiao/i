$(document).ready(function () {
	//NProgress
	$('body').show();
	NProgress.start();
	$(document).ready(function () {
		NProgress.done();
	});

	$("#skin-id").click(function () {

		window.location.href = "item.html";

	});

	$(".banner-weibo").click(function () {

		window.location.href = "http://m.weibo.cn/u/1136590322";

	});

});
