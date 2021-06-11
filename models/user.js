import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    matriculeUser: {
        type: String,
        required: true,
    },
    passUser: {
        type: String,
        required: true,
    },
    roleUser: {
        type: String,
     required: true,
    },
    mat_chef: {
        type: String,
        ref: 'user',
        //required: true,
    },



})

export default mongoose.model('User', userSchema);