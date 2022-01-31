const Sauce = require("../models/Sauces");
//Vérification id et gestion like/dislike d'une sauce
exports.likeStatus = (req, res) => {
  const like = req.body.like;
  const userId = req.body.userId;
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      //On vérifie si le userId existe déjà
      let userLiked = sauce.usersLiked.find((id) => id === userId);
      let userDisliked = sauce.usersDisliked.find((id) => id === userId);

      switch (like) {
        //L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié.
        //Cela permet de garder une trace de leurs préférences et les empêche de liker ou de ne pas disliker la même sauce plusieurs fois

        //like = 1, l'utilisateur aime (= like) la sauce
        case 1:
          sauce.likes += 1;
          sauce.usersLiked.push(userId);
          break;

        // Si like = 0, l'utilisateur annule son like ou son dislike. Si l'utilisateur veut annuler son like/dislike
        case 0:
          if (userLiked) {
            sauce.likes -= 1;
            sauce.usersLiked = sauce.usersLiked.filter((id) => id !== userId);
          }
          if (userDisliked) {
            sauce.dislikes -= 1;
            sauce.usersDisliked = sauce.usersDisliked.filter(
              (id) => id !== userId
            );
          }
          break;

        //Si like = -1, l'utilisateur n'aime pas (=dislike) la sauce.
        case -1:
          sauce.dislikes += 1;
          sauce.usersDisliked.push(userId);
      }

      sauce
        .save()
        .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
