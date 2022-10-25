import React from 'react';
import { Container } from '@mui/system';
import { CardMedia, ImageList, Paper, ImageListItem, Fab, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaTiktok, FaTwitch, FaSpotify } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';
import artistlabel from '../images/wr1.png';
import headshot from '../images/IMG_0455.jpg';
import image01 from '../images/Kebvstage1.png';
import image02 from '../images/kevedit1.png';
import image03 from '../images/logow.png';
const Home = () => {

    const itemData = [
        {
            img: 'https://img.youtube.com/vi/xwAxAQCtqr8/0.jpg',
            title: 'Downlo - Spark Your Interest',
            source: 'https://www.youtube.com/embed/xwAxAQCtqr8'
        },
        {
            img: 'https://img.youtube.com/vi/ry2kMe_dpl8/0.jpg',
            title: 'Downlo - Are You Ready',
            source: 'https://www.youtube.com/embed/ry2kMe_dpl8'
        },
        {
            img: 'https://img.youtube.com/vi/2MqyI1E281o/0.jpg',
            title: 'Downlo - Graffiti On The Wall',
            source: 'https://www.youtube.com/embed/2MqyI1E281o'
        },
        {
            img: 'https://img.youtube.com/vi/5xArux3oYwg/0.jpg',
            title: 'Downlo - Winter Breeze',
            source: 'https://www.youtube.com/embed/5xArux3oYwg'
        },
        {
            img: 'https://img.youtube.com/vi/iopk_fBaRyg/0.jpg',
            title: 'Downlo - Mystery',
            source: 'https://www.youtube.com/embed/iopk_fBaRyg'
        },
        {
            img: 'https://img.youtube.com/vi/r-aHvr1BcYE/0.jpg',
            title: 'Downlo - Greenlight Gamble',
            source: 'https://www.youtube.com/embed/r-aHvr1BcYE'
        }
    ]
    const items = [
        {
            img: image01
        },
        {
            img: image02
        },
        {
            img: image03
        }
    ]

    return (
        <Container maxWidth="xl">
            <div className='main mainContent'>
                <Grid container justifyContent="center">
                    <Grid>
                        <Paper style={{ height: 75, width: 600 }} elevation={18}>
                            <CardMedia component='img' image={artistlabel} />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' style={{ marginTop: 20, paddingBottom: 20 }} rowGap={5} >
                    <Grid>
                        {/* <Paper> */}
                        <CardMedia component='img' image={headshot} height='300' className='outlines' />
                        {/* </Paper> */}
                    </Grid>
                    <Grid container columnGap={3} justifyContent='center'>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://www.instagram.com/downloworldofsounds/'>
                                <InstagramIcon sx={{ color: 'black' }} fontSize='large'/>
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://youtube.com/channel/UCeuHTWPow4SBat7CGJZDtyQ'>
                                <YouTubeIcon sx={{ color: 'black' }} fontSize='large' />
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://tiktok.com/@downloworldofsounds'>
                                <FaTiktok style={{ height: 28, width: 28 }} />
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://music.apple.com/us/artist/downlo/1545483918'>
                                <SiApplemusic style={{ height: 28, width: 28 }} />
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://twitch.tv/downloworldofsounds'>
                                <TwitterIcon style={{ height: 28, width: 28 }} />
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://twitch.tv/downloworldofsounds'>
                                <FaTwitch style={{ height: 28, width: 28 }} />
                            </Fab>
                        </Grid>

                        <Grid>
                            <Fab sx={{ backgroundColor: 'linen' }} href='https://open.spotify.com/artist/3meflSBTriifjWAnxkBndg?si=0MxruVGYQxG54TI9ZuftRg'>
                                <FaSpotify style={{ height: 28, width: 28 }} />
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className='secondaryContent main'>
                <Grid container rowSpacing={1} columnGap={10} justifyContent='center'>
                    {/* <Grid xs='auto' display='flex'>
                        <Paper style={{ height: 915, width: 622, backgroundColor: 'darkseagreen', paddingLeft: 20 }}>
                            <ImageList sx={{ width: 600, height: 850, paddingTop: 2 }}>
                                <ImageListItem key="Subheader" cols={2}>
                                    <ListSubheader component="div">Music Videos</ListSubheader>
                                </ImageListItem>
                                {
                                    itemData.map((item) => (

                                        <ImageListItem key={item.img}>
                                            <img
                                                scr={`${item.img}`}
                                                srcSet={`${item.img}`}
                                                alt={item.title}
                                                loading='lazy'
                                            />
                                        </ImageListItem>
                                    ))
                                }

                            </ImageList>
                        </Paper>

                    </Grid> */}
                    <Grid xs='auto' display='flex'>
                        <ImageList sx={{ width: 600, height: 400 }} cols={3} rowHeight={164}>
                            {items.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={item.img}
                                        srcSet={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>

                    <Grid xs='auto' display='flex'>
                        {/* <Paper style={{ height: 500, width: 345, backgroundColor: 'black' }}> */}
                        <iframe src="https://open.spotify.com/embed/artist/3meflSBTriifjWAnxkBndg?utm_source=generator"
                            width="325" height="400" frameBorder="0" allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy" className='outlines'>

                        </iframe>
                        {/* </Paper> */}
                    </Grid>

                </Grid>
            </div>
        </Container >
    );
};


export default Home;