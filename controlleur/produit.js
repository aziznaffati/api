import mongoose from "mongoose";
import express from "express";

import Produit from "../models/produit.js";

const router = express.Router();

export const createProduit = async (req, res) => {
  const { nserieProduit, typeembalage, maxembalage, dateajout, datemise } =
    req.body;
  if (maxembalage == 0) {
    return res.status(409).send({
      message: "Invalid quentité",
    });
  }
  const newProduit = new Produit({
    nserieProduit,
    typeembalage,
    maxembalage,
    dateajout,
    datemise,
  });

  try {
    await newProduit.save();
    res.status(200).json(newProduit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProduit = async (req, res) => {
  try {
    const produit = await Produit.find();
    console.log("Produit: ", produit);
    res.status(200).json(produit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProd = async (req, res) => {
  const { sn } = req.params;
  try {
    const produit = await Produit.findOne({ nserieProduit: sn });
    res.status(200).json(produit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProduit = async (req, res) => {
  const { sn } = req.params;
  const { typeembalage, maxembalage, datemise } = req.body;

  if (!(await Produit.findOne({ nserieProduit: sn })))
    return res.status(404).send(`No Produit with nserieProduit: ${nserieProduit}`);

   const updatedProduit = {
    typeembalage,
    maxembalage,
    datemise,
  };

  await Produit.findOneAndUpdate({ nserieProduit: sn }, updatedProduit, {
    new: true,
  });

  res.json(updatedProduit);
};

export const deleteProduit = async (req, res) => {
  produit.count({ _id: `${req.params.id}` }, async (err, count) => {
    if (count > 0) {
      await produit.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: "Produit deleted successfully." });
    } else {
      return res.status(400).send(`Produit Not Found `);
    }
  });
};

export default router;
