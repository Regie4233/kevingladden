import React from 'react';
import MusicCard from './MusicCard';
import Grid2 from '@mui/material/Unstable_Grid2';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import headshotmain from '../images/IMG_0455.jpg';
import styled from '@emotion/styled';
import { Card } from '@mui/material';

export default function MusicHandler() {

    // const trackList = [
    //     '176109133',
    //     '183469287'
    // ]


    return (
        <>

            <div>

                < Grid container spacing={2} columns={16}>

                    <Grid xs={12} md={10} sm={12}>
                        
                            <Paper elevation={10} component='img'
                                alt='mainheadshot'
                                src={headshotmain}
                                variant='outlined'
                                display='flex'
                                sx={{
                                  
                                    width: {xs: 450, md: 500, lg: 600},
                                    height:{xs: 450, md: 500, lg: 600},
                                }}
                            />

                       
                    </Grid>
                    <Box>

                        <Grid rowSpacing={20}>
                            <Card>
                                <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1499623993&color=%2385A68E&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>
                            </Card>

                        </Grid>

                    </Box>


                </Grid >




            </div>


        </>


    );
}