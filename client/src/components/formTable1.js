import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import "../css/paymentss.css";

const FormTable = ({handleSubmit, handleOnChange, handleclose, rest}) => {

  return (
    <div className="addContainer"> 
       <form onSubmit={handleSubmit}>
      <div className="close-btn" onClick={handleclose}><IoCloseSharp /></div>
      <label htmlFor="personalUsage">Item Name:</label>
      <input
        type="text"
        id="personalUsage"
        name="personalUsage"
        onChange={handleOnChange}
        value={rest.personalUsage}
        required
      />
      <div className="validation-message">
        {rest.personalUsage === '' && <span>Please enter Item Name</span>}
      </div>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleOnChange}
        value={rest.date ? rest.date.slice(0, 10) : ''}
        min={`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-01`}
        max={`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate()}`}
        required
      />
      <div className="validation-message">
        {(new Date(rest.date) > new Date()) && <span>Please select a past date</span>}
      </div>

      <label htmlFor="usage">Usage of Requirement:</label>
      <input
        type="text"
        id="usage"
        name="usage"
        onChange={handleOnChange}
        value={rest.usage}
        required
        title="Please enter the relevant usage"
        pattern="[A-Za-z\s]+"
        onInvalid={(e) => {
          e.target.setCustomValidity('Please enter only alphabets and spaces');
        }}
        onInput={(e) => {
          e.target.setCustomValidity('');
        }}
      />
      <div className="validation-message">
        {(rest.usage !== '' && !rest.usage.match(/^[a-zA-Z\s]*$/)) && <span>Please enter only alphabets and spaces</span>}
      </div>

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        onChange={handleOnChange}
        value={rest.amount}
        required
        min="0"
        onInvalid={(e) => {
          e.target.setCustomValidity('Please enter a positive number');
        }}
        onInput={(e) => {
          e.target.setCustomValidity('');
        }}
      />
      <div className="validation-message">
        {(rest.amount !== '' && rest.amount < 0) && <span>Please enter a positive number</span>}
      </div>

      <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default FormTable;
