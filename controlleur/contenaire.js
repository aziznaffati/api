import mongoose from "mongoose";
import express from "express";

import Contenaire from "../models/contenaire.js";
import Chariot from "../models/chariot.js";
import Produit from "../models/produit.js";

const router = express.Router();

export const createContenaire = async (req, res) => {
  const { snC, nserie_produit, qtechar, date, heure } = req.body;

  const checkSNC = await Chariot.findOne({ snC });
  if (!checkSNC)
    return res.status(404).json({ message: "chariot n'existe pas!!" });

  const checkNP = await Produit.findOne({ nserieProduit: nserie_produit });
  if (!checkNP)
    return res.status(404).json({ message: "Produit n'existe pas!!" });

    if(qtechar > checkNP.maxembalageC && qtechar > checkNP.maxembalageSH && qtechar >  checkNP.qtestock )
     return res.status(409).json({ message: "Qte insuffisant!!" });

  const newContenaire = new Contenaire({
    snC,
    nserie_produit,
    qtechar,
    date,
    heure,
  });

  try {
    await newContenaire.save();
    res.status(200).json(newContenaire);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getContenaires = async (req, res) => {
  try {
    const contenaire = await Contenaire.find();
    res.status(200).json(contenaire);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCont = async (req, res) => {
  const { snC } = req.params;
  try {
    const cont = await Contenaire.findOne({ snC: snC });
    res.status(200).json(cont);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateContenaire = async (req, res) => {
  const { snc } = req.params;
  const { qtechar, date, heure } = req.body;

  if (!(await Contenaire.findOne({ snC: snc })))
    return res.status(404).send(`No Contenaire with snC: ${snC}`);

  const updatedContenaire = {
    qtechar,
    date,
    heure,
  };

  await Contenaire.findOneAndUpdate({ snC: snc }, updatedContenaire, {
    new: true,
  });

  res.json(updatedContenaire);
};

export const deleteContenaire = async (req, res) => {
    const {snC, nserieProduit} = req.params

    try {
        const containaire = await Contenaire.findOne({snC, nserie_produit:nserieProduit})
        
        if(!containaire)  return  res.status(200).json({ message: "Contenaire Not Found" });

        await Contenaire.findByIdAndRemove(containaire._id);
       return  res.status(200).json({ message: "Contenaire deleted successfully." });
      
    } catch (error) {
        return res.status(400).send(`Contenaire Not Found `);
    }
};

export default router;
