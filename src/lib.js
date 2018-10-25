const makeConstant = function(input){
  return function(){
    return input;
  };
};

const makeCounterFromN = function(input){
  return function(){
    return input++;
  };
};

const makeCounterFromZero = function(input){
  input = 0;
  return function(){
    return input++;
  };
};
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
