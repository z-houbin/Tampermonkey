// ==UserScript==
// @name         斗鱼清爽版
// @namespace    http://z.houbin.site/douyu/
// @version      0.1
// @description  斗鱼清爽版,去送礼通知,二维码,聊天顶部贵族,系统通知,礼物通知,竞猜,鱼吧,推荐,聊天样式统一,一些小按钮
// @author       z.houbin
// @match        *://www.douyu.com/*
// @grant        none
// ==/UserScript==

(function () {
    var css = '.giftbatter-box{display:none !important;}';
    css += '.peck{display:none !important;}';
    css += '#js-fans-rank{display:none !important;height:0px !important}';
    css += '#js-chat-cont{top:0px !important;}';
    css += '#js-stats-and-actions{display:none !important}';
    css += '.giftbatter-noble-enter{display:none !important}';
    css += '.sq-ad{display:none !important}';
    css += '.no-login{display:none !important}';
    css += '.guess-main-panel{display:none !important}';
    css += '.PlayerSub{display:none !important}';
    css += '.wm_ladder-nav{display:none !important}';
    css += 'div[data-component-id*="room"]{height:100% !important}';
    css += '.PlayerCaseSub-Main{top:0px !important;}';
    css += '.status-low-enter{display:none !important;}';
    css += '.user-noble{display:none !important;}';
    css += '.firstpay-award-icon{display:none !important;}';
    css += '.fans-icon-name{display:none !important;}';//粉丝牌
    css += '.chat-icon-pad{margin:0 !important;}';//粉丝牌
    css += '.motorcade-icon{display: none !important;margin:0 !important;}';//车
    css += '.o-download{display:none !important;}';//客户端
    css += '.catagory-order-container{display:none !important;}';//本周排名
    css += '.hot-box{display:none !important;}';//热度介绍
    css += '#share-content{display:none !important;}';//分享
    css += '#qrcode-content{display:none !important;}';//客户端二维码
    css += 'div[class*="broadcastDiv"]{display:none !important;}';//广播
    css += 'div[class*="customBc"]{display:none !important;}';//广播
    css += 'div[class*="recommendApp"]{display:none !important;}';//推荐app
    css += 'div[class*="recommendAD"]{display:none !important;}';//推荐广告
    css += '.QRcode{display:none !important;}';//二维码
    css += '.starsgathered{display:none !important;}';//聚星榜
    css += '.icon-role{margin-right:10px !important;}';//聚星榜
    css += '.high-notice-new{display:none !important;}';//聊天通知
    css += '.normal-notice-new{display:none !important;}';//聊天通知
    css += '.chat-msg-item{color:#000 !important;}';//聊天文字颜色
    css += 'div[data-type*="dyrec"]{display:none !important;}';//首页斗鱼推广
    css += 'div[data-type*="sign"]{display:none !important;}';//首页广告
    css += '.GameDownload{display:none !important;}';//游戏下载
    css += '.impress-add{display:none !important;}';//+印象标签
    //css += '.bglink{display:none !important;}';//首页左右

    var chat = document.getElementsByClassName('chat-cont-wrap')[0];
    if (chat !== undefined) {
        chat.addEventListener("DOMNodeInserted", function (e) {
            var node = e.target;
            if (node.tagName === 'LI') {
                if (node.innerText.indexOf('欢迎来到本直播间') !== -1) {
                    node.parentElement.removeChild(node);
                }
                if (node.innerText.indexOf('赠送给主播') !== -1) {
                    node.parentElement.removeChild(node);
                }
            }
        });
    }
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