import mongoose from 'mongoose'

export const contenaireSchema = new mongoose.Schema({

    snC: {
        type: String,
        ref: 'chariot',
        required: true,
    },
    nserie_produit: {
        type: String,
        ref: 'produit',
        required: true,
    },
    qtechar: {
        type: Number,
     required: true,
    },
    date: {
        type: Date,
        //required: true,
        
    },
    heure: {
        type: String,
        //required: true,
        
    }
})

export default mongoose.model('Contenaire', contenaireSchema);