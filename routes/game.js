var express = require ('express');
const GameModel = require('../models/GameModel');
var router = express.Router();

//Show
router.get('/', async (req, res) => {
    var game_list = await GameModel.find({})
    res.render('game/index', { game : game_list })
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
    .then(() => { console.log ("New game has been added !")});
    res.redirect('/game');
 });
 
 //Delete
 router.get('/delete/:id', async(req, res) => {
    await GameModel.findByIdAndDelete(req.params.id)
    .then(() => { console.log ('Selected game has been deleted')});
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
       .then(() => { console.log("Selected game has been edited !") });
    res.redirect('/game');
 });


 module.exports = router;