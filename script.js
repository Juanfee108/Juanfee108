// Array de preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Madrid", "Londres", "París", "Roma"],
        correcta: "París"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Tierra", "Marte", "Júpiter", "Saturno"],
        correcta: "Júpiter"
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        correcta: "Leonardo Da Vinci"
    }
];

let preguntaActual = 0; // Controla la pregunta actual

window.onload = function() {
    // Mover el logo hacia arriba y mostrar la primera pregunta después de 2 segundos
    setTimeout(function() {
        
        document.getElementById("logo-container").style.transform = "translateY(-50%)";
        document.getElementById("logo-container").style.marginBottom = "0";
        
        // Llamar a la función para mostrar la pregunta con la transición
        setTimeout(function() {
            mostrarPregunta();
        }, 3000);  // Retraso para sincronizar la aparición de las preguntas con el movimiento del logo
    },2000);
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    const preguntaElement = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");

    // Actualizar el texto de la pregunta
    preguntaElement.textContent = preguntas[preguntaActual].pregunta;

    // Limpiar las respuestas anteriores
    answersContainer.innerHTML = '';

    // Agregar las respuestas como botones
    preguntas[preguntaActual].respuestas.forEach(respuesta => {
        const button = document.createElement("button");
        button.textContent = respuesta;
        button.onclick = function() { checkAnswer(respuesta); };
        answersContainer.appendChild(button);
    });

    // Asegurarse de que el contenedor de preguntas sea visible
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block";  // Hacer visible el contenedor de preguntas
    
    // Aplicar transición para hacer aparecer el contenedor con movimiento y opacidad
    setTimeout(function() {
        questionContainer.style.opacity = "1";  // Mostrar el contenedor
        questionContainer.style.transform = "translateY(-40%)";  // Mover a su posición final
    }, 1000);  // Pequeño retraso para permitir que el cambio de display no interfiera con la transición
}
function mostrarMensajeFinal() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "none";  // Ocultar el contenedor de preguntas

    const mensajeFinal = document.createElement("div");  // Crear un nuevo div para el mensaje
    mensajeFinal.textContent = "¡Felicidades! Has completado satisfactoriamente todas las preguntas.";
    mensajeFinal.style.fontSize = "1.5em";
    mensajeFinal.style.color = "green";
    mensajeFinal.style.marginTop = "20px";  // Añadir margen superior
    document.body.appendChild(mensajeFinal);  // Agregar el mensaje al cuerpo del documento
}


// Función para verificar la respuesta seleccionada
function checkAnswer(respuesta) {
    const correcta = preguntas[preguntaActual].correcta;
    const message = document.getElementById("message");

    if (respuesta === correcta) {
        message.style.display = "none";
        preguntaActual++;

        // Si hay más preguntas, mostrar la siguiente
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarMensajeFinal();
        }
    } else {
        message.style.display = "block";
    }
}