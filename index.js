// Do something... probably
// Copyright 2014 Cameron Lakenen

/**
 * Call the given function with the given probability
 * @param   {float}   prob  Probability [0.0-1.0]
 * @param   {Function} fn   The function to call
 * @returns {*?}            Whatever fn() returns or false
 */
module.exports = function probably(prob, fn) {
  if (Math.random() < prob) {
    return fn();
  }
  return false;
};
