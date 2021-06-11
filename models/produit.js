import mongoose from 'mongoose'

export const produitSchema = new mongoose.Schema({

    nserieProduit: {
        type: String,
        required: true,
    },
    qtestock: {
        type: Number,
     required: true,
    },
    
    maxembalageC: {
        type: String,
     required: true,
    },
    maxembalageSH: {
        type: String,
     required: true,
    },
    


})

export default mongoose.model('Produit', produitSchema);