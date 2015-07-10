(function() {
  'use strict';

  angular
    .module('acidification')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $sce) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1436237356233;
    vm.showToastr = showToastr;

    vm.state = null;
    vm.API = null;
    vm.currentVideo = 0;

    vm.onPlayerReady = function(API) {
    vm.API = API;
      };

    vm.onCompleteVideo = function() {
                console.log("on complete 1")
                vm.isCompleted = true;

                vm.currentVideo++;

                if (vm.currentVideo >= vm.videos.length) vm.currentVideo = 0;

                vm.setVideo(vm.currentVideo);

            };


    vm.videos = [
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("../assets/videos/Dune.mov"),
                    type: "video/mov",
                    tags: ["What"],
                	name: "Acidifying the Ocean   Assessing Impacts on Coral Reefs"}
                    ]
            },
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("assets/videos/Frank.mov"),
                    type: "video/mov",
                    tags: ["What"],
                 	name: "Franks vid"}
                   ]
            }
        ];

               vm.config = {
                preload: "none",
                autoHide: false,
                autoHideTime: 300000,
                autoPlay: true,
                sources: vm.videos[0].sources,
                theme: {
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                },
                plugins: {
                    poster: "http://www.akmarine.org/wp-content/themes/akmarine/images/logo.png"
                }
            };

            vm.setVideo = function(index) {
                vm.API.stop();
                vm.currentVideo = index;
                vm.config.sources = vm.videos[index].sources;
                $timeout(vm.API.play.bind(vm.API), 100);
            };


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
