import mongoose from 'mongoose'

export const produitSchema = new mongoose.Schema({

    nserieProduit: {
        type: String,
        required: true,
    },
    typeembalage: {
        type: String,
     required: true,
    },
    maxembalage: {
        type: String,
     required: true,
    },
    dateajout: {
        type: Date,
     
    },
    datemise: {
        type: Date,
    },
    


})

export default mongoose.model('Produit', produitSchema);