let heroName = "Guillardi";
let xp = 6000;

const levels = {
  Iron: 1000,
  Brass: 2000,
  Silver: 5000,
  Gold: 7000,
  Platinum: 8000,
  Upward: 9000,
  Imortal: 10000,
  Radiant: 10001,
};

function getLevel(xp) {
  for (const levelName of Object.keys(levels)) {
    if (xp <= levels[levelName]) return levelName;
  }

  return "Unknown level ";
}

const level = getLevel(xp);

console.log(`The Hero named ${heroName} is at the level of ${level}`);
