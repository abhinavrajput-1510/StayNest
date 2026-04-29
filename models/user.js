const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// we use passportLocalMongoose as a plugin because
// it automatically implement username, hashing, salting and hash password
userSchema.plugin(passportLocalMongoose);

module.exports = model("User", userSchema);
