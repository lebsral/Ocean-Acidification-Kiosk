(function () {
  'use strict';

  describe('controllers', function () {

    beforeEach(module('acidification'));

    it('should define more than 5 awesome things', inject(function ($controller) {
      var vm = $controller('MainController');

    }));
  });
})();
