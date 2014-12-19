var $section = document.querySelector('section');
var $buttonMenu = document.getElementById('button-action');
var $menu = document.getElementById('menu-slide');
var $body = document.querySelector('body');


var showMenu = function () {
	$menu.classList.add('is-active');
	$body.classList.add('hidden');
}

var hideMenu = function () {
	$menu.classList.remove('is-active');
	$body.classList.remove('hidden');
}

$buttonMenu.addEventListener("mouseover",showMenu);
$buttonMenu.addEventListener("mouseout",hideMenu);

$menu.addEventListener("mouseover",showMenu);
$menu.addEventListener("mouseout",hideMenu);

var mc = new Hammer($section);

mc.on('panleft',showMenu);
mc.on('panright',hideMenu);

mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 50 }));
