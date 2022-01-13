const Sauce = require ('../models/Sauces');

exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const thing = new Sauce({
      ...req.body
    });
    thing.save()
      .then(() => res.status(201).json({ message: 'Sauce enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.modifySauce = (req, res, next)=>{
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id:req.params.id })
    .then(() => res.status(200).json({message : "Sauce Modifié"}))
    .catch(error => res.status(400).json({ error }));
  };

exports.deleteSauce = (req, res, next)=>{
    Thing.findOne({ _id: req.params.id}).then((sauce)=>{
      if(!sauce){
        return res.status(404).json({
          error: new Error ('Sauce non trouvé')
        });
      }
      if (sauce.userId !== req.auth.userId){
        return res.status(401).json({
          error: new Error('Requête non autorisé')
        })
      }
      Sauce.deleteOne({_id: req.params.id })
    .then(() => res.status(200).json({message : "Sauce Supprimé"}))
    .catch(error => res.status(400).json({ error }));
    });
    
  };

exports.getOneSauce = (req, res, next)=>{
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
  };

exports.getAllSauces = (req, res, next) => {
    //find sans config pour obtenir la liste complète
     Sauce.find()
     .then(things => res.status(200).json(things))
     .catch(error=> res.status(400).json({error}))
   };