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
    })

export default mongoose.model('Ligne', ligneSchema);