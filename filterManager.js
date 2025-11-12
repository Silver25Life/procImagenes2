// filterManager.js - Gestión de filtros de cámara
const FilterManager = {
	filters: [
		'none',
		'grayscale(100%)',
		'sepia(80%)',
		'invert(100%)',
		'hue-rotate(90deg)',
		'contrast(200%)',
		'saturate(200%)',
		'blur(2px)',
		'brightness(150%)'
	],
	currentFilterIndex: 0,

	init: function() {
		console.log("🎨 FilterManager inicializado");
	},

	nextFilter: function() {
		this.currentFilterIndex = (this.currentFilterIndex + 1) % this.filters.length;
		this.applyCurrentFilter();

		console.log(`🎨 Filtro aplicado: ${this.filters[this.currentFilterIndex]}`);
		return this.filters[this.currentFilterIndex];
	},

	applyCurrentFilter: function() {
		const scene = document.querySelector('a-scene');
		if (scene) {
			scene.style.filter = this.filters[this.currentFilterIndex];
		}
	},

	getCurrentFilter: function() {
		return this.filters[this.currentFilterIndex];
	},

	setFilter: function(index) {
		if (index >= 0 && index < this.filters.length) {
			this.currentFilterIndex = index;
			this.applyCurrentFilter();
		}
	},

	resetFilter: function() {
		this.currentFilterIndex = 0;
		this.applyCurrentFilter();
	}
};
