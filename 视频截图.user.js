// ==UserScript==
// @name         视频截图
// @namespace    http://z.houbin.site/capture
// @version      0.1
// @description  网页视频添加截屏功能
// @author       z.houbin
// @match        *://*.iqiyi.com/*
// @match        *://v.qq.com/*
// @match        *://tv.sohu.com/*
// @match        *://*.youku.com/*
// @match        *://*.baofeng.com/*
// @grant        none
// @require https://greasyfork.org/scripts/27102-html2canvas/code/html2canvas.js?version=173516
// ==/UserScript==

(function () {
    console.log('run ...');
    "视频截图";

    load();


    function load() {
        console.log('load');
        var video = document.getElementsByTagName('video')[0];
        var output = document.createElement('div');
        var capture = document.createElement('a');
        var download = document.createElement('a');
        capture.innerText = '截图';
        var style = 'padding: 9px 25px;\n' +
            '    border-radius: 30px;\n' +
            '    background: rgba(26,26,26,.8);\n' +
            '    display: block;\n' +
            '    float: right;\n' +
            '    color: #fff;\n' +
            '    line-height: 18px;\n' +
            '    font-size: 14px;\n' +
            '    position: absolute;\n' +
            '    z-index: 1000;\n' +
            '    left: 20px;';


        if (video === undefined) {
            setTimeout(load, 1000);
            return;
        }


        switch (window.location.hostname) {
            case 'tv.sohu.com':
                style += 'bottom: 100px;\n';
                document.getElementById('sohuplayer').appendChild(capture);
                break;
            default:
                style += 'bottom: 70px;\n';
                video.parentElement.appendChild(capture);
                break;
        }

        capture.style = style;


        var scale = 1;

        capture.onclick = function (ev) {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            var img = document.createElement("img");
            //img.setAttribute('crossOrigin', '*');
            html2canvas(document.body, {
                allowTaint: true,
                taintTest: false,
                onrendered: function (canvas) {
                    canvas.id = "mycanvas";
                    //document.body.appendChild(canvas);
                    //生成base64图片数据
                    var dataUrl = canvas.toDataURL();
                    var newImg = document.createElement("img");
                    newImg.src = dataUrl;
                    document.body.appendChild(newImg);
                }
            });

            setTimeout(function () {
                var src = canvas.toDataURL('image/png');
                img.src = src;
                console.log(src);
                output.appendChild(img);

                download.setAttribute('href', src);
                download.setAttribute('download', new Date().getTime() + ".png");
                download.click();
            }, 1000);
        };

        loadStyle('.txp_shadow {display:none !important}');
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