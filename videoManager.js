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
			'mexico': ['k9XdQqBUf1E'],      // México
			'usa': ['JZyL_7Xl3-0'],         // USA
			'argentina': ['lXaH_OHdGtE'],   // Argentina
			'brasil': ['v8L_eB1fX_c'],      // Brasil
			'japon': ['SR9gM1y4_6M'],       // Japón
			'canada': ['K4RZxfeUBeY'],      // Canadá
			'colombia': ['gUbhN4m6S1s'],    // Colombia
			'coreaDelSur': ['ZuzCFh8uh-0'], // Corea del Sur
			'egipto': ['B_1WKdLlM6U'],      // Egipto
			'inglaterra': ['CTMx1w1jjEQ'],  // Inglaterra
			'arabiaSaudita': ['cU3ckWZ6idI'],
			'argelia': ['9F7He5h5Tio'],
			'australia': ['E2evABYKrFY'],
			'caboVerde': [''],
			'catar': [''],
			'costaDeMarfil': [''],
			'ecuador': [''],
			'ghana': [''],
			'iran': [''],
			'jordania': [''],
			'marruecos': [''],
			'nuevaZelanda': [''],
			'paraguay': [''],
			'senegal': [''],
			'sudafrica': [''],
			'tunez': [''],
			'uruguay': [''],
			'uzbekistan': ['']
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
