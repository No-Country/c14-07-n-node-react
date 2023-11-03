const { Schema, model, default: mongoose } = require("mongoose");

const createBarber = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    second_name: { type: String, required: false, trim: true },
    surname: { type: String, required: true, trim: true },
    second_surname: { type: String, required: false, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    picture: { type: String, required: false },
    review: { type: String, required: false },
    qualification: { type: Number, required: false },
    description: { type: String, required: false },
    status: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("createBarber", createBarber);
