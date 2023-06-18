var express = require('express');
var router = express.Router();
var ToyModel = require('../models/ToyModel');

router.get('/', async (req, res) => {
    var toy_list = await ToyModel.find({})
    res.render('toy/index', { toy: toy_list})
});

router.get('/', async (req, res) => {
    var toy_list = await ToyModel.find({})
    res.render('toy/list', { toy: toy_list})
});

router.get('/add', async (req, res) => {
    res.render('toy/add')
});

router.post('/add', async (req, res) => {
    var toy = req.body;
    await ToyModel.create(toy)
    .then(() => { console.log('New product added successfully!')});
    res.redirect('toy')
});

router.get('/edit/:id', async(req, res) => {
    var id = req.params.id;
    var toy = await ToyModel.findById(id);
    res.render('toy/edit', {toy: toy});
});

router.post('/edit/:id', async(req, res) => {
    var id = req.params.id;
    await ToyModel.findByIdAndUpdate(id)
    .then(() => {console.log('Edited successfully!')});
    res.redirect('toy');
});

router.get('/delete/:id', async(req, res) => {
    await ToyModel.findByIdAndDelete(req.params.id)
    .then(() => { console.log('Deleted successfully!')});
    res.redirect('toy');
});

module.exports = router;
