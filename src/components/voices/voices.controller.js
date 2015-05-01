angular.module('acidification')


  .controller('VoicesCtrl',

    ['$sce', function ($sce) {
      'use strict';
		  this.config = {
			sources: [
				{src: $sce.trustAsResourceUrl('assets/videos/Dune.mp4'), type: 'video/mp4'}
			],
			tracks: [
				{
					src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
					kind: 'subtitles',
					srclang: 'en',
					label: 'English'
				}
			],
			theme: '../../bower_components/videogular-themes-default/videogular.css',
			plugins: {
				poster: 'http://www.videogular.com/assets/images/videogular.png'
			}
		  };
    }]
             );
