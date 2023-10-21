const { Schema, model } = require("mongoose");

const turnSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    scheduledAt: { type: Date, required: true },
    status: { type: String, required: true, trim: true, default: "scheduled", },
    note: { type: String, required: true, trim: true, }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Turns", turnSchema);