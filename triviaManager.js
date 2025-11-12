// triviaManager.js - Gestión de trivias y preguntas
const TriviaManager = {
	trivias: {},

	init: function() {
		this.loadTrivias();
		console.log("❓ TriviaManager inicializado");
	},

	loadTrivias: function() {
		this.trivias = {
			mexico: [
				{ pregunta: "¿Qué significa el color verde de la bandera mexicana?", opciones: ["Esperanza", "Independencia", "Naturaleza"], correcta: 1 },
				{ pregunta: "¿Qué animal aparece en el escudo?", opciones: ["Águila", "Jaguar", "Serpiente"], correcta: 1 },
				{ pregunta: "¿En qué año se adoptó la bandera actual?", opciones: ["1821", "1917", "1968"], correcta: 3 },
				{ pregunta: "¿Qué sostiene el águila?", opciones: ["Una serpiente", "Una rama", "Un cactus"], correcta: 1 },
				{ pregunta: "¿Cuántos colores tiene la bandera?", opciones: ["3", "4", "5"], correcta: 1 }
			],
			usa: [
				{ pregunta: "¿Cuántas estrellas tiene la bandera de EE.UU.?", opciones: ["50", "51", "52"], correcta: 1 },
				{ pregunta: "¿Qué representan las franjas rojas y blancas?", opciones: ["Los estados", "Las colonias originales", "Las guerras"], correcta: 2 },
				{ pregunta: "¿Cuál es el apodo de la bandera?", opciones: ["Old Glory", "Star Power", "Freedom Flag"], correcta: 1 },
				{ pregunta: "¿De qué color es la franja superior?", opciones: ["Blanca", "Roja", "Azul"], correcta: 2 },
				{ pregunta: "¿Cuándo se adoptó la bandera actual?", opciones: ["1777", "1812", "1960"], correcta: 3 }
			],
			argentina: [
				{ pregunta: "¿Qué representa el sol en la bandera argentina?", opciones: ["El Sol de Mayo", "La independencia", "La riqueza"], correcta: 1 },
				{ pregunta: "¿Cuántas franjas horizontales tiene?", opciones: ["2", "3", "4"], correcta: 2 },
				{ pregunta: "¿De qué color es el sol?", opciones: ["Amarillo", "Dorado", "Naranja"], correcta: 2 },
				{ pregunta: "¿En qué año se creó la bandera?", opciones: ["1810", "1812", "1816"], correcta: 2 },
				{ pregunta: "¿Quién diseñó la bandera?", opciones: ["Manuel Belgrano", "José de San Martín", "Bernardino Rivadavia"], correcta: 1 }
			],
			brasil: [
				{ pregunta: "¿Qué significa el lema 'Ordem e Progresso'?", opciones: ["Orden y Progreso", "Libertad y Justicia", "Unión y Fuerza"], correcta: 1 },
				{ pregunta: "¿Qué representa la esfera azul?", opciones: ["El cielo de Río", "La esfera celeste", "El océano"], correcta: 2 },
				{ pregunta: "¿Cuántas estrellas tiene la bandera?", opciones: ["26", "27", "28"], correcta: 2 },
				{ pregunta: "¿Qué color predomina?", opciones: ["Verde", "Amarillo", "Azul"], correcta: 1 },
				{ pregunta: "¿Qué representa la estrella solitaria?", opciones: ["Río de Janeiro", "São Paulo", "Brasilia"], correcta: 3 }
			],
			japon: [
				{ pregunta: "¿Qué representa el círculo rojo?", opciones: ["El sol", "La luna", "La sangre"], correcta: 1 },
				{ pregunta: "¿Cómo se llama la bandera japonesa?", opciones: ["Nisshōki", "Hinomaru", "Ambas"], correcta: 3 },
				{ pregunta: "¿De qué color es el fondo?", opciones: ["Blanco", "Amarillo", "Beige"], correcta: 1 },
				{ pregunta: "¿Cuándo se adoptó oficialmente?", opciones: ["1870", "1999", "Ambas"], correcta: 3 },
				{ pregunta: "¿Qué simboliza el color blanco?", opciones: ["Pureza", "Paz", "Honestidad"], correcta: 1 }
			]
			// Agrega más países aquí...
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
