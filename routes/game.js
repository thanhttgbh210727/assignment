var express = require ('express');
const GameModel = require('../models/GameModel');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

//Show
router.get('/', async (req, res) => {
   var game_list = await GameModel.find({});
   var toy_list = await ToyModel.find({});
   res.render('home', { game: game_list, toy: toy_list });
});
 
 router.get('/list', async (req, res) => {
    var game_list = await GameModel.find({})
    res.render('game/list', { game: game_list })
 });


//Add
 router.get('/add', (req, res) => {
    res.render('game/add');
 });
 
 router.post('/add', async (req, res) => {
    var game = req.body;
    await GameModel.create(game)
    res.redirect('/game');
 });
 
 //Delete
 router.get('/delete/:id', async(req, res) => {
    await GameModel.findByIdAndDelete(req.params.id)
    res.redirect('/game');
 });

 
 //View
 router.post('/view', async (req, res) => {
    var id = req.body.id;
    var game = await GameModel.findById(id);
    res.render("game/view", { game : game })
 });


 //Edit
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var game = await GameModel.findById(id);
    res.render('game/edit', { game : game });
 });

 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    await GameModel.findByIdAndUpdate(id)
    res.redirect('/game');
 });


 module.exports = router;