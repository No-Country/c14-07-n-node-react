const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    names: { type: String, required: true, trim: true },
    surnames: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    identification_number: { type: Number, required: true, unique: true },
    age: { type: Number, required: true, unique: true },
    phone: { type: Number },
    role: { type: String, required: true, trim: true, default: "user" },
    status: { type: String, required: true, trim: true, default: "active" },
    token: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = model("Users", userSchema);
 