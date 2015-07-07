(function() {
  'use strict';

  angular
    .module('acidification')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
