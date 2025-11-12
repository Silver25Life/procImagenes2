// app.js - Archivo principal que inicializa la aplicación
document.addEventListener("DOMContentLoaded", function() {
	console.log("✅ DOM Cargado - Iniciando aplicación AR Trivia");

	// Inicializar módulos
	CountryManager.init();
	TriviaManager.init();
	VideoManager.init();
	FilterManager.init();
	AnimationManager.init();
	UIManager.init();

	console.log("🎯 Todos los módulos inicializados correctamente");
});
