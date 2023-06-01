import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import product_img from '../../assets/images/product2.png';
import product_img1 from '../../assets/images/product3.png';

const ImageSlider = ({data}) => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
            <Slider {...settings} className='main_slider'>
                <Box className='slider_item'>
                    <img src={data?.image} alt='img' />
                </Box>
                <Box className='slider_item'>
                    <img src={product_img1} alt='img' />
                </Box>
                <Box className='slider_item'>
                    <img src={product_img} alt='img' />
                </Box>
                <Box className='slider_item'>
                    <img src={product_img1} alt='img' />
                </Box>
                <Box className='slider_item'>
                    <img src={product_img} alt='img' />
                </Box>
            </Slider>
    );
}

export default ImageSlider;
