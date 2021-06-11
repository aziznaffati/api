import mongoose from "mongoose";
import express from "express";

import Dechargement from "../models/dechargement.js";

const router = express.Router();

export const createDechargement = async (req, res) => {
  const {snC, snPDA, datedechargementChar,heure_dech  } = req.body;

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
  dechargement.count({ _id: `${req.params.id}` }, async (err, count) => {
    if (count > 0) {
      await dechargement.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: "chariot deleted successfully." });
    } else {
      return res.status(400).send(`chariot Not Found `);
    }
  });
};

export default router;
