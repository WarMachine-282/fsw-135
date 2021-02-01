const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory");

//GET ALL
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

//GET ONE
inventoryRouter.get("/:inventoryId", (req, res, next) => {
  Inventory.findOne({ _id: req.params.inventoryId }, (err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

//GET BY NAME
inventoryRouter.get("/search/name", (req, res, next) => {
  Inventory.find({ name: req.query.name }, (err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

//GET BY CATEGORY
inventoryRouter.get("/search/category", (req, res, next) => {
  Inventory.find({ category: req.query.category }, (err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

//GET BY VALUE
inventoryRouter.get("/search/value", (req, res, next) => {
  Inventory.find({ value: req.query.value }, (err, inventory) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(inventory);
  });
});

//POST ONE
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body);
  newItem.save((err, savedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedItem);
  });
});

// DELETE ONE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
  Inventory.findOneAndDelete(
    { _id: req.params.inventoryId },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(
          `Successfully deleted item ${deletedItem.name} from the database`
        );
    }
  );
});

//EDIT ONE
inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    { _id: req.params.inventoryId },
    req.body,
    { new: true },
    (err, updatedInventory) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedInventory);
    }
  );
});

module.exports = inventoryRouter;
