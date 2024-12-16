// Diccionario de palabras
const dictionary = {
    "Also": "Tambien",
    "Add": "Agregar",
    "Available": "disponible",
    "Above": "Arriba",
    "Augment": "Aumenta",
    "Allow": "Permite",
    "Below": "Debajo",
    "Built": "llaves",
    "Between": "Entre 2",
    "Benchmark": "Referencia",
    "Boiler plate":"Repetitivo",
    "Both":"tanto",
    "Behavior":"Comportamiento",
    "Caller":"Llamada",
    "Careats":"accion de cuidar",
    "Chapter":"capitulo",
    "Current":"Actual",
    "Debugging":"Depurar",
    "Deep":"Profundo",
    "DOM":"Modelo de Objetivo de Documento",
    "Devices":"Dispositivos",
    "Enable":"Permite",
    "Embed":"Insertar",
    "Ensure":"Asegurar",
    "Each":"Cada",
    "Environment":"Ambiente",
    "FallBack":"Retroceder",
    "features":"Caracteristicas",
    "Gain":"Ganar",
    "Giring":"Dar",
    "Hold":"Mantener",
    "Hewere":"Sin embargo",
    "Hooks":"Funciones que permiten..",
    "Insolated":"Aislado",
    "Keeping":"Acuerdo",
    "Keybinding":"Asociados de teclas",
    "With out":"sin",
    "Known":"saber",
    "Let-a":"Permitir",
    "Lint":"Limpiar",
    "Least":"Al menos",
    "Mount":"Montaje",
    "matter":"Importar",
    "Nestable":"Reutilizable",
    "Own":"Propias",
    "Override":"Anular/Reamplazar",
    "Props":"Propiedades archivos",
    "Quikly":"Rapidamente",
    "Sprinkle":"Agregar",
    "Scarle-up":"Ampliar",
    "Sibbligg":"Pares o Hijos",
    "State":"Estado",
    "Store":"Guardar",
    "Suchas":"Tales como",
    "Unlike":"Diferencia",
    "Usefull":"Util",
    "Toggle":"Alternar",
    "Wrap":"Envolver",
    "While":"Mientras",
    "Walk-th rough":"tutorial",
    "Written":"escrito",
    "Wapper":"Modulos",
    "Wich":"Cual",
    "With":"Con",
    "Yet":"Todavia",
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
