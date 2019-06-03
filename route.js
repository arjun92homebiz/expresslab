"use strict";
const express =require("express");
const router = express.Router();
const cartItems = require("./cart-items")

// gets data from cart-items and displaying it 
router.get("/cart-items", (req, res) => {
    res.json(cartItems);
});

// adding new object into an array
router.post("/cart-items", (req, res) => {
    console.log(req.body);
    cartItems.push(req.body);
    res.json(cartItems);
});

// deleting an array from the array
router.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1);
    res.json(cartItems);
});

// edits an object in the array
router.put("/cart-items/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1, req.body);
    res.json(cartItems);
});

module.exports= router;