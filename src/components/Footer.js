import React from "react"
import "../css/Footer.css"
import logo from "../assets/logo.jpg"
import author from "../assets/author.jpg"
import {SocialMediaIconsReact} from 'social-media-icons-react';


export default function Footer(){

const a=[
  {
      name:"Numerology",
      desc:"Description of numerology"
  },
  {
      name:"Vastu",
      desc:"Description of vastu"
  },
  {
      name:"Others",
      desc:"Description of the above service"
  }
]
const abc=a.map((item)=>{
  return(
    <a class="footer-anchor" href={`/services/${item.name}`}>{item.name}</a>
  )
})
    return(
        <div>
             <a
        href="https://wa.me/918754820698"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <div className="footer">
        <div className="sub-footer">
        <div className="authordetails footer-col">
          <img src={author}className="author"/>
          <div>
          <p>Arunkumar Nagajothi, CEO</p>
          <p>Software Engineer | Astrologer | Media Personality | Founder & CEO at Yamirukkabayamen TV</p>
          </div>
        
      
       
        </div>
        
        <div className="footer-col">
          <h2>Services</h2>
          <div className="div-footer-anchor">
          {abc}
          </div>
         

        </div>
        <div className="footer-col">
          <h2>Other Links</h2>
          <div className="div-footer-anchor">
          <a className="footer-anchor" href="/">About Us</a>
          <a className="footer-anchor" href="/services">Services</a>
          <a className="footer-anchor" href="/calendar">Calendar</a>
          <a className="footer-anchor" href="/contact">Contact</a>
          <a className="footer-anchor" href="/gallery">Gallery</a>

          </div>
        </div>
        {/* <img src={logo} alt="Logo" className="logo"/> */}

        <div className="footer-col">
          <h2>Contact</h2>
          <p className="contact-footer">Phone:  +91 XXXXX XXXXX</p>
          <p className="contact-footer">Email: typeyouremailhere@gmail.com</p>
          <p className="contact-footer">Address:<br/><br/></p>
          <div className="icons">
          {/* <h3>Follow me on</h3> */}
          <div>
          <SocialMediaIconsReact borderColor="#023020" 
                                    borderWidth="2" 
                                    borderStyle="solid" 
                                    icon="facebook" 
                                    iconColor="white" 
                                    backgroundColor="#023020" 
                                    iconSize="5" 
                                    roundness="20%" 
                                    url="https://www.facebook.com/meenajarun" 
                                    size="30" 
                                    style={{display: 'flex',
                                        justifyContent: 'flex-end',
                                        width: '50%',
                                        marginLeft: '40%'}}
            />
            <SocialMediaIconsReact borderColor="#023020" 
                                    borderWidth="2"
                                    borderStyle="solid" 
                                    icon="youtube" 
                                    iconColor="white" 
                                    backgroundColor="#023020" 
                                    iconSize="5" 
                                    roundness="20%" 
                                    url="https://www.youtube.com/c/Yamirukkabayamen" 
                                    size="35" 
                                    style={{display: 'flex',
                                        justifyContent: 'flex-end',
                                        width: '50%',
                                        marginLeft: '40%',
                                        }}/>
            <SocialMediaIconsReact borderColor="#023020" 
                                    borderWidth="2" 
                                    borderStyle="solid" 
                                    icon="instagram" 
                                    iconColor="white"  
                                    backgroundColor="#023020" 
                                    iconSize="5" 
                                    roundness="20%" 
                                    url="https://www.instagram.com/omsriarunkumar/" 
                                    size="35" 
                                  />
              <SocialMediaIconsReact borderColor="#023020" 
                                    borderWidth="2" 
                                    borderStyle="solid" 
                                    icon="twitter" 
                                    iconColor="white"  
                                    backgroundColor="#023020" 
                                    iconSize="5" 
                                    roundness="20%" 
                                    url="https://twitter.com/arunjothimeena?s=09" 
                                    size="35" 
                                  />
          </div>
          
        </div>
        
        </div>
        </div>
     
        

      </div>       
        </div>
    )
}