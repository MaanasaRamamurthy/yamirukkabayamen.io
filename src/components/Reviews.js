import React from "react"
import "../css/About.css"


const reviews = [
    {
        name:'P RV',
        time:'1 year ago',
        comment:'Vanakam sir... neenga sonna mathiri daily daily ipo improvement iruku.. lifela yetho oru nallathu ipo nadanthutey.. yennaley ithu yennoda lifeahnu namba mudiyala avloo changes iruku.. nandri ayya.. ini nallathey nadakum yendru theliva nambaren. Thanks for your motive speech',

    },
    {
        name:'Nirmala Nagalingam',
        time:'1 year ago',
        comment:'Sending you my GRATITUDE 🙏 for this profound reading 🙏❤️🙏Certainly, taking the guidelines positively and executing it in a structured manner.Regards from Malaysia 🙏'
    },
    {
        name:'Sathya M',
        time:'1 year ago',
        comment:'Apart from astrological sayings, you are making positive vibes for people bro. keep going👍. Actually I m also a scorpion..  Your all words are happened at past 7.5 yrs  and now my life happily going...You re such an amazing motivational speaker.. Keep going bro👍❤️'
    },
    {
        name:'Ganesan Nivedhanan',
        time:'1 year ago',
        comment:'தாங்கள் கூறிய ஒவ்வொரு வார்த்தைகளும் 100% நிதர்சனமானது,இந்த வீடியோ எனக்காக பதிவிட்டதுபோல் உள்ளது தம்பி,சொல்ல வார்த்தைகளே இல்லை நன்றி!நன்றி!!வாழ்த்துக்கள்.'
    },
    {
        name:'ஆன்மீக பாரதம்! Aanmeega Bharatham!',
        time:'7 months ago',
        comment:'தெளிவான குரல்! எளிதான விளக்கங்கள்! புதியவர்களுக்கும் புரிந்து கொள்ள முடிகிறது.  மிக்கநன்றி!!'
    }
]

const displayReview = reviews.map(item=>{
    return(
    <div className="reviewContent">
        <div className="shadow" >
        <h4 className="reviewText" >{item.name}</h4>
        <h4 className="reviewText">{item.time}</h4>
        
        <p className="reviewText">{item.comment}</p>
        </div>
    </div>)
})
export default function Reviews(){
    return(
        <>
        
        <div className="reviewtab">
        <div>
            <h1>What Customers Say About Us</h1>
        </div>
        <div>
        {displayReview}
        </div>
           
        </div>
        </>
        
    )
}