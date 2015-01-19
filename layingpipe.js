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
  }
};


