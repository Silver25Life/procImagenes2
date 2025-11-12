// countryManager.js - Gestión de países y targets
const CountryManager = {
	currentCountry: null,
	countryTargets: {},

	init: function() {
		this.loadCountryConfig();
		this.setupTargetEvents();
		console.log("🌍 CountryManager inicializado");
	},

	loadCountryConfig: function() {
		this.countryTargets = {
			'mexicoTarget': 'mexico',
			'usaTarget': 'usa',
			'argentinaTarget': 'argentina',
			'brasilTarget': 'brasil',
			'japonTarget': 'japon',
			'canadaTarget': 'canada',
			'colombiaTarget': 'colombia',
			'coreaDelSurTarget': 'coreaDelSur',
			'egiptoTarget': 'egipto',
			'inglaterraTarget': 'inglaterra',
			'arabiaSauditaTarget': 'arabiaSaudita',
			'argeliaTarget': 'argelia',
			'australiaTarget': 'australia',
			'caboVerdeTarget': 'caboVerde',
			'catarTarget': 'catar',
			'costaDeMarfilTarget': 'costaDeMarfil',
			'ecuadorTarget': 'ecuador',
			'ghanaTarget': 'ghana',
			'iranTarget': 'iran',
			'jordaniaTarget': 'jordania',
			'marruecosTarget': 'marruecos',
			'nuevaZelandaTarget': 'nuevaZelanda',
			'paraguayTarget': 'paraguay',
			'senegalTarget': 'senegal',
			'sudafricaTarget': 'sudafrica',
			'tunezTarget': 'tunez',
			'uruguayTarget': 'uruguay',
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
