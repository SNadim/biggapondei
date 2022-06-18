import styled from "styled-components";
import PopularProduct from "./PopularProduct";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Container = styled.div`
    margin-top: 20px;
    overflow: scroll;
    scroll-snap-type: y mandatory;
    -ms-overflow-style: none;
    scrollbar-width:none;
    &::-webkit-scrollbar{
        display: none
    }
    
`;
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
const Left = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;


const ProductSection = ({products}) => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Sidebar/>
            </Left>
            <Center>
                <Products products={products} />
            </Center>
            <Right>
                <PopularProduct products={products} />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default ProductSection