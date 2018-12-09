'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

  it('should start with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('should accept an empty list of frames', function(){
    expect(game.frames).toEqual([]);
  });

});

describe('Frame', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame;
  });

  it('should start with 10 pins up', function(){
    expect(frame.pinsUp).toEqual(10);
  });

  it('should accept a bowl to reduce pinsUp', function(){
    frame.bowl(8);
    expect(frame.pinsUp).toEqual(2);
  });

});
