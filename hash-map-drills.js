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

function permutationPalindrome(str) {
    // Write an algorithm to check whether any permutation
    // of a string is a palindrome. Given the string "acecarr",
    // the algorithm should return true, because the letters
    // in "acecarr" can be rearranged to "racecar", which is a
    // palindrome. In contrast, given the word "north", the algorithm
    // should return false, because there's no way to rearrange those
    // letters to be a palindrome.

    const lettersMap = new HashMap();
    // count each letter and keep count in a hash map
    // loop through the string
    // hash each letter, if letter is in hashMap then add 1 to the value
    // if it's not in the hashMap then store it and give it a value of one
    // madams --> m: 2, a: 2, d:1, s:1
    for (let i = 0; i < str.length; i++) {
        lettersMap.set(str[i], 0);
    }

    for (let i = 0; i < str.length; i++) {
        const count = lettersMap.get(str[i]);
        lettersMap.set(str[i], count + 1);
    }

    // once we exit loop,
    // for loop
    // check against each char and check the value of that key
    // if the value modded is 0, move on
    // keep a middle counter, if middle counter is more than 1 return false
    let middle = 0;
    for (let i = 0; i < str.length; i++) {
        if (lettersMap.get(str[i]) % 2) {
            middle++;
        }
    }
    if (middle > 1) {
        return false;
    } else {
        return true;
    }
}

const anagrams = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

function anagramGrouper(array) {
    // groups words into groups of anagrams
}

function main() {
    //   console.log(lotr);
    //   console.log(permutationPalindrome('madam')); // true
    //   console.log(permutationPalindrome('madams')); // false
    //   console.log(permutationPalindrome('deed')); // true
    //   console.log(permutationPalindrome('deeds')); // true
    //   console.log(permutationPalindrome('baldfjaldskfj')); // false
}

main();
