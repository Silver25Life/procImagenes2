// countryManager.js - Gestión de países y targets
const CountryManager = {
	currentCountry: null,
	countryTargets: {},

	init: function() {
		this.loadCountryConfig();
		this.setupTargetEvents();
		console.log("🌍 CountryManager inicializado");
	},

	// countryManager.js - En la función loadCountryConfig()
	loadCountryConfig: function() {
		this.countryTargets = {
			'arabiaSauditaTarget': 'arabiaSaudita',
			'argeliaTarget': 'argelia',
			'argentinaTarget': 'argentina',
			'australiaTarget': 'australia',
			'brasilTarget': 'brasil',
			'caboVerdeTarget': 'caboVerde',
			'canadaTarget': 'canada',
			'catarTarget': 'catar',
			'colombiaTarget': 'colombia',
			'coreaDelSurTarget': 'coreaDelSur',
			'costaDeMarfilTarget': 'costaDeMarfil',
			'ecuadorTarget': 'ecuador',
			'egiptoTarget': 'egipto',
			'ghanaTarget': 'ghana',
			'inglaterraTarget': 'inglaterra',
			'iranTarget': 'iran',
			'japonTarget': 'japon',
			'jordaniaTarget': 'jordania',
			'marruecosTarget': 'marruecos',
			'mexicoTarget': 'mexico',
			'nuevaZelandaTarget': 'nuevaZelanda',
			'paraguayTarget': 'paraguay',
			'senegalTarget': 'senegal',
			'sudafricaTarget': 'sudafrica',
			'tunezTarget': 'tunez',
			'uruguayTarget': 'uruguay',
			'usaTarget': 'usa',
			'uzbekistanTarget': 'uzbekistan'
		};
	},
	setupTargetEvents: function() {
		Object.keys(this.countryTargets).forEach(targetId => {
			const target = document.getElementById(targetId);
			if (target) {
				target.addEventListener('targetFound', () => {
					this.currentCountry = this.countryTargets[targetId];
					UIManager.showTriviaButton();
					console.log(`🎯 ${this.currentCountry} detectado`);
				});

				target.addEventListener('targetLost', () => {
					UIManager.hideTriviaButton();
					AnimationManager.stopWaving();
					console.log(`🏁 ${this.currentCountry} perdido`);
				});
			}
		});
	},

	getCurrentCountry: function() {
		return this.currentCountry;
	},

	isValidCountry: function() {
		return this.currentCountry !== null;
	}
};
