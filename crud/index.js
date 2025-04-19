

//mongoDB cloud based connection
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv for environment variables


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const schemaData = mongoose.Schema({
personalUsage:{
    type:String,
    required:true
},

date:{
  type:Date,
  required:true
},

usage:{
    type:String,
    required:true
},

amount:{
    type:Number,
    required:true
},

}, {
    timestamps: true
});

//module.exports = mongoose.model('additionalpayments', schemaData);
const userModel = mongoose.model("myUsage", schemaData);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));

// Read data
app.get("/", async (req, res) => {
  const data = await userModel.find({});
  res.json({ success: true, data: data });
})

// Create data
app.post("/create", async (req, res) => {
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()
  res.send({ success: true, message: "Data save successfully", data: data })
})

// Update data
app.put("/update", async (req, res) => {
  console.log(req.body)
  const { _id, ...rest } = req.body

  console.log(rest)
  const data = await userModel.updateOne({ _id: _id }, rest)
  res.send({ success: true, message: "Data update successfully", data: data })
})

// Delete data
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ success: true, message: "Data delete successfully", data: data });
});




