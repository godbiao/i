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

});
