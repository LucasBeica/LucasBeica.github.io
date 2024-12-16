// Diccionario de palabras
const dictionary = {
    "hello": "hola",
    "world": "mundo",
    "computer": "computadora",
    "keyboard": "teclado",
    "mouse": "ratón",
    "screen": "pantalla",
    "language": "idioma",
    "internet": "internet",
    "friend": "amigo",
    "family": "familia"
};

// Referencias a elementos HTML
const wordSelect = document.getElementById('word');
const translationDiv = document.getElementById('translation');

// Poblar el <select> con las palabras en inglés
Object.keys(dictionary).forEach(word => {
    const option = document.createElement('option');
    option.value = word;
    option.textContent = word;
    wordSelect.appendChild(option);
});

// Mostrar la traducción al seleccionar una palabra
wordSelect.addEventListener('change', () => {
    const selectedWord = wordSelect.value;
    const translation = dictionary[selectedWord];
    translationDiv.textContent = `Traducción: ${translation}`;
});
