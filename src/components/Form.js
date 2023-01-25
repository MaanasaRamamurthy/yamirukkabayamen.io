import React, { useEffect } from "react";
import styles from "../css/ModalForm.css";
import Axios from "axios"
import image from "../assets/eg.jpg"
import { useNavigate } from "react-router-dom";

function Form (props1) {
  
  const [onSubmit, setOnSubmit] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: "", transaction_id: "", phone_no:"", address:"",dob:"",tob:"",pob:""}
)
    const [images, setImages] = React.useState([])
    const [imageURLs,setImageURLs] = React.useState([])
    function onImageChange(e){
      setImages([...e.target.files])
    }
    useEffect(()=>{
      if(imageURLs.length <1) return;
      const newImageUrls = [];
      imageURLs.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
      setImageURLs(newImageUrls)
    },[images])
function handleChange(event) {
    if(event.target.name === 'phone_no'){
      // console.log("I m phonenumber")
    }
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

function handleSubmit(event) {
  event.preventDefault()
  Axios({
    method: 'POST',
    // url: 'http://localhost:80/api/index.php',
    url: 'http://yamirukkabayamen.com/api/index.php',
    data: {
      FirstName: formData.firstName,
      LastName: formData.lastName, 
      Email: formData.email,
      Phone: formData.phone_no,
      Address: formData.address,
      DOB:formData.dob,
      TOB:formData.tob,
      
      Date: props1.Datebooked,
      Time: props1.timebooked,
      PaymentAmt:paymt,
      
      
    }
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
}
const navigate = useNavigate();
const redirect_to_checkoutpage = () => {
  //Redirect to the python page
  navigate("/checkout");
};

const [paymt, setPaymt] = React.useState(0)
// function displayCat(){
//   for(let i=0;i< props1.category.length;i++){
//     if(props1.category[i].toggle === true){
//       // setPaymt(props1.category[i].cost)
//       return(
//         <div>
//           <h2>{props1.category[i].name}</h2>
//           <h3>{props1.category[i].desc}</h3>
//           <h3>{props1.category[i].cost}</h3>
//         </div>
//       )
//     }
//   }
// }
  return (
    <div className="form-bg row">
        <div className="form-bg-img">
          <img src={image} className="bg-img"/>
          {/* <p>{props1.displayCat()}</p> */}
        </div>        
        <div className="form-bg-img">
          {!onSubmit && <div className="form-details">
                          <div className="form-body">
                            <form onSubmit={(e)=>{handleSubmit(e);
                                                  setOnSubmit(true)
                                            }}>
                              {props1.timebooked && <>
                                                      <p><b>Your Selected date :</b> {props1.Datebooked}</p>
                                                      <p><b>Your Selected Time :</b> {props1.timebooked}</p>
                                                    </>
                              }
                              {!props1.Datebooked &&  <>
                                                        <p>Your appointment will be confirmed soon.</p>
                                                      </>
                              }
                              <p>Please fill the form below</p>
                              <div className="form-input">
                                <div className="label-input">
                                  <label>Firstname</label>
                                  <input
                                      type="text"
                                      onChange={handleChange}
                                      name="firstName"
                                      className="input-field"
                                      value={formData.firstName}
                                      required
                                  />
                                </div>
                                <div className="label-input">
                                  <label>Lastname</label>
                                  <input
                                    type="text"
                                    onChange={handleChange}
                                    name="lastName"
                                    className="input-field"
                                    value={formData.lastName}
                                    required
                                  />
                                </div>
                              </div>
                      
                              <div className="form-input">
                                <div className="label-input">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    onChange={handleChange}
                                    name="email"
                                    value={formData.email}
                                    className="input-field"
                                    required
                                  />
                                </div>
                                <div className="label-input">
                                  <label>Phone Number</label>
                                  <input
                                        type="text"
                                        onChange={handleChange}
                                        name="phone_no"
                                        value={formData.phone_no}
                                        className="input-field"
                                        required
                                    />
                                </div>
                              </div>
                      
                              <div className="form-input">
                                <div className="label-input">
                                  <label>Address</label>
                                  <textarea 
                                          value={formData.address}
                                          onChange={handleChange}
                                          name="address"
                                          className="input-field"
                                          required
                                  />
                                </div>
                              </div>
                     
                              <div className="form-input">
                                <div className="label-input">
                                  <label>Date of birth</label>
                                  <input 
                                      type="date" 
                                      onChange={handleChange}
                                      name="dob"
                                      value={formData.dob}
                                      className="input-field"
                                      required
                                  />
                                </div>
                                <div className="label-input">
                                  <label>Time of birth</label>
                                  <input
                                      type="time"
                                      onChange={handleChange}
                                      name="tob"
                                      value={formData.tob}
                                      className="input-field"
                                      required
                                  />
                                </div>
                              </div>
                      
                              <div className="form-input">
                                <div className="label-input">
                                  <label>Upload your birth chart</label>
                                  <input 
                                        className="input-field"
                                        type="file" 
                                        multiple accept="image/*"
                                        onChange={onImageChange} 
                                    />
                                </div>
                                <div className="label-input">
                                  <label>Place of birth</label>
                                  <input
                                      type="text"
                                      onChange={handleChange}
                                      name="pob"
                                      value={formData.pob}
                                      className="input-field"
                                      required
                                  />
                                </div>
                              </div>
                              <div className="form-input">
                                <button 
                                  className="form-button"
                                  onClick={redirect_to_checkoutpage}>Submit</button>
                                <button
                                className="form-button"
                                onClick={() => {props1.setIsOpen(false);window.location.reload(true)}}
                                >
                                   Cancel
                                </button>
                              </div> 
                            </form>
                          </div>
                        </div>
          } 
          {/* {onSubmit &&  <div className="form-details"> 
                          <h3 className="confirmation">Thank you! Your appointment has been confirmed</h3>
                          <button 
                          onClick={()=> window.location.reload(true)}
                          >OKAY</button>
                        </div>
          } */}
          
        </div>
    </div>
  );
};

export default Form;