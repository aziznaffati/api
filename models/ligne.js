import mongoose from 'mongoose'

export const ligneSchema = new mongoose.Schema({

    snPDA: {
        type: String,
        required: true,
    },
    designationPDA: {
        type: String,
        required: true,
    },
    dateaffecPDA: {
        type: Date,
     required: true,
     
    },
    mat_user: {
        type: String,
        ref: 'user',
        required: true,
    }




})

export default mongoose.model('Ligne', ligneSchema);