// videoManager.js - Gestión de videos de YouTube
const VideoManager = {
	player: null,
	videos: {},

	init: function() {
		this.loadVideos();
		this.setupYouTubeAPI();
		console.log("🎥 VideoManager inicializado");
	},

	loadVideos: function() {
		this.videos = {
			mexico: ['0DFRNX3EZFE&t=20s'], // Reemplaza con IDs reales
			usa: ['9bZkp7q19f0'],
			argentina: ['kJQP7kiw5Fk'],
			brasil: ['60ItHLz5WEA'],
			japon: ['otN2_-B4Hc8'],
			canada: ['6Whgn_iE5uc'],
			colombia: ['dQw4w9WgXcQ'],
			coreaDelSur: ['9bZkp7q19f0'],
			egipto: ['kJQP7kiw5Fk'],
			inglaterra: ['60ItHLz5WEA'],
			arabiaSaudita: ['dQw4w9WgXcQ'],
			argelia: ['9bZkp7q19f0'],
			australia: ['kJQP7kiw5Fk'],
			caboVerde: ['60ItHLz5WEA'],
			catar: ['dQw4w9WgXcQ'],
			costaDeMarfil: ['9bZkp7q19f0'],
			ecuador: ['kJQP7kiw5Fk'],
			ghana: ['60ItHLz5WEA'],
			iran: ['dQw4w9WgXcQ'],
			jordania: ['9bZkp7q19f0'],
			marruecos: ['kJQP7kiw5Fk'],
			nuevaZelanda: ['60ItHLz5WEA'],
			paraguay: ['dQw4w9WgXcQ'],
			senegal: ['9bZkp7q19f0'],
			sudafrica: ['kJQP7kiw5Fk'],
			tunez: ['60ItHLz5WEA'],
			uruguay: ['dQw4w9WgXcQ'],
			uzbekistan: ['9bZkp7q19f0']
		};
	},

	setupYouTubeAPI: function() {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},

	playCountryVideo: function(country) {
		if (!this.videos[country] || this.videos[country].length === 0) {
			alert('No hay videos disponibles para este país');
			return false;
		}

		const videoId = this.videos[country][0]; // Primer video disponible
		const youtubeModal = document.getElementById('youtubeModal');

		youtubeModal.style.display = 'block';
		this.loadVideo(videoId);

		return true;
	},

	loadVideo: function(videoId) {
		const youtubePlayer = document.getElementById('youtubePlayer');
		youtubePlayer.innerHTML = '';

		this.player = new YT.Player('youtubePlayer', {
			height: '100%',
			width: '100%',
			videoId: videoId,
			playerVars: {
				'playsinline': 1,
				'controls': 1,
				'rel': 0,
				'modestbranding': 1
			},
			events: {
				'onReady': this.onPlayerReady,
				'onStateChange': this.onPlayerStateChange
			}
		});
	},

	onPlayerReady: function(event) {
		event.target.playVideo();
	},

	onPlayerStateChange: function(event) {
		if (event.data == YT.PlayerState.ENDED) {
			VideoManager.closeVideo();
		}
	},

	closeVideo: function() {
		const youtubeModal = document.getElementById('youtubeModal');
		youtubeModal.style.display = 'none';

		if (this.player && this.player.stopVideo) {
			this.player.stopVideo();
		}
	},

	hasVideos: function(country) {
		return this.videos[country] && this.videos[country].length > 0;
	}
};
