const mongosse = require ('mongoose');

//Ajout plugin validator unique
const uniqueValidator = require ('mongoose-unique-validator');

// unique: true pour s'assurer qu'on ne peut s'inscrire une fois avec la même adresse et mdp
const userSchema = mongosse.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

//Le validateur doit être appliqué avant l'exportation en model

userSchema.plugin(uniqueValidator);

//Export du schéma sous forme de model
module.exports = mongoose.model('User', userSchema);