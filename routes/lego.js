var express = require ('express');
const GameModel = require('../models/GameModel');
const ToyModel = require('../models/ToyModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

//Show
router.get('/', async (req, res) => {
    var game_list = await GameModel.find({});
    var toy_list = await ToyModel.find({});
    var lego_list = await LegoModel.find({});
    res.render('home', { game: game_list, toy: toy_list, lego: lego_list });
 });
 
 router.get('/list', async (req, res) => {
    var lego_list = await LegoModel.find({})
    res.render('lego/list', { lego: lego_list })
 });


//Add
 router.get('/add', (req, res) => {
    res.render('lego/add');
 });
 
 router.post('/add', async (req, res) => {
    var lego = req.body;
    await LegoModel.create(lego)
    res.redirect('/lego');
 });
 
 //Delete
 router.get('/delete/:id', async(req, res) => {
    await LegoModel.findByIdAndDelete(req.params.id)
    res.redirect('/lego');
 });

 
 //View
 router.post('/view', async (req, res) => {
    var id = req.body.id;
    var lego = await LegoModel.findById(id);
    res.render("lego/view", { lego : lego })
 });


 //Edit
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var lego = await LegoModel.findById(id);
    res.render('lego/edit', { lego : lego });
 });

 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    await LegoModel.findByIdAndUpdate(id)
    res.redirect('/lego');
 });


 module.exports = router;