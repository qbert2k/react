// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import heroes, {owners} from '../data/heroes';

console.log(owners);

const getHeroesById = (id) => heroes.find(h => h.id === id);
console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => heroes.filter(h => h.owner === owner);
console.log(getHeroesByOwner('Marvel'));