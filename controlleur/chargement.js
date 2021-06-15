import mongoose from "mongoose";
import express from "express";

import Chargement from "../models/chargement.js";
import Chariot from "../models/chariot.js";

const router = express.Router();

export const createChargement = async (req, res) => {
  const {snC, snPDA, datechargementChar,heure_ch  } = req.body;

  const checkSNC = await Chariot.findOne({ snC });
  if (!checkSNC)
    return res.status(404).json({ message: "chariot n'existe pas!!" });
  const newChargement = new Chargement({ snC, snPDA, datechargementChar,heure_ch   });

  try {
    await newChargement.save();
    res.status(200).json(newChargement);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getChargement = async (req, res) => {
  try {
    const chargement = await Chargement.find();
    console.log("Chargement: ", chargement);
    res.status(200).json(chargement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getch = async (req, res) => {
  const { sn } = req.params;
  try {
    const chargement = await Chargement.findOne({ snC: sn });
    res.status(200).json(chargement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateChargement = async (req, res) => {
  const { sn } = req.params;
  const { datechargementChar,heure_ch } = req.body;

  if (!(await Chargement.findOne({ snC: sn })))
    return res.status(404).send(`No Chariot with snC: ${snC}`);

   const updatedChargement = {
    datechargementChar,heure_ch
  };

  await Chargement.findOneAndUpdate({ snC: sn }, updatedChargement, {
    new: true,
  });

  res.json(updatedChargement);
};




export const deleteChargement = async (req, res) => {
  const {snC} = req.params

  try {
      const chargement = await Chargement.findOne({snC})
      
      if(!chargement)  return  res.status(200).json({ message: "Chargement Not Found" });

      await Chargement.findByIdAndRemove(chargement._id);
     return  res.status(200).json({ message: "Chargement deleted successfully." });
    
  } catch (error) {
      return res.status(400).send(`Chargement Not Found `);
  }
};

export default router;
