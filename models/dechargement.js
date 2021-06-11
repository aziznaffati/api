import mongoose from "mongoose";

export const dechargementSchema = new mongoose.Schema({
  snC: {
    type: String,
    ref: "chariot",
    required: true,
  },
  snPDA: {
    type: String,
    ref: "ligne",
    required: true,
  },
  datedechargementChar: {
    type: Date,
    //required: true,
  },
  heure_dech: {
    type: String,
    //required: true,
  },
});

export default mongoose.model("Dechargement", dechargementSchema);
