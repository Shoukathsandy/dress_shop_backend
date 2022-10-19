const express = require("express");
const router = express.Router();
const dressModel = require("../models/dressModel");

//GET ALL dress || @GET REQUEST
router.get("/getAlldress", async (req, res) => {
  try {
    const dresss = await dressModel.find({});
    res.send(dresss);
  } catch (error) {
    res.json({ message: error });
  }
});
router.post("/adddress", async (req, res) => {
  const dress = req.body.dress;
  try {
    const newdress = new dressModel({
      name: dress.name,
      image: dress.image,
      varients: ["small", "medium", "large"],
      description: dress.description,
      category: dress.category,
      prices: [dress.prices],
    });
    await newdress.save();
    res.status(201).send("New dress Added");
    console.log(newdress)
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getdressbyid", async (req, res) => {
  const dressId = req.body.dressId;
  try {
    const dress = await dressModel.findOne({ _id: dressId });
    res.send(dress);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatedress", async (req, res) => {
  const updateddress = req.body.updateddress;
  try {
    const dress = await dressModel.findOne({ _id: updateddress._id });
    (dress.name = updateddress.name),
      (dress.description = updateddress.description),
      (dress.image = updateddress.image),
      (dress.category = updateddress.category),
      (dress.prices = [updateddress.prices]);
    await dress.save();
    res.status(200).send("dress Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletedress", async (req, res) => {
  const dressId = req.body.dressId;
  try {
    await dressModel.findOneAndDelete({ _id: dressId });
    res.status(200).send("dress Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
