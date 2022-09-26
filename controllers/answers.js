const Answer = require("../models/Answer");

module.exports = {
  createAnswer: async (req, res) => {
    try {
      await Answer.create({
        answer: req.body.answer,
        likes: 0,
        post: req.params.id,
      });
      console.log("Answer has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
};
