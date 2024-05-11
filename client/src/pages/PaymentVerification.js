import "../paymentVerification.css";
import React, { useState } from "react";
import Footer from '../components/footer'
import Navbar from '../components/Navbar'

const PaymentVerification = () => {
  const [studentName, setStudentName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const onlyAlphabets = /^[A-Za-z\s]+$/;
    const onlyNumbers = /^[0-9]+$/;

    if (
      studentName.match(onlyAlphabets) &&
      bank.match(onlyAlphabets) &&
      nicNumber.match(onlyNumbers) &&
      nicNumber.length === 10 &&
      accountNumber.match(onlyNumbers) &&
      accountNumber.length === 12 &&
      parseFloat(amount) > 0 &&
      new Date(date) <= new Date()
    ) {
      setStatus("Verification details submitted.");
      alert(status);
    } else {
      setStatus("Please fill in all the fields correctly.");
      alert(status);
    }
  };

  

  return (
    <>
    <Navbar/>
    <div>
      <center>
        <h3>Payment Verification Form</h3>{" "}
      </center>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Student Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </label>
        <p className="alert">
          {studentName.length > 0 &&
            !studentName.match(/^[A-Za-z\s]+$/) &&
            "Only alphabets are allowed"}
        </p>
        <label>
          NIC Number:
          <input
            type="text"
            value={nicNumber}
            onChange={(e) => {
              if (/^\d+$/.test(e.target.value) || e.target.value === "") {
                setNicNumber(e.target.value);
              }
            }}
            maxLength="10"
            required
          />
        </label>
        <p className="alert">
          {nicNumber.length > 0 &&
            (!nicNumber.match(/^[0-9]+$/) || nicNumber.length !== 10) &&
            "NIC number should be a 10-digit number"}
        </p>
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => {
              if (/^\d+$/.test(e.target.value) || e.target.value === "") {
                setAccountNumber(e.target.value);
              }
            }}
            maxLength="12"
            required
          />
        </label>
        <p className="alert">
          {accountNumber.length > 0 &&
            (!accountNumber.match(/^[0-9]+$/) || accountNumber.length !== 12) &&
            "Account number should be a 12-digit number"}
        </p>
        <label>
          Bank:
          <input
            type="text"
            value={bank}
            onChange={(e) => {
              if (
                /^[A-Za-z\s]+$/.test(e.target.value) ||
                e.target.value === ""
              ) {
                setBank(e.target.value);
              }
            }}
            required
          />
        </label>
        <p className="alert">
          {bank.length > 0 &&
            !bank.match(/^[A-Za-z\s]+$/) &&
            "Only alphabets are allowed"}
        </p>
        <label>
          Amount :
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <p className="alert">
          {amount.length > 0 &&
            (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) &&
            "Amount should be a positive number"}
        </p>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            required
          />
        </label>
        <p className="alert">
          {date.length > 0 &&
            new Date(date) > new Date() &&
            "Date cannot be in the future"}
        </p>
        <button type="submit">Submit</button>
        <p className="status">{status}</p>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default PaymentVerification;
