import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcryptjs";

import User from "../models/user.js";

const router = express.Router();

export const createUser = async (req, res) => {
  const { email, matriculeUser, passUser, roleUser } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(passUser, salt);

  const newUser = new User({ email, matriculeUser, hashedPassword, roleUser });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUs = async (req, res) => {
  const { mat } = req.params;
  try {
    const user = await User.findOne({ matriculeUser: mat });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { mat } = req.params;
  const { email, passUser, roleUser } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(passUser, salt);

  if (!(await User.findOne({ matriculeUser: mat })))
    return res.status(404).send(`No User with matriculeUser: ${mat}`);

  const updatedUser = {
    email,
    passUser: hashedPassword,
    roleUser,
  };

  await User.findOneAndUpdate({ matriculeUser: mat }, updatedUser, {
    new: true,
  });

  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  User.count({ _id: `${req.params.id}` }, async (err, count) => {
    if (count > 0) {
      await User.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      return res.status(400).send(`User Not Found `);
    }
  });
};

export default router;
