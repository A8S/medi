const express = require('express');
const { getSubdisease, createSubdisease, updateSubdisease, deleteSubdisease } = require('../controllers/subdisease');
const router = express.Router();

//create route
router.post('/subdisease/:dId', (req, res) => {
	console.log('creating sub');
	createSubdisease(req, res);
});

//read route
router.get('/subdiseases/:sdId', (req, res) => {
	getSubdisease(req, res);
});

//update route
router.put('/subdisease/:sdId', (req, res) => {
	updateSubdisease(req, res);
});

//delete route
router.delete('/subdisease/delete/:sdId', (req, res) => {
	deleteSubdisease(req, res);
});

module.exports = router;
