// ==UserScript==
// @name         XX
// @namespace    z.houbin.site/xx
// @version      0.1
// @description  try to take over the world!
// @author       z.houbin
// @match        *://t66y.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var css = '.tips{display:none !important}';
    css += '.sptable_do_not_remove{display:none !important}';
    //在线
    if (window.location.pathname.indexOf('/htm_data/22/') !== -1) {
        var a = $('.tpc_content').find('a')[0];
        var u = a.getAttribute('href')
        u += '#iframeload';
        a.setAttribute('href', u);
    } else {
        css += '.tac{display:none !important}';
    }

    deleteA();
    deleteImg();
    deleteSpan();

    loadStyle(css);

    setInterval(function () {
        try {
            deleteBr();
        } catch (e) {

        }
    }, 500);

    function deleteBr() {
        $("span:empty").remove();
        $("b:empty").remove();
        //删除换行
        var tpc = $('.tpc_content')[0];
        var nodes = tpc.childNodes;
        for (let index in nodes) {
            if (nodes[index].tagName === 'BR' && index > 1) {
                if (nodes[index - 1].tagName !== undefined) {
                    if (nodes[index - 1].tagName === 'BR') {
                        tpc.removeChild(nodes[index]);
                    }
                    if (nodes[index - 1].data === ' ') {
                        tpc.removeChild(nodes[index]);
                    }
                }
            }
        }

        tpc = $('.tpc_content')[0];
        nodes = tpc.childNodes;
        for (let index in nodes) {
            if (nodes[index].tagName === 'BR') {
                if (nodes[index - 1].tagName === 'BR') {
                    tpc.removeChild(nodes[index]);
                }
                if (nodes[index - 1].data === ' ') {
                    tpc.removeChild(nodes[index]);
                }
            }
        }
    }

    function deleteImg() {
        try {
            //删除图片
            $('.tpc_content').find('img').each(function () {
                if (isBlockImg($(this).attr('data-link'))) {
                    $(this).remove();
                }
            });
        } catch (e) {

        }
    }

    function deleteSpan() {
        try {
            //删除链接
            $('.tpc_content').find('span').each(function () {
                if (isBlockA($(this).text())) {
                    $(this).remove();
                }
            });
        } catch (e) {

        }
    }

    function deleteA() {
        //删除(替换)链接
        try {
            $('.tpc_content').find('a').each(function () {
                if (isBlockA($(this).text())) {
                    $(this).remove();
                } else {
                    var u = $(this).attr('href');
                    if (u.indexOf('www.viidii.info') !== -1) {
                        var index = u.indexOf('?');
                        var href = u.substring(index + 1);
                        href = href.replace(/______/g, '.');
                        href = href.replace(/&z/g, '');
                        $(this).attr('href', href);
                    }
                }
            });
        } catch (e) {

        }
    }

    function imgAttribute() {
        //图片点击
        [].forEach.call(document.querySelectorAll(eName + '[data-src]'), function (img) {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.style = 'cursor:pointer';
            img.onclick = function () {
                window.open(img.getAttribute('data-link'));
                return false;
            };
        });
    }


    function mouserOver() {
        //鼠标变色
        [].forEach.call(document.querySelectorAll('a'), function (a) {
            a.onmouseover = function () {
                return false;
            };
        });
    }


    function isBlockImg(url) {
        if (url.indexOf('sb88u') !== -1) {
            return true;
        }
        if (url.indexOf('3001666') !== -1) {
            return true;
        }
        if (url.indexOf('wyfdc598') !== -1) {
            return true;
        }
        if (url.indexOf('t66y.html') !== -1) {
            return true;
        }
        if (url.indexOf('abtag') !== -1) {
            return true;
        }
        if (url.indexOf('Register') !== -1) {
            return true;
        }
        if (url.indexOf('Agent=') !== -1) {
            return true;
        }
        if (url.indexOf('w55t') !== -1) {
            return true;
        }
        if (url.indexOf('?p=') !== -1) {
            return true;
        }
        if (url.indexOf('?Intr=') !== -1) {
            return true;
        }
        if (url.indexOf('?aff=') !== -1) {
            return true;
        }
        if (url.indexOf('772077207720') !== -1) {
            return true;
        }
        if (url.indexOf('458kq') !== -1) {
            return true;
        }
        if (url.indexOf('javcn') !== -1) {
            return true;
        }
        if (url.indexOf('dw77888') !== -1) {
            return true;
        }
        if (url.indexOf('554400') !== -1) {
            return true;
        }
        if (url.indexOf('n77777777') !== -1) {
            return true;
        }
        if (url.indexOf('gcandy999') !== -1) {
            return true;
        }
        if (url.indexOf('0937js') !== -1) {
            return true;
        }
    }

    function isBlockA(text) {
        if (text === undefined) {
            return false;
        }

        if (text.indexOf('赌') !== -1) {
            return true;
        }
        if (text.indexOf('百家乐') !== -1) {
            return true;
        }
        if (text.indexOf('手游') !== -1) {
            return true;
        }
        if (text.indexOf('注册') !== -1) {
            return true;
        }
        if (text.indexOf('娱乐') !== -1) {
            return true;
        }
        if (text.indexOf('皇冠') !== -1) {
            return true;
        }
        if (text.indexOf('真人') !== -1) {
            return true;
        }
        if (text.indexOf('老虎') !== -1) {
            return true;
        }
        if (text.indexOf('澳门') !== -1) {
            return true;
        }
        if (text.indexOf('娱乐') !== -1) {
            return true;
        }
        if (text.indexOf('彩票') !== -1) {
            return true;
        }
        if (text.indexOf('六合') !== -1) {
            return true;
        }
        if (text.indexOf('集团') !== -1) {
            return true;
        }
        if (text.indexOf('棋牌') !== -1) {
            return true;
        }
        if (text.indexOf('上门') !== -1) {
            return true;
        }
        if (text.indexOf('同城') !== -1) {
            return true;
        }
        if (text.indexOf('赢') !== -1) {
            return true;
        }
        if (text.indexOf('娛樂') !== -1) {
            return true;
        }
        if (text.indexOf('发布') !== -1) {
            return true;
        }
        if (text.indexOf('地址') !== -1) {
            return true;
        }
        if (text.indexOf('网站') !== -1) {
            return true;
        }
        if (text.indexOf('網址') !== -1) {
            return true;
        }
        if (text.indexOf('91TV') !== -1) {
            return true;
        }
        if (text.indexOf('微信') !== -1) {
            return true;
        }
        if (text.indexOf('發布') !== -1) {
            return true;
        }
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