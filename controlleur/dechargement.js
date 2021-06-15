import mongoose from "mongoose";
import express from "express";

import Dechargement from "../models/dechargement.js";
import Chariot from "../models/chariot.js";

const router = express.Router();

export const createDechargement = async (req, res) => {
  const {snC, snPDA, datedechargementChar,heure_dech  } = req.body;
  const checkSNC = await Chariot.findOne({ snC });
  if (!checkSNC)
  return res.status(404).json({ message: "chariot n'existe pas!!" });
  const newDechargement = new Dechargement({ snC, snPDA, datedechargementChar,heure_dech });

  try {
    await newDechargement.save();
    res.status(200).json(newDechargement);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDechargement = async (req, res) => {
  try {
    const dechargement = await Dechargement.find();
    console.log("dechargement: ", dechargement);
    res.status(200).json(dechargement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDech = async (req, res) => {
  const { sn } = req.params;
  try {
    const dechargement = await Dechargement.findOne({ snC: sn });
    res.status(200).json(dechargement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateDechargement = async (req, res) => {
  const { sn } = req.params;
  const { datedechargementChar,heure_dech } = req.body;

  if (!(await Dechargement.findOne({ snC: sn })))
    return res.status(404).send(`No Chariot with snC: ${snC}`);

   const updatedDechargement = {
    datedechargementChar,heure_dech
  };

  await Dechargement.findOneAndUpdate({ snC: sn }, updatedDechargement, {
    new: true,
  });

  res.json(updatedDechargement);
};


export const deleteDechargement = async (req, res) => {
  const {snC} = req.params

  try {
      const dechargement = await Dechargement.findOne({snC})
      
      if(!dechargement)  return  res.status(200).json({ message: "Dechargement Not Found" });

      await Dechargement.findByIdAndRemove(dechargement._id);
     return  res.status(200).json({ message: "Dechargement deleted successfully." });
    
  } catch (error) {
      return res.status(400).send(`Dechargement Not Found `);
  }
};

export default router;
