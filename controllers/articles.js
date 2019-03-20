const saveArticle = (req, res, errors, Article, mongoose) => {
  let { article, userId } = req.body;

  Article.findOne({ 'article.url': article.url })
    .then(saveArticle => {
      if (saveArticle) {
        if (
          saveArticle.users.some(usersArrayId =>
            usersArrayId.equals(mongoose.Types.ObjectId(userId)),
          )
        ) {
          errors.article = 'You have already saved this article.';
          return res.status(400).json(errors);
        }

        Article.findOneAndUpdate(
          { 'article.url': article.url },
          { $push: { users: userId } },
          { new: true },
        ).then(savedArticle => {
          if (!savedArticle) {
            errors.article = 'Unable to save article';
            return res.status(400).json(errors);
          }
          return res.json(savedArticle);
        });
      } else {
        const newArticle = new Article({
          article,
          users: [mongoose.Types.ObjectId(userId)],
        });

        newArticle.save().then(savedArticle => {
          if (!savedArticle) {
            errors.article =
              'Oops, something went wrong. Unable to save article';
            return res.status(400).json(errors);
          }
          return res.json(savedArticle);
        });
      }
    })
    .catch(error => {
      if (error) {
        errors.article = 'Oops, something went wrong. Unable to save article';
        return res.status(400).json(errors);
      }
    });
};

module.exports = { saveArticle };
