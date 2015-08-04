(function () {
  'use strict';

  angular
    .module('acidification')
    .controller('LookCloserController', LookCloserController);

  /** @ngInject */
  function LookCloserController($timeout, $sce, $location) {
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
            src: $sce.trustAsResourceUrl("assets/videos/LookCloser.mp4"),
            type: "video/mp4",
            trans: "Oceans are acidifying at a rate that is 10-100 times faster than any such shift in the past 50 million years.<br/>Acidification causes a number of changes in ocean chemistry that affect marine life – like the healthy pteropod you see in this video. We know that acidification will make it harder for marine organisms like this to produce and maintain the shells and skeletons they make from calcium carbonate building blocks.<br/>In this video we see an unhealthy pteropod struggling with the effects of a more acidic environment.<br/>Pteropods are particularly sensitive to acidification, which can cause decreased survival, growth rates, and reproduction. Along with other calcifying species, these lentil-sized creatures are also vital food sources for salmon, whales and birds. They are an essential piece of the ocean food web.<br/>An increase in acidity has many ecosystem wide impacts, including the dissolving pteropod shells you see here. Pteropods struggle both to build and to maintain healthy shells under the stress of a more acidic ocean environment. Shells can become thin and pock marked.<br/>Crab, oysters and other shellfish are also sensitive to changes in ocean  acidity, or pH. Here you see tanner crab embryos, just beginning their delicate journey toward becoming a mature crab.<br/>Crab embryos, and larvae like these, have shown decreased survival rates during lab studies when acidity increases.  Dr. Robert Foy with NOAA Fisheries Kodiak has studied this common Pacific species during developmental stages. Foy and his staff observed increased crab mortality when the pH was lowered. (Lower numbers mean higher acidity.)<br/>Global ocean pH has decreased by about .1 since the industrial revolution, equating to about a 30 percent rise in acidity. In some areas, however, like the North Pacific, the shift is happening more rapidly.<br/>Because the marine ecosystem is so thoroughly connected, shifts that impact one part of the food web create chain reactions and can cause community-wide impacts, ultimately impacting human communities on land. Ocean acidification has the potential to majorly affect the ecology of the ocean and human communities who rely on it for livelihood, sustenance and culture.<br/>We know it takes awareness and action to continue to be good stewards of our rich ocean ecosystems.<br/>A growing dialogue around the progression and impacts of acidification, as well as ways to reduce and adapt to its causes and effects, can help us do that.",
            tags: ["What"],
            name: "Look Closer"
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
           url: $sce.trustAsResourceUrl("videogular.css")
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
