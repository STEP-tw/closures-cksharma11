const makeConstant = function(firstArgument){
  return function(){
    return firstArgument;
  };
};

const makeCounterFromN = function(firstArgument){
  return function(){
    return firstArgument++;
  };
};

const makeCounterFromZero = function(firstArgument){
  return makeCounterFromN(0);
};

const makeDeltaTracker = function(old){
  return function(delta = 0){
    let result = { old: old, delta: 0, new : 0};
    result.delta = delta;
    result.new = result.old + result.delta;
    old = delta + old;
    return result;
  };
};

const makeFiboGenerator = function(firstArgument = 1, secondArgument = 0){
  let firstTerm = Math.min(firstArgument, secondArgument);
  let secondTerm = Math.max(firstArgument, secondArgument);
  return function(){
    let result = firstTerm;
    firstTerm = secondTerm;
    secondTerm = firstTerm + result;
    return result;
  };
};

const makeCycler = function(firstArgument){
  let list = firstArgument.slice();
  return function(){
    let result = list[0];
    list.push(list.shift());
    return result;
  };
};

const curry = function(funct,firstArgument){
  return function(secondArgument,thirdArgument){
    return funct(firstArgument,secondArgument,thirdArgument)
  }
}

const compose = function(funct1, funct2){
  return function(firstArgument,secondArgument){
    return funct1(funct2(firstArgument,secondArgument));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
