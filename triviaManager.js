// triviaManager.js - Trivias completas para todos los países
const TriviaManager = {
	trivias: {},

	init: function() {
		this.loadTrivias();
		console.log("❓ TriviaManager inicializado");
	},

	loadTrivias: function() {
		this.trivias = {
			arabiaSaudita: [
				{ pregunta: "¿Cuál es la capital de Arabia Saudita?", opciones: ["Riad", "Dubai", "Doha"], correcta: 1 },
				{ pregunta: "¿Qué representa la espada en la bandera saudí?", opciones: ["La justicia", "La conquista", "La unidad"], correcta: 1 },
				{ pregunta: "¿En qué continente se encuentra Arabia Saudita?", opciones: ["Asia", "África", "Europa"], correcta: 1 },
				{ pregunta: "¿Cuál es el color principal de la bandera?", opciones: ["Verde", "Rojo", "Blanco"], correcta: 1 },
				{ pregunta: "¿Qué idioma se habla en Arabia Saudita?", opciones: ["Árabe", "Persa", "Turco"], correcta: 1 }
			],
			argelia: [
				{ pregunta: "¿Cuál es la capital de Argelia?", opciones: ["Argel", "Túnez", "Rabat"], correcta: 1 },
				{ pregunta: "¿Qué símbolo aparece en la bandera argelina?", opciones: ["Media luna y estrella", "Sol", "Águila"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene la bandera?", opciones: ["Verde, blanco y rojo", "Rojo y blanco", "Verde y blanco"], correcta: 1 },
				{ pregunta: "¿Argelia se encuentra en?", opciones: ["Norte de África", "Oriente Medio", "Europa"], correcta: 1 },
				{ pregunta: "¿Qué océano baña las costas de Argelia?", opciones: ["Mediterráneo", "Atlántico", "Índico"], correcta: 1 }
			],
			argentina: [
				{ pregunta: "¿Qué representa el sol en la bandera argentina?", opciones: ["El Sol de Mayo", "La independencia", "La riqueza"], correcta: 1 },
				{ pregunta: "¿Cuántas franjas horizontales tiene?", opciones: ["2", "3", "4"], correcta: 2 },
				{ pregunta: "¿De qué color es el sol?", opciones: ["Amarillo", "Dorado", "Naranja"], correcta: 2 },
				{ pregunta: "¿En qué año se creó la bandera?", opciones: ["1810", "1812", "1816"], correcta: 2 },
				{ pregunta: "¿Quién diseñó la bandera?", opciones: ["Manuel Belgrano", "José de San Martín", "Bernardino Rivadavia"], correcta: 1 }
			],
			australia: [
				{ pregunta: "¿Qué constelación aparece en la bandera australiana?", opciones: ["Cruz del Sur", "Osa Mayor", "Orión"], correcta: 1 },
				{ pregunta: "¿Qué animal aparece en el escudo?", opciones: ["Canguro y emú", "Koala", "Dingo"], correcta: 1 },
				{ pregunta: "¿De qué color es el fondo de la bandera?", opciones: ["Azul", "Rojo", "Verde"], correcta: 1 },
				{ pregunta: "¿Qué representa la Union Jack?", opciones: ["Herencia británica", "Independencia", "Unidad"], correcta: 1 },
				{ pregunta: "¿Cuántas estrellas tiene la bandera?", opciones: ["6", "7", "8"], correcta: 1 }
			],
			brasil: [
				{ pregunta: "¿Qué significa el lema 'Ordem e Progresso'?", opciones: ["Orden y Progreso", "Libertad y Justicia", "Unión y Fuerza"], correcta: 1 },
				{ pregunta: "¿Qué representa la esfera azul?", opciones: ["El cielo de Río", "La esfera celeste", "El océano"], correcta: 2 },
				{ pregunta: "¿Cuántas estrellas tiene la bandera?", opciones: ["26", "27", "28"], correcta: 2 },
				{ pregunta: "¿Qué color predomina?", opciones: ["Verde", "Amarillo", "Azul"], correcta: 1 },
				{ pregunta: "¿Qué representa la estrella solitaria?", opciones: ["Río de Janeiro", "São Paulo", "Brasilia"], correcta: 3 }
			],
			caboVerde: [
				{ pregunta: "¿Cuál es la capital de Cabo Verde?", opciones: ["Praia", "Mindelo", "Sal"], correcta: 1 },
				{ pregunta: "¿Qué representa el círculo de estrellas?", opciones: ["Las islas", "La unidad", "El mar"], correcta: 1 },
				{ pregunta: "¿Cuántas estrellas tiene la bandera?", opciones: ["10", "11", "12"], correcta: 1 },
				{ pregunta: "¿Qué colores predominan?", opciones: ["Azul, blanco y rojo", "Azul y blanco", "Rojo y verde"], correcta: 1 },
				{ pregunta: "¿Cabo Verde es un?", opciones: ["Archipiélago", "Continente", "Península"], correcta: 1 }
			],
			canada: [
				{ pregunta: "¿Qué hoja aparece en la bandera?", opciones: ["Arce", "Roble", "Pino"], correcta: 1 },
				{ pregunta: "¿De qué color es la hoja?", opciones: ["Rojo", "Verde", "Amarillo"], correcta: 1 },
				{ pregunta: "¿Cuántos puntos tiene la hoja?", opciones: ["9", "11", "13"], correcta: 2 },
				{ pregunta: "¿En qué año se adoptó?", opciones: ["1965", "1957", "1972"], correcta: 1 },
				{ pregunta: "¿Qué representan los colores rojo y blanco?", opciones: ["Inglaterra y Francia", "Paz y valor", "Unidad y libertad"], correcta: 2 }
			],
			catar: [
				{ pregunta: "¿Cuál es la capital de Catar?", opciones: ["Doha", "Abu Dabi", "Manama"], correcta: 1 },
				{ pregunta: "¿Qué color predominante tiene la bandera?", opciones: ["Granate", "Rojo", "Blanco"], correcta: 1 },
				{ pregunta: "¿Qué representa el color blanco?", opciones: ["La paz", "El desierto", "La pureza"], correcta: 1 },
				{ pregunta: "¿En qué península se encuentra Catar?", opciones: ["Arábiga", "Ibérica", "Balcánica"], correcta: 1 },
				{ pregunta: "¿Qué separa la parte blanca de la granate?", opciones: ["Línea serrada", "Línea recta", "No hay separación"], correcta: 1 }
			],
			colombia: [
				{ pregunta: "¿Cuántas franjas tiene la bandera colombiana?", opciones: ["3", "4", "2"], correcta: 1 },
				{ pregunta: "¿Qué representa el color amarillo?", opciones: ["Riqueza y soberanía", "El sol", "La justicia"], correcta: 1 },
				{ pregunta: "¿Cuál es el orden de los colores?", opciones: ["Amarillo, azul, rojo", "Azul, amarillo, rojo", "Rojo, amarillo, azul"], correcta: 1 },
				{ pregunta: "¿Qué representa el color azul?", opciones: ["Los mares", "Los ríos", "El cielo"], correcta: 1 },
				{ pregunta: "¿En qué año se adoptó la bandera?", opciones: ["1861", "1810", "1886"], correcta: 1 }
			],
			coreaDelSur: [
				{ pregunta: "¿Cómo se llama el símbolo central de la bandera?", opciones: ["Taegeuk", "Yin Yang", "Taiji"], correcta: 1 },
				{ pregunta: "¿Cuántos trigramas rodean el símbolo?", opciones: ["4", "6", "8"], correcta: 1 },
				{ pregunta: "¿Qué representa el color rojo?", opiones: ["Yang (positivo)", "Yin (negativo)", "Neutralidad"], correcta: 1 },
				{ pregunta: "¿Qué fondo tiene la bandera?", opciones: ["Blanco", "Amarillo", "Azul"], correcta: 1 },
				{ pregunta: "¿Qué simboliza el blanco?", opciones: ["Paz y pureza", "Luz", "Unidad"], correcta: 1 }
			],
			costaDeMarfil: [
				{ pregunta: "¿Cuál es la capital de Costa de Marfil?", opciones: ["Yamusukro", "Abiyán", "Dakar"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene la bandera?", opciones: ["Naranja, blanco, verde", "Rojo, amarillo, verde", "Azul, blanco, rojo"], correcta: 1 },
				{ pregunta: "¿Qué representa el naranja?", opciones: ["La sabana", "El desierto", "La sangre"], correcta: 1 },
				{ pregunta: "¿En qué región de África se encuentra?", opciones: ["África Occidental", "África Central", "África Oriental"], correcta: 1 },
				{ pregunta: "¿Qué representa el verde?", opciones: ["Los bosques", "La esperanza", "El islam"], correcta: 1 }
			],
			ecuador: [
				{ pregunta: "¿Qué animal aparece en el escudo ecuatoriano?", opciones: ["Cóndor", "Águila", "Quetzal"], correcta: 1 },
				{ pregunta: "¿Cuántas franjas tiene la bandera?", opciones: ["3", "4", "2"], correcta: 1 },
				{ pregunta: "¿Qué representa el color amarillo?", opciones: ["Riqueza del suelo", "El sol", "La libertad"], correcta: 1 },
				{ pregunta: "¿Qué montañas aparecen en el escudo?", opciones: ["Chimborazo", "Andes", "Aconcagua"], correcta: 1 },
				{ pregunta: "¿Qué barco representa el comercio?", opciones: ["Guayas", "Santa María", "Victoria"], correcta: 1 }
			],
			egipto: [
				{ pregunta: "¿Qué ave aparece en la bandera egipcia?", opciones: ["Águila de Saladino", "Halcón", "Buitre"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene la bandera?", opciones: ["Rojo, blanco, negro", "Verde, blanco, negro", "Rojo, amarillo, negro"], correcta: 1 },
				{ pregunta: "¿Qué representa el color negro?", opciones: ["Fin de la opresión", "La tierra", "El Nilo"], correcta: 1 },
				{ pregunta: "¿Qué río cruza Egipto?", opciones: ["Nilo", "Éufrates", "Tigris"], correcta: 1 },
				{ pregunta: "¿Qué construcción antigua es símbolo de Egipto?", opciones: ["Pirámides", "Coliseo", "Gran Muralla"], correcta: 1 }
			],
			ghana: [
				{ pregunta: "¿Qué estrella aparece en la bandera de Ghana?", opciones: ["Estrella negra", "Estrella roja", "Estrella dorada"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene la bandera?", opciones: ["Rojo, amarillo, verde", "Verde, blanco, rojo", "Amarillo, rojo, azul"], correcta: 1 },
				{ pregunta: "¿Qué representa el rojo?", opciones: ["Sangre de los mártires", "El sol", "La tierra"], correcta: 1 },
				{ pregunta: "¿Qué representa el verde?", opciones: ["Bosques y riqueza", "Esperanza", "Agricultura"], correcta: 1 },
				{ pregunta: "¿Ghana fue el primer país africano en?", opciones: ["Independizarse", "Tener bandera", "Unirse a la ONU"], correcta: 1 }
			],
			inglaterra: [
				{ pregunta: "¿Cómo se llama la cruz de la bandera inglesa?", opciones: ["Cruz de San Jorge", "Cruz de San Andrés", "Cruz de San Patricio"], correcta: 1 },
				{ pregunta: "¿De qué color es la cruz?", opciones: ["Rojo", "Blanco", "Azul"], correcta: 1 },
				{ pregunta: "¿Qué fondo tiene la bandera?", opciones: ["Blanco", "Azul", "Rojo"], correcta: 1 },
				{ pregunta: "¿San Jorge es el patrón de?", opciones: ["Inglaterra", "Escocia", "Gales"], correcta: 1 },
				{ pregunta: "¿Qué animal simboliza a Inglaterra?", opciones: ["León", "Águila", "Dragón"], correcta: 1 }
			],
			iran: [
				{ pregunta: "¿Qué símbolo central tiene la bandera iraní?", opciones: ["Allahu Akbar", "Emblema nacional", "Media luna"], correcta: 2 },
				{ pregunta: "¿Cuántas franjas tiene?", opciones: ["3", "4", "2"], correcta: 1 },
				{ pregunta: "¿Qué representan las franjas verdes y rojas?", opciones: ["Islam y coraje", "Naturaleza y sangre", "Esperanza y amor"], correcta: 1 },
				{ pregunta: "¿Qué escritura aparece en los bordes?", opciones: ["Allahu Akbar", "Bismillah", "Alá"], correcta: 1 },
				{ pregunta: "¿Cuántas veces se repite la escritura?", opciones: ["22", "11", "33"], correcta: 1 }
			],
			japon: [
				{ pregunta: "¿Qué representa el círculo rojo?", opciones: ["El sol", "La luna", "La sangre"], correcta: 1 },
				{ pregunta: "¿Cómo se llama la bandera japonesa?", opciones: ["Nisshōki", "Hinomaru", "Ambas"], correcta: 3 },
				{ pregunta: "¿De qué color es el fondo?", opciones: ["Blanco", "Amarillo", "Beige"], correcta: 1 },
				{ pregunta: "¿Cuándo se adoptó oficialmente?", opciones: ["1870", "1999", "Ambas"], correcta: 3 },
				{ pregunta: "¿Qué simboliza el color blanco?", opciones: ["Pureza", "Paz", "Honestidad"], correcta: 1 }
			],
			jordania: [
				{ pregunta: "¿Qué estrella aparece en la bandera jordana?", opciones: ["Estrella de siete puntas", "Estrella de cinco puntas", "Estrella de seis puntas"], correcta: 1 },
				{ pregunta: "¿Qué representa la estrella?", opciones: ["Los 7 versos del Corán", "Las 7 colinas de Amán", "Los 7 pilares del islam"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene la bandera?", opciones: ["Negro, blanco, verde, rojo", "Rojo, blanco, negro", "Verde, blanco, negro"], correcta: 1 },
				{ pregunta: "¿Qué triángulo rojo tiene?", opciones: ["A la izquierda", "En el centro", "A la derecha"], correcta: 1 },
				{ pregunta: "¿Jordania es un?", opciones: ["Reino", "República", "Emirato"], correcta: 1 }
			],
			marruecos: [
				{ pregunta: "¿Qué símbolo tiene la bandera marroquí?", opciones: ["Estrella de cinco puntas", "Media luna", "Sol"], correcta: 1 },
				{ pregunta: "¿De qué color es el fondo?", opciones: ["Rojo", "Verde", "Amarillo"], correcta: 1 },
				{ pregunta: "¿Qué representa el color rojo?", opciones: ["Los cherifianos", "La sangre", "El desierto"], correcta: 1 },
				{ pregunta: "¿De qué color es la estrella?", opciones: ["Verde", "Blanco", "Amarillo"], correcta: 1 },
				{ pregunta: "¿Cuál es la capital de Marruecos?", opciones: ["Rabat", "Casablanca", "Marrakech"], correcta: 1 }
			],
			mexico: [
				{ pregunta: "¿Qué significa el color verde de la bandera mexicana?", opciones: ["Esperanza", "Independencia", "Naturaleza"], correcta: 1 },
				{ pregunta: "¿Qué animal aparece en el escudo?", opciones: ["Águila", "Jaguar", "Serpiente"], correcta: 1 },
				{ pregunta: "¿En qué año se adoptó la bandera actual?", opciones: ["1821", "1917", "1968"], correcta: 3 },
				{ pregunta: "¿Qué sostiene el águila?", opciones: ["Una serpiente", "Una rama", "Un cactus"], correcta: 1 },
				{ pregunta: "¿Cuántos colores tiene la bandera?", opciones: ["3", "4", "5"], correcta: 1 }
			],
			nuevaZelanda: [
				{ pregunta: "¿Qué constelación aparece en la bandera?", opciones: ["Cruz del Sur", "Osa Mayor", "Orión"], correcta: 1 },
				{ pregunta: "¿Cuántas estrellas tiene la Cruz del Sur?", opciones: ["4", "5", "6"], correcta: 1 },
				{ pregunta: "¿Qué fondo tiene la bandera?", opciones: ["Azul", "Rojo", "Negro"], correcta: 1 },
				{ pregunta: "¿Qué representa la Union Jack?", opciones: ["Herencia británica", "Independencia", "Unidad"], correcta: 1 },
				{ pregunta: "¿Qué animal es símbolo de Nueva Zelanda?", opciones: ["Kiwi", "Canguro", "Pingüino"], correcta: 1 }
			],
			paraguay: [
				{ pregunta: "¿Qué tiene de especial la bandera paraguaya?", opciones: ["Tiene dos caras diferentes", "Es cuadrada", "No tiene escudo"], correcta: 1 },
				{ pregunta: "¿Qué símbolo tiene el reverso?", opciones: ["Sello del Tesoro", "León", "Sol"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene?", opciones: ["Rojo, blanco, azul", "Verde, blanco, rojo", "Amarillo, azul, rojo"], correcta: 1 },
				{ pregunta: "¿Qué representa el color rojo?", opciones: ["Justicia", "Patriotismo", "Valor"], correcta: 1 },
				{ pregunta: "¿Qué representa el color azul?", opciones: ["Paz", "Cielo", "Libertad"], correcta: 1 }
			],
			senegal: [
				{ pregunta: "¿Qué estrella tiene la bandera senegalesa?", opciones: ["Estrella verde", "Estrella roja", "Estrella amarilla"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene?", opciones: ["Verde, amarillo, rojo", "Rojo, blanco, verde", "Azul, blanco, rojo"], correcta: 1 },
				{ pregunta: "¿Qué representa el verde?", opciones: ["Esperanza", "Islam", "Naturaleza"], correcta: 1 },
				{ pregunta: "¿Qué representa el amarillo?", opciones: ["Riqueza", "Sol", "Arte"], correcta: 1 },
				{ pregunta: "¿Senegal se encuentra en?", opciones: ["África Occidental", "África Central", "África Oriental"], correcta: 1 }
			],
			sudafrica: [
				{ pregunta: "¿Qué forma tiene la bandera sudafricana?", opciones: ["Forma de Y", "Forma de X", "Forma de V"], correcta: 1 },
				{ pregunta: "¿Cuántos colores tiene?", opciones: ["6", "5", "4"], correcta: 1 },
				{ pregunta: "¿Qué representa el color negro?", opciones: ["Pueblo negro", "Recursos minerales", "Noche"], correcta: 1 },
				{ pregunta: "¿Qué representa el color verde?", opciones: ["Tierra", "Agricultura", "Bosques"], correcta: 1 },
				{ pregunta: "¿En qué año se adoptó?", opciones: ["1994", "1961", "1910"], correcta: 1 }
			],
			tunez: [
				{ pregunta: "¿Qué símbolo tiene la bandera tunecina?", opciones: ["Media luna y estrella", "Sol", "Águila"], correcta: 1 },
				{ pregunta: "¿De qué color es el fondo?", opciones: ["Rojo", "Verde", "Blanco"], correcta: 1 },
				{ pregunta: "¿De qué color es el círculo?", opciones: ["Blanco", "Rojo", "Verde"], correcta: 1 },
				{ pregunta: "¿Qué representa el rojo?", opciones: ["Sangre de los mártires", "El sol", "La tierra"], correcta: 1 },
				{ pregunta: "¿Túnez se encuentra en?", opciones: ["Norte de África", "Oriente Medio", "Europa"], correcta: 1 }
			],
			uruguay: [
				{ pregunta: "¿Qué aparece en el cuadrante blanco?", opciones: ["Sol de Mayo", "Estrella", "Escudo"], correcta: 1 },
				{ pregunta: "¿Cuántas franjas tiene la bandera?", opciones: ["9", "4", "5"], correcta: 1 },
				{ pregunta: "¿Qué representan las franjas?", opciones: ["Departamentos originales", "Ríos", "Batallas"], correcta: 1 },
				{ pregunta: "¿De qué color son las franjas?", opciones: ["Azul y blanco", "Azul y amarillo", "Blanco y rojo"], correcta: 1 },
				{ pregunta: "¿Cuántos rayos tiene el sol?", opciones: ["16", "8", "12"], correcta: 1 }
			],
			usa: [
				{ pregunta: "¿Cuántas estrellas tiene la bandera de EE.UU.?", opciones: ["50", "51", "52"], correcta: 1 },
				{ pregunta: "¿Qué representan las franjas rojas y blancas?", opciones: ["Los estados", "Las colonias originales", "Las guerras"], correcta: 2 },
				{ pregunta: "¿Cuál es el apodo de la bandera?", opciones: ["Old Glory", "Star Power", "Freedom Flag"], correcta: 1 },
				{ pregunta: "¿De qué color es la franja superior?", opciones: ["Blanca", "Roja", "Azul"], correcta: 2 },
				{ pregunta: "¿Cuándo se adoptó la bandera actual?", opciones: ["1777", "1812", "1960"], correcta: 3 }
			],
			uzbekistan: [
				{ pregunta: "¿Cuántas estrellas tiene la bandera uzbeka?", opciones: ["12", "10", "8"], correcta: 1 },
				{ pregunta: "¿Qué representa la media luna?", opciones: ["Islam", "Independencia", "Unidad"], correcta: 1 },
				{ pregunta: "¿Qué colores tiene?", opciones: ["Azul, blanco, verde", "Azul, rojo, verde", "Azul, blanco, rojo"], correcta: 1 },
				{ pregunta: "¿Qué representa el color azul?", opciones: ["Cielo y agua", "Libertad", "Paz"], correcta: 1 },
				{ pregunta: "¿Uzbekistán se encuentra en?", opciones: ["Asia Central", "Europa del Este", "Oriente Medio"], correcta: 1 }
			]
		};
	},

	getRandomTrivia: function(country) {
		if (!this.trivias[country]) {
			console.warn(`⚠️ No hay trivias para ${country}`);
			return null;
		}

		const paisTrivias = this.trivias[country];
		return paisTrivias[Math.floor(Math.random() * paisTrivias.length)];
	},

	hasTrivias: function(country) {
		return this.trivias[country] && this.trivias[country].length > 0;
	},

	displayTrivia: function(trivia) {
		if (!trivia) return false;

		const modal = document.getElementById('triviaModal');
		const preguntaText = document.getElementById('preguntaText');
		const opcion1 = document.getElementById('opcion1');
		const opcion2 = document.getElementById('opcion2');
		const opcion3 = document.getElementById('opcion3');
		const resultadoDiv = document.getElementById('resultado');

		modal.style.display = 'block';
		preguntaText.innerText = trivia.pregunta;
		opcion1.innerText = trivia.opciones[0];
		opcion2.innerText = trivia.opciones[1];
		opcion3.innerText = trivia.opciones[2];
		resultadoDiv.innerText = '';
		resultadoDiv.className = 'resultado';

		// Configurar eventos de opciones
		document.querySelectorAll('.opcion-btn').forEach(btn => {
			btn.classList.remove('correcta', 'incorrecta');
			btn.onclick = () => this.checkAnswer(btn, trivia.correcta);
		});

		return true;
	},

	checkAnswer: function(selectedButton, correctAnswer) {
		const selectedOption = parseInt(selectedButton.dataset.opcion);
		const allButtons = document.querySelectorAll('.opcion-btn');
		const resultadoDiv = document.getElementById('resultado');

		// Deshabilitar más clicks
		allButtons.forEach(btn => {
			btn.onclick = null;
		});

		if (selectedOption === correctAnswer) {
			selectedButton.classList.add('correcta');
			resultadoDiv.textContent = '✅ ¡Correcto!';
			resultadoDiv.className = 'resultado correcto';
		} else {
			selectedButton.classList.add('incorrecta');
			resultadoDiv.textContent = '❌ Incorrecto';
			resultadoDiv.className = 'resultado incorrecto';

			// Mostrar la respuesta correcta
			document.querySelector(`[data-opcion="${correctAnswer}"]`).classList.add('correcta');
		}
	}
};
//a
