/*definición de una funcion

function hello(){
    console.log("Hola clase");
    console.log("5IV7");
}

//llamada a la función

hello();
hello();
hello();
hello();
hello();
*/



/*
function hello(){
    return("Hola clase");
}

const result = hello()

console.log(resulte);
*/




/*funcion que retorna otra funcion

function hello(){
    return function(){
        return "hola, soy la funcion 2";
        }
    }

console.log(hello()())

*/


/*multiparámetros

function add(x,y){
    console.log(x+y);
    }
    
    add(5,undefined)
*/


/*control de error en multiples parámetros

// si y=0 y abajo le pones otro valor, siempre será 0

function add(x,y){
    
    if(y==undefined){
        y=0;
    }
    
    console.log(x+y);
}

*/



/*parametro de tipo cadena

function add(name){
    console.log('hola + name');
}

add('clase Js');
*/


//objetos


const user = {
    nombre:"alvarado",
    ap: "reyes",
    am: "quiroz",
    edad: 91,
    dir:{
        calle:"nocolas bravo",
        col:"narvarte",
        num:598,
        del:"los pinos"
        },
        amigos: ['raul', 'maria'],
        activo:true
    }


/*consola nombre ,ap, am
 alert activo
 consola edad
 alert calle, num, col, del
 consola amigos
 */

 console.log(user.nombre + '  ' + user.ap + '  ' + user.am);
 console.log(edad);
 console.log(user.amigos);

 if(user.activo = true){

    alert('user activo');
 }
 else{
    alert('user inactivo');
 }

alert(user.dir.calle + ' ' + user.dir.num + ' ' + user.dir.col + ' ' + user.dir.del);


mostrar(user);