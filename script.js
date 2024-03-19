// alert("Hola este es mi Javascript");

// let nombre = "Marta";
// nombre = "Maria";

// var  nombre1 = "Marta"

// const nombre2 = "Marta";
// nombre2 = "Martin"

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo .fuente-acento")

let lista = document.querySelector(".listaAcercademi .acercaDeMi")


titulo.innerHTML = contenidoTitulo;

//condicionales

let textoTitulo = titulo.innerText;

let listaAcercademititulo = lista.innerText;


console.log(textoTitulo);

console.log(listaAcercademititulo);



// if (listaAcercademititulo === "Acerca de mí") {
//     lista.innerHTML = "Hola";
//     console.log("cumple la condicion")
// } else{
//     console.log("no se cumple");
// }

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "Bruno";

} else {
    console.log("no se cumple");
}

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};




const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        // Si la validación es exitosa, puedes enviar el formulario
        formulario.submit();
    } else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});