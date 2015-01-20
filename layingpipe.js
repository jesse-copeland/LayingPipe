module.exports = {
  first: function (arr, n) {
    if (n === undefined) {
      return arr[0];
    }else{
      return arr.slice(0,n);
    }
  },
  max: function (arr) {
    if (!arr || arr.length === 0) {
      return -Infinity;
    }

    var maxVal = null;
    for (var i = 0; i < arr.length; i++) {
      if (maxVal === null || arr[i] > maxVal) { maxVal = arr[i]; }
    }
    return maxVal;
  },
  min: function (arr) {
    if (!arr || arr.length === 0) {
      return -Infinity;
    }

    var minVal = null;
    for (var i = 0; i < arr.length; i++) {
      if (minVal === null || arr[i] < minVal) { minVal = arr[i]; }
    }
    return minVal;
  },
  intersection: function (firstArray, secondArray) {
    if (arguments.length < 2) { 
      return [];
    }

    var result = [];
    var secondArg = 1; // The first argument array is used to compare with other arrays.

    // Loop over the first array passed in.
    for (var i = 0; i < firstArray.length; i++) {
      // Loop over the arrays other than the first comparing first array[i] value
      // Put the value being check into a variable
      var checkValue = firstArray[i];
      var intersects = false;

      for (var j = secondArg; j < arguments.length; j++) {
        var passedArray = arguments[j];
        // arguments[j] is the index of the array currently being worked on
        // arguments[0][i] is the index of the first array being compared.
        var foundAt = passedArray.indexOf(checkValue);
        if (foundAt === -1) {
          intersects = false;
          // If the array being checked does not contain the value, the the value can not be 
          // part of an intersection. Therefore the loop breaks out to check the next value.
          break;
        } else {
          intersects = true;
        }
      }
      // if the value passes all arrays without resetting intersects to false it is added to the results array.
      if (intersects) {result.push(checkValue);}
    }
    return result;
  },
  difference: function (firstArray, secondArray) {
    if (arguments.length !== 2) { 
      return [];
    }

    var result = [];
    var secondArg = 1;

    // Loop over the first array passed in.
    for (var i = 0; i < firstArray.length; i++) {
      // Loop over the arrays other than the first comparing first array[i] value
      // Put the value being check into a variable
      var checkValue = firstArray[i];
      var intersects = true;

      for (var j = secondArg; j < arguments.length; j++) {
        var passedArray = arguments[j];
        // arguments[j] is the index of the array currently being worked on
        // arguments[0][i] is the index of the first array being compared.
        var foundAt = passedArray.indexOf(checkValue);
        if (foundAt === -1) {
          intersects = false;
          // If the array being checked does not contain the value, the the value can not be 
          
        } else {
          intersects = true;
        }
      }
      // if the value passes all arrays without resetting intersects to false it is added to the results array.
      if (!intersects) {result.push(checkValue);}
    }
    return result;
  },
  uniq: function (array) {
    if (array == null) return [];

    var alreadyChecked = [];
    var result = [];

    for (var i = 0; i < array.length; i++) {
      if (this.contains(alreadyChecked, array[i])) {
        // if the alreadyChecked array contains a number then find it in results and remove it
        var resPos = result.indexOf(array[i]);
        if (resPos !== -1) {
          result.slice(array[resPos], array[resPos]+1);
        }  
      } else {
        alreadyChecked.push(array[i]);
        result.push(array[i]);
      }
    }
    return result;
    
  },
  contains: function (array, target) {
    return (array.indexOf(target) !== -1) ? true : false;
  }
};

