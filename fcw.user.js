// ==UserScript==
// @name         fcw
// @namespace    z.houbin.site/fcw
// @version      0.1
// @description  去fcw广告和会员限制
// @author       z.houbin
// @match        *://www.fcw61.com/*
// @match        *://www.fcw62.com/*
// @match        *://www.fcw63.com/*
// @match        *://www.fcw64.com/*
// @match        *://www.fcw65.com/*
// @match        *://www.fcw66.com/*
// @match        *://www.fcw67.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    loadStyle('.topline{display:none !important}');

    if ($('.no-player').length === 1) {
        var a = $("a[data-attach-session='PHPSESSID']")[0];
        var u = a.getAttribute('href');

        var video = document.createElement('video');
        video.setAttribute('src', u);
        video.className = 'fp-engine';
        video.setAttribute('x-webkit-airplay', 'allow');
        video.setAttribute('preload', 'metadata');
        video.setAttribute('controls', 'controls');
        video.setAttribute('width', '100%');
        video.setAttribute('height', '500px');
        var player = document.getElementsByClassName('player')[0];
        player.removeChild(player.children[0]);
        player.appendChild(video);
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