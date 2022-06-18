import React from 'react'
import styled from 'styled-components'
import Product from './Product';

const Container = styled.div`
    margin-top: 20px;
`;

const PopularProduct = ({products}) => {
  return (
    <Container>
         {
         products.slice(0).reverse().map((p)=>(
          <Product key={p.id} tag="popular" product={p}/>
        ))
      }
    </Container>
  )
}

export default PopularProduct