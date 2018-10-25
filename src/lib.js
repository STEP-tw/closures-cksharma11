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

const makeFiboGenerator = function(firstArgument,secondArgument){
  let secondTerm = secondArgument - firstArgument;
  let firstTerm = firstArgument - secondTerm;

  if(!secondArgument){
    firstTerm = -firstArgument;
    secondTerm = firstArgument;
  }
  if(!firstArgument){
    firstTerm = -1;
    secondTerm = 1;
  }
  return function(){
    let result = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = result;
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
