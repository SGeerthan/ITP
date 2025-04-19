// import React, { useState } from "react";
// import axios from "axios";
// import "../css/register.css";
// import Navbar3 from "../components/Navbar3";
// import Footer from "../components/Footer";

// const PaymentVerification = () => {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     nicNumber: "",
//     accountNumber: "",
//     bank: "",
//     amount: "",
//     date: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({
//     studentName: "",
//     nicNumber: "",
//     accountNumber: "",
//     bank: "",
//     amount: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Validation for different fields
//     let newValue = value;
//     let error = "";

//     if (name === "studentName" || name === "bank") {
//       newValue = value.replace(/[^a-zA-Z\s]/g, "");
//       if (!newValue) {
//         error = "Please enter a valid name";
//       }
//     } else if (name === "nicNumber" || name === "accountNumber") {
//       newValue = value.replace(/[^0-9]/g, "");
//       if (!newValue || newValue.length > 10) {
//         error = "Please enter a valid input";
//       }
//     } else if (name === "amount") {
//       newValue = value.replace(/[^0-9.]/g, "");
//       if (!newValue) {
//         error = "Please enter a valid amount";
//       }
//     }

//     setValidationErrors({ ...validationErrors, [name]: error });
//     setFormData({ ...formData, [name]: newValue });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/payment/verify", formData);
//       console.log(response.data);
//       if (response.data.success) {
//         window.alert("Payment details added successfully!");
//         setFormData({
//           studentName: "",
//           nicNumber: "",
//           accountNumber: "",
//           bank: "",
//           amount: "",
//           date: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting payment details:", error);
//       // Handle error message
//     }
//   };

//   return (
//     <>
//       <Navbar3 />
//       <br />
//       <br />
//       <div className="container">
//         <form onSubmit={handleSubmit} className="payment-form">
//           <label>
//             Student Name:
//             <input
//               type="text"
//               name="studentName"
//               value={formData.studentName}
//               onChange={handleChange}
//               required
//             />
//             <p className="error">{validationErrors.studentName}</p>
//           </label>
//           <br />
//           <label>
//             NIC Number:
//             <input
//               type="text"
//               name="nicNumber"
//               value={formData.nicNumber}
//               onChange={handleChange}
//               maxLength="10"
//               required
//             />
//             <p className="error">{validationErrors.nicNumber}</p>
//           </label>
//           <br />
//           <label>
//             Account Number:
//             <input
//               type="text"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleChange}
//               maxLength="12"
//               required
//             />
//             <p className="error">{validationErrors.accountNumber}</p>
//           </label>
//           <br />
//           <label>
//             Bank:
//             <input
//               type="text"
//               name="bank"
//               value={formData.bank}
//               onChange={handleChange}
//               required
//             />
//             <p className="error">{validationErrors.bank}</p>
//           </label>
//           <br />
//           <label>
//             Amount:
//             <input
//               type="text"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//             />
//             <p className="error">{validationErrors.amount}</p>
//           </label>
//           <br />
//           <label>
//             Date:
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               max={new Date().toISOString().split("T")[0]} // Restrict future dates
//               required
//             />
//             <p className="error">{validationErrors.date}</p>
//           </label>
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <Footer />
//     </>
//   );
// };

// export default PaymentVerification;
