import React from 'react';
import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';

const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container maxWidth={false} style={{margin:'90px 0'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;