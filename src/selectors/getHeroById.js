const { heroes } = require("../data/heroes");

export const getHeroById = (id) => {

  const hero = heroes.find(hero => hero.id === id)

  return hero
  
}