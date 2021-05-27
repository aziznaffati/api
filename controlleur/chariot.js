import mongoose from "mongoose";
import express from "express";

import Chariot from "../models/chariot.js";

const router = express.Router();

export const createEnvChariot = async (req, res) => {
  const { snC, statuChar, datechargementChar, qteProdChar, nserie_produit } =
    req.body;
  if (qteProdChar == 0) {
    return res.status(409).send({
      message: "Invalid quentité",
    });
  }
  req.datechargementChar = Date.now;
  const newEnvChariot = new Chariot({
    snC,
    statuChar,
    datechargementChar,
    qteProdChar,
    nserie_produit,
  });

  try {
    await newEnvChariot.save();
    res.status(200).json(newEnvChariot);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getEnvChariot = async (req, res) => {
  try {
    const EnvChariot = await Chariot.find();
    res.status(200).json(EnvChariot);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEnvC = async (req, res) => {
  const { snC } = req.params;
  try {
    const EnvChariot = await Chariot.findOne({ snC: snC });
    res.status(200).json(EnvChariot);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateChar = async (req, res) => {
  const { snC } = req.params;
  const { statuChar, datechargementChar } = req.body;

  if (!(await Chariot.findOne({ snC: snC })))
    return res.status(404).send(`No Chariot with snC: ${snC}`);

  const updatedchar = {
    statuChar,
    datechargementChar,
  };

  await Chariot.findOneAndUpdate({ snC: snC }, updatedchar, { new: true });

  res.json(updatedchar);
};

export const deleteChariot = async (req, res) => {
  Chariot.count({ _id: `${req.params.id}` }, async (err, count) => {
    if (count > 0) {
      await Chariot.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: "Chariot deleted successfully." });
    } else {
      return res.status(400).send(`Chariot Not Found `);
    }
  });
};

export default router;
