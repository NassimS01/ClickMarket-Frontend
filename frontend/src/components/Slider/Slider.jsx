import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { useState } from "react";
import { bannerImage } from "./SliderImages";
import { ContainerSlider } from "./SliderStyled";



const renderSlides = bannerImage.map((image) => (
    <div key={image.id}>
        <img src={image.url} alt={image.alt} />
    </div>
));

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <ContainerSlider>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={bannerImage[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
            >
                {renderSlides}
            </Carousel>
        </ContainerSlider>
    )
}

export default Slider;

