import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Menslider = () => {
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
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const data = [
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/ea9279e5_53ae/mens-essential-organic-crew-uniform-golden-oak",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/fcdab92f_170f/mens-stretch-twill-5-pckt-pant-navy",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/d3b3e644_ec0e/womens-renew-backpack-slate-grey",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/cf701028_0ad7/mens-good-earth-cotton-polo-spring-lake",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/1097d908_10c2/unisex-voter-crew-essntl-cotton-white",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/c739d31a_f434/mens-seersucker-short-black",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/1498c944_edc3/mens-linen-ss-shirt-white-black",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/fcdab92f_170f/mens-stretch-twill-5-pckt-pant-navy",
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/ea9279e5_53ae/mens-essential-organic-crew-uniform-golden-oak", 
        "https://media.everlane.com/images/c_fill,w_384,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/1097d908_10c2/unisex-voter-crew-essntl-cotton-white",
        
      ];
    
      return (
        <div>
          <Slider {...settings}>
            {data.map((img, index) => (
              <div key={index}>
                <div className="sl-img-box">
                  <img src={img} alt="" height={500} width={320} />
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


export default Menslider

