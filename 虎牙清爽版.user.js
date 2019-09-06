// ==UserScript==
// @name         虎牙清爽版
// @namespace    http://z.houbin.site/huya/
// @version      0.1
// @description  去掉部分直播区无关内容,待优化
// @author       z.houbin
// @match        *://www.huya.com/*
// @grant        none
// ==/UserScript==

(function () {
    let css = '#player-gift-wrap{display:none !important;height:0 !important}';//底部礼物
    css += '.player-wrap{height:100% !important}';//视频播放高度修正
    css += '.player-ctrl-wrap{bottom:0px !important}';//视频播放高度修正
    css += '#J-weekRank{display:none !important;}';//周榜
    css += '#chatRoom{height:100% !important;}';//修正评论高度
    css += '#chatRoom > div{height:100% !important;}';//修正评论高度
    css += '.msg-nobleEnter{display:none !important;height:0px !important}';//进入直播间
    css += '#system-warnTips{display:none !important;height:0px !important}';//
    css += '.tit-h-send{display:none !important;height:0px !important}';//礼物
    css += '.room-footer{display:none !important;height:0px !important}';//动态

    loadStyle(css);

    function loadStyle(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.appendChild(document.createTextNode(css));
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
})();