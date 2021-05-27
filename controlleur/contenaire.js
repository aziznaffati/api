import mongoose from 'mongoose'
import express from 'express'

import Contenaire from '../models/contenaire.js';


const router = express.Router();



export const createContenaire = async (req, res) => {

    const { snC, nserie_produit,date_ajout } = req.body;

    const newContenaire = new Contenaire({ snC, nserie_produit,date_ajout })

    try {
        await newContenaire.save();
        res.status(200).json(newContenaire);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export const getContenaires = async (req, res) => {
    try {
        const contenaire = await Contenaire.find();
        res.status(200).json(contenaire);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCont = async (req, res) => {
    const { snC } = req.params;
    try {

        const cont = await Contenaire.findOne({snC:snC});
        res.status(200).json(cont)


    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}





export const updateContenaire = async (req, res) => {
    const { snc } = req.params;
    const {  nserie_produit,date_mise } = req.body;

    if (!(await Contenaire.findOne({ snC: snc})))
    return res.status(404).send(`No Contenaire with snC: ${snC}`);


    const updatedContenaire = { 
        
         nserie_produit,
         date_mise
         };

    await Contenaire.findOneAndUpdate({snC: snc}, updatedContenaire, { new: true });

    res.json(updatedContenaire);


}

export const deleteContenaire = async (req, res) => {
    Contenaire.count({ _id: `${req.params.id}` }, async (err, count) => {

        if (count > 0) {
          await Contenaire.findByIdAndRemove(req.params.id);
          res.status(200).json({ message: "Contenaire deleted successfully." });
        } else {
          return res
            .status(400)
            .send(`Contenaire Not Found `);
        }
      }); 
}













export default router;