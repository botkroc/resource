document.getElementById("sidebar-menus").getElementsByClassName("site-page")[1].target = "_self";
var $cardInfoBtn = document.getElementById("card-info-btn");
if ($cardInfoBtn) {
    /**有的页面可能不存在此widget */
    $cardInfoBtn.target = "_self";
}
document.getElementById("menus").getElementsByClassName("site-page")[1].target = "_self";