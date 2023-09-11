import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Hidden } from '@mui/material';

const MusicSlider = ({ musicData , title,onSongImageClick }) => {
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 5; // Number of items to show in the slider at a time
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const showSlide = (index) => {
        if (index < 0) {
            index = 0;
        } else if (index > musicData.length - itemsToShow) {
            index = musicData.length - itemsToShow;
        }
        setStartIndex(index);
    };
      
    const prevSlide = () => {
        showSlide(startIndex - 2);
    };
    
    const nextSlide = () => {
        showSlide(startIndex + 3);
    };
      
    return (
        <>
        <Container maxWidth="md" className='carousel-main'>
            <h1 className='carousel-title'>{title}</h1>
            <div className="slider-container" style={{width:"100%"}}>
                    <div className="slider">
                        {loading ? (
                            "Loading"
                        ) : (
                            musicData.slice(startIndex, startIndex + itemsToShow).map((data, index) => (
                                <Card sx={{width: 200,height:230,padding:"3px 6px"}} key={index}>
                                    <CardActionArea  onClick={() => onSongImageClick(data)}>
                                        <CardMedia
                                            component="img"
                                            image={data.thumbnail}
                                            alt={`Image ${index + startIndex + 1}`}
                                        />
                                        <div>
                                            <div style={{fontSize:"12px",height:"14px",overflow:"hidden"}}>
                                                {data.title}
                                            </div>
                                            <div style={{paddingTop:"5px",fontSize:"12px"}}>
                                                Music
                                            </div>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            ))
                        )}
                    </div>
                    <div className="slider-btn left" style={{ zIndex: 1 }} onClick={prevSlide}>
                        &#10094;
                    </div>
                    <div className="slider-btn right" style={{ zIndex: 1 }} onClick={nextSlide}>
                        &#10095;
                    </div>
                </div>
            </Container>
        </>
    );
};

export default MusicSlider;
