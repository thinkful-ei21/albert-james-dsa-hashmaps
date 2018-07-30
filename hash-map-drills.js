'use strict';

const HashMap = require('./hash-map.js');

const lotr = new HashMap();

const data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandolf' },
    { Human: 'Aragon' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' }
];

data.forEach(each => {
    const key = Object.keys(each);
    lotr.set(key[0], each[key[0]]);
});

function permutationPalindrome() {
    // Write an algorithm to check whether any permutation
    // of a string is a palindrome. Given the string "acecarr",
    //  the algorithm should return true, because the letters
    // in "acecarr" can be rearranged to "racecar", which is a
    // palindrome. In contrast, given the word "north", the algorithm
    //  should return false, because there's no way to rearrange those
    // letters to be a palindrome.
    // count each letter and keep count in a hash map
    // loop through the string
    // hash each letter, if letter is in hashMap then add 1 to the value
    // if it's not in the hashMap then store it and give it a value of one
    // madams --> m: 2, a: 2, d:1, s:1
    // once we exit loop,
    // for loop
    // check against each char and check the value of that key
    // if the value modded is 0, move on
    // keep a middle counter, if middle counter is more than 1 return false
}

function main() {
    console.log(lotr);
}

main();
