const User = require('../models/user');
const Game = require('../models/game');

module.exports = {
  create,
  show,
  index,
  update,
  delete: deleteOne
};

async function index(req, res) {
  try{
      const games = await Game.find({});
      res.json(games);
  }
  catch(err){
      res.json(err);
  }
}

async function create(req, res) {
  try {
    req.body.createdBy = req.user._id;
    const game = await Game.create(req.body);
    res.json(game);
  }
  catch(err){
    res.json(err);
  }
}

async function show(req, res) {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  }
  catch(err){
    res.json(err);
  }
}

async function update(req, res) {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedGame);
  }
  catch(err) {
    res.json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    res.json(deletedGame);
  }
  catch(err) {
    res.json(err);
  }
}