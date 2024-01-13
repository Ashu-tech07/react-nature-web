import { AppBar, Box, Button } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <div>
            <AppBar position='static' style={{
                boxShadow: 'none',
                background: 'transparent',
                height: 150,
            }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }} mr={12} ml={12} mt={2} >
                    <Box>
                        <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="#"
                            sx={{
                                width: '50px',
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="text" sx={{ color: 'inherit', textTransform: 'capitalize' }}>Home</Button>
                        <Button variant="text" sx={{ color: 'inherit', textTransform: 'capitalize' }}>About</Button>
                        <Button variant="text" sx={{ color: 'inherit', textTransform: 'capitalize' }}>Service</Button>
                        <Button variant="text" sx={{ color: 'inherit', textTransform: 'capitalize' }}>Contact</Button>
                        <Button variant='outlined' sx={{ background: 'transparent', boxShadow: 'none', borderColor: '#ffffff', color: '#ffffff' }}>
                            202-555-0188
                        </Button>
                    </Box>
                </Box>
            </AppBar>
        </div>
    )
}

export default Header
