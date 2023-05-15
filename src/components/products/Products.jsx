import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Paper, Rating, TextField, Typography, colors } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { product_list } from '../../dummy_data';
import fevorite from '../../assets/images/heart.png'

const color_list = [
    {
        id: 0,
        colorName: '#6B5595'
    },
    {
        id: 1,
        colorName: '#ED5FDD'
    },
    {
        id: 2,
        colorName: '#8BDB81'
    },
    {
        id: 3,
        colorName: '#E7ED9B'
    },
    {
        id: 4,
        colorName: '#F76F12'
    },
    {
        id: 5,
        colorName: '#55BAB9'
    }
]

const types_list = [
    {
        id: 0,
        name: 'Faceted'
    },
    {
        id: 1,
        name: 'Cabochon'
    },
    {
        id: 2,
        name: 'Specimen'
    },
    {
        id: 3,
        name: 'Rough'
    },
    {
        id: 4,
        name: 'Carved'
    },
]

const shape_list = [
    {
        id: 0,
        name: 'Oval'
    },
    {
        id: 1,
        name: 'Round'
    },
    {
        id: 2,
        name: 'Freeform'
    },
    {
        id: 3,
        name: 'Fancy'
    },
    {
        id: 4,
        name: 'Heart'
    },
]

const Products = () => {
    const [products, setProducts] = useState(product_list);
    const [pro, setPro ] = useState(products);
    const [color, setColor] = useState();
    const [types, setTypes] = useState();
    const [shapes, setShapes] = useState();

    console.log(color);

    const filter = () => {
        const filteredProduct = products.filter((p) => p?.colorName === color?.colorName);
        setPro(filteredProduct)
    }
    const reset = () => {
        setProducts(product_list)
    }


    return (
        <Box className='main_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <Box className="search_section">
                    <Paper
                        component="form"
                        className='input_field'
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search item"
                        />
                        <IconButton type="button" sx={{ p: '10px' }} className='btn_close' >
                            <CloseIcon sx={{ height: '12px', width: '12px' }} />
                        </IconButton>
                    </Paper>
                </Box>
            </Container>
            <Divider />
            <Box className="filter_section">
                <Container sx={{ minWidth: '80%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 10, md: 12 }}>
                        <Grid item xs={4} sm={10} md={3}>
                            <h1>Filters</h1>
                            <Box className="filter_wrapper">
                                <Box className='price'>
                                    <h2>Price</h2>
                                    <FormControl fullWidth className='feild'>
                                        <InputLabel htmlFor="outlined-adornment-amount">Min. Price</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Min. Price"
                                        />
                                    </FormControl>
                                    <FormControl fullWidth className='feild'>
                                        <InputLabel htmlFor="outlined-adornment-amount">Max. Price</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Max. Price"
                                        />
                                    </FormControl>
                                </Box>
                                <Divider />
                                <Box className='color'>
                                    <h2>Color</h2>
                                    <Box className="color_list">
                                        {color_list.map((ele, index) =>
                                            <Typography className="color_wrapper" sx={{ background: ele.colorName, border: color?.id === index ? '1px solid black' : 'none' }} onClick={() => setColor(ele)}> </Typography>
                                        )}
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className='type'>
                                    <h2>Type</h2>
                                    <Box className='type_list'>
                                        {types_list.map((type, index) =>
                                            <Typography
                                                className="list_wrapper"
                                                onClick={() => setTypes(index)}
                                                sx={{
                                                    background: types === index ? '#0D0E11' : '#E6E8F1',
                                                    color: types === index ? '#fff' : '#000'
                                                }}
                                            >{type.name}</Typography>
                                        )}
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className='type'>
                                    <h2>Shape</h2>
                                    <Box className='type_list'>
                                        {shape_list.map((shape, index) =>
                                            <Typography
                                                className="list_wrapper"
                                                onClick={() => setShapes(index)}
                                                sx={{
                                                    background: shapes === index ? '#0D0E11' : '#E6E8F1',
                                                    color: shapes === index ? '#fff' : '#000'
                                                }}
                                            >{shape.name}</Typography>
                                        )}
                                    </Box>
                                </Box>
                                <Box className="btn_section">
                                    <Button className='btn_theam btn' onClick={()=>filter()}>Apply Filters</Button>
                                    <Button className='btn_theam2 btn' onClick={()=>reset()}>Reset</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={10} md={9}>
                            <h1>Search Results</h1>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                                {pro.map((data) =>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Box className="product_card">
                                            <Box className="img_wrapper">
                                                <img src={data.image} alt="product" />
                                            </Box>
                                            <Box className="item_wrapper">
                                                <Box className="item_text d_space_between">
                                                    <h3>{data.name}</h3>
                                                    <img src={fevorite} alt='fevorite' />
                                                </Box>
                                                <p>Some item description goes here</p>
                                                <Box className="item_detail d_space_between">
                                                    <h3>{data.price}</h3>
                                                    <Rating name="half-rating" readOnly defaultValue={5} precision={0.5} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Products;
