// const express = require('express');
// const router = express.Router();
// const Paymentdetails = require("../models/paymentdetails");

// router.route("/formTable").post(async (req, res) => {
//     try {
//         const { name, mobile, issue, amount } = req.body;

//         // Create a new Paymentdetails document
//         const newPayment = new Paymentdetails({
//             name,
//             mobile,
//             issue,
//             amount
//         });

//         // Save the new payment to the database
//         await newPayment.save();

//         // Send a success response
//         res.status(200).json({ status: "Payment Added" });
//     } catch (err) {
//         // Handle errors
//         console.error(err);
//         res.status(500).json({ status: "Error adding Payment", error: err.message });
//     }
// });



// router.route("/").get((req, res) => {
//     Paymentdetails.find().then((paymentdetails) => {
//         res.json(paymentdetails);
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({ status: "Error fetching payments", error: err.message });
//     });
// });

// router.route("/get/:id").get(async (req, res) => {
//     let id = req.params.id;
//     try {
//         const payment = await Paymentdetails.findById(id);
//         if (payment) {
//             res.status(200).send({ status: "payment fetched", payment });
//         } else {
//             res.status(404).send({ status: "Payment not found" });
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send({ status: "Error fetching mother", error: err.message });
//     }
// });

// //view payment's details
// router.route("/viewpayment/:id").get(async (req, res) => {
//     let id = req.params.id;
//     try {
//         const payment = await Paymentdetails.findById(id);
//         if (payment) {
//             res.status(200).send({ status: "payment fetched", payment });
//         } else {
//             res.status(404).send({ status: "payment not found" });
//         }
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send({ status: "Error fetching payment", error: err.message });
//     }
// });

// //edit payment
// router.route("/editpayment/:id").put(async (req, res) => {
//     let id = req.params.id;
//     const { name, mobile, issue, amount } = req.body;

//     const updatepayment = {
//         name,
//         mobile,
//         issue,
//         amount
//     };

//     try {
//         const update = await Paymentdetails.findByIdAndUpdate(id, updatepayment);
//         res.status(200).send({ status: "Mother updated" });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ status: "Error updating payment", error: err.message });
//     }
// });

// //delete payment
// router.route("/deletepayment/:_id").delete(async (req, res) => {
//     let paymentId = req.params._id;

//     try {
//         await Paymentdetails.findByIdAndDelete(motherId);
//         res.status(200).send({ status: "Payment deleted" });
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({ status: "Error deleting payment", error: err.message });
//     }
// });

// //search payment
// router.post('/search', async (req, res) => {
//     try {
//       const searchTerm = req.body.searchTerm;
//       const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
  
//       const payments = await Paymentdetails.find({
//         $or: [
//           { name: { $regex: new RegExp(searchNoSpecialChar, "i") } },

//         ]
//       });
  
//       res.json({ success: true, existingPosts: payments }); // Send JSON response with search results
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
// module.exports = router;