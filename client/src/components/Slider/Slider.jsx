import React, {useState} from 'react'
import './slider.css'
import NextSvg from "../SVG/NextSvg";
import PrevSvg from "../SVG/PrevSvg";
import dataSlider from './dataSlider'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else{
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else{
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={index}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={obj.id} />
                    </div>
                )
            })}
            <NextSvg onClick={nextSlide}/>
            <PrevSvg onClick={prevSlide}/>

            <div className="container-dots">
                {dataSlider.map((item, index) => (
                    <div
                    key={index} 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}