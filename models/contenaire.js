import mongoose from 'mongoose'

export const contenaireSchema = new mongoose.Schema({

    snC: {
        type: String,
        required: true,
    },
    nserie_produit: {
        type: String,
        ref: 'produit',
        required: true,
    },
    date_ajout: {
        type: Date,
        //required: true,
        
    },
    date_mise: {
        type: Date,
        //required: true,
        
    }
})

export default mongoose.model('Contenaire', contenaireSchema);