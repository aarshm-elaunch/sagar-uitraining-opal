import React, { useState } from 'react';
import { Box, Button, Container, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, Modal, OutlinedInput, Radio, Typography } from '@mui/material';
import map from '../../assets/images/map.png';
import payment1 from '../../assets/images/Payment1.png';
import payment2 from '../../assets/images/Payment2.png';
import payment3 from '../../assets/images/Payment3.png';
import payment4 from '../../assets/images/Payment4.png';
import payment5 from '../../assets/images/Payment5.png';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Lottie from "lottie-react";
import success from '../../assets/lottie/check.json'
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '15px'
};

const styled = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '32px',
    bgcolor: 'background.paper',
    borderRadius: '15px'
};

const Chekout = () => {
    const [selectedValue, setSelectedValue] = useState();
    const [address, setAddress] = useState({flatNo: '', building: '', street: '', area: '', direction: '', type: ''});
    const [delivery, setDelivery] = useState();
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleShowClose = () => setShow(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSetLocation = () => {
        address.flatNo !== '' && address.building !== '' && address.street !== '' && address.area !== '' && setDelivery(address);
        handleClose();
    };

    return (
        <Box className='chekout_wrapper'>
            <Container sx={{ minWidth: '80%' }}>
                <h1>Checkout</h1>
                <Box className='main_wrapper'>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className='address_wrapper'>
                                <h2>Delivery Address</h2>
                                {delivery && <Box className='address'>
                                    <Box className='details'>
                                        {address.type === 'home' && <HomeOutlinedIcon />}
                                        {address.type === 'work' && <WorkOutlineOutlinedIcon />}
                                        {address.type === 'other' && <PlaceOutlinedIcon />}
                                        <Box className='title'>
                                            <h4>{address.type}</h4>
                                            <IconButton onClick={()=>{handleOpen(); setEdit(true);}}><EditOutlinedIcon /></IconButton>
                                        </Box>
                                    </Box>
                                    <p>{address.flatNo}, {address.building}, {address.street}, {address.area}</p>
                                </Box>}
                                <Box className='map_wrapper'>
                                    <img src={map} alt='map' />
                                </Box>
                                <Button className='btn_theam' onClick={() => handleOpen()} sx={{display: delivery && 'none'}}>Add delivery address</Button>
                            </Box>
                            <Box className='payment_wrapper'>
                                <h2>Payment Method</h2>
                                <Box className='payment_method'>
                                    <img src={payment1} alt="payment1" />
                                    <Box className='payment_name'>
                                        <p>Stripe</p>
                                        <Radio
                                            checked={selectedValue === 'stripe'}
                                            onChange={handleChange}
                                            value="stripe"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'stripe' }}
                                        />
                                    </Box>
                                </Box>
                                <Box className='payment_method'>
                                    <img src={payment2} alt="payment1" />
                                    <Box className='payment_name'>
                                        <p>Paypal</p>
                                        <Radio
                                            checked={selectedValue === 'paypal'}
                                            onChange={handleChange}
                                            value="paypal"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'paypal' }}
                                        />
                                    </Box>
                                </Box>
                                <Box className='payment_method'>
                                    <img src={payment3} alt="payment1" />
                                    <Box className='payment_name'>
                                        <p>AfterPay</p>
                                        <Radio
                                            checked={selectedValue === 'afterPay'}
                                            onChange={handleChange}
                                            value="afterPay"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'afterPay' }}
                                        />
                                    </Box>
                                </Box>
                                <Box className='payment_method'>
                                    <img src={payment4} alt="payment1" />
                                    <Box className='payment_name'>
                                        <p>Ethereum</p>
                                        <Radio
                                            checked={selectedValue === 'ethereum'}
                                            onChange={handleChange}
                                            value="ethereum"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'ethereum' }}
                                        />
                                    </Box>
                                </Box>
                                <Box className='payment_method'>
                                    <img src={payment5} alt="payment1" />
                                    <Box className='payment_name'>
                                        <p>Bitcoin</p>
                                        <Radio
                                            checked={selectedValue === 'bitcoin'}
                                            onChange={handleChange}
                                            value="bitcoin"
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': 'bitcoin' }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Box className='order_summery'>
                                <Box className='summry_wrapper'>
                                    <h2>Order Summary</h2>
                                    <Box className='order_history'>
                                        <Box className='order_wrapper1'>
                                            <Box className='qty'>X1</Box>
                                            <Box className='order_detail'>
                                                <p>Item 1 name here</p>
                                                <p>$300</p>
                                            </Box>
                                        </Box>
                                        <Box className='order_wrapper1'>
                                            <Box className='qty'>X1</Box>
                                            <Box className='order_detail'>
                                                <p>Item 2 name here</p>
                                                <p>$300</p>
                                            </Box>
                                        </Box>
                                        <Box className='order_wrapper1'>
                                            <Box className='qty'>X1</Box>
                                            <Box className='order_detail'>
                                                <p>Item 3 name here</p>
                                                <p>$300</p>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box className='subtotal_wrapper'>
                                        <Box className='details'>
                                            <p>Sub Total</p>
                                            <h4>$900</h4>
                                        </Box>
                                        <Box className='details'>
                                            <p>Delivery Charges</p>
                                            <h4>$50</h4>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Box className='total'>
                                        <h4>Total</h4>
                                        <h4>$950</h4>
                                    </Box>
                                </Box>
                                <Button className={(!delivery || !selectedValue) ? 'btn_disable' : 'btn_theam'} disabled={(!delivery || !selectedValue) ? true : false} onClick={()=>handleShow()}>Place Order</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className='modal_wrapper'>
                        <Box className='modal_header'>
                            <h2>{edit ? 'Edit' : 'Add'} Address</h2>
                            <IconButton className='btn_cancle' onClick={()=>handleClose()}>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </Box>
                        <Divider />
                        <Box className='modal_body'>
                            <Box className='img_wrapper'>
                                <img src={map} alt="map" />
                            </Box>
                            <Box className='form'>
                                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={4} sm={8} md={6}>
                                        <FormControl fullWidth >
                                            <InputLabel htmlFor="outlined-adornment-amount">Flat/Villa No.</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                className='input_field'
                                                label="Flat/Villa No."
                                                value={address.flatNo}
                                                onChange={(e)=>setAddress({...address, 'flatNo': e.target.value})}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-amount">Building/Villa</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                className='input_field'
                                                label="Building/Villa"
                                                value={address.building}
                                                onChange={(e)=>setAddress({...address, 'building': e.target.value})}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-amount">Street</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                className='input_field'
                                                label="Street"
                                                value={address.street}
                                                onChange={(e)=>setAddress({...address, 'street': e.target.value})}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-amount">Area</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                className='input_field'
                                                label="Area"
                                                value={address.area}
                                                onChange={(e)=>setAddress({...address, 'area': e.target.value})}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-amount">Directions</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                className='input_field'
                                                label="Directions"
                                                value={address.direction}
                                                onChange={(e)=>setAddress({...address, 'direction': e.target.value})}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className='type'>
                                <FormControlLabel
                                    value="bottom"
                                    control={
                                        <Radio
                                            checked={address.type === 'home'}
                                            onChange={(e)=>setAddress({...address, 'type': e.target.value})}
                                            value="home"
                                            icon={
                                                <IconButton sx={{ background: '#EFF3F9' }}>
                                                    <HomeOutlinedIcon />
                                                </IconButton>
                                            }
                                            checkedIcon={
                                                <IconButton sx={{ background: '#3B37DA' }}>
                                                    <HomeOutlinedIcon sx={{ fill: '#fff' }} />
                                                </IconButton>
                                            }
                                        />
                                    }
                                    label="Home"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={
                                        <Radio
                                            checked={address.type === 'work'}
                                            onChange={(e)=>setAddress({...address, 'type': e.target.value})}
                                            value="work"
                                            icon={
                                                <IconButton sx={{ background: '#EFF3F9' }}>
                                                    <WorkOutlineOutlinedIcon />
                                                </IconButton>
                                            }
                                            checkedIcon={
                                                <IconButton sx={{ background: '#3B37DA' }}>
                                                    <WorkOutlineOutlinedIcon sx={{ fill: '#fff' }} />
                                                </IconButton>
                                            }
                                        />
                                    }
                                    label="Work"
                                    labelPlacement="bottom"
                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={
                                        <Radio
                                            checked={address.type === 'other'}
                                            onChange={(e)=>setAddress({...address, 'type': e.target.value})}
                                            value="other"
                                            icon={
                                                <IconButton sx={{ background: '#EFF3F9' }}>
                                                    <PlaceOutlinedIcon />
                                                </IconButton>
                                            }
                                            checkedIcon={
                                                <IconButton sx={{ background: '#3B37DA' }}>
                                                    <PlaceOutlinedIcon sx={{ fill: '#fff' }} />
                                                </IconButton>
                                            }
                                        />
                                    }
                                    label="Other"
                                    labelPlacement="bottom"
                                />
                            </Box>
                            <Box className='btn_section'><Button className='btn_theam' onClick={()=>handleSetLocation()}>{edit ? 'Edit' : 'Save'} Location</Button></Box>
                        </Box> 
                    </Box>
                </Modal>
                <Modal
                open={show}
                onClose={handleShowClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styled}>
                <Lottie animationData={success} loop={false}  className='bid'/>
                    <Typography sx={{ textAlign: 'center', fontSize: '24px', fontWeight: '700' }}>
                        Order placed successfully!
                    </Typography>
                    <Box sx={{ mt: '24px', gap: '15px', textAlign: 'center' }}>
                        <Button className='btn_theam' onClick={() => navigate('/home')}>Okay</Button>
                    </Box>
                </Box>
            </Modal>
            </Container>
        </Box>
    );
}

export default Chekout;
