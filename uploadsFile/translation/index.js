jQuery(function () {
$('.btn-submit').off('click',onBtnClick);
  $('.btn-submit').on('click', onBtnClick);


})

/*jsonp函数定义 传入的是js对象不需要转换 
不能在onload里定义 ，因为是全局调用的
*/
function download(jsonp) {
  var tBody = $('.weather-info tbody');
  var tR = $(`<tr>
    <td>${jsonp.translation}</td>
    <td>${jsonp.basic && jsonp.basic.explains ? jsonp.basic.explains : "没有呢"}</td>
    </tr>`);
  tBody.append(tR);

}
 function onBtnClick(ev) {
    /*先删除旧的 */
    $('#jsonp').remove();
    $('body').append($('<script id="jsonp"></script>').prop('src', `https://fanyi.youdao.com/openapi.do?keyfrom=Skykai521&key=977124034&type=data&doctype=jsonp&version=1.1&callback=download&q=${$('.text-submit').val()}`));


    /**并清空html */
    var tBody = $('.weather-info tbody');
    tBody.html('');
  }