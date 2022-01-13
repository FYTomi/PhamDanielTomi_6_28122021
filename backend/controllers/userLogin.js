const bcrypt = require ('bcrypt');
const User  = require ('../models/Users');

//Middleware pour login à un compte existant
exports.login = (req, res, next) => {
    User.findOne({ emil: req.body.email})
    .then(user =>{
      if (!user){
        return res.status(401).json({error: 'Utilisateur non trouvé'});
      }
      bcrypt.compare(req.body.password, user.password)
      .then(valid =>{
        if(!valid) {
          return res.status(401).json({error: 'Mot de passe incorrtect'})
        }
        res.status(200).json({
          userId: user._id,
          token: 'TOKEN'
        });
      })
      .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};