var layingpipe = require('../layingpipe');

describe("Retrieves the minimum value of a collection", function() {
  it("Assert that the min number in the test array is -2.", function() {
    var testArray = [4,7,9,12,4,15,3,-2];
    var result = layingpipe.min(testArray);

    expect(result).toBe(-2);
  });

  it("Assert that -Infinity will be return if an empty array is passed to min()", function() {
    var emptyTestArr = [];
    var result = layingpipe.min(emptyTestArr);

    expect(result).toBe(-Infinity);
  });

  it("Assert that -Infinity will be return if a falsy value is passed to min(falsyThing)", function() {
    var falsyTestArr = null;
    var result = layingpipe.min(falsyTestArr);

    expect(result).toBe(-Infinity);
  });

  it("Assert that -Infinity will be return if nothing is passed to min()", function() {
    var result = layingpipe.min();

    expect(result).toBe(-Infinity);
  });  
});

