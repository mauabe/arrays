function shortWords(array) {
  return array.filter(word => word.length < 5)
}



// tests

function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
  var result1 = ['cat', 'dog', 'blue'];
  var input2 = ['rainbow', 'the', 'big'];
  var result2 = ['the', 'big'];
  
  var testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();