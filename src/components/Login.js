import React from "react";
import Axios from "axios";
import DatabaseDetails from "./DatabaseDetails"
import "../css/Login.css"


export default function Login(){
    const [valid, setValid] = React.useState(false)
    const [databasedetails , setdatabasedetails] = React.useState("")
    const [loginform, setLoginform] = React.useState(
        {
            username:"",
            password:""
        }
    )
    function handleChange(event){
        setLoginform(prevDate=>{
            return{
                ...prevDate,
                [event.target.name]:[event.target.value]
            }
        })
    }
    function handleSubmit(event){
        
        event.preventDefault()
        Axios({
            method: 'POST',
            // url: 'http://localhost:80/api/loginvalidate.php',
            url: 'http://yamirukkabayamen.com/api/loginvalidate.php',
            data: {
              username: loginform.username,
              password: loginform.password
            }
          })
          .then((response) => {
            console.log(response.data)
            setValid(response.data)
            if(response.data === false){
                alert("Oops! Wrong password or username. Please try again!")
            }else{
                displaydetails()
            }
          })
          .catch((error) => {
            console.log(error)
          })

          
    }

    function displaydetails(){
        
        // Axios.get("http://localhost:80/api/databasedata.php").then(
            Axios.get("http://yamirukkabayamen.com/api/databasedata.php").then(
            (response) =>{
              console.log("Hello")
              setdatabasedetails(response.data)
              
            }
          )
    }
    console.log(databasedetails)
    return(
        <div>
            {!valid && <div className="login">
                            <form className="loginform" onSubmit={handleSubmit}>
                                <input 
                                    placeholder="Enter username" 
                                    name="username" 
                                    type="text"
                                    onChange={handleChange}
                                    value={loginform.username}
                                    required
                                />
                                <input 
                                    placeholder="Enter password" 
                                    name="password" 
                                    type="password"
                                    onChange={handleChange}
                                    value={loginform.password}
                                    required
                                />
                                <button className="loginsubmit">Submit</button>
                            </form>
                        </div>
            }
            {valid &&   <DatabaseDetails data={databasedetails}/>
            }
        </div>
        
    )
}