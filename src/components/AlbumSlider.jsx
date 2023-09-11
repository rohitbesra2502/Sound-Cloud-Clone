import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

const AlbumSlider = ({ albumData }) => {
    const [loading, setLoading] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 5; // Number of items to show in the slider at a time
    // const imageSize = 140; // Equal width and height size for images

    // console.log(albumData);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const showSlide = (index) => {
        if (index < 0) {
            index = 0;
        } else if (index > albumData.length - itemsToShow) {
            index = albumData.length - itemsToShow;
        }
        setStartIndex(index);
    };
      
    const prevSlide = () => {
        showSlide(startIndex - 1);
    };
    
    const nextSlide = () => {
        showSlide(startIndex + 1);
    };
    // console.log(albumData[0].artists[0].name);
    // console.log(albumData);
    return (
        <Container maxWidth="md" sx={{ display: "flex",flexDirection:"row", marginTop:10}}>
                <div className="slider-container" style={{width:"100%"}}>
                    <div className="slider">
                        {loading ? (
                            "Loading"
                        ) : (
                            albumData.slice(startIndex, startIndex + itemsToShow).map((data, index) => (
                                <Card sx={{width: 200,height:230,padding:"3px 5px",border:"1px solid black"}} key={index}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            // height={imageSize}
                                            height={170}
                                            image={data.image}
                                            alt={`Image ${index + startIndex + 1}`}
                                            sx={{border:"1px solid red"}}
                                        />
                                        <CardContent sx={{width:"100%"}}>
                                            <Typography gutterBottom variant="h6" component="div" sx={{display:"flex",marginLeft:"-15px",width:"100%",fontSize:12 ,border:"1px solid red"}}>
                                                {data.title}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary" style={{fontSize:13}}>
                                                {data.map((d , i) => {
                                                    <h6>{d}</h6>
                                                })}
                                            </Typography> */}
                                        </CardContent>
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
    );
};

export default AlbumSlider;
