const consumerKey = "XyBmzuMGjT3pw9Za";
const consumerSecret = "vJBuv4M8x3eeSqn8";

var khan = require('khan')(consumerKey, consumerSecret)

var topic_slug = "Finance";
// console.log(khan.topic(topic_slug));
getExercise(topic_slug);

function getExercise(name) {
  return khan.exercise(name)
}