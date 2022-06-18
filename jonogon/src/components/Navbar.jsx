import { Search, } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";


const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`

const Wrapper = styled.div`
    background-color:#131921;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })};
`

const Left = styled.div`
    flex: 1;
    text-align: left;
`
const SearchContainer = styled.div`
    background-color: white;
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`

const Input = styled.input`
    border: none;
    padding: 10px 25px;
    ${mobile({ width: "50px" })};
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Logo = styled.h1`
    cursor: pointer;
    color: white;
    font-weight: bold;
    ${mobile({ fontSize: "24px" })};
`
const Right = styled.div`
    color: white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2,justifyContent: "center" })};
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "8px" })};
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo>BiggaponDei</Logo>
            </Left>
            <Center>
              <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"grey", fontSize:16}} />
              </SearchContainer>
            </Center>
            <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar