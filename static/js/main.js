var $buttonMenu = $('#button-action')
	$menu = $('#menu-slide')
	$coverFile = $('#cover-file')
	$coverName = $('#cover-name')
	$fileName = $('#file-name')
	$fileFile = $('#file-file')


function mostrarOcultarFormulario () {
	$menu.slideToggle();
}

function setCoverName () {
	$coverName.html($coverFile.val());
}

function setFileName () {
	$fileName.html($fileFile.val());
}

$buttonMenu.on('click',mostrarOcultarFormulario);

$coverFile.on('change',setCoverName);
$fileFile.on('change',setFileName);