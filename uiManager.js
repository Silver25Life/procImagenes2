// uiManager.js - Gestión de la interfaz de usuario
const UIManager = {
	init: function() {
		this.setupEventListeners();
		this.setupModalEvents();
		console.log("🖥️ UIManager inicializado");
	},

	setupEventListeners: function() {
		// Botón de trivia
		document.getElementById('triviaButton').addEventListener('click', () => {
			if (!CountryManager.isValidCountry()) return;

			const country = CountryManager.getCurrentCountry();
			if (!TriviaManager.hasTrivias(country)) {
				alert('No hay trivias disponibles para este país');
				return;
			}

			const trivia = TriviaManager.getRandomTrivia(country);
			TriviaManager.displayTrivia(trivia);
		});

		// Botón de filtros
		document.getElementById('filterButton').addEventListener('click', () => {
			FilterManager.nextFilter();
		});

		// Botón de video
		document.getElementById('videoButton').addEventListener('click', () => {
			if (!CountryManager.isValidCountry()) {
				alert('Escanea una bandera primero');
				return;
			}

			const country = CountryManager.getCurrentCountry();
			VideoManager.playCountryVideo(country);
		});

		// Botón de animación
		document.getElementById('animButton').addEventListener('click', () => {
			AnimationManager.toggleWave();
		});
	},

	setupModalEvents: function() {
		// Cerrar modal de trivia
		document.getElementById('closeModal').addEventListener('click', () => {
			document.getElementById('triviaModal').style.display = 'none';
		});

		// Cerrar modal de YouTube
		document.getElementById('closeYoutube').addEventListener('click', () => {
			VideoManager.closeVideo();
		});

		// Cerrar modales al hacer clic fuera
		[document.getElementById('triviaModal'), document.getElementById('youtubeModal')].forEach(modal => {
			modal.addEventListener('click', (e) => {
				if (e.target === modal) {
					modal.style.display = 'none';
					if (modal.id === 'youtubeModal') {
						VideoManager.closeVideo();
					}
				}
			});
		});
	},

	showTriviaButton: function() {
		document.getElementById('triviaButton').style.display = 'block';
	},

	hideTriviaButton: function() {
		document.getElementById('triviaButton').style.display = 'none';
	},

	updateWaveButton: function(isWaving) {
		const animButton = document.getElementById('animButton');
		if (isWaving) {
			animButton.textContent = 'Detener Ondeo';
			animButton.style.backgroundColor = '#f44336';
		} else {
			animButton.textContent = 'Ondear Bandera';
			animButton.style.backgroundColor = '#673ab7';
		}
	},

	showMessage: function(message, type = 'info') {
		// Podrías implementar un sistema de notificaciones aquí
		console.log(`💬 ${type.toUpperCase()}: ${message}`);
	}
};
