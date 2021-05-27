import mongoose from 'mongoose'

export const chariotSchema = new mongoose.Schema({

    snC: {
        type: String,
        ref: 'contenaire',
        required: true,
    },
    statuChar: {
        type: String,
     required: true,
    },
    datechargementChar: {
        type: Date,
     //required: true,
    
    },
    datedechargementChar: {
        type: Date,
     //required: true,
    },
    qteProdChar: {
        type: String,
     required: true,
    },
    nserie_produit: {
        type: String,
        ref: 'produit',
        required: true,
    }

})

export default mongoose.model('Chariot', chariotSchema);