import React from "react";
import { Calendar } from "react-calendar";
import ModalMessage from "./ModalMessage"
import '../css/App.css';
import Axios from "axios";
import Header from "./Header"
import Form from "./Form";


export default function ReactCalendar(props){
    const [date, setDate] = React.useState(new Date());
    const onDateChange = (newDate) => {
    setDate(newDate);
}
    // const [category, setCategory] = React.useState("none")

    const Slots=[{
        name:"8am to 9am",
        on: true
    }, {
        name: "9am to 10am",
        on: true
    }, {
        name:"11am to 12pm",
        on: true
    }, {
        name:"2pm to 3pm",
        on: true
    }]
    const [SlotState, setSlotState] = React.useState(Slots)
    const [isOpen, setIsOpen] = React.useState(false);
    const [databaseData,setDatabaseData] = React.useState([])
    const [showTime,setShowTime] = React.useState(false)

    const loadData = async() =>{
            // const result = await Axios.get("http://localhost:80/api/fetchdata.php");  
            const result = await Axios.get("http://yamirukkabayamen.com/api/fetchdata.php");           
                setDatabaseData(result.data)
                console.log(result.data)
              
    }
 
    React.useEffect(() => {
        loadData();
        console.log("Hi I m 1st")
      },[]);
      console.log(databaseData)
    
    function getData(e){
        setShowTime(true)
        setSlotState(Slots)
        console.log("I was called")
        console.log(e.toDateString())
        setSlotState(prevButton=>{
            var test=0;
            const newButtons=[]
            for(let k=0;k<prevButton.length;k++){
                const currentButton = prevButton[k]
                var test1=0
                for(let i=0;i<databaseData.length;i++){
                    if(databaseData[i].date === e.toDateString()){
                        test=1
                        if(databaseData[i].time === SlotState[k].name){
                            const updatedButton = {
                                ...currentButton,
                                on: !currentButton.on
                            }
                            newButtons.push(updatedButton)
                            test1=1
                        }else{
                            continue
                        }
                    }else{
                        continue
                    }
                }
                if(test1===0){
                    newButtons.push(currentButton)
                }

            }
            if(test===1){
                return newButtons
            }
                
            else{
                return prevButton 
            }
            
            })

      }
      console.log(date);
      
      const [radio, setRadio] = React.useState("")
//       const [Cat, setCategory] = React.useState([
//     {
//         name:"SEVAL",
//         desc:"Query with full prediction",
//         cost:"Rs 3000 INR",
//         toggle:false
//     },
//     {
//         name:"VEL",
//         desc:"Detailed Consultation without Time and limited Questions",
//         cost:"Rs 5000 INR",
//         toggle:false
//     },
//     {
//         name:"MAYIL",
//         desc:"Instant Appointment within 48hours of confirmation",
//         cost:"Rs 7000 INR",
//         toggle:false
//     }
//   ])
      console.log(props.Cat)
      const [cat1, setCat] = React.useState(false)
      function radioInput(e){
        console.log("Hello")
       
        setRadio(e.target.value) 
        console.log(e.target.value)
        setCat(false)
      }
      function evaluate(){
        if(radio==="SEVAL"){
            setCat(true)           
           
        }else if(radio==="VEL"){
            setCat(true)
         
            
        }else if(radio==="MAYIL"){
            setIsOpen(true)
           
            
        }
         props.setCategory(prevCat =>{
            var newCat = []
            for(let i = 0; i<prevCat.length;i++){
                var currentCat = prevCat[i]
                if(currentCat.name===radio){
                    const updatedCat = {
                        ...currentCat,
                        toggle: !currentCat.toggle
                    }
                    localStorage.setItem("Category", currentCat.name)
                    localStorage.setItem("Description", currentCat.desc)
                    localStorage.setItem("Cost", currentCat.cost)
                    console.log(updatedCat)
                    newCat.push(updatedCat)
                }else{
                    newCat.push(currentCat)
                }
            }
            console.log(newCat)

            return newCat
            })       
            
      }

   
      
         
         function catpayment(){
            let Catobj = []
            
            for(let i = 0; i< 3; i++){
                let styles={}
                if(props.Cat[i].name ==="VEL"){
                    styles={background:"#023020" }
                }else{
                    styles={background: "#EFA10B"}
                }
                Catobj.push(
                
                    <div className="payment" style={styles}>
                        <div className="payment-cost">
                            <h3>{props.Cat[i].cost}</h3>
                        </div>
                        <div className="payment-desc">
                            <h2>{props.Cat[i].name}</h2>
                            <p>{props.Cat[i].desc}</p>
                        </div>
                        <div id='div-radio-payment'>
                            <input id="radio-payment" type="radio" value={props.Cat[i].name} name="cat" onClick={radioInput}/>
                        </div>
                    </div>
                )
             }
             return Catobj
         }
         
       

      const [time, setTime] = React.useState('')
    return(
        <>
        <div >
        <Header />
        </div>
        
        {!isOpen && <>
                        <div className="calendar-pricing">
                            <p>Pricing</p>
                            <h1>Personalised Consultation from our expert</h1>
                                <div className="cat-payment" style={{background: "#EFEFEF"}}>            
                                    {catpayment()}
                                </div>
                            <button className="booking" onClick={evaluate}>Proceed</button>
                        </div>
        
        
                        {cat1 && <div className="category-calendar">
                                    <div className="display-category">
                                     <h3>Category you have chosen:</h3>
                                     <p>{radio}</p>
                                    </div>
                                    <div  className="reactCalendar">
                                            <h2 style={{textAlign:'center'}}>Please select your required date</h2>
                                            <div className="calendarContainer">
                                                <Calendar 
                                                    minDate={new Date()}
                                                    onChange={(e)=>{onDateChange(e);
                                                                    getData(e)
                                                                }}
                                                    value={date}
                                                    defaultValue={null}
                                                />
                                            </div>
                                                {showTime && <div>
                                                                <div className="selectedDate">
                                                                    Selected Date:{date.toDateString()}
                                                                </div>
                                                                <TimingSlots 
                                                                            isOpen={isOpen}
                                                                            setIsOpen={setIsOpen}
                                                                            setTime={setTime}
                                                                            key={Slots.name}
                                                                            SlotState={SlotState}
                                                                            slots={Slots} 
                                                                            date={date.toDateString()}
                                                                />
                                                            </div>
                                    

                                                }
                                    </div>

                                </div>
                        }
                    </>
        }
        {isOpen &&
         <Form setIsOpen={setIsOpen} category={props.Cat} Datebooked={date.toDateString()} timebooked={time} displayCat={props.displayCat}/>
        }
        
        </>
    )
}

