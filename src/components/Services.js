import React from "react"
import Header from "./Header"
import "../css/Services.css"
import { Link } from "react-router-dom";

const service=[
    {
        number:"01",
        name:"Numerology",
        desc:"The description of the above service goes here",
        desc2:"Description of numerology"
    },
    {
        number:"02",
        name:"Vastu",
        desc:"The description of the above service goes here",
        desc2:"Description of Vastu"
    },
    {
        number:"03",
        name:"",
        desc:"The description of the above service goes here",
        desc2:"Description of numerology"
    },
    {
        number:"04",
        name:"",
        desc:"The description of the above service goes here",
        desc2:"Description of numerology"
    },
    {
        number:"05",
        name:"",
        desc:"The description of the above service goes here",
        desc2:"Description of numerology"
    },
    {
        number:"06",
        name:"Others",
        desc:"The description of the above service goes here",
        desc2:"Description of the above service"
    }
]
        
export function Services(){

    const displayservice= service.map(item =>{
        return(
         <div className="service">
            <h2 className="service-number">{item.number}</h2>
            <h4 className="name">{item.name}</h4>
            <p className="desc">{item.desc2}</p>
            <div className="service-button">
                <Link to={item.name}><button className="button-size learn-more" value={item.name} >Learn More</button></Link>
                <Link to="/calendar"><button className="button-size booking-service">Book an Appointment</button></Link>
            </div>
             
         </div>
        ) 
     })

    return(
        <div>
            <div style={{background: "#EFEFEF"}}>
                <Header />
            </div>
            <div className="serviceContainer">
                <p>services</p>
                <h1>Services provided</h1>
                <div className="services">
                    {displayservice}
                </div>
            </div>
        </div>
    )
}

    

////////////////////////////////////////////////////   ServiceDesp /////////////////////////////////////////////////////

export function ServiceDesc(props){
     
    const [display, setDisplay] = React.useState(props.service)
    const a = service.map(items =>{
    if(display === items.name){
        return(
            <div  className="serviceDesc">
                <h1>{items.name}</h1>
                <p>{items.desc2}</p>
            </div>
        )}
    })
    function switchDesc(e){
        setDisplay(e.target.value)
    }
       
    const displayList = service.map(items =>{
        return(
            <Link to={`/services/${items.name}`} ><button value={items.name} onClick={switchDesc}>{items.name}</button></Link>
            )
    })
    return(
        <>
            <Header />
            <div className="servicesPage">
                <div className="col1">
                    <div className="cat-container">
                        <div className="Cat">
                            <div className="List">
                                <p>Categories</p>
                                {displayList}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    {a}
                </div>    
            </div>
        </>
    )
}