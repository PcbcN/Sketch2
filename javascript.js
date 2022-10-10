/*Declaramos las variables globales que vamos a utilizar*/
let tabla = document.getElementById("grid-contenedor"); //La tabla en sí
let estilos = getComputedStyle(document.body); //Los estilos css del documento para acceder a las variables y propiedades
let cssVar = document.querySelector(":root");
let size = estilos.getPropertyValue("--size"); //La variable size del css
let columnas = estilos.getPropertyValue("--columnas"); //La variable columnas del css
let colorBase = estilos.getPropertyValue("--colorBase"); //La variable colorBase del css
let barraInput = document.getElementById("barra").value; //El input del slider range
let num = barraInput * barraInput; //calculamos de base cuantos divs hay que crear multiplicando las columnas por sí mismas



/* Funcion para crear tabla con variables*/
function crearTabla(){
    borrarTabla(parent)
    for (let i = 0; i < num; i++) {
        const celda = document.createElement("div");
        tabla.appendChild(celda).setAttribute("class", "celda");
    }

    /*Aplicamos un numero de id a cada celda para pintarlas con comodidad*/
    let pastillas = document.getElementsByClassName("celda");
    let arr = Array.from(pastillas)
    for (let i = 0; i < arr.length; i++){
        arr[i].id = i;
    }
}

function contarColumnas(){
    num = barraInput * barraInput;
}

function borrarTabla(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);}
}


function dinamismo(){
    if(barraInput == 2) {
            cssVar.style.setProperty("--columnas", "2");
            cssVar.style.setProperty("--size", "512px"); }
         else if (barraInput == 4) {
                cssVar.style.setProperty("--columnas", "4");
                cssVar.style.setProperty("--size", "256px");}
             else if (barraInput == 6) {
                    cssVar.style.setProperty("--columnas", "6");
                    cssVar.style.setProperty("--size", "170.66px");}
                 else if (barraInput == 8) {
                        cssVar.style.setProperty("--columnas", "8");
                        cssVar.style.setProperty("--size", "128px");}
                     else if (barraInput == 10) {
                            cssVar.style.setProperty("--columnas", "10");
                            cssVar.style.setProperty("--size", "102.4px");}
                         else if (barraInput == 12) {
                                cssVar.style.setProperty("--columnas", "12");
                                cssVar.style.setProperty("--size", "85.33px");}
                             else if (barraInput == 14) {
                                    cssVar.style.setProperty("--columnas", "14");
                                    cssVar.style.setProperty("--size", "73.14px");}
                                 else if (barraInput == 16) {
                                        cssVar.style.setProperty("--columnas", "16");
                                        cssVar.style.setProperty("--size", "64px");}
        contarColumnas();
    }






