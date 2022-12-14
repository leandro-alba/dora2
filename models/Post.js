const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
   tag: {
     type: String,
     required: true,
   },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
