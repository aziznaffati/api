import mongoose from 'mongoose'

export const chargementSchema = new mongoose.Schema({

    snC: {
        type: String,
        ref: 'chariot',
        required: true,
    },
    snPDA: {
        type: String,
        ref: 'ligne',
        required: true,
    },
    datechargementChar: {
        type: Date,
        //required: true,
      },
      heure_ch: {
        type: String,
        //required: true,
        
    }

})

export default mongoose.model('Chargement', chargementSchema);