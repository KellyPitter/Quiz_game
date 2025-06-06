// tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

//agregar un event listener al boton comenzar
btnComenzar.addEventListener("click", ()=>{
     // reseteo los valores del localstorage que serán necesacios
     localStorage.setItem("nombre", nombre.value);
     localStorage.setItem("puntaje-total",0)
     // eliminar del localstorage las categorías que ya se jugaron
     localStorage.removeItem("categorias-jugadas")
 
     // dirigir a la parte del menú
     location.href = "menu.html"
})