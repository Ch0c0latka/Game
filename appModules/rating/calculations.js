const WEIGHT = require('./config')

function createRating(obj, WEIGHT) {
    return (
      obj.gameplay * WEIGHT.gameplay +
      obj.design * WEIGHT.design +
      obj.idea * WEIGHT.idea
    );
  }

  function updateRating(array, id, rating) {
    const index = array.findIndex((item) => item.id === id);
    array[index].rating += rating;
    return array;
  }

  module.exports = {createRating, updateRating}