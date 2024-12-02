import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll'; 
import './Gallery.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider'; 



{/*function VideoContainer({ isActive, src, type }) {
    const { useState, useRef, useEffect } = React; 
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;
        if (!isActive) {
        ref.current.pause();
        }
    }, [isActive]);

    return (
        <video controls ref={ref}>
        <source src={src} type={type} />
        </video>
    );
}

const Gallery = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex != dataSlider.length) {
            setSlideIndex(slideIndex+1); 
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1); 
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex-1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length); 
        }
    }
    const moveDot = index => {
        setSlideIndex(index); 
    }

    return (
        <section id="galleryComp">
            <div className="galleryTitle">Compositions</div>

            <div className="gallery">
                <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div key={obj.id} className={slideIndex === index + 1? "slide active-anim" : "nothing"}>
                                {obj.type ? 
                                    (<img src={obj.img}/> 
                                    ) : 
                                    (<VideoContainer src={obj.vid} type="video/mp4" isActive={slideIndex === index + 1} />
                                    )
                                }
                            </div>
                        )
                    })}
                    <BtnSlider moveSlide={nextSlide} direction={"next"}></BtnSlider>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}></BtnSlider>
                    <div className="container-dots">
                        {Array.from({length: dataSlider.length}).map((item, index) => 
                            (<div onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}>
                            </div>))}
                    </div>
                </div>  
                <div className="imageText">
                    {dataSlider.map((obj, index) => {
                        return (
                            <div key={obj.id} className={slideIndex === index + 1? "text" : "nothing"}>
                                <div key={obj.id} className="imgTitle">
                                    {obj.title} 
                                </div>
                                <div key={obj.id} className="imgText">
                                    {obj.text} 
                                </div>
                            </div>
                        ); 
                    })}
                </div>
            </div>  
        </section>
    ); 
}*/}

const Gallery = () => {
    return (
        <section id='gallery'>
            <h2 className="galleryTitle">Compositions</h2>
            <span className="galleryDesc"> 
                <p>Agnes (2023) - Piano Solo. <a href = "https://on.soundcloud.com/qnJZMtiEtaP4UoQt6" className="linkHref">Listen on Soundcloud</a></p>

                <p>A Clown’s Existential Crisis (2024) - Duet for Cello and Piano. <a href="https://on.soundcloud.com/6PoESKNsPuEqJwxS7" className="linkHref"> Listen on Soundcloud</a></p>
                <p>A Variegated Farewell (2024) - String Quartet. <a href = "https://youtu.be/qa9zS2R0dpM?si=vS4QFoiFSucb49RW" className="linkHref">Listen on Youtube</a></p>
                <p>Clouds Floating in a Moonlit Sky (2024) - Trio for Flute, Violin, and Piano. <a href = "https://youtu.be/QY7U5YOH4L0?si=qUvuocUhK0S5GpHM" className="linkHref">Listen on Youtube</a></p>
                <p>Forpuck (2024) - Cello Solo. <a href = "https://on.soundcloud.com/fnAD4DTQtmXBiRXT8" className="linkHref">Listen on Soundcloud</a></p>
                <p>Nothing Gold Can Stay (2024) - Movement for Piano and Voice which sets Robert Frost’s poem “Nothing Gold Can Stay” to music. <a href = "https://on.soundcloud.com/14ueKwy5TEKXAd1e7" className="linkHref">Listen on Soundcloud</a></p>
                <p>Inescapable One (2024) - Symphony for Full Orchestra. <a href = "https://on.soundcloud.com/gugNiecbsiPYkvMC7" className="linkHref">Listen on Soundcloud</a></p>

</span>

        </section>
    );
}

export default Gallery; 