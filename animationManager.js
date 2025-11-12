// animationManager.js - Gestión de animaciones de banderas
const AnimationManager = {
	isWaving: false,

	init: function() {
		console.log("🎬 AnimationManager inicializado");
	},

	toggleWave: function() {
		if (!CountryManager.isValidCountry()) {
			alert('Escanea una bandera primero');
			return false;
		}

		const country = CountryManager.getCurrentCountry();
		const flagId = this.getFlagId(country);
		const flag = document.getElementById(flagId);

		if (!flag) {
			console.warn(`⚠️ No se encontró la bandera ${flagId} para animar`);
			return false;
		}

		if (!this.isWaving) {
			this.startWave(flag);
		} else {
			this.stopWave();
		}

		return true;
	},

	startWave: function(flag) {
		flag.setAttribute('flag-wave', {
			amplitude: 0.035,
			speed: 6,
			frequency: 10
		});

		this.isWaving = true;
		UIManager.updateWaveButton(true);
		console.log('🎌 Bandera ondeando');
	},

	stopWave: function() {
		const country = CountryManager.getCurrentCountry();
		if (country) {
			const flagId = this.getFlagId(country);
			const flag = document.getElementById(flagId);

			if (flag) {
				flag.removeAttribute('flag-wave');
			}
		}

		this.isWaving = false;
		UIManager.updateWaveButton(false);
		console.log('🛑 Ondeo detenido');
	},

	stopWaving: function() {
		if (this.isWaving) {
			this.stopWave();
		}
	},

	// NUEVA FUNCIÓN: Mapeo correcto de países a IDs de banderas
	getFlagId: function(country) {
		const flagIds = {
			'mexico': 'banderaMexico',
			'usa': 'banderaUSA',
			'argentina': 'banderaArgentina',
			'brasil': 'banderaBrasil',
			'japon': 'banderaJapon',
			'canada': 'banderaCanada',
			'colombia': 'banderaColombia',
			'coreaDelSur': 'banderaCoreaDelSur',
			'egipto': 'banderaEgipto',
			'inglaterra': 'banderaInglaterra',
			'arabiaSaudita': 'banderaArabiaSaudita',
			'argelia': 'banderaArgelia',
			'australia': 'banderaAustralia',
			'caboVerde': 'banderaCaboVerde',
			'catar': 'banderaCatar',
			'costaDeMarfil': 'banderaCostaDeMarfil',
			'ecuador': 'banderaEcuador',
			'ghana': 'banderaGhana',
			'iran': 'banderaIran',
			'jordania': 'banderaJordania',
			'marruecos': 'banderaMarruecos',
			'nuevaZelanda': 'banderaNuevaZelanda',
			'paraguay': 'banderaParaguay',
			'senegal': 'banderaSenegal',
			'sudafrica': 'banderaSudafrica',
			'tunez': 'banderaTunez',
			'uruguay': 'banderaUruguay',
			'uzbekistan': 'banderaUzbekistan'
		};

		return flagIds[country] || null;
	},

	// Función auxiliar para capitalizar (por si acaso)
	capitalizeFirstLetter: function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	isFlagWaving: function() {
		return this.isWaving;
	}
};
