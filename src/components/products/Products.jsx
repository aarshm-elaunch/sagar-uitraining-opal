import React, { useState } from 'react';
import { Box, Button, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { product_list } from '../../dummy_data';
import ProductCard from '../common/ProductCard';

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
    },
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
    const [products] = useState(product_list);
    const [pro, setPro] = useState(products);
    const [color, setColor] = useState([]);
    const [types, setTypes] = useState([]);
    const [shapes, setShapes] = useState([]);
    const [min, setMin] = useState();


    const filter = () => {
        const filteredProduct = products
            .filter((p) => {
                let checkColors = color.filter(item => item.colorName === p?.colorName).length > 0
                return checkColors || p.price === `$${min}`
            });
        setPro(filteredProduct)
    }

    const reset = () => {
        setPro(product_list)
    }

    const addRemoveColor = (data) => {
        const remove = color.filter((item) => item.id !== data.id);
        color?.findIndex((c) => c?.id === data.id) > -1 ?
            setColor(remove)
            :
            setColor([...color, data])
    }

    const addRemoveType = (data) => {
        const remove = types.filter((item) => item.id !== data.id);
        types?.findIndex((c) => c?.id === data.id) > -1 ?
            setTypes(remove)
            :
            setTypes([...types, data])
    }

    const addRemoveShapes = (data) => {
        const remove = shapes.filter((item) => item.id !== data.id);
        shapes?.findIndex((c) => c?.id === data.id) > -1 ?
            setShapes(remove)
            :
            setShapes([...shapes, data])
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
                                            value={min}
                                            onChange={(e) => setMin(e.target.value)}
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
                                        {color_list.map((ele) =>
                                            <Box
                                                className="color_wrapper"
                                                sx={{
                                                    background: ele.colorName,
                                                    border: color?.findIndex((c) => c?.id === ele.id) > -1 && '3px solid #6200EE'
                                                }}
                                                onClick={() => addRemoveColor(ele)}
                                            > </Box>
                                        )}
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className='type'>
                                    <h2>Type</h2>
                                    <Box className='type_list'>
                                        {types_list.map((type) =>
                                            <Box
                                                className="list_wrapper"
                                                sx={{
                                                    background: types?.findIndex((c) => c?.id === type.id) > -1 ? '#6200EE' : "#E6E8F1",
                                                    color: types?.findIndex((c) => c?.id === type.id) > -1 ? '#fff' : "#000"
                                                }}
                                                onClick={() => addRemoveType(type)}
                                            >{type.name}</Box>
                                        )}
                                    </Box>
                                </Box>
                                <Divider />
                                <Box className='type'>
                                    <h2>Shape</h2>
                                    <Box className='type_list'>
                                        {shape_list.map((shape) =>
                                            <Box
                                                className="list_wrapper"
                                                sx={{
                                                    background: shapes?.findIndex((c) => c?.id === shape.id) > -1 ? '#6200EE' : "#E6E8F1",
                                                    color: shapes?.findIndex((c) => c?.id === shape.id) > -1 ? '#fff' : "#000"
                                                }}
                                                onClick={() => addRemoveShapes(shape)}
                                            >{shape.name}</Box>
                                        )}
                                    </Box>
                                </Box>
                                <Box className="btn_section">
                                    <Button className='btn_theam btn' onClick={() => filter()}>Apply Filters</Button>
                                    <Button className='btn_theam2 btn' onClick={() => reset()}>Reset</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={10} md={9}>
                            <h1>Search Results</h1>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 9 }}>
                                {pro.map((data) =>
                                    <ProductCard data={data} />
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
