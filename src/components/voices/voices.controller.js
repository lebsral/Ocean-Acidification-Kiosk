'use strict';

angular.module('acidification')
  .controller('VoicesController',
  	['$sce', '$timeout', function ($sce, $timeout) {
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
                    {src: $sce.trustAsResourceUrl('vids/Acidifying the Ocean   Assessing Impacts on Coral Reefs.mp4'),
                    type: 'video/mp4',
                    tags: ['long', 'short'],
                	name: 'Acidifying the Ocean   Assessing Impacts on Coral Reefs'}
                    ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification  Causes, Time Scales and Consequences - 2012 Dickson Prize Lecture.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Ocean Acidification  Causes, Time Scales and Consequences - 2012 Dickson Prize Lecture'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/GC44C. Special Lecture in Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'GC44C. Special Lecture in Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean acidification  Connecting science, industry, policy and public.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Ocean acidification  Connecting science, industry, policy and public'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Oceans 2  Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Oceans 2  Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Demystifying ocean acidification and biodiversity impacts.mp4'),
                    type: 'video/mp4', 
                    tags: ['long'],
                 	name: 'Demystifying ocean acidification and biodiversity impacts'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Unit 1- The Warming Climate; Lesson 8- Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Unit 1- The Warming Climate; Lesson 8- Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Our Ocean Conference  Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Our Ocean Conference  Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
			{
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification - Revolution World Issue.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Ocean Acidification - Revolution World Issue'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Acidic Oceans  Why Should We Care? - Perspectives on Ocean Science 1.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Acidic Oceans  Why Should We Care? - Perspectives on Ocean Science 1'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Acidic Oceans  Why Should We Care? - Perspectives on Ocean Science.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Acidic Oceans  Why Should We Care? - Perspectives on Ocean Science'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Acidifying Waters Corrode Northwest Shellfish.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Acidifying Waters Corrode Northwest Shellfish'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Acid Test  The Global Challenge of Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['long'],
                 	name: 'Acid Test  The Global Challenge of Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/NSF Ocean Sciences Division Director David Conover answers questions about ocean acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'NSF Ocean Sciences Division Director David Conover answers questions about ocean acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification, The Science.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification, The Science'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification 1 2 3.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification 1 2 3'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Science Today  Ocean Acidification | California Academy of Sciences 1.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Science Today  Ocean Acidification | California Academy of Sciences 1'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Science Today  Ocean Acidification | California Academy of Sciences.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Science Today  Ocean Acidification | California Academy of Sciences'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/NOAA Ocean Acidification Demonstration.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'NOAA Ocean Acidification Demonstration'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Acidic Ocean Kills Millions Of Shellfish In Vancouver Canada.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Acidic Ocean Kills Millions Of Shellfish In Vancouver Canada'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification  Where will all the seashells go?.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification  Where will all the seashells go?'}
                   ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/ocean acidification experiment.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'ocean acidification experiment'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification 1 2.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification 1 2'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Life on the edge  Is ocean acidification a threat to deep-sea life?.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Life on the edge  Is ocean acidification a threat to deep-sea life?'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Arctic Ocean Acidification 2013.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Arctic Ocean Acidification 2013'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/NOAA Ocean Acidification - The Other Carbon Dioxide Problem.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'NOAA Ocean Acidification - The Other Carbon Dioxide Problem'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification & Climate.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification & Climate'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Carbon Emissions & Ocean Acidification.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Carbon Emissions & Ocean Acidification'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification  Research on Top of the World.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification  Research on Top of the World'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl('vids/Ocean Acidification 1.mp4'),
                    type: 'video/mp4',
                    tags: ['short'],
                 	name: 'Ocean Acidification 1'}
                   ],
                tracks: [
                    {
                        src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: 'true'
                    }
                ]
            }

        ];
        	




            controller.config = {
                preload: 'none',
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: controller.videos[0].sources,
                theme: {
                    url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
                },
                plugins: {
                    poster: 'http://www.akmarine.org/wp-content/themes/akmarine/images/logo.png'
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