var layingpipe = require('../layingpipe');

describe("Creates an array of unique values present in all provided arrays using strict equality", function() {
  it("return an array containing just the number 2", function() {
    var testArr1 = [2,3,4];
    var testArr2 = [5,2];
    
    var result = layingpipe.intersection(testArr1, testArr2);

    expect(result).toEqual([2]);
  });

  it("return and empty array if no argements are passed to the function", function() {
    var result = layingpipe.intersection();

    expect(result).toEqual([]);
    
  });

  it("return and empty array if only one argement is passed to the function", function() {
    var testArr1 = ['a','b','c'];
    var result = layingpipe.intersection();

    expect(result).toEqual([]);
    
  });



});