import React, {useState, useEffect} from 'react';


export default function Slideshow({images=[], interval=3000}){

  
    const [thumbnails, setThumnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
             backgroundImage: "url('"+images[currentSlide]+"')",
            // backgroundColor:"white" 
        });

        if(currentSlide>0){
            setPreviousSlideStyle({
                background: "url('"+images[currentSlide-1]+"')"
            });
        }else{
            setPreviousSlideStyle({
                backgroundImage: "url('"+images[images.length-1]+"')"
            });
        }

        if(currentSlide === images.length-1){
            setNextSlideStyle({
                backgroundImage: "url('"+images[0]+"')"
            });
        }else{
            setNextSlideStyle({
                backgroundImage: "url('"+images[currentSlide+1]+"')"
            });
        } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail">
                        <div className="slideshow-controller">
                            <span onClick={previous}>{"<"}</span>
                            {/* <img src={images[currentSlide]}/> */}
                            <span onClick={next}>{">"}</span>
                        </div>
                    </div>
                </section>
            </div>

        </section>
    )
}