console.log("%cDon’t enter any code here unless you know what you are doing.    - freezing kroc", "color:red;font-family:system-ui;font-size:35px;-webkit-text-stroke: 1px black;font-weight:bold");

document.getElementById("sidebar-menus").getElementsByClassName("site-page")[1].target = "_self";
var $cardInfoBtn = document.getElementById("card-info-btn");
if ($cardInfoBtn) {
    /**有的页面可能不存在此widget */
    $cardInfoBtn.target = "_self";
}
document.getElementById("menus").getElementsByClassName("site-page")[1].target = "_self";