exports.random = function() {
  const fs = require("fs");
  let ultmap = JSON.parse(fs.readFileSync("./ults.json"));

  let heroes = [],
    ultnames = [];
  for (let hero in ultmap) {
    heroes.push(hero);
    ultnames.push(ultmap[hero]);
  }

  let rnd = a => Math.floor(Math.random() * a.length);
  let i = rnd(heroes);
  let hero = heroes[i];
  ultnames.splice(i, 1);
  i = rnd(ultnames);
  let ult = ultnames[i];
  return "Give " + hero + " " + ult;
};
