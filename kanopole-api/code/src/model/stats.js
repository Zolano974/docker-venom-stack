const mongoose = require("mongoose");

let Schema = mongoose.Schema;

/**
 * the stats structure is designed to monitor the results of a Survey for a single feature :
 *  -   for each property, the value is the number of results falling in that category
 *  -   the result is not directly given by the user, but determined by his answers to Functionnal & Dysfunctionnal questions
 */
const StatsSchema = new Schema({
  total: Number,

  musthave: Number,
  linear: Number,
  exciter: Number,

  questionnable: Number,
  indifferent: Number,
  reverse: Number
});

/**
 *      % for each possible result
 */
StatsSchema.virtual("musthaveRate").get(function() {
  return (this.musthave / this.total) * 100;
});
StatsSchema.virtual("linearRate").get(function() {
  return (this.linear / this.total) * 100;
});
StatsSchema.virtual("exciterRate").get(function() {
  return (this.exciter / this.total) * 100;
});
StatsSchema.virtual("questionnableRate").get(function() {
  return (this.questionnable / this.total) * 100;
});
StatsSchema.virtual("indifferentRate").get(function() {
  return (this.indifferent / this.total) * 100;
});
StatsSchema.virtual("reverseRate").get(function() {
  return (this.reverse / this.total) * 100;
});

/**
 * Given the letter of the category, this setter increments the right counters
 */
StatsSchema.virtual("addAnswer").set(function(letter) {
  //we increment the total of answers
  this.total++;

  //we increment the right category counter
  if (letter == "M") {
    this.musthave++;
  } else if (letter == "L") {
    this.linear++;
  } else if (letter == "E") {
    this.exciter++;
  } else if (letter == "Q") {
    this.questionnable++;
  } else if (letter == "I") {
    this.indifferent++;
  } else if (letter == "R") {
    this.reverse++;
  }
});

//export model
var Stats = mongoose.model("Stat", StatsSchema)
module.exports = Stats;
