// Dependencies
const { model } = require('mongoose');
const peopleSchema = require('../schemas/peopleSchema');




const PeopleModel = model('People', peopleSchema);




// Module Export
module.exports = PeopleModel;