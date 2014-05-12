// code
// Sum of Array Elements
var sum = function(array) {
  var total = 0;
  for(i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Mean of Array Elements
var mean = function(array) {
    var total = 0;
    for(i=0; i< array.length; i++) {
        total += array[i];
    }
    return (total / array.length);
}

// Median of Array Elements
var median = function(array) {
    if (array.length % 2 !== 0) {
        var sortedArray = array.sort(function(a,b) {return b-a;});
        var answer = sortedArray[(sortedArray.length - 1) / 2];
    }
    else {
        var sortedArray = array.sort(function(a,b) {return b-a;});
        var answer = (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
    }
    return answer;
}



// MOLLY AND DANIEL REFACTORED CODE

// Sum of Array Elements
var sum = function(array){
  var total = 0;
  for(i = 0; i < array.length; i++)
  total += array[i];
  return total;
}

// Mean of Array Elements
var mean = function(array){
    var arraySum = sum(array);
    return arraySum/array.length;
}

// Median of Array Elements
var median = function(array) {
    var sortedArray = array.sort(function(a,b) {return b-a;});
    var arrayLength = sortedArray.length;
    var arrayMed = sortedArray.length/2;
    if (array.length % 2 !== 0){
        var answer = sortedArray[Math.floor(arrayLength/2)];
    } else {
        var answer = (sortedArray[arrayMed] + sortedArray[arrayMed - 1]) / 2;
    }
    return answer;
}
