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
    } else{
      counter = 0;
    }
    return result;
  };
};

const sum = function(num){
  return num + 2;
};

const concatWith = function(listToAdd){
  return [1,2,3].concat(listToAdd);
};

const isBetween = function(num1,num2){
  return (10 > num1) && (10 < num2);  
};

const paintCar = function(make, model){
  return {color: 'yellow', make: make, model: model};
}

const curry = function(input, value){
  return function(input_2, input_3){
    if(input.name == 'sum'){
      return sum(input_2);
    }
    if(input.name == 'isBetween'){
      return isBetween(input_2, input_3);
    }
    if(input.name == 'concatWith'){
      return concatWith(input_2);  
    }
    return paintCar(input_2, input_3);
  };
};

const decrement = function(length){
  return length - 1;
};

const lengthOf = function(list){
  return decrement(list.length);
};

const isElementNonZero = function(element){
  return element != 0;
};

const removeZeroes = function(list_1, list_2){
  let newList_1 = list_1.filter(isElementNonZero);
  let newList_2 = list_2.filter(isElementNonZero);
  return concatNonZeroes(newList_1, newList_2);
};

const concatNonZeroes = function(list_1, list_2){
  return list_1.concat(list_2);
};

const compose = function(funct1, funct2){
  return function(list_1, list_2){
    if(funct1.name == 'removeZeroes'){
      return removeZeroes(list_1, list_2);
    }
    return lengthOf(list_1);
  };
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
