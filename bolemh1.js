var _PopuHtml='<div class="t-popup post-box is-visible" id="PostBox">\
 <div class="post-popup">\
  <div class="box">\
   <h3 style="text-align: center;">漫画防迷失页</h3>\
   <p style="text-align: center;">最新游戏资源，每日更新</p>\
   <p style="text-align: center;">防迷失发布页地址：(<span class="t-url-color">www.178mhw.xyz</span>)</p>\
   <p style="text-align: center;">一个收集精彩漫画的发布页</p>\
   <p style="text-align: center;" class="line"></p>\
   <p style="text-align: center;" class="f14">建议您<b class="red">收藏发布页地址</b>到浏览器或微信</p>\
   <p style="text-align: center;" class="f14">点击下方链接去看看吧↓↓↓↓</p>\
   <div class="input">\
    <input id="btnCopy" onclick="pushms()" style="text-align:center;" type="text" value="漫画防迷失：https://www.bolemh1.top" readonly>\
   </div>\
   <span class="alink" id="btnCopy" data-clipboard-text="https://www.bolemh1.top"><a style="background-color: #ec514e;" onclick="copyToClipBoard()">点我收藏发布页</a></span></div>\
  <div class="clearfix"></div>\
  <a onclick="popclose()" class="close" id="popupPostClose">&nbsp;</a></div>\
</div>';
var _PopuCss='<style>.t-popup{position:fixed;top:0;left:0;z-index:999999;visibility:hidden;width:100%;height:100%;background-color:rgba(0,0,0,.5);-webkit-transition:opacity .3s 0s,visibility 0s .3s;transition:opacity .3s 0s,visibility 0s .3s}.link-popup,.post-popup,.sign-popup{position:relative;border-radius:20px;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.3);text-align:center;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:transform;-webkit-transform:translateY(-40px);transform:translateY(-40px);margin:0 auto;padding:0;border-radius:16px;z-index:999999999999999;top:15%;width:248px;height:365px}.is-visible{visibility:visible;opacity:1;-webkit-transition:opacity .3s 0s,visibility 0s 0s;transition:opacity .3s 0s,visibility 0s 0s}.is-visible .link-popup,.is-visible .post-box,.is-visible .sign-popup{-webkit-transform:translateY(0);transform:translateY(0)}.t-popup .box{width:100%;margin:0 auto;padding:0;text-align:center}.t-popup .box h3{width:100%;padding-top:5px;height:50px;color:#ec514e;font-size:1.5em;letter-spacing:1px;line-height:40px}.t-popup .box p{width:100%;height:35px;line-height:35px;color:#888;font-size:1em;letter-spacing:1px}.t-popup .box p b{margin:0 3px;color:#e61f1b;font-size:1.5em;font-weight:400}.t-popup .box p em{color:#e61f1b}.t-popup .box p.tips{color:#333;font-size:.9em;letter-spacing:0}.t-popup .box p.min{color:#999;font-size:.6em;height:22px;line-height:22px;letter-spacing:0}.t-popup .box p.fbyts a{color:#f66;font-size:.8em;line-height:40px}.t-popup .box div.input input{width:84%;display:block;margin:10px auto 20px;height:28px;line-height:28px;color:#000;font-size:.9em;background:#efeff4;padding:2px 5px;border:#999 solid 1px}.t-popup .box .alink a,.t-popup .box .but a{display:block;margin:10px auto 0;padding:8px 10px;width:120px;outline:0;border-radius:20px;background:#f33;color:#fff;text-decoration:none;font-size:1em;line-height:1.25rem;cursor:pointer;letter-spacing:1px}.t-popup .box .but.hover a{background:#1aad19}.t-popup .box .but.ok a{background:#999}.t-popup .box .alink a{background:#1aad19}.t-popup .close{position:relative;bottom:-40px;display:block;margin:0 auto;width:40px;height:40px;border-radius:50%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAACBgYGBgYGBgYGBgYGfRdhmAAAABHRSTlMAYPBQhJMd8wAAAHxJREFUOMvd0skNgDAMRNHQAYrSQAQV0AHg/mviNBpLX8j3+Gacx2KmrVR9/nRn7L6+xZMGtwcjDUbEbhBv0iI+5A5n3AK4z8AEwARARABEAEQARABEAISAA96qfDhft/xArqRcItdOAIJfW4SB8akCx4jWoe5HS3XNtlB99A8pdYJxLK0AAAAASUVORK5CYII=) no-repeat center center;background-color:#efeff4;background-size:20px 20px;transition:All .4s ease-in-out;-webkit-transition:All .4s ease-in-out;-moz-transition:All .4s ease-in-out;-o-transition:All .4s ease-in-out;box-shadow:0 0 30px rgba(0,0,0,.8)}.t-popup .close:hover{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAD1BMVEUAAACBgYGBgYGBgYGBgYGfRdhmAAAABHRSTlMAYPBQhJMd8wAAAHxJREFUOMvd0skNgDAMRNHQAYrSQAQV0AHg/mviNBpLX8j3+Gacx2KmrVR9/nRn7L6+xZMGtwcjDUbEbhBv0iI+5A5n3AK4z8AEwARARABEAEQARABEAISAA96qfDhft/xArqRcItdOAIJfW4SB8akCx4jWoe5HS3XNtlB99A8pdYJxLK0AAAAASUVORK5CYII=) no-repeat center center;background-color:#f66;background-size:20px 20px;transform:rotate(360deg);-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg)}.t-popup .sign-popup .box{height:340px}.t-popup .link-popup{height:230px;width:320px;border-radius:8px}.t-popup .link-popup .close{bottom:0;top:-220px;right:-140px;border:#fff solid 5px}.t-popup.post-box{background-color:rgba(0,0,0,.1)}.t-popup .post-popup{width:340px;height:330px;border-radius:8px;box-shadow:0 0 30px rgba(0,0,0,.8)}.t-popup .post-popup h3{margin-bottom:5px}.t-popup .post-popup p{font-size:12px;line-height:26px;height:26px;padding:0;margin:0;text-align:left;text-indent:8px;color:#555}.t-popup .post-popup p.line{width:320px;padding:0;margin:0 auto;line-height:10px;height:10px;border-top:1px #ddd dashed;overflow:hidden}.t-url-color{color:red}</style>';
document.write(_PopuHtml+_PopuCss);
function copyToClipBoard(){var clipboard=new Clipboard(".alink");console.log(clipboard);clipboard.on("success",function(e){pushms();/**alert("收藏成功,以复制发布链接赶快去分享吧!");**/});clipboard.on("error",function(e){alert("收藏失败")})}function popclose(){document.getElementById("PostBox").style.display="none"}function pushms(){window.open("https://www.bolemh1.top")}function setCookie(cname,cvalue,exdhours){var d=new Date();console.log(cname+"/"+cvalue+"/"+exdhours);d.setTime(d.getTime()+(exdhours*1*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+escape(cvalue)+"; "+expires}(function(){if(document.cookie.indexOf("popup")==-1){document.getElementById("PostBox").style.display="";setCookie("popup","1",6)}else{document.getElementById("PostBox").style.display="none"}})();