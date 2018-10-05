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

PollFeatureSchema.virtual('answer').set(function(functionnal, dysfunctionnal){

    //We determine from kano matrix which category the feature is classed in
    let stringResult = KanoMatrix[functionnal][dysfunctionnal]

    //we increment the total of answers
    this.stats.total ++
    
    //we increment the right category counter
    if(stringResult == 'M'){
        this.stats.musthave ++
    }
    else if(stringResult == 'L'){
        this.stats.linear ++
    }
    else if(stringResult == 'E'){
        this.stats.exciter ++
    }
    else if(stringResult == 'Q'){
        this.stats.questionnable ++
    }
    else if(stringResult == 'I'){
        this.stats.indifferent ++
    }
    else if(stringResult == 'R'){
        this.stats.reverse ++
    }
})

module.exports = PollFeatureSchema