import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection';
import axios from 'axios';


const Container = styled.div`
`
const Home = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const url = "http://localhost:5000/product";
    axios.get(url).then(res => res.data)
    .then((data) => {setProducts(data);})
    .catch(err=>console.log(err));
  },[])
  return (
    <Container>
      <Navbar />
      <ProductSection products={products}/>
    </Container>
  )
}

export default Home