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

const makeDeltaTracker = function(old){
  return function(delta){
    let result = { old: old, delta: 0, new : 0};
    result.delta = (delta == undefined) ? 0 : delta;
    result.new = result.old + result.delta;
    old = delta + old;
    return result;
  };
};

const makeFiboGenerator = function(input,input_2){
  input = (input == undefined) ? 0 : input;
  let iteration = 0;
  let initValue = input;
  return function(){
    let term_1 = input;
    let term_2 = input_2;
    if(input_2 == undefined){
      term_1 = 0;
      term_2 = (initValue > 0) ? initValue : 1;
    }
    let fibSeries = 0;
    iteration++;
    
    for(let index = 0; index < iteration; index++){
      fibSeries = term_1;
      term_1 = term_2;
      term_2 = term_1 + fibSeries;
    }
    return fibSeries;
  }; 
};

const makeCycler = function(input){
  let counter = 0;
  let list = input.slice();
  return function(){
    let result = list[counter];
    if(counter < list.length-1) {
      counter++;
    }
    else{
      counter = 0;
    }
    return result;
  };
};

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
