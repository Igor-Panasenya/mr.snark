import React from 'react';
import './testimonials.scss';
import Slider from "react-slick";
import slide1 from '../../img/test_1.png';
import slide2 from '../../img/test_2.png';

const Testimonials = () => {

    const settings = {
        centerMode: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="testimonials-area">
            <div className="container">
                <h6>TESTIMONIALS</h6>

                <Slider className="slider" {...settings}>
                    <div className="testimonials-item"><img src={slide1} alt=""/></div>
                    <div className="testimonials-item"><img src={slide2} alt=""/></div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;