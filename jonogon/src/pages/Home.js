import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Container = styled.div`
`
const Home = () => {
  const [products,setProducts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const url = "http://localhost:5000/product"+search;
    axios.get(url).then(res => res.data)
    .then((data) => {setProducts(data);})
    .catch(err=>console.log(err));
  },[search])
  return (
    <Container>
      <Navbar />
      <ProductSection products={products}/>
    </Container>
  )
}

export default Home