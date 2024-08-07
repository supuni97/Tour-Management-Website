import React from 'react';
import Slider from 'react-slick';
import Ava01 from '../../assets/images/ava-1.jpg';
import Ava02 from '../../assets/images/ava-2.jpg';
import Ava03 from '../../assets/images/ava-3.jpg';


const testimonials = () => {


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                },
            },
        ],

    };

    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo diam, sed posuere orci. Suspendisse faucibus libero leo, sit amet accumsan lectus elementum non. Proin accumsan tellus ligula, quis scelerisque nisl pellentesque ac. Mauris in nisl sit amet leo tincidunt bibendum.</p>

                <div className='d-flex align-items-center mt-3 gap-4'>
                    <img src={Ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>

            </div>
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo diam, sed posuere orci. Suspendisse faucibus libero leo, sit amet accumsan lectus elementum non. Proin accumsan tellus ligula, quis scelerisque nisl pellentesque ac. Mauris in nisl sit amet leo tincidunt bibendum.</p>

                <div className='d-flex align-items-center mt-3 gap-4'>
                    <img src={Ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Anna Frank</h6>
                        <p>Customer</p>
                    </div>
                </div>

            </div> 
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo diam, sed posuere orci. Suspendisse faucibus libero leo, sit amet accumsan lectus elementum non. Proin accumsan tellus ligula, quis scelerisque nisl pellentesque ac. Mauris in nisl sit amet leo tincidunt bibendum.</p>

                <div className='d-flex align-items-center mt-3 gap-4'>
                    <img src={Ava03} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Davin Johnson</h6>
                        <p>Customer</p>
                    </div>
                </div>

            </div>
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo diam, sed posuere orci. Suspendisse faucibus libero leo, sit amet accumsan lectus elementum non. Proin accumsan tellus ligula, quis scelerisque nisl pellentesque ac. Mauris in nisl sit amet leo tincidunt bibendum.</p>

                <div className='d-flex align-items-center mt-3 gap-4'>
                    <img src={Ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Davin Johnson</h6>
                        <p>Customer</p>
                    </div>
                </div>

            </div>

        </Slider>
    )
}

export default testimonials