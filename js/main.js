// Typed
const typed = new Typed
('.typed', 
    {
        strings: 
        [
            'JasRockr_ '
            , 'Web Development_ '
            , 'Software Engineering_ '
        ]
        ,typeSpeed: 50 //Velocidad en milisegundos para escribir
        ,startDelay: 300 //Tiempo que tarda en iniciar la animacion
        ,backSpeed: 75  //Velocidd en milisegundos para borrar una letra
        ,smartBackspace: true // Elimina solo las palabras nuevas en un string
        ,shuffle: false // Altera el orden en que se escriben las palabras
        ,backDelay: 1500 // Tiempo de espera después de escribir
        ,loop: true // Repetir el array de strings
        ,loopCount: false // cantidad de veces que repite el array, false: Infinito
        ,showCursor: true // Mostrar cursos palpitando
        ,cursorChar: '|' // Caracter para el cursor
        ,contentType: 'html' //html o null para texto sin formato
    }
);
