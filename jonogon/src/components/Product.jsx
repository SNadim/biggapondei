import styled from 'styled-components'
import { FavoriteBorder, PlayArrow ,ShoppingCartOutlined,PauseCircleFilledRounded,Favorite } from '@material-ui/icons';
import { useRef, useState } from 'react';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    height: 100vh;
    margin: 5px;
    min-width: ${props=>props.tag !== "popular" ? "280px" : "200px"};
    height: ${props=>props.tag !== "popular" ? "350px" : "200px"};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    scroll-snap-align:${props=>props.tag !== "popular" ? "start" : "none"};
    &:hover ${props=>props.tag !== "popular" ? Info : "none"}{
        opacity: 1;
    }
    transition: all 0.5s ease;
    &:hover ${props=>props.tag !== "popular"}{
        transform: scale(1.1);
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;
// height: 92vh;
const Video = styled.video`
    height: ${props=>props.tag === "popular" ? "20vh" : "92vh"};
    width: ${props=>props.tag === "popular" ? "70%" : "100%"};
    z-index: 2;
    object-fit: fill;
    
`;

const TextWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left: 40px;
    color: white;
`;
const User = styled.h3``;
const Desc = styled.p``;

const VideoWrapper = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
`;
const Product = ({tag,product}) => {
   
    const [playing, setPlaying] = useState(false);
    const [liked, setliked] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // if video is playing
        // stop it..
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }

        // otherwise if its not playing
        // play it
    }

    const handleliked = () => {
        if(liked){
            setliked(false);
        } else {
            setliked(true);
        }
    }
  return (
    <Container tag={tag}>
        {
            tag !== "popular" ? 
        
        <Video
         tag = {tag}
         loop
         ref={videoRef} 
         >
            <source src={`http://localhost:5000/video/${product.id}`} type="video/mp4" />
        </Video> :
        <VideoWrapper>
        <Video
         tag = {tag}
         >
           <source src={`http://localhost:5000/video/${product.id}`} type="video/mp4" />
       </Video>
       <p style={{marginTop:"10px"}}>dekhun ki kore fello?</p>
       </VideoWrapper> 
}
        <Info>
        <Icon>
                <ShoppingCartOutlined />
            </Icon>
            {
                playing ? <Icon>
                <PauseCircleFilledRounded onClick={handleVideoPress}  />
            </Icon> : 
            <Icon>
            <PlayArrow onClick={handleVideoPress}  />
             </Icon>
            }
            
            <Icon onClick={handleliked}>
                {
                    liked ? <Favorite style={{color:"black"}} /> : <FavoriteBorder />
                }
                
            </Icon>
            <TextWrapper>
                <User>{product.brand}</User>
                <Desc>{product.description}</Desc>
            </TextWrapper>
        </Info>
    </Container>
  )
}

export default Product;