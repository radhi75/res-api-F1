const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favfood: [],
});
module.exports = mongoose.model("person", personSchema);
