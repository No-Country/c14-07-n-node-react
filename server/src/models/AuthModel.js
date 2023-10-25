const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const createUserSchema = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    second_name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    second_surname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    identification_number: { type: Number, required: true, unique: true },
    age: { type: Number, required: true, },
    phone: { type: String, required: true },
    role: { type: String, required: true, trim: true, default: "user" },
    status: { type: String, required: true, trim: true },
    token: { type: String, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

createUserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
createUserSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = model("createUser", createUserSchema);
