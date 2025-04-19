import React from 'react';
import "../App.css"
import styled from 'styled-components'; 
import Navbar from '../components/Navbar'

const BalanceUI = ({ deposited,totalCost, cateringExpenses, otherExpenses,totalPCost }) => {
 
  const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  margin: 0 60px;
`;
  return (
    <>
   <Navbar/>
   <br/>
    <Section className="reportPayment">
        <div className="analytic">
          <div className="design">
          </div>
          <div className="transfer">
            <h6>Deposited Amount</h6>
          </div>
          <div className="money">
            <h5>Rs.{deposited}</h5>
          </div>
      </div>
      <div className="analytic">
        <div className="design">
        </div>
        <div className="transfer">
          <h6>Available <br/>Balance</h6>
        </div>
        <div className="money">
          <h5>Rs.</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
        </div>
        <div className="transfer">
          <h6>Other <br/>Expenses</h6>
        </div>
        <div className="money">
          <h5>Rs.</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
        </div>
        <div className="transfer">
          <h6>Catering Expenses</h6>
        </div>
        <div className="money">
          <h5>Rs.</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
        </div>
        <div className="transfer">
          <h6>Perosonal Expenses</h6>
        </div>
        <div className="money">
          <h5>Rs.{totalPCost}</h5>
        </div>
      </div>
      <br/>
      <br/>
      
     </Section>
    <button className = "reportNew" onClick={() => window.print()}>Download Expenditure Report</button>
    <br/><br/> <br/><br/>
    </>
  
  );
};

export default BalanceUI;
