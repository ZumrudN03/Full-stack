import express from "express";
import mongoose, { Schema } from "mongoose";
import  cors from "cors";
const app = express();
const port = 3100;
app.use(express.json());
app.use(cors())

const flowerSchema = new Schema({
  image: String,
  name: String,
  price: Number,
});

const FlowerModel = mongoose.model("Flowers", flowerSchema);

app.get("/", async (req, res) => {
  try {
    const flower = await FlowerModel.find({});
    res.send(flower);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const flower = await FlowerModel.findById(id);
    res.send(flower);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { image, name, price } = req.body;
    const Newflower = new FlowerModel({ image, name, price });
    await Newflower.save();

    res.send("added");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name, price } = req.params;
    const flower = await FlowerModel.findByIdAndDelete(id);
    res.send("deleted");
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect("mongodb+srv://Zumrud03:Durmuz2003@zumrud.qilshcl.mongodb.net/")
  .then(() => console.log("Connected!"));

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
