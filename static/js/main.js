var $buttonMenu = $('#button-action')
var $menu = $('#menu-slide')

function mostrarOcultarFormulario(){
	$menu.slideToggle();
}

$buttonMenu.on('click',mostrarOcultarFormulario)
