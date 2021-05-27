import mongoose from "mongoose";
import express from "express";

import Panne from "../models/panne.js";

const router = express.Router();

export const createPanne = async (req, res) => {
  const { mat_user, type_panne, etat,datePanne } = req.body;

  const newPanne = new Panne({ mat_user, type_panne,etat, datePanne });

  try {
    await newPanne.save();
    res.status(200).json(newPanne);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPanne = async (req, res) => {
  try {
    const panne = await Panne.find();
    res.status(200).json(panne);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPane = async (req, res) => {
  const { mat } = req.params;
  try {
    const panne = await Panne.findOne({ mat_user: mat });
    res.status(200).json(panne);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatePanne = async (req, res) => {
  const { id } = req.params;
  const { etat } = req.body;

  if (!(await Panne.findById({ _id: id })))
    return res.status(404).send(`No Panne with id: ${id}`);

  const updatePanne = {
    etat
  };
  await Panne.findByIdAndUpdate({ _id: id }, updatePanne, { new: true });

  res.json(updatePanne);
};
export const deletePanne = async (req, res) => {
  Panne.count({ _id: `${req.params.id}` }, async (err, count) => {
    if (count > 0) {
      await Panne.findByIdAndRemove(req.params.id);
      
      res.status(200).json({ message: "Panne deleted successfully." });
    } else {
      return res.status(400).send(`Panne Not Found `);
    }
  });
};

export default router;
