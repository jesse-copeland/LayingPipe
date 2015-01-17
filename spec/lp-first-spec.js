var layingpipe = require('../layingpipe');

describe("Test Laying Pipe functions", function() {

  it("first() will return the first element if n is not passed", function() {
    var testArray = ['a','b','c','d','e'];
    var result = layingpipe.first(testArray);
    
    expect(result).toBe('a');
  });

  it("first() will return the first n elements in an array if n is passed", function() {
    var testArray = ['a','b','c','d','e'];
    var result1 = layingpipe.first(testArray, 1);
    var result2 = layingpipe.first(testArray, 2);
    var result4 = layingpipe.first(testArray, 4);
    
    expect(result1).toEqual(['a']);
    expect(result2).toEqual(['a','b']);
    expect(result4).toEqual(['a','b','c','d']);
  }); 
  
});