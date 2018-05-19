const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var nKittens = kittens;
  nKittens.push(name);
  return nKittens;
}

function prependKitten(name){
  var nKittens = kittens;
  nKittens.unshift(name);
  return nKittens;
}

