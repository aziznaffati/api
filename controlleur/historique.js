import mongoose from "mongoose";
import express from "express";

import Historique from "../models/historique.js";
import Ligne from "../models/ligne.js";

const router = express.Router();

export const createHistorique = async (req, res) => {
  const { mat_user, snPDA, date, heure  } = req.body;

  const newHistorique = new Historique({ mat_user, snPDA, date, heure   });

  try {
    await newHistorique.save();
    res.status(200).json(newHistorique);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getHistorique = async (req, res) => {
  try {
    const historique = await Historique.find();
    res.status(200).json(historique);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getHisto = async (req, res) => {
  const { sn } = req.params;
  const { mat } = req.params;
  try {
    const historique = await Historique.findOne({ mat_user:mat,snPDA: sn });
    res.status(200).json(historique);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getHistoriqueWithMat = async (req, res) => {
  const { mat } = req.params;
  try {
    const historique = await Historique.findOne({ mat_user:mat });
    const ligne = await Ligne.findOne({snPDA: historique.snPDA})
    
    res.status(200).json({historique, ligne });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateHistorique = async (req, res) => {
  const { sn } = req.params;
  const { mat_user,date,heure } = req.body;

  if (!(await Historique.findOne({ snPDA: sn})))
    return res.status(404).send(`No Ligne with snPDA: ${snPDA}`);

  const updatedHistorique = {
    mat_user, date,heure
    
   
  };

  await Historique.findOneAndUpdate({ snPDA: sn }, updatedHistorique, { new: true });

  res.json(updatedHistorique);
};


export const deleteHistorique = async (req, res) => {
  const {mat} = req.params

  try {
      const historique = await Historique.findOne({mat_user:mat})
      
      if(!historique)  return  res.status(200).json({ message: "Historique Not Found" });

      await Historique.findByIdAndRemove(historique._id);
     return  res.status(200).json({ message: "Historique deleted successfully." });
    
  } catch (error) {
      return res.status(400).send(`Historique Not Found `);
  }
};

export default router;
