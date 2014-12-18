var $body = document.querySelector('body');
var $buttonMenu = document.getElementById('button-action');
var $menu = document.getElementById('menu-slide');


var showMenu = function () {
	$menu.classList.add('is-active');
}

var hideMenu = function () {
	$menu.classList.remove('is-active');
}

$buttonMenu.addEventListener("mouseover",showMenu);
$buttonMenu.addEventListener("mouseout",hideMenu);

$menu.addEventListener("mouseover",showMenu);
$menu.addEventListener("mouseout",hideMenu);

var mc = new Hammer($body);

mc.on('panleft',showMenu);
mc.on('panright',hideMenu);
