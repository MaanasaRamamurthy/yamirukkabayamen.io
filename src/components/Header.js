import React from "react";
import "../css/Header.css"
import logo from "../assets/logo.jpg"
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Header(){
  const {t, i18n} = useTranslation();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false)
  const [isSelectBelow, setSelectBelow] = React.useState(false)

  // console.log((t))

  React.useEffect(()=>{
    i18n.changeLanguage("en");
  },[])
  function TranslateClick(lang) {
      i18n.changeLanguage(lang);
  }
  return(
    <>
      <div className="nav">
        <div className="sub-nav">
          <img src={logo} alt="Logo" className="logo"/>
          <h2 className="yamirukka">Yamirukkabayamen</h2>
          <div >
            <select className='form-select' onChange={(e)=>TranslateClick(e.target.value)}>
              <option  value="" selected disabled hidden>Language</option>
              <option className="langOption" value={"en"}>English</option>
              <option className="langOption" value={"tr"}>Tamil</option>
            </select>
          </div>
        
        <div  className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
          <ul >
              
                <Link style={{width: "inherit"}}to="/"><li className="clr">About Us</li></Link>
              
             
                <Link to="/services"><li>Services</li></Link>
             
            
                <Link to="/contact"><li>Contact</li></Link>
              
            
                <Link to="/gallery"><li>Gallery</li></Link>
              
              {/* <li>
                <Link to="/Login">Admin</Link>
              </li> */}
            </ul>
        </div>
      <button className="hamburger"   onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      </div>
        
        <div className="language">
            <select className= "form-select-below"  onChange={(e)=>TranslateClick(e.target.value)}>
              <option  value="" selected disabled hidden>Language</option>
              <option className="langOption" value={"en"}>English</option>
              <option className="langOption" value={"tr"}>Tamil</option>
            </select>
          </div>
        
      </div>
      <Outlet />
    </>        
  );
}