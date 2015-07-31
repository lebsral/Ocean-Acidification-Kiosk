(function () {
  'use strict';

  angular
    .module('acidification')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $sce, $location) {
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
            src: $sce.trustAsResourceUrl("assets/videos/AlexusKwachka.mp4"),
            type: "video/mp4",
            trans: "I think ocean acidification is going to be key, and it’s affecting the colder regions at a more rapid rate than they thought.<br/>It’s going to have a huge detrimental impact. You know some of the things I thought about with ocean acidification was oh yeah, well we’re not going to have as many you know crab or corals or whatever, but I never put it down on the plankton level. And when you put it down to the plankton level that becomes a pretty scary, scary reality.",
            tags: ["ssss"],
            name: "Alexus Kwachka"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/AngelaDoroff.mp4"),
            type: "video/mp4",
            trans: "Everything functions in relation to something else, and humans are part of that, humans are part of that coastal ecosystem.<br/>I’m Angela Doroff and currently I’m the research coordinator at the Kachemak Bay Research Reserve.<br/>That food web has a rhythm, it has a balance, and when we introduce a very strong perturbation, whether that’s an oil spill or ocean acidification, that changes the rhythm. And things do adapt and they respond and they shift, but when they need to shift very rapidly, we upset a whole balance, and it’s a bit of a Pandora’s box.<br/>It’s going to be in fact impacting our fisheries, both shell fisheries and fin fisheries, just by nature of food resources. Where those dynamics are going to happen, which changes are going to happen in that system we don’t really fully understand because it’s a very complex process right now.",
            tags: ["What"],
            name: "Angela Doroff"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/BobFoy.mp4"),
            type: "video/mp4",
            trans: "Understanding the variability in ocean acidification — the potential for animals and physiological response to adapt or acclimate to ocean acidification — is critical, so that we know whether or not there is going to be large-scale, ecosystem-level effects.<br/>My name is Bob Foy, I work for the National Marine Fisheries Service. I am the director of the Kodiak Laboratory, and the program manager for the shellfish assessment program.<br/>We’re just at the beginning. We are just scratching the surface of our understanding of ocean acidification. There’s various aspects. There’s the physical chemical aspects of ocean acidification. There’s the biological response. There’s the ecosystem response. And right now we are just understanding the chemistry enough to start asking questions about the biology.<br/>The reality is, we need to know much more complex answers. We need to have more answers to questions about cellular response, molecular response, all the way up to ecosystem response. So we’re just at the nascent stages of understanding each of these aspects of ocean acidification. Which is why it’s so critical that we continue to look for funding to continue this, to find support in the public to continue ocean acidification research, and really continue with the baseline research. So that as acidification becomes more of an issue in coastal communities in Alaska and around the world, that we have that baseline in order to understand what the changes are over time.",
            tags: ["What"],
            name: "Dr. Robert Foy"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/ChrisHoldred.mp4"),
            type: "video/mp4",
            trans: "So ocean acidification, which is basically the level of acidity — or one could think how much pH is in the ocean — is one of those properties that’s fundamental to how life works.<br/>I’m Kris Holderied, I’m an oceanographer with the National Oceanic and Atmospheric Administration, and I’m the director for the NOAA Kasitsna Bay Laboratory.<br/>One of the ways I like to think about it is pH is important within our bodies. So within the ocean, a lot of biological processes — whether you’re talking about how fish live, how shells are formed for organisms like oysters or shellfish or even little plankton — all of that is controlled partially by the level of acidity or pH.<br/>Alaska has a challenge that our waters — the North Pacific waters — are naturally low in pH. (Through) processes that have to do with ocean circulation and phytoplankton bloom, just basic physical and biological processes. But then when you take that and you add more CO2 from the atmosphere into the ocean and you drive the acidification level lower, it goes over a tipping point. So we’re just closer to that tipping point and so it’s easier for us to get into corrosive conditions than in some other places in the world.",
            tags: ["What"],
            name: "Kris Holderied"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/Clem.mp4"),
            type: "video/mp4",
            trans: "There’s a lot of carbon going into the ocean. A lot of it’s our fault. The ocean acidification is going to cause mankind a real impact. I consider it one of the most serious environmental problems we have. It’s shame that we can’t — being supposedly an intelligent organism — can’t figure it out. We’re not doing it.<br/>But man can solve some problems. When 4500 people dropped dead from emphysema in London, they cleared it up. And the famous London fogs do not exist today. And so if somebody can explain it that clearly, like they did to the English there, they did it. But we don’t react until something that drastic happens, sad to say.",
            tags: ["What"],
            name: "Clem Tillion"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/DanFalvey.mp4"),
            type: "video/mp4",
            trans: "Supposedly there’s a lens of water that forms just off of Sitka every year that actually has a pH that is so low that it actually will dissolve the calcium in fish.<br/>My name is Dan Falvey and I’ve been a commercial fisherman here in Sitka for 33 years now. In the winter time I work with the Alaska Longline Fisherman’s Association to help manage projects that let fishermen work on some of the resource issues that they see need working on, using the tools and using their understanding to help solve their problems. <br/>To really solve some of the resource issues that affect coastal communities and fishermen you need the partnership between fishermen, managers and the scientific community. Because it’s true, the devil is in the details. Then you can actually get the solutions you want while you’re minimizing the impacts on the resource and the community residents.",
            tags: ["What"],
            name: "Dan Falvey"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/Dune.mp4"),
            type: "video/mp4",
            trans: "People should be concerned about what’s happening to our oceans as well as climate change, because they’re both related and they both will adversely impact not only our cultures and the way we live but our relationship to the land and the sea.<br/>My name is Dune Lankard, I’m an Eyak Athabascan from Cordova, Prince William Sound region, Copper River Delta, and I’ve pretty much been a lifetime commercial fisherman and subsistence person in the entire region.<br/>And now with ocean acidification and climate change our community and our habitat may not be resilient enough — and I don’t think we can get to the moon fast enough. So if we can figure out to address these problems at home and quickly then maybe by taking action now we can make a difference while it still matters.<br/>If we’re going to win this battle everybody has got to get involved and do something quickly.",
            tags: ["What"],
            name: "Dune Lankard"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/Frank.mp4"),
            type: "video/mp4",
            trans: "For over 24 years now Unalaska is the number one fishing port — commercial fishing port — in the nation. A large part of the things we do are the pollock fishery, codfish, but a major portion with some of the highest value, are our crab fisheries.<br/>My name is Frank Kelty, I’m a 44-year resident of Unalaska Dutch Harbor in the Aleutian Islands. Right now I’m the fisheries advisor for the City of Unalaska. Before that I worked 30 years in the Alaska seafood industry, usually as a crab plant manager, but also did codfish and other species, and was a longtime elected official in my community. I spent 10 years as mayor.<br/>Most people haven’t even heard the term acidification. People should start thinking about what’s going on. One of the big drivers of acidification is the CO2 in the water, you know…if it’s coming from our country or Asia, and impacting our water systems on the ocean, I think that should be a concern.",
            tags: ["What"],
            name: "Frank Kelty"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/KimWilliams.mp4"),
            type: "video/mp4",
            trans: "I think when you talk about ocean acidification, it’s what is the impact, and what is the domino effect.<br/>Kimberly Williams, born and raised in Dillingham, and I always tell everybody that I’ll die in Dillingham, I will be buried here in Dillingham.<br/>So if we know the acid in our ocean is rising, what is the impact on the creatures that are out there and then everything else that eats that creature that doesn’t have that shell anymore. So what is that going to do through the ecosystem, and it’s really a domino effect.<br/>If pink salmon are not getting their food source, what’s happening to our Chinook and our coho and our sockeye? If that’s a food source for them, what will they turn to as an alternative? And will something happen to them?",
            tags: ["What"],
            name: "Kim Williams"
          }
        ]
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/JeremyMathis.mp4"),
            type: "video/mp4",
            trans: "Ocean acidification is important because it’s a global issue that’s being driven by rising carbon dioxide levels in the atmosphere and it’s the sister problem to climate change. It’s caused by the exact same process — we burn fossil fuels and those fossil fuels emit carbon dioxide that end up in the atmosphere, and a part of them end up in the ocean. And the ones that end up in the ocean fundamentally change the ocean chemistry. And those changes can be harmful to a number of marine organisms.<br/>I’m Dr. Jeremy Mathis, I’m a division director at the Pacific Marine Environmental Laboratory, which is a NOAA facility in Seattle, Washington. I’m also an affiliate faculty member at the University of Alaska Fairbanks and at the University of Washington in Seattle.<br/>So ultimately what’s going to happen is if we continue to burn fossil fuel and we continue to emit carbon dioxide into the atmosphere, we’re going to make the ocean more acidic. It will remain slightly basic, but the reduction in pH and the increase in the acidification factor of the ocean may ultimately harm a number of organisms that we rely on.",
            tags: ["What"],
            name: "Dr. Jeremy Mathis"
          }
        ]
      },
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
      },
      {
        sources: [
          {
            src: $sce.trustAsResourceUrl("assets/videos/Shalin.mp4"),
            type: "video/mp4",
            trans: "Ocean chemistry is changing at one of the fastest rates ever in Earth’s history. And we know that marine species can live in a variety of chemistry environments, but we know that marine ecosystems and the species that comprise them respond to change. And in periods in Earth’s history where we’ve seen a big drop in pH, an acidification event, there have been turnover of marine ecosystems, marine species. And they’ve changed.<br/>My name is Shallin Busch, and I’m a scientist for NOAA, which is the National Oceanic and Atmospheric Administration.<br/>So the impacts of ocean acidification on marine ecosystems can happen in a variety of ways. And what’s interesting to think about is that for ecosystems to change not all species inside of the ecosystem need to be sensitive directly to changes in carbon chemistry.<br/>What we’re concerned about is charismatic species, that get a lot of attention by society and people really care about — like birds and whales and big fish like salmon — might be affected by ocean acidification because of the impacts on the prey.",
            tags: ["What"],
            name: "Dr. Shallin Busch"
          }
        ]
      },
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
