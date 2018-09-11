// ==UserScript==
// @name         绿色下载
// @namespace    http://z.houbin.site/download
// @version      0.1
// @description  去掉下载网站无关内容
// @author       z.houbin
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	console.log('=====绿色下载=====');
	switch(window.location.hostname) {
		case 'www.cncrk.com':
			www_cncrk_com();
			break;
		case 'www.downza.cn':
			www_downza_cn();
			break;
		case 'xiazai.zol.com.cn':
			xiazai_zol_com_cn();
			break;
		case 'www.huacolor.com':
			www_huacolor_com();
			break;
		case 'dl.pconline.com.cn':
			dl_pconline_com_cn();
			break;
		case 'pc.qq.com':
			pc_qq_com();
			break;
		case 'www.onlinedown.net':
			www_onlinedown_net();
			break;
		case 'www.wmzhe.com':
			www_wmzhe_com();
			break;
		case 'download.pchome.net':
			download_pchome_net();
            break;
		case 'www.pc6.com':
			www_pc6_com();
			break;
		case 'www.crsky.com':
			www_crsky_com();
			break;
		case 'www.duote.com':
			www_duote_com();
			break;
		case 'mydown.yesky.com':
			mydown_yesky_com();
			break;
		case 'www.xiazaiba.com':
			www_xiazaiba_com();
			break;
		case 'www.ddooo.com':
			www_ddooo_com();
			break;
		case 'www.cr173.com':
			www_cr173_com();
			break;
		case 'www.xpgod.com':
			www_xpgod_com();
			break;
		case 'www.fixdown.com':
			www_fixdown_com();
			break;
		case 'www.downcc.com':
			www_downcc_com();
			break;
		case 'www.33lc.com':
			www_33lc_com();
			break;
		case 'www.ttrar.com':
			www_ttrar_com();
			break;
		case 'www.xitongzhijia.net':
			www_xitongzhijia_net();
			break;
		case 'www.bkill.com':
			www_bkill_com();
			break;
		case 'www.uzzf.com':
			www_uzzf_com();
			break;
		case 'www.veryhuo.com':
			www_veryhuo_com();
			break;
		case 'www.3987.com':
			www_3987_com();
			break;
		case 'down.52pk.com':
			down_52pk_com();
			break;
		case 'www.downxia.com':
			www_downxia_com();
			break;
		case 'www.66868.com':
			www_66868_com();
			break;
		case 'www.jz5u.com':
			www_jz5u_com();
			break;
		case 'www.anxz.com':
			www_anxz_com();
			break;
		case 'www.jisuxia.com':
			www_jisuxia_com();
			break;
		case 'www.wishdown.com':
			www_wishdown_com();
			break;
		case 'www.xzking.com':
			www_xzking_com();
			break;
		case 'www.minixiazai.com':
			www_mixiazai_com();
			break;
		case 'www.xp510.com':
			www_xp510_com();
			break;
		case 'www.05sun.com':
			www_05sun_com();
			break;
		case 'www.121down.com':
			www_121down_com();
			break;
		case 'www.pcsoft.com.cn':
			www_pcsoft_com_cn();
			break;
		case 'www.pc141.com':
			www_pc141_com();
			break;
		case 'www.xue51.com':
			www_xue51_com();
			break;
		case 'www.jb51.net':
			www_jb51_net();
			break;
		case 'www.jisuxz.com':
			www_jisuxz_com();
			break;
		default:
			loadStyle('.J_adv{display:none !important} ');
			break;
	};

	function www_jisuxz_com() {
		console.log('www_jisuxz_com ad');
		var css = '#2345float{display:none !important}';
		css += '#Template_jisuxz >div:nth-child(2){display:none !important}';
		css += '.imgfloat{display:none !important}';
		css += '.browser2345{display:none !important}';
		css += '.download-share{display:none !important}';
		css += '#downcont4 > div.download-list > ul:nth-child(2){display:none !important}';
		css += '#downcont4 > div.download-list > span:nth-child(1){display:none !important}';
		loadStyle(css);
	}

	function www_jb51_net() {
		console.log('www_jb51_net ad');
		var css = 'body > div.header > div.wrap > div > div:nth-child(2){display:none !important}';
		css += 'body > div.header > div.wrap > div > div:nth-child(3){display:none !important}';
		css += '.tonglan{display:none !important}';
		css += '#dingandcai{display:none !important}';
		css += '#samesoft > a{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.side-box{display:none !important}';
		css += '#mainBody > div:nth-child(4){display:none !important}';
		css += '.mg20{display:none !important}';
		css += '#content > dd:nth-child(4){display:none !important}';
		css += 'da-download{display:none !important}';
		css += '#gaosu{display:none !important}';
		css += '.da-download{display:none !important}';
		css += '.ad-widget-imageplus-sticker{display:none !important}';
		css += 'li.address-wrap.on > h3:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_xue51_com() {
		console.log('www_xue51_com ad');
		var css = 'div.conins>div:nth-child(2){display:none !important}';
		css += 'div.rj_show_cen_l.l>div:nth-child(6){display:none !important}';
		css += '#gsxz > dl:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_pc141_com() {
		console.log('www_pc141_com ad');
		var css = '.soft-btn{display:none !important}';
		css += 'body > div.main > div.content > div.c-left > a{display:none !important}';
		css += '#down_one_a{display:none !important}';
		css += '#down_show_0 > p:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_pcsoft_com_cn() {
		console.log('www_pcsoft_com_cn ad');
		var css = 'body > div:nth-child(7){display:none !important}';
		css += 'body > div:nth-child(8){display:none !important}';
		css += '.zjbb_lb{display:none !important}';
		css += 'body > div:nth-child(3){display:none !important}';
		css += '.xzsbox {display:none !important}';
		css += 'newsfeed{display:none !important}';
		css += '.gsxzdl{display:none !important}';
		css += '#mv_ad_render{display:none !important}';

		loadStyle(css);
	}

	function www_121down_com() {
		console.log('www_121down_com ad');
		var css = '.c_soft_pic{display:none !important}';
		css += '#full_downad{display:none !important}';
		loadStyle(css);
	}

	function www_05sun_com() {
		console.log('www_05sun_com ad');
		var css = 'iframe{display:none !important}';
		css += '.ct-c{display:none !important}';
		css += 'body > div.con.soft.w > div:nth-child(1){display:none !important}';
		css += 'div.con-add > div:nth-child(1){display:none !important}';
		css += 'div.add-l.soft > ul.xzq{display:none !important}';
		css += 'div.add-l.soft > span:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_xp510_com() {
		console.log('www_xp510_com ad');
		var css = '.min-ad{display:none !important}';
		css += '#div_6{display:none !important}';
		css += '#div_29{display:none !important}';
		css += '.xzbox-gh{display:none !important}';
		css += ' div.xzbox-lf > p:nth-child(2){display:none !important}';
		css += ' div.xzbox-lf > ul:nth-child(3){display:none !important}';
		css += 'newsfeed{display:none !important}';
		loadStyle(css);
	}

	function www_mixiazai_com() {
		console.log('www_mixiazai_com ad');
		var css = 'body > article > div{display:none !important}';
		css += 'body > section:nth-child(4) > section > aside{display:none !important}';
		css += '#download > section > div > article > article{display:none !important}';
		css += 'div.down-main > h3:nth-child(2){display:none !important}';
		css += 'div.down-main > ul:nth-child(3){display:none !important}';
		css += 'div.down-main > ul:nth-child(4){display:none !important}';
		css += 'download{display:none !important}';
		loadStyle(css);
	}

	function www_xzking_com() {
		console.log('www_xzking_com ad');
		var css = '.con1_hrefdown{display:none !important}';
		css += '.down_right{display:none !important}';
		css += '#SOHUCS{display:none !important}';
		css += 'div.down_ul > ul > li:nth-child(2){display:none !important}';
		css += 'div.down_ul > ul > li:nth-child(3){display:none !important}';
		css += 'div.down_ul > ul > li:nth-child(4){display:none !important}';
		loadStyle(css);
	}

	function www_wishdown_com() {
		console.log('www_wishdown_com ad');
		var css = '.fr{display:none !important}';
		css += '#_ys_xiazai4{display:none !important}';
		css += '#softdown > div.all_bw_bd > div.down_adress_top.fl > ul.clearfix.tongyixzq{display:none !important}';
		loadStyle(css);
	}

	function www_jisuxia_com() {
		console.log('www_jisuxia_com ad');
		var css = 'div.related-soft.fl-lf > p{display:none !important}';
		css += 'iframe{display:none !important}';
		css += 'div.down-main.fl-lf > ul:nth-child(2){display:none !important}';
		css += '#top > div.layout > article{display:none !important}';
		loadStyle(css);
	}

	function www_anxz_com() {
		console.log('www_anxz_com ad');
		var css = '#page > section:nth-child(5) > section > aside{display:none !important}';
		css += '#gaosuxiazai{display:none !important}';
		css += 'ul.mod-list > h3:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_jz5u_com() {
		console.log('www_jz5u_com ad');
		var css = 'center{display:none !important}';
		css += '.co5r{display:none !important}';
		css += 'body > div.bd3 > div.bd3r > div > div:nth-child(9) > div.co_content7 > ul:nth-child(4){display:none !important}';
		loadStyle(css);
	}

	function www_66868_com() {
		console.log('www_66868_com ad');
		var css = 'body > div:nth-child(12){display:none !important}';
		css += '#a7 > div.dl_box > div.dl_addr > dl:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function www_downxia_com() {
		console.log('www_downxia_com ad');
		var css = '#bd > div > a{display:none !important}';
		css += '.download-ad{display:none !important}';
		css += '#softdown{display:none !important}';
		css += '#gaosu_div0{display:none !important}';
		css += '#download > div.tab_con3 > div.left.l.pr > div:nth-child(1) > ul > h3:nth-child(1){display:none !important}';
		loadStyle(css);
	}

	function down_52pk_com() {
		console.log('down_52pk_com ad');
		var css = '#cs_CFdivdlST_B_1{display:none !important}';
		css += '#cs_CFdivdlST_B_0{display:none !important}';
		css += '.adv{display:none !important}';
		css += '#siderAdv{display:none !important}';
		css += '#acool4{display:none !important}';
		css += '#address > div.down_txt1.clfx > dl:nth-child(2){display:none !important}';
		css += '.add{display:none !important}';
		css += '.down_adv{display:none !important}';
		css += 'div.download > dl:nth-child(1) > dd > ul > li:nth-child(1){display:none !important}';
		css += 'div.download > dl:nth-child(1) > dd > ul > li:nth-child(2){display:none !important}';

		loadStyle(css);
	}

	function www_3987_com() {
		console.log('www_3987_com ad');
		var css = '.min-sd{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '#div_5{display:none !important}';
		css += '#div_23{display:none !important}';
		css += '.xzbox-gh{display:none !important}';
		css += 'newsfeed{display:none !important}';
		css += '#xzdz > div.xzbox > div.xzbox-lf > p:nth-child(2){display:none !important}';
		css += '#xzdz > div.xzbox > div.xzbox-lf > ul:nth-child(3){display:none !important}';
		loadStyle(css);
	}

	function www_veryhuo_com() {
		console.log('www_veryhuo_com ad');
		var css = 'body > div.container > div.span-24 > div.softright > div.box2 > div.sif > div.sif_r > div{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '#w720{display:none !important}';
		css += '.w720{display:none !important}';
		css += '#w1000{display:none !important}';
		css += '.download_adv{display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(0){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(1){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(2){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(3){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(4){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(5){display:none !important}';
		css += 'div.down_lis > b > ul > li:nth-child(6){display:none !important}';
		loadStyle(css);
	}

	function www_uzzf_com() {
		console.log('www_uzzf_com ad');
		var css = '.m-resoft{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.detail-main-title{display:none !important}';
		css += '.alliance-ad{display:none !important}';
		css += '.underline{display:none !important}';
		css += '.softdza{display:none !important}';
		css += '.xiangguan-ad{display:none !important}';
		css += 'ul.ul_Address > h3{display:none !important}';
		css += 'ul.ul_Address > li:nth-child(0){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(1){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(2){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(3){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(4){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(5){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(6){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(7){display:none !important}';
		loadStyle(css);
	}

	function www_bkill_com() {
		console.log('www_bkill_com ad');
		var css = '.cross-ad{display:none !important}';
		css += '.yinsu_yd{display:none !important}';
		css += '.detail-main-title{display:none !important}';
		css += '.alliance-ad{display:none !important}';
		css += '.underline{display:none !important}';
		css += '.softdza{display:none !important}';
		css += '.xiangguan-ad{display:none !important}';
		loadStyle(css);
	}

	function www_xitongzhijia_net() {
		console.log('www_xitongzhijia_net ad');
		var css = '.AD_1200_108 {display:none !important}';
		css += '.AD_298_304{display:none !important}';
		css += 'div.fix>div:nth-child(2){display:none !important}';
		css += '.m-related-link{display:none !important}';
		css += '.AD_800_68{display:none !important}';
		css += 'newsfeed{display:none !important}';
		css += 'div.inner.fl.fix > div > h3:nth-child(3){display:none !important}';
		css += 'div.inner.fl.fix > div > ul:nth-child(0){display:none !important}';
		css += 'div.inner.fl.fix > div > ul:nth-child(1){display:none !important}';
		css += 'div.inner.fl.fix > div > ul:nth-child(2){display:none !important}';
		css += 'div.inner.fl.fix > div > ul:nth-child(3){display:none !important}';
		css += 'div.inner.fl.fix > div > ul:nth-child(4){display:none !important}';
		loadStyle(css);
	}

	function www_ttrar_com() {
		console.log('www_ttrar_com ad');
		var css = '.sj{display:none !important}';
		css += '.list_lf{display:none !important}';
		css += '.md_gg{display:none !important}';
		css += '.xzsbox{display:none !important}';
		css += 'div.sort_list > dl:nth-child(1){display:none !important}';
		loadStyle(css);
	}

	function www_33lc_com() {
		console.log('www_33lc_com ad');
		var css = '.list_lf{display:none !important}';
		css += '.xzsbox{display:none !important}';
		css += '.bzbox{display:none !important}';
		css += '.ggbox{display:none !important}';
		css += 'div.dl_list_info > dl:nth-child(1){display:none !important}';
		loadStyle(css);
	}

	function www_downcc_com() {
		console.log('www_downcc_com ad');
		var css = '#download > section.download-mod.mg-Lr20.clear.zm > article:nth-child(3){display:none !important}';
		css += '.hm-t-container{display:none !important}';
		css += '.hm_t_2591{display:none !important}';
		loadStyle(css);
	}

	function www_fixdown_com() {
		console.log('www_fixdown_com ad');
		var css = '.md_bt{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.list_lf{display:none !important}';
		css += '.ad_id_1{display:none !important}';
		css += 'div.sort_list>dl:nth-child(1){display:none !important}';
		loadStyle(css);
	}

	function www_xpgod_com() {
		console.log('www_xpgod_com ad');
		var css = '.top_r{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.soft_snap{display:none !important}';
		css += '.gg{display:none !important}';
		css += '.show_xzq{display:none !important}';
		loadStyle(css);
	}

	function www_cr173_com() {
		console.log('www_cr173_com ad');
		var css = '.show_970{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.m-soft-ad{display:none !important}';
		//css += '#c_des_content > div:nth-child(6){display:none !important}';
		css += '#full_downad{display:none !important}';
		css += 'ul.ul_Address > li:nth-child(0){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(1){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(2){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(3){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(4){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(5){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(6){display:none !important}';
		css += 'ul.ul_Address > li:nth-child(7){display:none !important}';
		css += '#download > div:nth-child(2) > ul > h3.f-gsh3{display:none !important}';

		loadStyle(css);
	}

	function www_ddooo_com() {
		console.log('www_ddooo_com ad');
		var css = 'ddooo_ad{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.pcbnt{display:none !important}';
		css += 'ul.listaddr > li:nth-child(0){display:none !important}';
		css += 'ul.listaddr > li:nth-child(1){display:none !important}';
		css += 'ul.listaddr > li:nth-child(2){display:none !important}';
		css += 'ul.listaddr > li:nth-child(3){display:none !important}';
		css += 'ul.listaddr > li:nth-child(4){display:none !important}';
		css += 'ul.listaddr > li:nth-child(5){display:none !important}';
		loadStyle(css);
	}

	function www_xiazaiba_com() {
		console.log('www_xiazaiba_com ad');
		var css = 'body > div.container > div.top-container > div:nth-child(12){display:none !important}';
		css += 'iframe{display:none !important}';
		css += 'body > div.container > div.top-container > div:nth-child(13){display:none !important}';
		css += '#download-box{display:none !important}';
		css += '#downlist > div:nth-child(1){display:none !important}';
		css += '.search-adv{display:none !important}';
		loadStyle(css);
	}

	function mydown_yesky_com() {
		console.log('mydown_yesky_com ad');
		var css = '.newsfeed{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.bkdown{display:none !important}';
		css += '.ad{display:none !important}';
		css += 'div.pull-left.url > ul.cl.top{display:none !important}';
		css += '.yestkydownad{display:none !important}';
		css += 'qihoobannerslider{display:none !important}';
		loadStyle(css);
	}

	function www_duote_com() {
		console.log('www_duote_com ad');
		var css = '.pic-bannerA{display:none !important}';
		css += '.dl-banner{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.ad{display:none !important}';
		css += '.down-ad{display:none !important}';
		css += 'div.down-lists > div:nth-child(1){display:none !important}';
		css += 'div.main-right-box > div:nth-child(6){display:none !important}';
		css += '#hengfu{display:none}';
		css += '.links-banner{height:0px !important}';
		css += 'div.dl_area > div:nth-child(2){height:0px !important;display:none !important}';
		css += 'body > div.wrapper > div.main > div>div:first-child{height:0px !important;display:none !important}';
		loadStyle(css);
	}

	function www_crsky_com() {
		console.log('www_crsky_com ad');
		var css = '.bdleft_down{display:none !important}';
		css += '.speed_down{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.Spdwon{display:none !important}';
		css += '.DianX{display:none !important}';
		css += '.green_block{display:none !important}';
		css += '.downWarp{display:none !important}';
		css += '.mirror-special{display:none !important}';
		css += '.yelldown{display:none !important}';
		loadStyle(css);
	}

	function www_pc6_com() {
		console.log('www_pc6_com ad');
		var css = 'div.dl-tip.clearfix > a{display:none !important}';
		css += '#xzbtn > a.downnow{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.ad{display:none !important}';
		css += '.ad2{display:none !important}';
		css += '#topbanner2{height:0px;display:none !important}';
		css += '.ad-download{height:0px;display:none !important}';
		css += '#gaosuxiazai{height:0px;display:none !important}';
		css += '.jsa3{height:0px;display:none !important}';
		css += '#download > ul > li.address-wrap.on > ul > h3:nth-child(2){display:none !important}';
		loadStyle(css);
	}

	function download_pchome_net() {
		console.log('download_pchome_net ad');
		var css = 'div.dl-tip.clearfix > a{display:none !important}';
		css += '.ad{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.dl-info-ad{display:none !important}';
		css += 'center{height:0px}';

		loadStyle(css);
	}

	function www_wmzhe_com() {
		console.log('www_wmzhe_com ad');
		var css = '.download{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.down + div +div{display:none !important}';
		css += 'div.down > dl:nth-child(2){display:none !important}';

		var overflow = document.getElementsByClassName('overflow');
		if(overflow.length == 3) {
			overflow[0].style = 'display:none';
			overflow[2].style = 'display:none';
		}
		loadStyle(css);
	}

	function www_onlinedown_net() {
		console.log('www_onlinedown_net ad');
		var css = '.downxzqtir{display:none !important}';
		css += '.onedownwp{display:none !important}';
		css += '.gg300{display:none !important}';
		css += '.xianssort{display:none !important}';
		css += 'newsfeed{display:none !important}';
		css += '#mv_ad_render{display:none !important}';
		css += '.downgs{display:none !important}';

		loadStyle(css);
	}

	function pc_qq_com() {
		console.log('pc_qq_com ad');
		var css = '.J_qq_download{display:none !important}';

		loadStyle(css);
	}

	function dl_pconline_com_cn() {
		console.log('dl_pconline_com_cn ad');
		var css = '.msg-r{display:none !important}';
		css += '#JhsBtn{display:none !important}';
		css += '.rela-ivy{display:none !important}';
		css += '.ivy{display:none !important}';
		css += 'newsfeed{display:none !important}';
		css += '.btn-org{display:none !important}';
		css += '.block-jcz{display:none !important}';
		css += '.rela-best{display:none !important}';
		css += '.box-tags{display:none !important}';
		css += '.tab-nav{display:none !important}';
		css += '.soft-rel{display:none !important}';

		loadStyle(css);
	}

	function www_huacolor_com() {
		console.log('www_huacolor_com ad');
		var css = '.half-vds{display:none !important}';
		css += '.xzdza{display:none !important}';
		css += '.underline{display:none !important}';
		loadStyle(css);
	}

	function xiazai_zol_com_cn() {
		console.log('xiazai_zol_com_cn ad');
		var css = '#downloader_main{display:none !important}';
		css += '.ad-soft-box{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.filter-words{display:none !important}';
		css += '.box-top-ad{display:none !important}';
		css += '.down-jisu{display:none !important}';
		css += '.down-h4{display:none !important}';

		loadStyle(css);
	}

	function www_downza_cn() {
		console.log('www_downza_cn ad');
		var css = '.down_top{display:none !important}';
		css += 'qihoobannerslider{display:none !important}';
		css += '.downbtn{display:none !important}';
		css += '.newsfeed{display:none !important}';

		loadStyle(css);
	}

	function www_cncrk_com() {
		console.log('www_cncrk_com ad');
		var css = '.min-sd{display:none !important}';
		css += '.area-c{display:none !important}';
		css += '.xz_top{display:none !important}';
		css += '#xzsbox{display:none !important}';
		css += '.xzbox-lf{display:none !important}';
		css += 'iframe{display:none !important}';
		css += '.downfile_hits{display:none !important}';
		css += '.bnt0{display:none !important}';
		loadStyle(css);

		var sort_list = document.getElementsByClassName('sort_list');
		if(sort_list.length != 0) {
			sort_list[0].children[0].style = 'display:none';
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

	function invalidHref(div) {
		div.setAttribute('href', '#');
		div.onClick = function() {
			alert('屏蔽');
		};
	}
})();