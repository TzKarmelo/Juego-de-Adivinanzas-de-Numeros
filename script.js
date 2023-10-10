// Generar un número aleatorio entre 1 y 100.
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Obtener referencias a elementos HTML.
const guessField = document.getElementById("guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const message = document.querySelector(".message");

// Llevar un registro del número de intentos.
let attempts = 0;

// Función para comparar el número ingresado con el número aleatorio.
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    message.style.color = "green";
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Demasiado bajo. Intenta de nuevo.";
    message.style.color = "red";
  } else {
    message.textContent = "Demasiado alto. Intenta de nuevo.";
    message.style.color = "red";
  }

  guessField.value = "";
  guessField.focus();
}

// Event listener para el botón de adivinar.
guessSubmit.addEventListener("click", checkGuess);
