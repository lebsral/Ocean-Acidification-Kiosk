'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

//  it('should include jumbotron with correct data', function() {
//    expect(page.h1El.ge tText()).toBe('\'Allo, \'Allo!');
//    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
//    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
//  });

//  it('should list more than 5 awesome things', function () {
//    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
//  });

//  it('should include a nav bar with a Look Closer button', funcion() {
//     expect(page.NavButtonL.ge tText()).toBe('Look Closer');

});
