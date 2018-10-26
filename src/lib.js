const makeConstant = function(constant){
  return function(){
    return constant;
  };
};

const makeCounterFromN = function(counter){
  return function(){
    return counter++;
  };
};

const makeCounterFromZero = function(counter){
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

const makeFiboGenerator = function(firstInitialTerm = 1, secondInitialTerm = 0){
  let firstTerm = Math.min(firstInitialTerm, secondInitialTerm);
  let secondTerm = Math.max(firstInitialTerm, secondInitialTerm);
  return function(){
    let nextTerm = firstTerm;
    firstTerm = secondTerm;
    secondTerm = firstTerm + nextTerm;
    return nextTerm;
  };
};

const makeCycler = function(collection){
  let list = collection.map(function(element){
    return element;
  });
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

const compose = function(outerFunction, innerFunction){
  return function(firstArgument,secondArgument){
    return outerFunction(innerFunction(firstArgument,secondArgument));
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
