import styled from 'styled-components'
import Product from './Product'


const Container = styled.div`
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
`;
const Products = ({products}) => {
  return (
    <Container>
      {
         products.slice(0).reverse().map((p)=>(
          <Product key={p.id} tag="non" product={p}/>
        ))
      }
    </Container>
  )
}

export default Products