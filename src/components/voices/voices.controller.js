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

//
//
//["$sce", "$timeout", function ($sce, $timeout) {
//            var controller = this;
//            controller.state = null;
//            controller.API = null;
//            controller.currentVideo = 0;
//
//
//            controller.onPlayerReady = function(API) {
//                controller.API = API;
//            };
//
//            controller.onCompleteVideo = function() {
//                controller.isCompleted = true;
//
//                controller.currentVideo++;
//
//                if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;
//
//                controller.setVideo(controller.currentVideo);
//
//            };
//
//
//
//            controller.videos = [
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Acidifying the Ocean   Assessing Impacts on Coral Reefs.mp4"),
//                    type: "video/mp4",
//                    tags: ["long", "short"],
//                	name: "Acidifying the Ocean   Assessing Impacts on Coral Reefs"}
//                    ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean Acidification  Causes, Time Scales and Consequences - 2012 Dickson Prize Lecture.mp4"),
//                    type: "video/mp4",
//                    tags: ["long"],
//                 	name: "Ocean Acidification  Causes, Time Scales and Consequences - 2012 Dickson Prize Lecture"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/GC44C. Special Lecture in Ocean Acidification.mp4"),
//                    type: "video/mp4",
//                    tags: ["long"],
//                 	name: "GC44C. Special Lecture in Ocean Acidification"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean acidification  Connecting science, industry, policy and public.mp4"),
//                    type: "video/mp4",
//                    tags: ["long"],
//                 	name: "Ocean acidification  Connecting science, industry, policy and public"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/ocean acidification experiment.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "ocean acidification experiment"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean Acidification 1 2.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Ocean Acidification 1 2"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Life on the edge  Is ocean acidification a threat to deep-sea life?.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Life on the edge  Is ocean acidification a threat to deep-sea life?"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Arctic Ocean Acidification 2013.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Arctic Ocean Acidification 2013"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/NOAA Ocean Acidification - The Other Carbon Dioxide Problem.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "NOAA Ocean Acidification - The Other Carbon Dioxide Problem"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean Acidification & Climate.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Ocean Acidification & Climate"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Carbon Emissions & Ocean Acidification.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Carbon Emissions & Ocean Acidification"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean Acidification  Research on Top of the World.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Ocean Acidification  Research on Top of the World"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            },
//            {
//                sources: [
//                    {src: $sce.trustAsResourceUrl("vids/Ocean Acidification 1.mp4"),
//                    type: "video/mp4",
//                    tags: ["short"],
//                 	name: "Ocean Acidification 1"}
//                   ],
//                tracks: [
//                    {
//                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
//                        kind: "subtitles",
//                        srclang: "en",
//                        label: "English",
//                        default: "true"
//                    }
//                ]
//            }
//
//        ];
//
//
//
//
//
//            controller.config = {
//                preload: "none",
//                autoHide: false,
//                autoHideTime: 3000,
//                autoPlay: false,
//                sources: controller.videos[0].sources,
//                theme: {
//                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
//                },
//                plugins: {
//                    poster: "http://www.akmarine.org/wp-content/themes/akmarine/images/logo.png"
//                }
//            };
//
//            controller.setVideo = function(index) {
//                controller.API.stop();
//                controller.currentVideo = index;
//                controller.config.sources = controller.videos[index].sources;
//                $timeout(controller.API.play.bind(controller.API), 100);
//            };
//
//        }]
//    );
