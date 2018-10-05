const mongoose = require("mongoose")
const Feature = require('../schema/feature')
const Stats = require('../schema/stats')

const KanoMatrix = require('../lib/kanoMatrix')

let Schema = mongoose.Schema;


const PollFeatureSchema = new Schema({
    id: Number,
    feature: Feature,
    stats: Stats,
})

/**
 * Setter for answer => determinate the feature's category from de 2 answers and the kano matrix, and increment the stats consequently
 * answers : {functionnal: [1-5], dysfunctionnal: [1-5]}
 */
PollFeatureSchema.virtual('answer').set(function(answers){

    //We determine from kano matrix which category the feature is classed in
    let stringResult = KanoMatrix[answers.functionnal][answers.dysfunctionnal]

    //we pass the result to the stats, to increment the right counters
    this.stats.addAnswer = stringResult

})

module.exports = PollFeatureSchema