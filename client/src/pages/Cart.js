import styled from "styled-components";
import Navbar from '../components/navbar/Navbar.js';
import Announcement from '../components/Announcement.js';
import { mobile, tablet } from '../responsive.js';
 
import BodyCart from "../components/cart/BodyCart.js";



const Container = styled.div`
    overflow: hidden;
`;
const Wrapper = styled.div`
    padding:20px;
    ${mobile({ padding: "10px" })};
    ${tablet({ padding: "10px" })};
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
            <Title>YOUR BAG</Title>
            <BodyCart />
            </Wrapper>
             

        </Container>
    )
}

export default Cart