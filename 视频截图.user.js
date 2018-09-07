// ==UserScript==
// @name         视频截图
// @namespace    http://z.houbin.site/capture
// @version      0.1
// @description  网页视频添加截屏功能
// @author       z.houbin
// @match        *://*.iqiyi.com/*
// @match        *://v.qq.com/*
// @grant        none
// ==/UserScript==

(function () {
    "视频截图";

    window.onload = function (ev) {
        var video = document.getElementsByTagName('video')[0];
        var output = document.createElement('div');
        var capture = document.createElement('a');
        var download = document.createElement('a');
        capture.innerText = '截图';
        capture.style = 'padding: 9px 25px;\n' +
            '    border-radius: 30px;\n' +
            '    background: rgba(26,26,26,.8);\n' +
            '    display: block;\n' +
            '    float: right;\n' +
            '    color: #fff;\n' +
            '    line-height: 18px;\n' +
            '    font-size: 14px;\n' +
            '    position: absolute;\n' +
            '    bottom: 70px;\n' +
            '    left: 20px;';
        video.parentElement.appendChild(capture);
        var scale = 1;

        capture.onclick = function (ev) {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            var img = document.createElement("img");
            img.src = canvas.toDataURL('image/png');
            console.log(canvas.toDataURL('image/png'));
            output.appendChild(img);

            download.setAttribute('href', canvas.toDataURL('image/png'));
            download.setAttribute('download', new Date().getTime() + ".png");
            download.click();
        };
    };

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