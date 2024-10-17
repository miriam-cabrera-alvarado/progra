/*
document.title = 'Iniciar sesion ';

const h1 = document.createElement("h1");

h1.textContent = "Mi texto desde Js";
document.body.appendChild(h1)

const parrafo = document.createElement("p");
parrafo.textContent = "Mi parrafo desde Js";
document.body.appendChild(parrafo);

*/



document.title = 'Iniciar sesion ';

//crear el contenedor cmo forulario 

const container = document.createElement('div');
container.style.margin = '20px' ; 

//crear title
const title = document.createElement('h2');
title.textContent='iniciar sesion';
container.appendChild(title);

//crear el formulario 
const form = document.createElement('form');

//crear campo de nombre de usuario 
const usernamelabel = document.createElement('label');
usernamelabel.textContent ='nombre del usuario';



const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

//crear campo para contrasena
const passwordlabel = document.createElement('label');
passwordlabel.textContent ='contraseña';

const passwordInput = document.createElement('input');
passwordInput.type = 'pasword';
passwordInput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordInput);

//Boton de envio 
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Iniciar sesion';
form.appendChild(submitButton);

//mnsaje de respuesta 

const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//agregar el contenedor al cuerpo del documento 
document.body.appendChild(container);

//datos inicio sesion predefinida
const validaUser = 'muokka';
const validaPassword = '134340';

//validar user y password
form.addEventListener('submit',(event) => {
    event.preventDefault();

    //validar nombre y password
    if(usernameInput.value == "muokka" && passwordInput.value == "134340" ){
        message.textContent = 'bienvenido';
        message.style.color = 'green';
    }else{
        message.textContent = 'nombre de usuario o contraseña incorrecto';
        message.style.color = 'pink';
    }

    usernameInput.value = '';
    passswordInput.value = '';

})


