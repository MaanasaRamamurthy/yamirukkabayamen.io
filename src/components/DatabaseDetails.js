import React from "react";
// import Axios from "axios"
import "../css/Table.css"
export default function DatabaseDetails(props){
   console.log(props.data)
         
   var variable=[]
   function row(){
       for(let i=0;i<props.data.length;i++){
            variable.push(
               <tr>
                   <td>{props.data[i].id}</td>
                   <td>{props.data[i].firstname}</td>
                   <td>{props.data[i].lastname}</td>
                   <td>{props.data[i].email}</td>
                   <td>{props.data[i].phonenumber}</td>
                   <td>{props.data[i].address}</td>
                   <td>{props.data[i].dob}</td>
                   <td>{props.data[i].tob}</td>
                   <td>{props.data[i].transactionID}</td>
                   <td>{props.data[i].date}</td>
                   <td>{props.data[i].time}</td>
                   <td>{props.data[i].fee}</td>

               </tr>
            )
               
           
       }
       return variable
    }

    return(
        <div className="tableContainer">
            <h1>Customer Details</h1>
            {/* <div>
                <input placeholder="Search"/>
                <button>Ok</button>
            </div> */}
        <div className="table">
            <table>
            <thead>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>TOB</th>
                        <th>TransactionID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Fee</th>
                    </thead>
                    <tbody>
                    {row()} 
                    </tbody>
            </table>
                  
            </div>    
        </div>
    )
}
