import mongoose from "mongoose";
import express from "express";

import Ligne from "../models/ligne.js";

const router = express.Router();

export const createLigne = async (req, res) => {
  const { snPDA, designationPDA  } = req.body;

  const newLigne = new Ligne({ snPDA, designationPDA  });

  try {
    await newLigne.save();
    res.status(200).json(newLigne);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getLigne = async (req, res) => {
  try {
    const ligne = await Ligne.find();
    res.status(200).json(ligne);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLine = async (req, res) => {
  const { sn } = req.params;
  try {
    const ligne = await Ligne.findOne({ snPDA: sn });
    res.status(200).json(ligne);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateLigne = async (req, res) => {
  const { sn } = req.params;
  const { designationPDA } = req.body;

  if (!(await Ligne.findOne({ snPDA: sn })))
    return res.status(404).send(`No Ligne with snPDA: ${snPDA}`);

  const updatedLigne = {
    designationPDA,
    
   
  };

  await Ligne.findOneAndUpdate({ snPDA: sn }, updatedLigne, { new: true });

  res.json(updatedLigne);
};



export const deleteLigne = async (req, res) => {
  const {snp} = req.params

  try {
      const ligne = await Ligne.findOne({snPDA:snp})
      
      if(!ligne)  return  res.status(200).json({ message: "Ligne Not Found" });

      await Ligne.findByIdAndRemove(ligne._id);
     return  res.status(200).json({ message: "Ligne deleted successfully." });
    
  } catch (error) {
      return res.status(400).send(`Ligne Not Found `);
  }
};



export default router;
