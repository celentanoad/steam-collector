const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    status: {type: String, enum: ["Completed", "Currently Playing", "Not Yet Played"]},
    rating: {type: String, enum: ["N/A", "1", "2", "3", "4", "5"]},
    createdBy: {type: Schema.Types.ObjectId, ref: "User"} 
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Game', gameSchema);
