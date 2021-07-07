
//Constantes de los planetas 
const planetasDisponibles = "Mercurio, Jupiter, Saturno"
const gTierra = 9.8;
const gMercurio = 3.7;
const gJupiter = 24.8;
const gSaturno = 10.44;
let pesoT;
// Se crea la incognita para obtener el valor del peso
let nombreUsuario = prompt ("¿Cual es tu nombre?");
let pesoUsuario = parseInt(prompt("¿Cual es tu peso?"));

// Condicional para limitar el peso posible

if (pesoUsuario >= 550){
    document.write("Tu peso no es real")
}

else if (isNaN(pesoUsuario)){ 
//isNan permite identificar si el contenido de cierta variable es NaN
    document.write("Porfavor, " + nombreUsuario + " escribe un peso válido");
}

else {
    
    let elegirPlaneta = prompt("Elige de las siguientes opciones, el planeta para saber tu peso en él " + planetasDisponibles)

// Se crea las operaciones indivuduales para cada planeta en especifico

        if (elegirPlaneta == "Mercurio"){
            let pesoT = pesoUsuario*gMercurio/gTierra;
            document.write("Tu peso, " + nombreUsuario +  " en el planeta " + elegirPlaneta + " es " + pesoT)
        }

        else if (elegirPlaneta == "Jupiter"){
            let pesoT = pesoUsuario*gJupiter/gTierra;
            document.write("Tu peso, " + nombreUsuario +  " en el planeta " + elegirPlaneta + " es " + pesoT)
        }

        else if (elegirPlaneta == "Saturno"){
            let pesoT = pesoUsuario*gSaturno/gTierra;
            document.write("Tu peso, " + nombreUsuario +  " en el planeta " + elegirPlaneta + " es " + pesoT)
        }
    
        else {
            document.write("Porfavor, " + nombreUsuario + " elige un planeta de los posibles")
        }
}

