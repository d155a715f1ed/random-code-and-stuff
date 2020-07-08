exports.random = function() {
  const fs = require("fs");
  let abilitymap = JSON.parse(fs.readFileSync("./abilities.json"));

  let heroes = [],
    abilities = [];
  for (let hero in abilitymap) {
    heroes.push(hero);
    abilities.push(abilitymap[hero]);
  }

  let rnd = a => Math.floor(Math.random() * a.length);
  let i = rnd(heroes);
  let hero = heroes[i];
  abilities.splice(i, 1);
  i = rnd(abilities);
  let ability = abilities[i][rnd(abilities[i])];
  return "Give " + hero + " " + ability;
};
