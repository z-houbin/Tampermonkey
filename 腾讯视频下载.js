// ==UserScript==
// @name         腾讯视频下载
// @namespace    http://z.houbin.site/vqq
// @version      0.1
// @description  下载腾讯视频
// @author       z.houbin
// @match        *://v.qq.com/*
// @grant        none
// @require https://greasyfork.org/scripts/27102-html2canvas/code/html2canvas.js?version=173516
// ==/UserScript==

(function () {
    console.log('run ...');
    "视频截图";

    var video = document.getElementsByTagName('video')[0];

    load();

    function load() {
        console.log('load');
        var capture = document.createElement('a');
        capture.innerText = '下载视频';
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
            video = document.getElementsByTagName('video')[0];
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

        capture.onclick = function (ev) {
            urlGroup.length = 0;
            getInfo(VIDEO_INFO['vid'], 'sd');
        };

        loadStyle('.txp_shadow {display:none !important}');
    }

    var urlGroup = [];
    var sliceCount = 0;

    function getInfo(vid, defn) {
        $.get("https://h5vv.video.qq.com/getinfo", {
            vid: vid,
            defn: defn,
            otype: 'json',
            platform: '10901',
            sdtfrom: 'v1010',
            host: 'v.qq.com',
            fhdswitch: '0',
            show1080p: '1'
        }, function data(data) {
            var j = getJson(data);
            console.log(j);
            var vi = j['vl']['vi'][0];
            var cl = vi['cl'];
            var ci = cl['ci'];

            var fi = j['fl']['fi'];
            //清晰度 sd（标清）、hd（高清）、shd（超清）、fhd（1080P）
            var format = fi[0]['id'];
            for (let i = 0; i < fi.length; i++) {
                if (fi[i]['name'] === defn) {
                    format = fi[i]['id'];
                    break;
                }
            }

            var vt = vi['ul']['ui'][0]['vt'];

            var ui = vi['ul']['ui'][0]['url'];
            sliceCount = cl['fc'];
            for (let i = 0; i < cl['fc']; i++) {
                var keyId = ci[i]['keyid'];
                getKey(ui, vid, format, vt, keyId);
            }
        });
    }

    function getJson(data) {
        return JSON.parse(data.substring(data.indexOf('=') + 1, data.length - 1));
    }

    function getKey(ui, vid, format, vt, keyId) {
        var fileName = keyId.replace('.10', '.p') + '.mp4';
        $.get("https://h5vv.video.qq.com/getkey", {
                vid: vid,
                otype: 'json',
                platform: '10901',
                format: format,
                filename: fileName,
                vt: vt
            },
            function (data) {
                var json = getJson(data);
                //console.log(json);
                var url = ui + fileName + '?sdtfrom=v1010&vkey=' + json['key'];
                urlGroup.push(url);
                if (urlGroup.length === sliceCount) {
                    var clipData = urlGroup.join('\r\n');
                    console.log(clipData);
                    //window.prompt('下载地址', clipData);
                    //clipData = clipData.replace(/\\n/g, '<br />');
                    //clipData = clipData.substring(1, clipData.length - 1);
                    showPop(clipData);
                }
            });
    }

    function showPop(data) {
        var cp = document.createElement('textarea');
        cp.className = 'cp';
        cp.value = data;
        cp.tabIndex = 1;
        cp.onfocus = function(){
            cp.select();
        };
        cp.onblur = function () {
            cp.style.display = 'none';
            cp.parentElement.removeChild(cp);
        };
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
        style += 'bottom: 70px;\n';
        style += 'width: 70%;\n';
        style += 'height: 70%;\n';
        video.parentElement.appendChild(cp);
        cp.style = style;
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