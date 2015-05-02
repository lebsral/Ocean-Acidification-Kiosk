angular.module('acidification')


.controller('VoicesCtrl',

    ['$sce', function ($sce) {
    'use strict';
    this.config = {
      sources: [
        {
          src: $sce.trustAsResourceUrl('assets/videos/Dune.mp4'),
          type: 'video/mp4'
        }
   ],
      tracks: [
        {
          src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
          kind: 'subtitles',
          srclang: 'en',
          label: 'English'
    }
   ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
    };
    }]
);


["$sce", "$timeout", function ($sce, $timeout) {
            var controller = this;
            controller.state = null;
            controller.API = null;
            controller.currentVideo = 0;


            controller.onPlayerReady = function(API) {
                controller.API = API;
            };

            controller.onCompleteVideo = function() {
                controller.isCompleted = true;

                controller.currentVideo++;

                if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

                controller.setVideo(controller.currentVideo);

            };



            controller.videos = [
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Angela.mp4"),
                    type: "video/mp4",
                	name: "Angela"}
                    ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: "true"
                    }
                ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
            },
                      {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Chris.mp4"),
                    type: "video/mp4",
                	name: "Chris"}
                    ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: "true"
                    }
                ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
            },
                      {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Dune.mp4"),
                    type: "video/mp4",
                	name: "Dune"}
                    ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: "true"
                    }
                ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
            },
                      {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Jeremy.mp4"),
                    type: "video/mp4",
                	name: "Jeremy"}
                    ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: "true"
                    }
                ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
            },
                      {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Shalin.mp4"),
                    type: "video/mp4",
                	name: "Shalin"}
                    ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: "true"
                    }
                ],
      theme: 'https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css',
      plugins: {
        poster: 'http://www.videogular.com/assets/images/videogular.png'
      }
            },
              ]
}
 ];



            controller.config = {
                preload: "none",
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                },
                plugins: {
                    poster: "http://www.akmarine.org/wp-content/themes/akmarine/images/logo.png"
                }
            };

            controller.setVideo = function(index) {
                controller.API.stop();
                controller.currentVideo = index;
                controller.config.sources = controller.videos[index].sources;
                $timeout(controller.API.play.bind(controller.API), 100);
            };

        }]
    );
