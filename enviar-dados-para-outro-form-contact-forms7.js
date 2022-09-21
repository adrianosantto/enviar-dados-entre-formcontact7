document.addEventListener('wpcf7mailsent', function(Event){
	if( '9960' == Event.detail.contactFormId){
		location.replace('https://oneservicosdigitais.com/abra-sua-conta-one/?nome=' + $('#nome').val() + '&cpf=' + $('#cpf').val() + '&mail=' + $('#email').val() + '&confirm-mail=' + $('#confirm-mail').val());}
}, false);