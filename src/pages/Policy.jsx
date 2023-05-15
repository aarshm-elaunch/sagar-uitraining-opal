import React from 'react';
import '../components/policy/style.scss';
import { Box } from '@mui/material';
import MainFooter from '../Layouts/MainFooter';
import PolicySection from '../components/policy/PolicySection';

const Policy = () => {
    return (
        <Box>
            <PolicySection />
            <MainFooter />
        </Box>
    );
}

export default Policy;
