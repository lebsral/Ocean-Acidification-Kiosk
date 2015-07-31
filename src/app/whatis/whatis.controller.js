(function () {
  'use strict';

  angular
    .module('acidification')
    .controller('WhatIsController', WhatIsController);

  /** @ngInject */
  function WhatIsController($timeout, webDevTec, toastr, $sce, $location) {
    var vm = this;

    vm.state = null;
    vm.API = null;
    vm.currentVideo = 0;
    vm.currentTrans = 0;

    vm.onPlayerReady = function (API) {
      vm.API = API;
      vm.setVideo(0); //this autostarts the video
    };

    vm.onCompleteVideo = function () {
      console.log("on complete 1" + vm.currentVideo);
      vm.isCompleted = true;

      vm.currentVideo++;

      if (vm.currentVideo >= vm.videos.length) {
        vm.currentVideo = 0;
        $location.path("/act-now");
      }

      vm.setVideo(vm.currentVideo);

    };

    vm.videos = [
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/IslandsInstitute.mp4"),
            type: "video/mp4",
            trans: "The climate is changing, we’ve got ocean acidification going on, we know that, we can measure it.<br/>Ocean acidification is the great unknown. And it’s affecting the colder regions at a more rapid rate than they thought.<br/>The increased carbon dioxide and the decreasing pH can have a major negative impact on the ability of the embryos, larvae and juveniles to survive.<br/>A form of air pollution known as carbon dioxide is increasing in the atmosphere. The ocean absorbs about a quarter of the CO2 from the atmosphere, and the more we produce, the more the ocean absorbs.<br/>The carbon dioxide absorbed by the ocean is changing the chemistry of the seawater. The CO2 interacts with water and forms carbonic acid. This reaction decreases the availability of carbonate ions. These are the critical building blocks for building shells and skeletons of many marine organisms.<br/>It increases the number of hydrogen ions, which leads to lower pH and greater acidity. Toxic chemicals from storm water, runoff and industrial pollution that flow into the ocean can also contribute to acidification of coastal waters.<br/>You should think of acidification, or the decrease in pH, or increasing carbon dioxide, as another stressor in the environment of an organism. And what we’re finding is that some species handle that stressor differently than others.",
            tags: ["What"],
            name: "What is Ocean Acidification?"
          }
        ]
      }
    ];

    vm.config = {
      preload: "none",
      autoHide: false,
      autoHideTime: 300,
      autoPlay: true,
      sources: vm.videos[0].sources,
      theme: {
        //        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
        url: $sce.trustAsResourceUrl("main/videogular.css")
      },
      plugins: {
        poster: "assets/images/logo.png"
      }
    };

    vm.setVideo = function (index) {
      vm.API.stop();
      vm.currentVideo = index;
      vm.config.sources = vm.videos[index].sources;
      $timeout(vm.API.play.bind(vm.API), 100);
    };

    activate();

    function activate() {

    }

  }
})();
