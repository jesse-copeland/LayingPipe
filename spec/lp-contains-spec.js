var layingpipe = require('../layingpipe');

describe("contains function checks if a given value is present in a collection using strict equality for comparisons", function() {
  

  it("should return true if the target value is within the array", function() {
    var testArray = [1,2,3,4,5];
    var result = layingpipe.contains(testArray, 1);
    expect(result).toBe(true);
  });

  it("should return false if the target is not within the array", function() {
    var testArray = [1,2,3,4,5];
    var result = layingpipe.contains(testArray, 6);
    expect(result).toBe(false);
  });
  
});