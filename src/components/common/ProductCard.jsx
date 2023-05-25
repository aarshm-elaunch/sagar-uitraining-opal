import React from 'react';
import './style.scss';
import { Box, Checkbox, Grid, Rating } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import UseWishList from '../../hooks/useWishList';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({data}) => {
    const navigate = useNavigate();
    const { updateItems, fevoriteItems } = UseWishList();

    const handleClick = (e, data) => {
        updateItems(e.target.checked, data)
    }

    return (
        <Grid item xs={4} sm={4} md={3}>
            <Box className="product_card">
                <Box className="img_wrapper" onClick={()=>navigate(`/productdetail/${data.id}`)}>
                    <img src={data.image} alt="product" />
                </Box>
                <Box className="item_wrapper">
                    <Box className="item_text d_space_between">
                        <h3>{data.name}</h3>
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ fill: 'red' }} />}
                            checked={fevoriteItems.findIndex(item => item.id === data.id) > -1}
                            onChange={(e) => handleClick(e, data)}
                        />
                    </Box>
                    <p>Some item description goes here</p>
                    <Box className="item_detail d_space_between">
                        <h3>${data.price}</h3>
                        <Rating name="half-rating" defaultValue={data.rating} precision={0.5} />
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
}

export default ProductCard;
