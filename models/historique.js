import mongoose from "mongoose";

export const historiqueSchema = new mongoose.Schema({
    mat_user: {
        type: String,
        ref: 'user',
        required: true,
    },
  snPDA: {
    type: String,
    ref: "ligne",
    required: true,
  },
  date: {
    type: Date,
    //required: true,
  },
  heure: {
    type: String,
    //required: true,
  },
});

export default mongoose.model("Historique", historiqueSchema);
