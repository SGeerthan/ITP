//mongoDB compass connection
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());
// app.use(express.json())

// const PORT = process.env.PORT || 8000;

// //Define schema and model
// const schemadata = mongoose.Schema({
//     name:String,
//     mobile:Number,
//     issue:String,
//     amount:Number,
// },{
//     timestamps : true
// });

// const userModel = mongoose.model("additonalpayments",schemadata);

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>{
//     console.log("connected to db")
//     app.listen(PORT,()=>console.log("Server is running"))
// })
// .catch((err)=>console.log(err));

// //read data
// app.get("/",async(req,res)=>{
//     const data = await userModel.find({})
//     res.json({sucess : true ,data:data})
// })

// //create data
// app.post("/create",async(req,res)=>{
//     console.log(req.body)
//     const data = new userModel(req.body)
//     await data.save()
//     res.send({sucess:true,messaage:"data saved succesfully",data:data})
// })

// //update data
// app.put("/update",async(req,res)=>{
//     console.log(req.body)
//     const {_id,...rest} = req.body
//     console.log(rest)
//     const data = await userModel.updateOne({ _id : _id},rest)
//     res.send({success : true,message:"data updated",data : data})
// })

// //delete
// app.delete("/delete/:id",async(req,res)=>{
//     const id = req.params.id
//     console.log(id)
//     const data = await userModel.deleteOne({_id:id})
//     res.send({success : true,message:"data deleted",data : data})

// })

// const paymentDetailsSchema = mongoose.Schema({
//     paymentDate: Date,
//     amount: Number,
// }, {
//     timestamps: true
// });

// const paymentDetailsModel = mongoose.model("paymentdetails", paymentDetailsSchema);

// // Route to get payment details
// app.get("/paymentdetails", async(req, res) => {
//     try {
//         const paymentDetails = await paymentDetailsModel.find({});
//         res.json({ success: true, data: paymentDetails });
//     } catch (error) {
//         console.error("Error fetching payment details:", error);
//         res.status(500).json({ success: false, message: "Failed to fetch payment details" });
//     }
// });


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




