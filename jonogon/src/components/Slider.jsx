import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    flex 1;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`;
const Video = styled.video`
    height: ${props=>props.tag === "popular" ? "20vh" : "92vh"};
    width: ${props=>props.tag === "popular" ? "70%" : "100%"};
    z-index: 2;
    object-fit: fill;
    
`;
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0);
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
            </Slide>
            ))}
            <Slide bg="pink">
            <ImgContainer>
            <Video controls loop>
            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
        </Video>
            </ImgContainer>
            </Slide>
        </Wrapper>
        
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider