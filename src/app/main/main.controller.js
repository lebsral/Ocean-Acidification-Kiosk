(function () {
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
    vm.currentTrans = 0;

    vm.onPlayerReady = function (API) {
      vm.API = API;
    };

    vm.onCompleteVideo = function () {
      console.log("on complete 1");
      vm.isCompleted = true;

      vm.currentVideo++;

      if (vm.currentVideo >= vm.videos.length) vm.currentVideo = 0;

      vm.setVideo(vm.currentVideo);

    };


    vm.videos = [
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/AlexusKwachka.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Alexus Kwachka"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/AngelaDoroff.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Angela Doroff"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/BobFoy.mov"),
            type: "video/mov",
            trans: "Understanding the variability in ocean acidification — the potential for animals and physiological response to adapt or acclimate to ocean acidification — is critical, so that we know whether or not there is going to be large-scale, ecosystem-level effects.<br/>My name is Bob Foy, I work for the National Marine Fisheries Service. I am the director of the Kodiak Laboratory, and the program manager for the shellfish assessment program.<br/>We’re just at the beginning. We are just scratching the surface of our understanding of ocean acidification. There’s various aspects. There’s the physical chemical aspects of ocean acidification. There’s the biological response. There’s the ecosystem response. And right now we are just understanding the chemistry enough to start asking questions about the biology.<br/>The reality is, we need to know much more complex answers. We need to have more answers to questions about cellular response, molecular response, all the way up to ecosystem response. So we’re just at the nascent stages of understanding each of these aspects of ocean acidification. Which is why it’s so critical that we continue to look for funding to continue this, to find support in the public to continue ocean acidification research, and really continue with the baseline research. So that as acidification becomes more of an issue in coastal communities in Alaska and around the world, that we have that baseline in order to understand what the changes are over time.",
            tags: ["What"],
            name: "Dr. Robert Foy"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/ChrisHoldred.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Kris Holderied"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/Clem.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Clem Tillion"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/DanFalvey.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Dan Falvey"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/Dune.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Dune Lankard"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/Frank.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Frank Kelty"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/IslandsInstitute.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Islands Institute"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/Jeremy.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Jeremy"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/KimWilliams.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Kim Williams"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/JeremyMathis.mov"),
            type: "video/mov",
            trans: "Ocean acidification is important because it’s a global issue that’s being driven by rising carbon dioxide levels in the atmosphere and it’s the sister problem to climate change. It’s caused by the exact same process — we burn fossil fuels and those fossil fuels emit carbon dioxide that end up in the atmosphere, and a part of them end up in the ocean. And the ones that end up in the ocean fundamentally change the ocean chemistry. And those changes can be harmful to a number of marine organisms.<br/>I’m Dr. Jeremy Mathis, I’m a division director at the Pacific Marine Environmental Laboratory, which is a NOAA facility in Seattle, Washington. I’m also an affiliate faculty member at the University of Alaska Fairbanks and at the University of Washington in Seattle.<br/>So ultimately what’s going to happen is if we continue to burn fossil fuel and we continue to emit carbon dioxide into the atmosphere, we’re going to make the ocean more acidic. It will remain slightly basic, but the reduction in pH and the increase in the acidification factor of the ocean may ultimately harm a number of organisms that we rely on.",
            tags: ["What"],
            name: "Dr. Jeremy Mathis"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("../assets/videos/LookCloser.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Look Closer"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/Shalin.mov"),
            type: "video/mov",
            trans: "",
            tags: ["What"],
            name: "Dr. Shallin Busch"
          }
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

    vm.setVideo = function (index) {
      vm.API.stop();
      vm.currentVideo = index;
      vm.config.sources = vm.videos[index].sources;
      $timeout(vm.API.play.bind(vm.API), 100);
    };


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
