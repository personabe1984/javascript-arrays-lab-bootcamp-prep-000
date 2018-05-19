const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


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
  var nKittens = kittens.slice();
  nKittens.unshift(name);
  return nKittens;
}

console.log(kittens);
console.log(appendKitten("something"));
console.log(kittens);
