var title = "讯飞输入法Android版皮肤 - 1分钟400字,语音输入带你飞";

var Request = new Object();
Request = GetRequest();
var id;
var skinID = Request['id'];

//皮肤数据表
switch (skinID) {
    case "91a44990-9a90-11e6-bdf4-0800200c9a66":
        skinInfo(
            "大空格の韵白[柔美版]",
            "IM追清风",
            "54KB",
            "基于讯飞输入法官方默认韵白皮肤修改而成： <br> 1. 按钮圆角等微调， 按下及气泡效果不闪眼 <br> 2. 字母配色调整 整体更柔和 <br> 3. 你要的大空格, 支持了26键 <br> 4. 更换了难看的默认字体 <br> 5. 超小皮肤包， 低内存占用， 更流畅 ",
            "--2016年12月13日<br>修复 修复点划布局9键拼音分词在部分版本上显示异常问题 <br>优化 将难以理解的分词符号【’】 修改为文字【 分词】 <br>优化 调小了按键气泡背景（ 设置 - 键盘设置 - 开启按键气泡）<br>--2016 年12月03日 <br>修复 修复AB键盘‘ 发送键’ 错位问题<br> --2016 年11月30日 <br>优化 去除A / L键左右侧盲区 <br>优化 增大ab及退格键的间距, 减小误触概率 <br>优化 加长空格键前景图标",
            "* * * * *");
        break;
    case "40ed1290-cbd5-11e6-9598-0800200c9a66":
        skinInfo(
            "贪吃蛇大作战·音乐",
            "IM追清风",
            "614KB",
            "本皮肤素材来源自《贪吃蛇大作战》游戏，该游戏是一款非常好玩的趣味类游戏，玩法经典的竞技模式，手速提高的关卡难度，策略掌控的时机把握，将带你重温儿时挑战的休闲操作。",
            "",
            "* * * *");
        break;
    case "69347a70-bc19-11e6-9598-0800200c9a66":
        skinInfo(
            "王者荣耀·百变",
            "IM追清风",
            "1.8MB",
            "亲爱的召唤师们，小飞为大家带来一款超级帅气的皮肤，8款王者荣耀游戏中帅到爆炸的英雄皮肤变变变！嗷嗷嗷～快来翻牌子吧！Tips:输入皮肤中英雄的名字上屏后可触发彩蛋哦~",
            "",
            "* * * * *",
            "gif");
        break;
    case "5f7b6940-acaa-11e6-9598-0800200c9a66":
        skinInfo(
            "扭着扭着·动态",
            "IM追清风",
            "1.0MB",
            "扭着，扭着扭着扭着~",
            "",
            "* * * * *");
        break;
}




//预览图切换	
$(".preview").click(function () {
    $(this).addClass("none").siblings().removeClass("none");
})

//下载皮肤
$(".skin-download").click(function () {
    window.location.href = "res/it/" + skinID + ".it";
});


//下面是一些函数

//替换皮肤信息
function skinInfo(name, author, size, description, update, star, type) {
    $(".skin-name").html(name);
    $(".skin-author").html(author);
    $(".skin-size").html(size);
    $(".skin-star").html(star);
    $(".skin-description-content").html(description);
    if (update) {
        $(".skin-description-title").removeClass("none");
        $(".skin-description-update").removeClass("none");
        $(".skin-description-update").html(update);
    }

    $("title").html(name + " - " + author + " - " + title);
    if (type == "gif") {
        //预览图
        $(".preview_9").attr("src", "res/it/" + skinID + ".gif");
        $(".preview_26").hide();
    } else {
        //预览图
        $(".preview_9").attr("src", "res/it/" + skinID + "_9.jpg");
        $(".preview_26").attr("src", "res/it/" + skinID + "_26.jpg");
    }
}

//获取皮肤ID
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
