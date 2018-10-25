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
  firstArgument = 0;
  return function(){
    return firstArgument++;
  };
};

const makeDeltaTracker = function(old){
  return function(delta){
    let result = { old: old, delta: 0, new : 0};
    result.delta = (delta == undefined) ? 0 : delta;
    result.new = result.old + result.delta;
    old = delta + old;
    return result;
  };
};

const generateNextFibNumber = function(term_1, term_2, numberOfIteration){
  let fibSeries = 0;
  for(let index = 0; index < numberOfIteration; index++){
    fibSeries = term_1;
    term_1 = term_2;
    term_2 = term_1 + fibSeries;
  }
  return fibSeries;
};

const assignTermsForFibo = function(firstArgument, secondArgument, initValue, numberOfIteration){
  let term_1 = firstArgument;
  let term_2 = secondArgument;
  if(secondArgument == undefined){
    term_1 = 0;
    term_2 = (initValue > 0) ? initValue : 1;
  }
  return generateNextFibNumber(term_1, term_2, numberOfIteration);
}

const makeFiboGenerator = function(firstArgument,secondArgument){
  firstArgument = (firstArgument == undefined) ? 0 : firstArgument;
  let numberOfIteration = 0;
  let initValue = firstArgument;
  return function(){
    numberOfIteration++;
    return assignTermsForFibo(firstArgument, secondArgument, initValue, numberOfIteration);
  }
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
