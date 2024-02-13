import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index, changeIndex] = useState(0);
    return (
        <div>
            <div className="playground" style={{ backgroundImage: `url(${images[index].img})` }}>
                <div className="left" onClick={
                    () => { index > 0 ? changeIndex(index - 1) : changeIndex(images.length - 1) }
                }>

                    <ArrowBackIosIcon className="arrow" /></div>

                <div className="center">
                    <h1 className="title">{images[index].title}</h1>
                    <h1 className="subtitle">{images[index].subtitle}</h1>
                </div>

                <div className="right" onClick={
                    () => { index < images.length - 1 ? changeIndex(index + 1) : changeIndex(0) }
                }>

                    <ArrowForwardIosIcon className="arrow" />
                </div>
            </div>
        </div>
    )
}

export default Carousel;