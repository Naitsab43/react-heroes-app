const { heroes } = require("../data/heroes");

export const getHeroesByPusblisher = (publisher) => {

  const validPublishers = ["DC Comics", "Marvel Comics"];

  if(!validPublishers.includes(publisher)){
    throw new Error(`Publisher "${publisher}" no es correcto.`)
  }

  return heroes.filter(hero => hero.publisher === publisher)


}