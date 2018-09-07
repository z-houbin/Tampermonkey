// ==UserScript==
// @name         自动展开 - 查看全文
// @namespace    http://z.houbin.site/expand/
// @version      0.1
// @description  自动展开网页内容,自动查看全文,网站不断更新中
// @author       z.houbin
// @match        *://*.hexun.com/*
// @match        *://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function () {
    console.log('自动展开 - 查看全文');

    var host = window.location.hostname;

    if (host.indexOf('hexun.com') !== -1) {
        hexun_com();
    } else if (host.indexOf('blog.csdn.net') !== -1) {
        blog_csdn_net();
    }

    function blog_csdn_net() {
        document.getElementById('btn-readmore').click();
    }

    function hexun_com() {
        var css = '.showAll{display:none !important}';
        css += '.art_contextBox{height:100% !important}';
        loadStyle(css);
    }

    function loadStyle(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(css));
        //for IE
        //style.styleSheet.cssText = code;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
})();