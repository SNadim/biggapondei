import styled from 'styled-components'

import Product from './Product'

const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
`;

const Products = () => {
  return (
    <Container>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </Container>
  )
}

export default Products