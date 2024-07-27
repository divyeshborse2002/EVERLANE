import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";


const WTestimonialslider = () => {
  const testimonial = [
    {
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/c9a5ffc8_8f66.jpg",
      description:
        "“Fabric is beautiful and substantial yet light for hot summer days. Oh, and pockets...love them!”",
    },
    {
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/0125813f_0b20.jpg",
      description:
        "“I bought three because I love the neckline and the overall fit. The weight of these is just right—not too thin or too thick. The white is not see-through at all!”",
    },
    {
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/f42dcbe8_de47.png",
      description:
        "The fit is amazing! The fabric is great! I get more compliments on these pants than anything else in my wardrobe because they are so flattering!",
    },
    {
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/e0320f69_aa80.png",
      description:
        "These overalls are heirloom quality. The material is a bit on the thicker side. They look like a pair of overalls that could have been made 100+ years ago (when things were quality)!",
    },
    {
      image:
        "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/eb6e419a_d923.jpg",
      description:
        "“This T-shirt is lightweight and still high quality. The cut is roomy and hangs in a flattering way.”",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonial.map((el, index) => (
          <div key={index} className="">
            <div className="container  slide-content ">
              <div className="description ">
                <p>{el.description}</p>
              </div>

              <div className="image-container">
                <img
                  className="img-fluid"
                  src={el.image}
                  alt=""

                  height={300} width={400}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WTestimonialslider;
