import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/5f7628d2_e94a/womens-viscose-knit-pleated-dress-dusty-rose",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/1e6946d7_a436/womens-cheeky-relaxed-straight-jean-grey",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/cfc5eecb_904f/womens-supima-micro-rib-funnel-neck-tank-parsnip",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/e0d06c84_5a0d/womens-cotton-half-zip-sweater-canvas",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/96b4f792_bee3/womens-cotton-phoebe-trouser-navy","https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/5f7628d2_e94a/womens-viscose-knit-pleated-dress-dusty-rose",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/1e6946d7_a436/womens-cheeky-relaxed-straight-jean-grey",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/cfc5eecb_904f/womens-supima-micro-rib-funnel-neck-tank-parsnip",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/e0d06c84_5a0d/womens-cotton-half-zip-sweater-canvas",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/96b4f792_bee3/womens-cotton-phoebe-trouser-navy"
    ];

    return (
        <div>
            <Slider {...settings}>
                {data.map((img, index) => (
                    <div key={index}>
                        <div className='sl-img-box'>
                            <img src={img} alt="" height={500} width={320}  />
                        </div>
                        <div>
                            <h6>The Knight Pleated Dress</h6>
                            <h6>1770</h6>
                            <p>Dusty Rose</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Sliders;
// Your Style Guide
// Your Style Guide
// Must-haves for looking good
// all the damn time.