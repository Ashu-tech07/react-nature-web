import React from 'react'
import headerImg from '../images/header-hero.jpg'

import { AppBar, Avatar, Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import Header from './Header'

const Body = () => {
    return (
        <>
            <Grid container
                sx={{
                    backgroundImage: `url(${headerImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ color: '#ffffff', textAlign: 'center', marginTop: '8%' }}>
                        <Typography variant='h3'>
                            we all love
                        </Typography>
                        <Typography variant='h1' sx={{ fontWeight: '60' }}>
                            nature
                        </Typography>
                        <Typography>
                            Look deep into nature, and you will
                        </Typography>
                        <Typography>
                            understand everyting better.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor: '#ffd936', boxShadow: 'none', color: '#536942', fontSize: '0.79rem', textTransform: 'capitalize', margin: '2rem 0 10rem 0' }}>
                            Get started
                        </Button>
                    </Box>

                </Grid>


            </Grid >

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h2' sx={{
                        color: '#669933', textAlign: 'center', marginTop: '1.5rem'
                    }}> Our Services</Typography>
                    <Divider flexItem={true} sx={{ backgroundColor: '#ffd936', width: '100px', height: '2.5px', marginLeft: '45%', marginTop: '20px' }}></Divider>
                </Grid>
                <Grid item container xs={12} mt={6} spacing={4} justifyContent={'space-evenly'} >
                    <Grid item xs={10} sm={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-1.jpg" alt="#"
                                sx={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
                            <Typography gutterBottom variant='h6' color='textSecondary' mt={2}>
                                Web Design
                            </Typography>
                            <Typography color='textSecondary' mb={8}>
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={3}  >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-2.jpg" alt="#"
                                sx={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
                            <Typography gutterBottom variant='h6' color='textSecondary' mt={2}>
                                Graphic Design
                            </Typography>
                            <Typography color='textSecondary' mb={8}>
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={3}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-3.jpg" alt="#"
                                sx={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
                            <Typography variant='h6' color='textSecondary' mt={2}>
                                Content Creation
                            </Typography>
                            <Typography color='textSecondary' mb={8}>
                                Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Grid >

            <Grid container sx={{ backgroundColor: '#f2f2f2' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box mb={6}>
                        <Typography mt={6} sx={{ fontSize: '80px', color: 'lightgrey', textAlign: 'center' }}> ❝ </Typography>
                        <Typography variant='h4' sx={{ color: '#336600', textAlign: 'center', margin: '0 20% 0 20%' }}>“Original and with an innate understanding of their customer’s needs,
                            the team at Love Nature are always a pleasure to work with.”</Typography>
                        <Avatar alt="profile" src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/service-3.jpg" sx={{ margin: '2% 50% 1% 50%' }} />
                        <Typography variant='subtitle' color='textSecondary' sx={{ textAlign: 'center', margin: '0 35% 0% 49%' }}>
                            Jane Miller
                        </Typography>
                    </Box>

                </Grid>

            </Grid>

            <Grid container xs={12} sx={{
                display: 'flex', justifyContent: 'space-evenly'
            }} direction={'row'} >
                <Grid item xs={6}>
                    <Box sx={{ margin: '15% 10% 0% 10%' }}>
                        <Typography component='h1' mb={2} ml={1} variant='caption' color='textSecondary' sx={{ textTransform: 'uppercase', }}>
                            About Us
                        </Typography>
                        <Typography variant='h4' sx={{ fontSize: '2.5rem', lineHeight: '43px', letterSpacing: '-2px', fontFamily: 'forum', fontWeight: 400, padding: '0.5rem 0.1rem 3rem 0.1rem', color: '#536942' }}>
                            Tell website visitors who you are and why they should choose your business.
                        </Typography>
                        <Typography sx={{ padding: '0.5rem 0.1rem 3rem 0.1rem', color: '#536941CC' }}>
                            Because when a visitor first lands on your website, you’re a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you’re selling.
                        </Typography>


                        <Button variant='outlined' sx={{ borderColor: '#536941CC', color: '#536941CC', textTransform: 'capitalize', padding: '0.7rem 2.5rem' }}>
                            Find Out More
                        </Button>

                    </Box>
                </Grid>

                <Grid item xs={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10%' }}>
                        <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg" alt="leaf"
                            sx={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Box>
                </Grid>
            </Grid>

            <Grid container xs={12}  justifyContent={'center'} style={{
          backgroundImage: "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-big.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
        
        }}>
          <Grid item my={10} sx={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent:'center'}}>
            <Typography variant='h3' mb={6} style={{ color: '#536942' }}>
              QUESTIONS?
            </Typography>
            <Typography sx={{ color: '#536942' }}>
              Whether you’re curious about features, a free trial, or
            </Typography>
            <Typography sx={{ color: '#536942' }}>
              even press, we’re here to answer any questions.
            </Typography>
            <Button variant='contained' sx={{ boxShadow: 'none', backgroundColor: '#ffd936', color: '#536942', textTransform: 'capitalize', padding: '0.67rem 2.4rem', marginTop: '3rem' }}>Let's Talk Now</Button>
          </Grid>
        </Grid>

        <Grid container xs={12} >
          <Grid item container my={4}>
            <Grid item xs={12} sm={4}>
              <Grid container mx={6} sx={{ paddingTop: '1rem'}}>
                <Grid item xs={12} sm={3}>
                  <Typography color='#536942'>Home</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography  color='#536942'>About</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography color='#536942'>Service</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography gutterBottom  color='#536942'>Contact</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-green.svg" alt="#" style={{ width: '60px' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography align='center' sx={{ marginTop: '1rem', color:'#536942'}}>Love Nature by Tyler Moore</Typography>
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}

export default Body;
