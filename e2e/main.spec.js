'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('Ocean Acidification');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/disolvingShell.jpeg$/);
    expect(page.imgEl.getAttribute('alt')).toBe('Shell goes bye-bye');
  });

  it('list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
