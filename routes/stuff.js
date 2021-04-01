const express = require('express');
const router = express.Router();

const auth=require('../middleware/auth');
const multer=require('../middleware/multer-config');
const stuffCtrl=require("../controllers/stuff");

router.post('/',auth, multer,stuffCtrl.createThing);

router.get('/:id',auth,stuffCtrl.getOneThing);//récupère un objet dans la base de données(lecture)

router.get('/', auth,stuffCtrl.getAllStuff);//récup tous les objets

router.put('/:id', auth,multer,stuffCtrl.modifyThing);//modification

router.delete('/:id', auth,stuffCtrl.deleteThing);//supression

module.exports = router;