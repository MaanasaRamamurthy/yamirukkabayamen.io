
import '../css/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react"
import Header from "./Header"
import CheckoutForm from './CheckoutForm';
import ReturnCheckout from "./ReturnCheckout"
import ReactCalendar from "./Calendar"
import Login from "./Login"
import Footer from "./Footer"
import About from "./About"
import {Services, ServiceDesc} from './Services';
import Gallery from './Gallery';
import "../css/App.css"


function App() {
  
  const [Cat, setCategory] = React.useState([
        {
            name:"SEVAL",
            desc:"Query with full prediction",
            cost:"Rs 3000 INR",
            toggle:false
        },
        {
            name:"VEL",
            desc:"Detailed Consultation without Time and limited Questions",
            cost:"Rs 5000 INR",
            toggle:false
        },
        {
            name:"MAYIL",
            desc:"Instant Appointment within 48hours of confirmation",
            cost:"Rs 7000 INR",
            toggle:false
        }
      ])

  return (
    <div>
    
    
    <Router>
        <Routes>

          <Route index element={<About/>} />
          <Route path="calendar" element={<ReactCalendar Cat={Cat} setCategory={setCategory}/>} />
          <Route path="login" element={<Login />} />
          <Route path="services" element={<Services/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="services/Numerology" element={<ServiceDesc service="Numerology"/>} />
          <Route path="services/Vastu" element={<ServiceDesc service="Vastu"/>} />
          <Route path="services/Others" element={<ServiceDesc service="Others"/>} />
          <Route path="checkout" element={<ReturnCheckout Cat={Cat} setCategory={setCategory}/>} />
          
        </Routes>
    </Router>
    <Footer />
</div>
  );
}

export default App;
