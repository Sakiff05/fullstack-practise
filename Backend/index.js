const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

let ProductSchema = new mongoose.Schema({
  title: String,
  country: String,
  description: String,
  image: String,
});

let ProductModel = mongoose.model("cards", ProductSchema);

app.get("/", (_, res) => {
  res.send("Welcome");
});

app.get("/cards", async (_, res) => {
  let products = await ProductModel.find();
  res.send(products);
});

app.get("/cards/:id", async (req, res) => {
  let id = req.params.id;
  let myproduct = await ProductModel.findById(id);
  res.send({
    myproduct,
  });
});

app.post("/cards", async (req, res) => {
  let newProduct = ProductModel(req.body);
  await newProduct.save();
  res.send({
    message: "Success Post",
    data: req.body,
  });
});

app.delete("/cards/:id", async (req, res) => {
  let { id } = req.params;
  await ProductModel.findByIdAndDelete(id);
  res.send({
    message: "Successfully Deleted",
  });
});

app.listen("5000", () => {
  console.log("Listening at port 5000");
});

mongoose
  .connect("mongodb+srv://sakifcfaf206:sakif@immigration.qghuw.mongodb.net/")
  .then(() => {
    console.log("connected to mongodb");
  });
