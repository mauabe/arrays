function minusLastItem(array) {
   array.pop();
  return array;
}

function copyFirstHalf(array) {
    return array.slice(0, Math.ceil((array.length)/2))
}

// tests

function testFunctionWorks(fn, input, expected) {
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  } 
}
function runTests() {
  var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
  var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result2 = ["red bull", "monster", "amp"];
  var testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
  ];
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();