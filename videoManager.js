// videoManager.js - Gestión de videos de YouTube (VERSIÓN CORREGIDA)
const VideoManager = {
	player: null,
	videos: {},
	currentVideoId: null,

	init: function() {
		this.loadVideos();
		this.setupYouTubeAPI();
		console.log("🎥 VideoManager inicializado");
	},

	loadVideos: function() {
		this.videos = {
			'mexico': ['dQw4w9WgXcQ'],
			'usa': ['JZyL_7Xl3-0'],
			'argentina': ['lXaH_OHdGtE'],
			'brasil': ['v8L_eB1fX_c'],
			'japon': ['SR9gM1y4_6M'],
			'canada': ['K4RZxfeUBeY'],
			'colombia': ['gUbhN4m6S1s'],
			'coreaDelSur': ['ZuzCFh8uh-0'],
			'egipto': ['B_1WKdLlM6U'],
			'inglaterra': ['CTMx1w1jjEQ'],
			'arabiaSaudita': ['cU3ckWZ6idI'],
			'argelia': ['9F7He5h5Tio'],
			'australia': ['E2evABYKrFY'],
			// Agrega los demás países cuando tengas sus videos
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
		// Solo cargar la API si no está ya cargada
		if (!window.YT) {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}
	},

	playCountryVideo: function(country) {
		if (!this.videos[country] || !this.videos[country][0]) {
			alert('No hay videos disponibles para este país');
			return false;
		}

		const videoId = this.videos[country][0];

		// Validar que el videoId no esté vacío
		if (!videoId || videoId.trim() === '') {
			alert('El video para este país no está configurado');
			return false;
		}

		this.currentVideoId = videoId;
		const youtubeModal = document.getElementById('youtubeModal');
		youtubeModal.style.display = 'block';

		// Esperar a que el modal esté visible antes de cargar el video
		setTimeout(() => {
			this.loadVideo(videoId);
		}, 100);

		return true;
	},

	loadVideo: function(videoId) {
		const youtubePlayer = document.getElementById('youtubePlayer');

		// Limpiar contenedor primero
		youtubePlayer.innerHTML = '';

		// Crear nuevo iframe
		const iframe = document.createElement('iframe');
		iframe.width = '100%';
		iframe.height = '100%';
		iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
		iframe.frameBorder = '0';
		iframe.allow = 'autoplay; encrypted-media';
		iframe.allowFullscreen = true;

		youtubePlayer.appendChild(iframe);

		console.log(`🎥 Cargando video: ${videoId}`);
	},

	// Función alternativa usando la API oficial (más confiable)
	loadVideoWithAPI: function(videoId) {
		const youtubePlayer = document.getElementById('youtubePlayer');
		youtubePlayer.innerHTML = '';

		// Usar la API de YouTube si está disponible
		if (window.YT && YT.Player) {
			this.player = new YT.Player('youtubePlayer', {
				height: '100%',
				width: '100%',
				videoId: videoId,
				playerVars: {
					'autoplay': 1,
					'playsinline': 1,
					'controls': 1,
					'rel': 0,
					'modestbranding': 1,
					'enablejsapi': 1
				},
				events: {
					'onReady': this.onPlayerReady,
					'onStateChange': this.onPlayerStateChange,
					'onError': this.onPlayerError
				}
			});
		} else {
			// Fallback: usar iframe directo
			this.loadVideo(videoId);
		}
	},

	onPlayerReady: function(event) {
		console.log('✅ Player listo');
		// No autoplay automático para evitar bloqueos
	},

	onPlayerStateChange: function(event) {
		console.log('Estado del player:', event.data);
		if (event.data == YT.PlayerState.ENDED) {
			VideoManager.closeVideo();
		}
	},

	onPlayerError: function(event) {
		console.error('❌ Error en el player:', event.data);
		alert('Error al cargar el video. Intenta con otro video.');
		VideoManager.closeVideo();
	},

	closeVideo: function() {
		const youtubeModal = document.getElementById('youtubeModal');
		youtubeModal.style.display = 'none';

		// Detener el video
		if (this.player && this.player.stopVideo) {
			this.player.stopVideo();
		}

		// Limpiar el iframe
		const youtubePlayer = document.getElementById('youtubePlayer');
		youtubePlayer.innerHTML = '';

		this.currentVideoId = null;
	},

	hasVideos: function(country) {
		return this.videos[country] && this.videos[country].length > 0 && this.videos[country][0] !== '';
	}
};

// Función global requerida por la API de YouTube
function onYouTubeIframeAPIReady() {
	console.log('✅ YouTube API lista');
	// El player se inicializará cuando sea necesario
}
