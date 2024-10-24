/* ARREGLOS 
 let array = ["dato1", 1, Boolean];
 
 // console.log(array[0]); 
 //Aquí manda a llamar a la consola el dato0 "dato1"

 console.log("tamaño array: " + array.lenght);
 array.push("insert nuevo valor");

 console.log(array[3]);
 
 console.log("nuevo tamaño array: " + array.length);
 console.log(array[3]); //con .lenght cuenta el tamaño del arreglo 
*/


/* PRÁCTICA 
    CREAR UN ARREGLO DE MULTIPLICACIONES, que multiplique de 5*0 hasta 5*10, 
    los resultados con salto de linea, que aparezca "5*1 = 5", que en el for sea hasta el 50, 
    y que solo imprima hasta el 30.




    let multiplicaciones = [];
    for (let i = 0; i <= 10; i++) {
        let resultado = 5 * i;
        if (resultado > 30) {
            
            console.log(`Fin del arreglo, posición ${i}`); //manda este msj cuando esté es esa posición
            break; // Salir del bucle si el resultado es mayor a 30
        }
        multiplicaciones.push(`5 * ${i} = ${resultado}`);
        console.log(multiplicaciones[i]);
    }
    multiplicaciones.forEach(multiplicacion);

*/



/* ELIMINAR ELEMENTOS DE UN ARRAY
let array = ["dato1", "dato2", Boolean, "dato5"];
array.push("dato4");
console.log(array[3]);

//Emilinar
array.splice(2, 2); //Elimina el elemento en la posición 2, y se elimina la cantidad de valores ( ,2] )
console.log(array); 
*/
