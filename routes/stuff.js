const express = require('express');
const router = express.Router();
const stuffCtrl=require("../controllers/stuff");

router.post('/', stuffCtrl.createThing);

router.get('/:id', stuffCtrl.getOneThing);//récupère un objet dans la base de données(lecture)

router.get('/', stuffCtrl.getAllThing);//récup tous les objets

router.put('/:id', stuffCtrl.modifyThing);//modification

router.delete('/:id', stuffCtrl.deleteThing);//supression

module.exports = router;