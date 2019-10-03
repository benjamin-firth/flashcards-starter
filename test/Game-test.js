const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  it('should be a method of Game', function() {
    const game = new Game();

    expect(game.start).to.be.a('function');
  })
})