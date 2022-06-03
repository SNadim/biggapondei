import styled from 'styled-components'
import { FavoriteBorder, PlayArrow ,ShoppingCartOutlined,PauseCircleFilledRounded } from '@material-ui/icons'
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
    height: 90vh;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    scroll-snap-align: start;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
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

const Video = styled.video`
    height: 90vh;
    width: 100%;
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

const Product = () => {
    const [playing, setPlaying] = useState(false);
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
  return (
    <Container>
        <Circle/>
        <Video
        
         loop
         ref={videoRef} 
         >
            <source src="http://localhost:5000/video" type="video/mp4" />
        </Video>
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
            
            <Icon>
                <FavoriteBorder/>
            </Icon>
            <TextWrapper>
                <User>@nadim</User>
                <Desc>This is some description</Desc>
            </TextWrapper>
        </Info>
    </Container>
  )
}

export default Product;