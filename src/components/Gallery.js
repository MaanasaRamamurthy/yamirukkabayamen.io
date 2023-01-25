import React from "react"
import Header from "./Header";
import "../css/Gallery.css"

 const gallery = [
    {
        ImageURL: "red.jpg",
        ImageDesp:"Description of the above image."
    },
    {
        ImageURL: "bg4.jpg",
        ImageDesp:"Description of the above image."
    },
    {
        ImageURL: "eg2.jpg",
        ImageDesp:"Description of the above image."
    },
    {
        ImageURL: "bg5.jpg",
        ImageDesp:"Description of the above image."
    },
    {
        ImageURL: "about1.jpg",
        ImageDesp:"Description of the above image."
    },
    {
        ImageURL: "about2.jpg",
        ImageDesp:"Description of the above image."
    }
]
export default function Gallery(){
   
    const gallery_image = gallery.map(item =>{
        console.log(item.ImageURL)
        return(
        <div className="gallery-card">
            <div className="gallery-image-div">
                <img className="gallery-image" src = {require(`../assets/${item.ImageURL}`)} key={item.ImageDesp}/>
                {/* <p>{item.ImageDesp}</p> */}
            </div>
            <div className="gallery-desp">
                <p>{item.ImageDesp}</p>
            </div>
        </div>
        )
    })
    return(
        <>
            <Header />
            <div className="image-gallery">
                <p>Images</p>
                <h1>Gallery page</h1>
                <div className="gallery-page">
                    {gallery_image}
                </div>
            </div>        
        </>
    )
}