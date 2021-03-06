import mongoose from "mongoose";
import express from "express";

import Chariot from "../models/chariot.js";

const router = express.Router();

export const createChariot = async (req, res) => {
  const { snC, statuChar } =
    req.body;
  const newChariot = new Chariot({
    snC,
    statuChar,
    
  });

  try {
    await newChariot.save();
    res.status(200).json(newChariot);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getChariot = async (req, res) => {
  try {
    const chariot = await Chariot.find();
    res.status(200).json(chariot);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getC = async (req, res) => {
  const { snC } = req.params;
  try {
    const chariot = await Chariot.findOne({ snC: snC });
    res.status(200).json(chariot);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const updateChar = async (req, res) => {
  const { snC } = req.params;
  const { statuChar, } = req.body;
const chariot = await Chariot.findOne({ snC: snC })
  if (!chariot)
    return res.status(404).send(`No Chariot with snC: ${snC}`);

  const updatedchar = {
    statuChar,
  };

  await Chariot.findByIdAndUpdate(chariot._id, updatedchar, { new: true });

  res.json(updatedchar);
};


export const deleteChariot = async (req, res) => {
  const {snC} = req.params

  try {
      const chariot = await Chariot.findOne({snC})
      
      if(!chariot)  return  res.status(200).json({ message: "Chariot Not Found" });

      await Chariot.findByIdAndRemove(chariot._id);
     return  res.status(200).json({ message: "Chariot deleted successfully." });
    
  } catch (error) {
      return res.status(400).send(`Chariot Not Found `);
  }
};


export default router;
