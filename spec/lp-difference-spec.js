var layingpipe = require('../layingpipe');

describe("Creates an array of values NOT present in all provided arrays using strict equality", function() {

  it("return an array containing [1,5]", function() {
    var testArray1 = [1,2,3,4];
    var testArray2 = [2,3,4,5];

    var result = layingpipe.difference(testArray1, testArray2);

    expect(result).toEqual([1]);
    
  });
  
});