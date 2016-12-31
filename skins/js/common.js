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

});
