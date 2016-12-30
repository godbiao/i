$(document).ready(function () {
	//NProgress
	$('body').show();
	NProgress.start();
	$(document).ready(function () {
		NProgress.done();
	});

	//banner打开微博
	$(".banner-weibo").click(function () {
		window.location.href = "http://m.weibo.cn/u/1136590322";
	});

	//打开皮肤详情
	$(".skin-id").click(function () {
		var skinID = $(this).attr('id');
		window.location.href = "item.html?id=" + skinID;

	});


	//下载皮肤
	function GetRequest() {
		var url = location.search;
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	var Request = new Object();
	Request = GetRequest();
	var id;
	var skinID = Request['id'];

	$(".skin-download").click(function () {
		window.location.href = "res/it/" + skinID + ".it";
	});

});
