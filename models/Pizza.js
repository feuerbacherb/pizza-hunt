const { Schema, model } = require('mongoose');

// pseudocode
//    name of pizza
//    name of user who created pizza
//    timestamp of creation
//    timestamp of updates
//    pizza's suggested size
//    pizza's toppings

const PizzaSchema = new Schema({
   pizzaName: {
      type: String
   },
   createdBy: {
      type: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   size: {
      type: String,
      default: 'Large'
   },
   toppings: []
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;