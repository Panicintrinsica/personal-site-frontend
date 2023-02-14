const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: { type: String, unique: true },
  pronouns: String,
  shortDescription: String,
  longDescription: String,
  location: String,
  phone: String,
  email: String,
  linkedin: String,
  twitter: String,
  github: String,
  mastodon: String,
  twitch: String,
  instagram: String,
  youtube: String
});

module.exports = mongoose.model('Profile', profileSchema);
