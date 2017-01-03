$(document).ready(function () {

	//banner打开微博
	$(".banner-weibo").click(function () {
		window.location.href = "http://m.weibo.cn/u/1136590322";
	});

	//打开皮肤详情
	$(".skin-id").click(function () {
		var skinID = $(this).attr('id');
		window.location.href = "item.html?id=" + skinID;

	});

	//功能未开发
	$(".unfinished").click(function () {
		alert("很抱歉，此功能尚未开发完成！");
	});

	$(".back").click(function () {
		window.location.href = "index.html";
	});


	$(window).scroll(function () {
		if ($(window).scrollTop() > 20) {
			$(".nomore,.split").removeClass("none");
		}
	});

});
