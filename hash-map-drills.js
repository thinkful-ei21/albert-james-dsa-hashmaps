'use strict';

const HashMap = require('./hash-map.js');

const lotr = new HashMap();

const data = [
  {Hobbit: 'Bilbo'},
  {Hobbit: 'Frodo'},
  {Wizard: 'Gandolf'},
  {Human: 'Aragon'},
  {Elf: 'Legolas'},
  {Maiar: 'The Necromancer'},
  {Maiar: 'Sauron'},
  {RingBearer: 'Gollum'},
  {LadyOfLight: 'Galadriel'},
  {HalfElven: 'Arwen'},
  {Ent: 'Treebeard'},
];

data.forEach(each => {
  const key = Object.keys(each);
  lotr.set(key[0], each[key[0]]);
});

console.log(lotr);
