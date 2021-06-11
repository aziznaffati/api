import mongoose from "mongoose";

export const chariotSchema = new mongoose.Schema({
  snC: {
    type: String,

    required: true,
  },
  statuChar: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chariot", chariotSchema);
