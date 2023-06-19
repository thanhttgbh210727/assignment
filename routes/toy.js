var express = require ('express');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

//Show
router.get('/', async (req, res) => {
    var toy_list = await ToyModel.find({})
    res.render('toy/index', { toy : toy_list })
 });
 
 router.get('/list', async (req, res) => {
    var toy_list = await ToyModel.find({})
    res.render('toy/list', { toy: toy_list })
 });


//Add
 router.get('/add', (req, res) => {
    res.render('toy/add');
 });
 
 router.post('/add', async (req, res) => {
    var toy = req.body;
    await ToyModel.create(toy)
    .then(() => { console.log ("New toy has been added !")});
    res.redirect('/toy');
 });
 
 
 //Delete
 router.get('/delete/:id', async(req, res) => {
    await ToyModel.findByIdAndDelete(req.params.id)
    .then(() => { console.log ('Selected toy has been deleted')});
    res.redirect('/toy');
 });

 
 //View
 router.post('/view', async (req, res) => {
    var id = req.body.id;
    var toy = await ToyModel.findById(id);
    res.render("toy/view", { toy : toy })
 });


 //Edit
 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy = await ToyModel.findById(id);
    res.render('toy/edit', { toy : toy });
 });

 
 router.post('/edit/:id', async (req, res) => {
    await ToyModel.findByIdAndUpdate(req.params.id, req.body)
       .then(() => { console.log("Selected toy has been edited !") });
    res.redirect('/toy');
 }); 

 module.exports = router;