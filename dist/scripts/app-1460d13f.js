angular.module("acidification",["angulartics","angulartics.google.analytics","ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ngMaterial","firebase","com.2fdevs.videogular","com.2fdevs.videogular.plugins.controls","com.2fdevs.videogular.plugins.overlayplay","com.2fdevs.videogular.plugins.poster","com.2fdevs.videogular.plugins.buffering"]).run(["$rootScope","$location","$window",function(e,i,t){"use strict";e.$on("$stateChangeSuccess",function(){t.ga&&t.ga("send","pageview",{page:i.path()})})}]).config(["$stateProvider","$urlRouterProvider",function(e,i){"use strict";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("what-is-oa",{url:"/what-is-oa",templateUrl:"components/what-is-oa/partial-what-is-oa.html"}).state("Press-me",{url:"/Press-me",templateUrl:"components/Press-me/partial-Press-me.html"}).state("act-now",{url:"/act-now",templateUrl:"components/act-now/partial-act-now.html"}).state("look-closer",{url:"/look-closer",templateUrl:"components/look-closer/partial-look-closer.html"}).state("oa-facts",{url:"/oa-facts",templateUrl:"components/oa-facts/partial-oa-facts.html"}).state("voices",{url:"/voices",templateUrl:"components/voices/partial-voices.html"}).state("voices.fishermen",{templateUrl:"partial-voices-fishermen.html",controller:["$scope",function(e){e.fishermen=["Bob","Sue","James"]}]}),i.otherwise("/")}]),angular.module("acidification").controller("VoicesCtrl",["$sce",function(e){"use strict";this.config={sources:[{src:e.trustAsResourceUrl("assets/videos/Dune.mp4"),type:"video/mp4"}],tracks:[{src:"transcripts/pale-blue-dot.vtt",kind:"subtitles",srclang:"en",label:"English"}],theme:"https://raw.githubusercontent.com/2fdevs/bower-videogular-themes-default/master/videogular.css",plugins:{poster:"http://www.videogular.com/assets/images/videogular.png"}}}]),angular.module("acidification").controller("Act-NowCtrl",["$scope","$firebaseArray",function(e,i){"use strict";var t=new Firebase("https://oceanacidification.firebaseio.com/");e.emails=i(t),e.addEmail=function(i){i&&e.emails.$add({emailAddress:i})}}]),angular.module("acidification").controller("MainCtrl",function(){"use strict"}),angular.module("acidification").run(["$templateCache",function(e){e.put("app/Video Main Pages/index.html",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>psdtowebOAVoicespagemockup233.psd</title><link href="styles.css" rel="stylesheet" type="text/css"></head><body><div id="background"><div id="Shape1"><img src="images/Shape1.png"></div><div id="Shape2"><img src="images/Shape2.png"></div><div id="Shape1copy"><img src="images/Shape1copy.png"></div><div id="Shape1copy2"><img src="images/Shape1copy2.png"></div><div id="RoundedRectangle1"><img src="images/RoundedRectangle1.png"></div><div id="RoundedRectangle1cop"><img src="images/RoundedRectangle1cop.png"></div><div id="RoundedRectangle1cop_0"><img src="images/RoundedRectangle1cop_0.png"></div><div id="RoundedRectangle1cop_1"><img src="images/RoundedRectangle1cop_1.png"></div><div id="OCEANfacts"><img src="images/OCEANfacts.png"></div><div id="LOOKCLOSER"><img src="images/LOOKCLOSER.png"></div><div id="ListenTOLOCALVOICES"><img src="images/ListenTOLOCALVOICES.png"></div><div id="WHATIsOceanACIDIFICA"><img src="images/WHATIsOceanACIDIFICA.png"></div><div id="Oceanchemistryischan"><img src="images/Oceanchemistryischan.png"></div><div id="Layer13"><img src="images/Layer13.png"></div><div id="ACTNow"><img src="images/ACTNow.png"></div></div></body></html>'),e.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><div wave1=""></div><h1>Ocean Acidification</h1><p class="lead"><br>It\'s eating the cute baby shellfish.</p><div ui-view=""></div></md-content></div>'),e.put("components/EmailUsPage/partial-EMailUsPage.html",'<div id="background"><div id="Layer9"><img src="components/act-now/images/Layer9.png"></div><div id="Shape1"><img src="components/act-now/images/Shape1.png"></div><div id="Shape1copy"><img src="components/act-now/images/Shape1copy.png"></div><div id="Shape1copy2"><img src="components/act-now/images/Shape1copy2.png"></div><div id="bg"></div><div id="Layer10"><img src="components/act-now/images/Layer10.png"></div><div id="Layer11"><img src="components/act-now/images/Layer11.png"></div><div id="Enteryouremail"><img src="components/act-now/images/Enteryouremail.png"></div></div><input type="text">'),e.put("components/Press-me/partial-Press-me.html",'<md-button ui-sref="home"><div id="background"><div id="Layer7"><img src="components/Press-me/images/Layer7.png"></div><div id="Shape1"><img src="components/Press-me/images/Shape1.png"></div><div id="Shape1copy"><img src="components/Press-me/images/Shape1copy.png"></div><div id="Shape1copy2"><img src="components/Press-me/images/Shape1copy2.png"></div><div id="Ocean"><img src="components/Press-me/images/Ocean.png"></div><div id="Acidification"><img src="components/Press-me/images/Acidification.png"></div><div id="WHATIS"><img src="components/Press-me/images/WHATIS.png"></div><div id="Layer6"><img src="components/Press-me/images/Layer6.png"></div><div id="layer_9"><img src="components/Press-me/images/layer_9.png"></div><div id="PREssMe"><img src="components/Press-me/images/PREssMe.png"></div></div></md-button>'),e.put("components/act-now/partial-act-now.html",'<div ng-controller="Act-NowCtrl as controller"><section><form><div id="background"><div id="Layer9"><img src="images/Layer9.png"></div><div id="Shape1"><img src="images/Shape1.png"></div><div id="Shape1copy"><img src="images/Shape1copy.png"></div><div id="Shape1copy2"><img src="images/Shape1copy2.png"></div><div id="bg"><input type="text"></div><input placeholder="Email..." ng-model="newEmail"> <button class="Rounded-Rectangle-3" type="submit" ng-click="addEmail(newEmail);newEmail = null;">send</button><div id="Layer10"><img src="images/Layer10.png"></div><div id="Layer11"><img src="images/Layer11.png"></div><div id="Enteryouremail"><img src="images/Enteryouremail.png"></div></div></form></section></div>'),e.put("components/look-closer/partial-look-closer.html","<div><section>Looking closer at Ocean Acidification.</section></div>"),e.put("components/oa-facts/partial-oa-facts.html","<section>Facts on Ocean Acidification</section>"),e.put("components/voices/partial-voices-fishermen.html",'<ul><li ng-repeat="fisherman in fishermen">{{ fisherman }}</li></ul>'),e.put("components/voices/partial-voices.html",'<div ng-controller="VoicesCtrl as controller"><div class="videogular-container"><videogular vg-player-ready="controller.onPlayerReady($API)" vg-complete="controller.onCompleteVideo()" vg-theme="controller.config.theme.url"><vg-media vg-src="controller.config.sources" vg-tracks="controller.config.tracks"></vg-media><vg-controls><vg-play-pause-button></vg-play-pause-button><vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display><vg-scrub-bar><vg-scrub-bar-current-time></vg-scrub-bar-current-time></vg-scrub-bar><vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display><vg-volume><vg-mute-button></vg-mute-button><vg-volume-bar></vg-volume-bar></vg-volume><vg-fullscreen-button></vg-fullscreen-button><vg-tracks></vg-tracks></vg-controls><vg-overlay-play></vg-overlay-play><vg-buffering></vg-buffering><vg-poster vg-url="controller.config.plugins.poster"></vg-poster></videogular></div></div><div ui-view=""></div>'),e.put("components/what-is-oa/partial-what-is-oa.html","<section>What is Ocean Acidification?</section>")}]);