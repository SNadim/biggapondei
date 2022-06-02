import styled from "styled-components";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Container = styled.div`
    margin-top: 20px;
`;
const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
const Left = styled.div`
    flex: 1;
    border-right: 1px solid grey;
`;
const Right = styled.div`
    flex: 6;
`;


const ProductSection = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Sidebar/>
            </Left>
            <Right>
                <Products />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default ProductSection