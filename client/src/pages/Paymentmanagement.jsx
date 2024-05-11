import '../App.css';
import {React, useEffect, useState ,useRef} from 'react';
import axios from "axios";
import FormTable from '../components/formTable'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BalanceUI from '../components/balanceUI'
import Footer from '../components/footer'
import InquiryMessage from '../components/inquiryMessage'

axios.defaults.baseURL = "http://localhost:8000/"

const Paymentmanagement=()=> {

  const [addSection,setAddSection] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [editSection,setEditSection] = useState(false)
  const [formData,setFormData] = useState({
    personalUsage:"",
    date:"",
    usage:"",
    amount:"",
  })
  const pdfRef = useRef();

  const [dataList,setDataList] = useState([])
  const [totalPCost, setTotalPCost] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
};

  
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      resetFormData();
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
      calculateTotalPCost(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleEdit = (el) => {
    setFormData(el);
    setEditSection(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update", formData);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const resetFormData = ()=>{
    setFormData({
      personalUsage:"",
      date:"",
      usage:"",
      amount:""
    })
  }


useEffect(()=>{
    getFetchData();
  },[]);

    //search filer
    const filteredDataList = dataList.filter(item =>
      item.personalUsage.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

  //report generate
    const downloadPDF = () => {
      const input = pdfRef.current;
    
      html2canvas(input).then((canvas) => {
        const doc = new jsPDF();
        doc.text('Filtered Personal Expenses Details', 10, 10);
        let yPos = 20;
        let rowCount = 1;
    
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('Row', 10, yPos);
        doc.text('Item Name', 30, yPos);
        doc.text('Date', 70, yPos);
        doc.text('Usage', 110, yPos);
        doc.text('Amount', 150, yPos);
        yPos += 10;
    
        doc.setFont('helvetica', '');
        doc.setFontSize(10);
       
        filteredDataList.forEach((personalUsage) => {
          doc.text(`${rowCount}`, 10, yPos);
          doc.text(personalUsage.personalUsage, 30, yPos);
          doc.text(personalUsage.date.slice(0, 10), 70, yPos);  
          doc.text(personalUsage.usage, 110, yPos);
          doc.text(personalUsage.amount.toString(), 150, yPos); // Convert amount to string
          yPos += 10;
          rowCount++;
        });
    
        const totalExpenses = filteredDataList.length;
        doc.text(`Total Expenses Count: ${totalExpenses}`, 10, yPos + 10);
        doc.text(`Total Expenses Amount: ${totalPCost}`,10,yPos+30)
    
        doc.save('All_personalExpenses_details.pdf');
  
    
  });
};


  const calculateTotalPCost = (data) => {
    const total = data.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    setTotalPCost(total);
  };


  return (
    <>
     <BalanceUI totalPCost={totalPCost}/>
    <div className = "container" >
      <h3>Personal Expenses</h3>
      <button className = "btn btn-add" onClick={()=>setAddSection(true)}>Add Expenses</button> 
      <section className="search">
                        <input
                            type="text"
                            placeholder="Search by item name"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </section>
    
      {
        addSection && (

         <FormTable
         handleSubmit={handleSubmit}
         handleOnChange={handleOnChange}
         handleclose={() => setAddSection(false)}
         rest={formData}
         
         />
        )
      }

      { editSection && (
        <FormTable
          handleSubmit={handleUpdate}
          handleOnChange={handleOnChange}
          handleclose={() => setEditSection(false)}
          rest={formData}
        />
      )}


      <div className="tableContainer print-table" ref={pdfRef}>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Date</th>
              <th>Usage</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredDataList.length > 0 ? (
              filteredDataList.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.personalUsage}</td>
                    <td>{new Date(el.date).toDateString()}</td>
                    <td>{el.usage}</td>
                    <td>{el.amount}</td>
                    <td>
                      <button className='btn btn-edit' onClick={() => handleEdit(el)
                      }>Edit</button>
                      <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>No data</td>
              </tr>
            )}
            <tr>
              <td colSpan="3" style={{ textAlign: "right" }}>Total</td>
              <td>{totalPCost}</td>
              <td></td>
            </tr>

          </tbody>
        </table>
          <br/><br/>
        <button className = "report" onClick={downloadPDF}>Download Report</button>
      </div>
    </div>
    <br/><br/>
    <InquiryMessage/>
    <br/><br/>
    <Footer/>
    </>
  );
 
}
export default Paymentmanagement;


