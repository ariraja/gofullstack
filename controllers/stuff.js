const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {//création d'obets dans la base de données
    delete req.body._id;
    const thing = new Thing({
        ...req.body //... = spread copie éléments de req.body
    });
    thing.save()//enregistre objet dnas la base
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.modifyThing = (req, res, next) => {//modification
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteThing=(req, res, next) => {//supression
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
        .catch(error => res.status(400).json({ error }));
}

exports.getOneThing=(req, res, next) => {//lecture dans la base de données
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
}

exports.getAllThing=(req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
}