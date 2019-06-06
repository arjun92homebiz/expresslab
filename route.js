"use strict";

const express =require("express");
const router = express.Router(); // use the router function to create router object
// const cartItems = require("./cart-items")
const pool = require("./pg-connection-pool");
// gets data from cart-items and displaying it 

function selectAll (res) {
    pool
    .query("select * from ShoppingCart order by id")
    .then(result => res.json(result.id));
}
router.get("/cart-items", (req, res) => {
    selectAll(res);
    console.log("GET");
});

// adding new object into an array
router.post("/cart-items", (req, res) => {
    pool
    .query("insert into ShoppingCart (product, price, quantity) values ($1::text, $2::int, $3::int)",[
        req.body.product,
        req.body.price,
        req.body.quantity
    ]).then(() => {
        selectAll(res);
    });
});

// deleting an array from the array
router.delete("/cart-items/:id", (req, res) => {
    pool
    .query("delete from ShoppingCart where id=$1::int;",
    [Number(req.params.id)])
    .then(() => {
        selectAll(res);
    });
});

// edits an object in the array
router.put("/cart-items/:id", (req, res) => {
    pool
    .query("update cart-items set product=$1::text, price=$2::int, quantity=$3::int where id=$4::int",[
        req.body.product,
        req.body.price,
        req.body.quantity,
        Number(req.params.id)
    ]).then(() => {
        selectAll(res);
    });
});

module.exports = router;



























//      EXPRESS METHOD     EXPRESS METHOD
// const express =require("express");
// const router = express.Router(); // use the router function to create router object
// const cartItems = require("./cart-items")

// // gets data from cart-items and displaying it 
// router.get("/cart-items", (req, res) => {
//     res.json(cartItems);
// });

// // adding new object into an array
// router.post("/cart-items", (req, res) => {
//     console.log(req.body);
//     cartItems.push(req.body);
//     res.json(cartItems);
// });

// // deleting an array from the array
// router.delete("/cart-items/:id", (req, res) => {
//     console.log(req.params.id);
//     cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1);
//     res.json(cartItems);
// });

// // edits an object in the array
// router.put("/cart-items/:id", (req, res) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1, req.body);
//     res.json(cartItems);
// });

// module.exports= router;