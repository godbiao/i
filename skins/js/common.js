$(document).ready(function () {
	//NProgress
	$('body').show();
	NProgress.start();
	$(document).ready(function () {
		NProgress.done();
	});



	$(".skin-id").click(function () {
		var skinID = $('.skin-id').attr('id');
		window.location.href = "item.html?id=" + skinID;

	});

	$(".banner-weibo").click(function () {

		window.location.href = "http://m.weibo.cn/u/1136590322";

	});

});
