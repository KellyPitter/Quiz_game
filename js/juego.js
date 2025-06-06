// se crea la base de datos de las preguntas
const preguntas = [
    {
        id: 1,
        categoria: "general",
        titulo: "¿Que mide un cronómetro?",
        opcionA: "La Longitud",
        opcionB: "La Masa",
        opcionC: "El Tiempo",
        opcionD: "La Temperatura",
        correcta: "c"
    },
    {
        id: 2,
        categoria: "general",
        titulo: "¿Cómo se llama en la mesa al cloruro de sodio?",
        opcionA: "Azúcar",
        opcionB: "Vinagre",
        opcionC: "Pimienta",
        opcionD: "Sal",
        correcta: "d"
    },
    {
        id: 3,
        categoria: "general",
        titulo: "¿Cuál el dios más importante de los egipcios era una estrella ?",
        opcionA: "El Sol",
        opcionB: "La Luna",
        opcionC: "El Mar",
        opcionD: "La Tierra",
        correcta: "a"
    },
    {
        id: 4,
        categoria: "general",
        titulo: "¿Quiénes son los profesionales del derecho que levantan las actas?",
        opcionA: "Los Jueces",
        opcionB: "Los Notarios",
        opcionC: "Los Soldados",
        opcionD: "Los Fiscales",
        correcta: "b"
    },
    {
        id: 5,
        categoria: "general",
        titulo: "¿De qué pais procede el oso Panda?",
        opcionA: "Inglaterra",
        opcionB: "China",
        opcionC: "Chile",
        opcionD: "Venezuela",
        correcta: "b"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "¿Quién es el famoso guitarrista de Queen?",
        opcionA: "Bryan May",
        opcionB: "Jimi Hendrix",
        opcionC: "John Lennon",
        opcionD: "Eric Claptom",
        correcta: "a"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Piano",
        opcionB: "Violín",
        opcionC: "Guitarra",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "¿Man Eater' y 'Promiscuous' fueron éxitos de 2006 para qué artista?",
        opcionA: "Adele",
        opcionB: "Britney Spears",
        opcionC: "Madonna",
        opcionD: "Nelly Furtado",
        correcta: "d"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "Mariah Carey tardó 15 minutos en escribir ¿Qué festividad llegó en 1994?",
        opcionA: "All I want for Christmas is you",
        opcionB: "Silent Night",
        opcionC: "We wish you a Merry Christmas",
        opcionD: "Happy Xmas (War is Over)",
        correcta: "a"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "¿Cuál fue el nombre del género inventado por las bandas independientes en Gran Bretaña a mediados de los 90?",
        opcionA: "DancePop",
        opcionB: "BritPop",
        opcionC: "ItalianPop",
        opcionD: "PopRock",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿De qué color es la tarjeta que enseña un árbitro de fútbol para echar un jugador?",
        opcionA: "Verde",
        opcionB: "Amarilla",
        opcionC: "Roja",
        opcionD: "Negra",
        correcta: "c"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "¿Qué deporte se juega anualmente en París en el torneo de Roland Garros?",
        opcionA: "Basquet",
        opcionB: "Beisbol",
        opcionC: "Natación",
        opcionD: "Tenis",
        correcta: "d"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿Qué equipamiento deportivo tiene sillín, cuadro y luces reflectantes?",
        opcionA: "Bicicleta",
        opcionB: "Equitación",
        opcionC: "Polo",
        opcionD: "Hockey",
        correcta: "a"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿Qué futbolista jugó en el Barcelona?",
        opcionA: "Ronaldo",
        opcionB: "Los 3",
        opcionC: "El Ronaldinho",
        opcionD: "Romario",
        correcta: "b"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "¿Quién es la persona que mas medallas de oro ha ganado en los Juegos Olímpicos tanto de verano como de invierno?",
        opcionA: "Serena Williams",
        opcionB: "Rafa Nadal",
        opcionC: "Michael Phelps",
        opcionD: "Fernando Alonso",
        correcta: "c"
    },
    {
        id: 16,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "¿En qué año se lanzó el juego 'The Legend of Zelda: Ocarina of Time'?",
        opcionA: "1996",
        opcionB: "1998",
        opcionC: "2000",
        opcionD: "2002",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "juegos",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "juegos",
        titulo: "¿Quién es el protagonista del juego 'The Witcher 3: Wild Hunt'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Buzz Lightyear",
        opcionB: "Woody",
        opcionC: "Slinky",
        opcionD: "Mr. Potato Head",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Disney en la que una sirena sueña con vivir en la tierra?",
        opcionA: "Cenicienta",
        opcionB: "La Sirenita",
        opcionC: "Blancanieves",
        opcionD: "Mulan",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Mike Wazowski",
        opcionC: "Randall",
        opcionD: "Boo",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Inside Out",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    }
]

// se toman los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
//mantiene el numero de pregunta actual de las 5
let numPreguntaActual = 0;
//controla el puntaje que se lleva hasta el momento
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {//si no existe es porque está comenzando el juego
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//se carga la preguntas del tema que elija
const categoriaActual = localStorage.getItem("categoria-actual");
//console.log(categoriaActual);

const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);
//console.log(preguntasCategoria);

//se carga la siguiente pregunta con sus opciones
function cargarSiguientePregunta(num) {
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;

    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    //Se agrega un evento para cada respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    // Se quita los event listener y las clases que ya tenga asigandas de la respuesta anterior
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", (e) => { });
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    });

    //Funcion que manejará el click de cada boton
    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    txtPuntaje.classList.remove("efecto");
}

cargarSiguientePregunta(numPreguntaActual);

function agregarEventListenerBoton(e) {
    console.log(e.currentTarget.id);

    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"
            + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }

    //Se agrega un Eventlistener a cada boton respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Se quita los eventistener a cada boton para que no seleccione otra respuesta
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    })
}

// se toma el boton siguiente
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++;
    //controlo si se ha llegado a las 5 preguntas
    if (numPreguntaActual <= 4) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {//en caso que ya llegue al final

        const categoriasJugadasLS = JSON.parse(localStorage.getItem
            ("categorias-jugadas"));
        if (parseInt(categoriasJugadasLS.length) < 6) {//todavía hay categorias por jugar
            location.href = "menu.html";

        } else {
            //Fin de juego
            location.href = "final.html"
        }

    }
})