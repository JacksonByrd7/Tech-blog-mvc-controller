// Import the necessary models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Define the relationships between the models

// User has many Posts
User.hasMany(Post, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

// Post belongs to a User
Post.belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

// Comment belongs to a User
Comment.belongsTo(User, {
  foreignKey: "user_id", // Set up the foreign key relationship
});

// Comment belongs to a Post
Comment.belongsTo(Post, {
  foreignKey: "post_id", // Set up the foreign key relationship
});

// Post has many Comments
Post.hasMany(Comment, {
  foreignKey: "post_id", // Set up the foreign key relationship
});

// Export the models
module.exports = { User, Post, Comment };
