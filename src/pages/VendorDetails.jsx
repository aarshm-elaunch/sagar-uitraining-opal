import React from 'react';
import '../components/vendor/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import Vendor from '../components/vendor';

const VendorDetails = () => {
    return (
        <Box>
            <Vendor />
            <MainFooter />
        </Box>
    );
}

export default VendorDetails;
