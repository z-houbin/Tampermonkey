// ==UserScript==
// @name         微博助手
// @namespace    http://z.houbin.site/weibo/
// @version      0.1
// @description  去除微博广告、卡片小图标、好友赞过、淘宝广告、皮肤入口、底部播放器、首页右边栏
// @author       z.houbin
// @match        *://*.weibo.com/*
// @grant        none
// ==/UserScript==

(function () {
    console.log('微博助手');
    switch (window.location.hostname) {
        case 'weibo.com':
            weibo_com();
            break;
        default:
            loadStyle('.J_adv{display:none !important} ');
            break;
    }


    function weibo_com() {
        let css = 'div[feedtype="ad"]{display:none !important;height 0px !important}';//卡片广告
        css += '#v6_pl_content_biztips{display:none !important;height 0px !important}';//顶部广告条
        css += '#v6_pl_ad_bottomtip{display:none !important;height 0px !important}';//底部广告
        css += '#v6_pl_rightmod_recominfo>div:nth-child(1){display:none !important;height 0px !important}';//话题推荐
        css += '.WB_feed_vipcover{background-size: 0px !important}';//卡片背景
        css += '#v6_pl_rightmod_recominfo{display:none !important}';//推荐信息
        css += '#v6_pl_rightmod_ads36{display:none !important}';//商品推荐
        css += '#v6_pl_content_setskin{display:none !important}';//皮肤入口
        css += '.WB_feed_detail {background-size: 0px !important}';//卡片背景
        css += '.WB_starcover {display:none !important}';//小图标
        css += '#v6_trustPagelet_recom_member {display:none !important}';//会员专区
        css += '#v6_pl_rightmod_rank {display:none !important}';//图书排行
        css += '.PCD_mplayer_layer {display:none !important}';//播放器
        css += '.PCD_mplayer {display:none !important}';//播放器
        css += '#v6_pl_rightmod_attfeed {display:none !important}';//好友关注动态
        css += '#v6_pl_rightmod_noticeboard {display:none !important}';//公告栏
        loadStyle(css);

        window.onload = function () {
            //好友赞过
            var feed_list = document.querySelectorAll('div[action-type="feed_list_item"]');
            for (let i = 0; i < feed_list.length; i++) {
                if (feed_list[i].innerHTML.indexOf(' 赞过') !== -1) {
                    feed_list[i].parentNode.removeChild(feed_list[i]);
                }
            }

            document.querySelector('#v6_pl_content_homefeed > div').addEventListener('DOMNodeInserted', function (e) {
                var v = e.target;
                if (v !== undefined && v.innerHTML !== undefined) {
                    if (v.innerHTML.indexOf('  赞过') !== -1) {
                        v.parentNode.removeChild(v);
                    }
                }

            });
        };

    }

    function loadStyle(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(css));
        //for IE
        //style.styleSheet.cssText = code;
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
})();