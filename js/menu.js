// tomamos lo elementos del html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

// asignamos la info del LocaStorage
nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

// se recupera el puntaje del jugador que esta jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// se necesita guardar las categorias que se va jugando
let categoriasJugadas;
// se controla si ya se cargo en el localStorage cuando vuelvo del juego.html para cargar las categorias ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));

if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS;
}else{//coienza un arreglo vacio
    categoriasJugadas = [];
}

// se agrega un eventListener a todos lo botones de la categorias
function agregarEventListenerOpciones(){
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria=>{
        categoria.addEventListener("click",(e)=>{
            //console.log(e.currentTarget.id);
            //almacena la categoria actual en el localStorage
            localStorage.setItem("categoria-actual", e.currentTarget.id);
            //agrego al arreglo de categorias jugadas
            categoriasJugadas.push(e.currentTarget.id);
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas));
            //console.log(categoriasJugadas);
            //redirigir a la pantalla de juego.html
            location.href = "juego.html";
        });
    });
    // desabilitar las categorias que ya se juegaron
    categorias.forEach(categoria=>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada");
            categoria.classList.add("no-events");
        }
    });

}

agregarEventListenerOpciones();
