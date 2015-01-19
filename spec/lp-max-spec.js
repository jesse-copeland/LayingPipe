var layingpipe = require('../layingpipe');

describe("Retrieves the maxium value of a collection", function() {
  it("Assert that the max number in the test array is 15.", function() {
    var testArray = [4,7,9,12,4,15,3];
    var result = layingpipe.max(testArray);

    expect(result).toBe(15);
  });

  it("Assert that -Infinity will be return if an empty array is passed to max()", function() {
    var emptyTestArr = [];
    var result = layingpipe.max(emptyTestArr);

    expect(result).toBe(-Infinity);
  });

  it("Assert that -Infinity will be return if a falsy value is passed to max(falsyThing)", function() {
    var falsyTestArr = null;
    var result = layingpipe.max(falsyTestArr);

    expect(result).toBe(-Infinity);
  });

  it("Assert that -Infinity will be return if nothing is passed to max()", function() {
    var result = layingpipe.max();

    expect(result).toBe(-Infinity);
  });
});

