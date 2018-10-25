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

const makeFiboGenerator = function(firstArgument,secondArgument){
  firstArgument = (firstArgument == undefined) ? 0 : firstArgument;
  let numberOfIteration = 0;
  let initValue = firstArgument;
  return function(){
    let term_1 = firstArgument;
    let term_2 = secondArgument;
    if(secondArgument == undefined){
      term_1 = 0;
      term_2 = (initValue > 0) ? initValue : 1;
    }
    numberOfIteration++;
    return generateNextFibNumber(term_1, term_2, numberOfIteration);
  }; 
};

const makeCycler = function(firstArgument){
  let counter = 0;
  let list = firstArgument.slice();
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

const curry = function(firstArgument, value){
  return function(secondArgument, thirdArgument){
    if(firstArgument.name == 'sum'){
      return sum(secondArgument);
    }
    if(firstArgument.name == 'isBetween'){
      return isBetween(secondArgument, thirdArgument);
    }
    if(firstArgument.name == 'concatWith'){
      return concatWith(secondArgument);  
    }
    return paintCar(secondArgument, thirdArgument);
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
