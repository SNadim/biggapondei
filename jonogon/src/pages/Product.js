import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { mobile } from '../responsive';
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;


const AddContainer = styled.div`
    width: 50%;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const [post, setPost] = useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product/${path}`);
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();   
                
      },[path]);

      const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };
      const handleClick = ()=>{
        dispatch( addProduct({...post,quantity}) )
      }
  return (
    <Container>
        <Navbar />
        <Wrapper>
            {/* <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer> */}
            <Slider post={post} />
            <InfoContainer>
                <Title>{post.thumbnail}</Title>
                <Desc>{post.description}</Desc>
                <Price>$ {post.price}</Price>
                <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product