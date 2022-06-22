import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useSelector} from 'react-redux';

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
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{textDecoration: "none"}}><Logo>BiggaponDei</Logo></Link>
            </Left>
            <Center>
              <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"grey", fontSize:16}} />
              </SearchContainer>
            </Center>
            <Right>
             <Link to="/register" className="link"><MenuItem>REGISTER</MenuItem></Link>
              <Link to="/signin" className="link"><MenuItem>SIGN IN</MenuItem></Link>
              <Link className="link" to="/cart">
              <MenuItem>
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
              </Badge>
              </MenuItem>
              </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar