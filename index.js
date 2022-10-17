// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

const destructivelyRemoveLastCat = name => cats.pop(name);

const destructivelyRemoveFirstCat = name => cats.shift(name);

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats
}

function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats
}


function removeLastCat(name) {
    const newCats = [...cats];
    newCats.pop(name);
    return newCats
}

function removeFirstCat(name) {
    const newCats = cats.slice();
    newCats.shift(name);
    return newCats
}