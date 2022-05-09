const games = require('../data/games.json');
const { generateSite } = require('./generatePage.js');

const randomRating = function (game) {
  game.rating = Math.ceil(Math.random() * 10) + '/10';
  return game;
};

const addRatings = (games) => games.map(randomRating);

const maxRate = (game1, game2) => game1.rating > game2.rating ? game1 : game2;

const main = function (games) {
  games = addRatings(games);
  const maxRatedGame = games.reduce(maxRate);
  generateSite(maxRatedGame);
};

main(games);
