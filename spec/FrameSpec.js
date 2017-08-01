describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('bowls', function() {

    it('starts out as an array containing null, null', function() {
      expect(frame.bowls()).toEqual([null, null])
    });

    it('Updates the first bowl', function() {
      frame.bowl(5)
      expect(frame.bowls()).toEqual([5, null])
    });

  });
});
