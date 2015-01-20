var layingpipe = require('../layingpipe');

describe("Creates a duplicate-value-free version of an array using strict equality for comparisons.", function() {
  it("return and empty array if no argements are passed to the function", function() {
    var result = layingpipe.uniq();

    expect(result).toEqual([]);
    
  });

  it("return and empty array if an empty array is passed to the function", function() {
    var result = layingpipe.uniq([]);

    expect(result).toEqual([]);
    
  });

  it("should return an array containing only the duplicate free values [1, 5]", function() {
    var testArray = [1,2,1,3,1];

    var result = layingpipe.uniq(testArray);

    expect(result).toEqual([1,2,3]);
    
  });

  it("should return an array containing only the duplicate free values [1, 5]", function() {
    var testArray = [1];

    var result = layingpipe.uniq(testArray);

    expect(result).toEqual([1]);
    
  });




});