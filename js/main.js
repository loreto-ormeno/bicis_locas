function validarCorreo(){
	var inputemail = document.getElementById('input-email').value;
	var expReg = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

	arroba = inputemail.indexOf("@");
	punto =  inputemail.lastIndexOf(".");
	extension= inputemail.split(".")[1];
	
	if (arroba < 1 || ( punto - arroba < 2 )||inputemail==="" || extension== "" || (!expReg.test(inputemail))){
		$('#input-email').parent().append('<span>Ingrese un formato valido</span>');
	}else{
	  if(extension.length >3){
		$('#input-email').parent().append('<span>Ingrese un formato valido</span>');
		return;
	  }
	}
}

function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();	
	const mayuscula = new RegExp('^[A-Z]+$', 'i');
	const tipobici = $('#tipo-bici').val().trim();
	
	/* Ahora pruebo 1 a 1 los valores */
	if (name == '') {
		$('#name').parent().append('<span>Debe ingresar su nombre</span>');
	}
	else {if (!mayuscula.test(name)){
		$('#name').parent().append('<span>Ingrese solamente letras</span>');  
	}
	else {if (name[0] == name[0].toLowerCase()){
		$('#name').parent().append('<span>La primera letra debe ser mayúscula</span>');  
	}	
	}
	}
	const lastname = $('#lastname').val().trim();
	if (lastname == '') {
		$('#lastname').parent().append('<span>Debe ingresar su apellido</span>');
	}
	else {if (!mayuscula.test(lastname)){
		$('#lastname').parent().append('<span>Ingrese solamente letras</span>');  
	}
	else {if (lastname[0] == lastname[0].toLowerCase()){
		$('#lastname').parent().append('<span>La primera letra debe ser mayúscula</span>');  
	}	
	}
	}
	validarCorreo()

	const inputpassword = $('#input-password').val().trim();
	if (inputpassword == '') {
		$('#input-password').parent().append('<span>Debe ingresar una contraseña</span>');
	}
	else {if (inputpassword =='password'||inputpassword =='123456'||inputpassword =='098754'){	
		$('#input-password').parent().append('<span>Contraseña no permitida</span>');  
	}
	else {if (inputpassword.length <=6){
		$('#input-password').parent().append('<span>Debe ingresar una contraseña de 6 digitos</span>');  
	}	
	}
	}
	if (tipobici == '0') {
		$('#tipo-bici').parent().append('<span>Debe seleccionar un tipo de bici</span>');
	}	
}
