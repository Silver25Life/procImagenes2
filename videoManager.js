// videoManager.js - Versión móvil optimizada
const VideoManager = {
	player: null,
	videos: {},
	currentVideoId: null,

	init: function() {
		this.loadVideos();
		this.setupYouTubeAPI();
		console.log("🎥 VideoManager inicializado (Modo Móvil)");
	},

	loadVideos: function() {
		this.videos = {
			'mexico': ['dQw4w9WgXcQ'],      // México
			'usa': ['dQw4w9WgXcQ'],         // USA
			'argentina': ['dQw4w9WgXcQ'],   // Argentina
			'brasil': ['dQw4w9WgXcQ'],      // Brasil
			'japon': ['dQw4w9WgXcQ'],       // Japón
			'canada': ['dQw4w9WgXcQ'],      // Canadá
			'colombia': ['dQw4w9WgXcQ'],    // Colombia
			'coreaDelSur': ['dQw4w9WgXcQ'], // Corea del Sur
			'egipto': ['dQw4w9WgXcQ'],      // Egipto
			'inglaterra': ['dQw4w9WgXcQ'],  // Inglaterra
			'arabiaSaudita': ['dQw4w9WgXcQ'],
			'argelia': ['dQw4w9WgXcQ'],
			'australia': ['dQw4w9WgXcQ'],
			'caboVerde': ['dQw4w9WgXcQ'],
			'catar': ['dQw4w9WgXcQ'],
			'costaDeMarfil': ['dQw4w9WgXcQ'],
			'ecuador': ['dQw4w9WgXcQ'],
			'ghana': ['dQw4w9WgXcQ'],
			'iran': ['dQw4w9WgXcQ'],
			'jordania': ['dQw4w9WgXcQ'],
			'marruecos': ['dQw4w9WgXcQ'],
			'nuevaZelanda': ['dQw4w9WgXcQ'],
			'paraguay': ['dQw4w9WgXcQ'],
			'senegal': ['dQw4w9WgXcQ'],
			'sudafrica': ['dQw4w9WgXcQ'],
			'tunez': ['dQw4w9WgXcQ'],
			'uruguay': ['dQw4w9WgXcQ'],
			'uzbekistan': ['dQw4w9WgXcQ']
		};
	},

	setupYouTubeAPI: function() {
		if (!window.YT) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			document.head.appendChild(tag);
		}
	},

	playCountryVideo: function(country) {
		if (!this.videos[country] || !this.videos[country][0]) {
			alert('No hay videos disponibles para este país');
			return false;
		}

		const videoId = this.videos[country][0];

		if (!videoId || videoId.trim() === '') {
			alert('El video para este país no está configurado');
			return false;
		}

		this.currentVideoId = videoId;
		this.showVideoModal(videoId);
		return true;
	},

	showVideoModal: function(videoId) {
		const youtubeModal = document.getElementById('youtubeModal');
		youtubeModal.style.display = 'block';

		// Usar iframe directo (más confiable en móvil)
		this.loadVideoSimple(videoId);
	},

	// Método SIMPLE - Más confiable en móvil
	loadVideoSimple: function(videoId) {
		const youtubePlayer = document.getElementById('youtubePlayer');

		// Limpiar y crear iframe simple
		youtubePlayer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&modestbranding=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="width: 100%; height: 100%; border: none;"
            ></iframe>
        `;

		console.log(`📱 Video cargado (modo móvil): ${videoId}`);
	},

	// Método alternativo con botón de play manual (recomendado para móvil)
	loadVideoWithPlayButton: function(videoId) {
		const youtubePlayer = document.getElementById('youtubePlayer');

		youtubePlayer.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%;">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&modestbranding=1&showinfo=0" 
                    frameborder="0" 
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="width: 100%; height: 100%; border: none;"
                    id="youtubeIframe"
                ></iframe>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    <button onclick="VideoManager.startPlayback()" 
                            style="background: #ff0000; color: white; border: none; padding: 15px 30px; border-radius: 50px; font-size: 18px; cursor: pointer;">
                        ▶ Reproducir
                    </button>
                </div>
            </div>
        `;
	},

	startPlayback: function() {
		// Esta función se llamará cuando el usuario haga clic en "Reproducir"
		const iframe = document.getElementById('youtubeIframe');
		if (iframe) {
			// Cambiar la URL para incluir autoplay después de la interacción del usuario
			const newSrc = iframe.src + '&autoplay=1';
			iframe.src = newSrc;
		}
	},

	closeVideo: function() {
		const youtubeModal = document.getElementById('youtubeModal');
		youtubeModal.style.display = 'none';

		// Limpiar el reproductor
		const youtubePlayer = document.getElementById('youtubePlayer');
		youtubePlayer.innerHTML = '';

		this.currentVideoId = null;
	},

	hasVideos: function(country) {
		return this.videos[country] && this.videos[country].length > 0 && this.videos[country][0] !== '';
	}
};

// Función global para YouTube API
function onYouTubeIframeAPIReady() {
	console.log('✅ YouTube API lista para móvil');
}
