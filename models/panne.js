import mongoose from 'mongoose'

export const panneSchema = new mongoose.Schema({

    mat_user: {
        type: String,
        ref: 'user',
        required: true,
    },
    type_panne: {
        type: String,
     required: true,
    },
    etat: {
        type: String,
     required: true,
    },
    datePanne: {
        type: Date,
     //required: true,
     default: Date.now
    },
    

})

export default mongoose.model('Panne', panneSchema);