/////////////////////////////////////////////////// TimingSlots ///////////////////////////////////////////////////
    
export function TimingSlots(props){
    
    const [isOpenMsg, setIsOpenMsg] = React.useState(false)
    const DisplaySlots = props.SlotState.map(item =>

        <SlotButton 
            name={item.name}
            on={item.on}
            setTime={props.setTime}
            setIsOpen={props.setIsOpen}
            setIsOpenMsg={setIsOpenMsg}
        />        
    )


    return(
        <div className="TimeSlotContainer">
            {
                !props.isOpen && <>
                                    <h3>Select your required time slot.</h3>
                                    <div class="TimeSlotList">
                                        {DisplaySlots}
                                    </div>
           
                                    {
                                        isOpenMsg && <ModalMessage setIsOpenMsg={setIsOpenMsg}/>
                                    }
                                </>
            }
            
        </div>
        
    )
}


///////////////////////////////////////////////////////// SlotButton ////////////////////////////////////////////////////


export function SlotButton(props){
    
    const styles={
        background: props.on? "#53c437cf": "#f05454"
    }
    function ValidateTime(val){
        if(val){
            props.setIsOpen(true)
        }else{
            props.setIsOpenMsg(true)
        }
    }
    return(
        <div id="TimeSlotButton" style={styles} 
            onClick={()=>{
                props.setTime(props.name);
                ValidateTime(props.on);
            }}>
            <p className="onhover">{props.name}</p>
        </div>
    )
}