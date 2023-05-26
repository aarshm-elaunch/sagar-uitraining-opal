import React from 'react';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import symbol from '../../assets/images/Payment1.png';
import { useNavigate } from 'react-router-dom';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const Striped = () => {
    const navigate = useNavigate();
    return (
        <Box className='stripe_wrapper'>
            <Container sx={{maxWidth: {sm: '100%', md: '80%'}}}>
                <Box className='header'>
                    <img src={symbol} alt='symbol' />
                    <h1>Stripe</h1>
                </Box>
                <Box className='details_box'>
                    <h2>Stripe Account Details</h2>
                    <Box className='account_details'>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Bussiness Type"
                                        className='input_field'
                                        size='small'
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Select"
                                        className='input_field'
                                        size='small'
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='First Name'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='Last Name'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='Phone Number'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='Address'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='State'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='Postal Code'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='City'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='BSB'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6} sx={{ width: '100%' }}>
                                <FormControl fullWidth>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        className='input_field'
                                        placeholder='Account Number'
                                        size='small'
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Accept terms and conditions" />
                    </FormGroup>
                    <Box className='btn_section'>
                        <Button className='btn_theam2' onClick={() => navigate('/profile')}>Cancle</Button>
                        <Button className='btn_theam' onClick={() => navigate('/profile')}>save</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Striped;
