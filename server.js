"use-strict"
const express = require("express"); //need to require express, so create a variable
const app = express(); 
const routes = require("./route"); 

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", routes);

const port = 3000;

app.listen(port, () => console.log(`Server is running on PORT ${port}`));