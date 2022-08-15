import styled from "styled-components";
import { mobile, tablet } from '../../responsive.js';
import LeftNav from './LeftNav.js';
import CenterNav from "./CenterNav.js";
import RightNav from './RightNav.js';

const Container = styled.div`
    height: 50px;
  `;
const Wrraper = styled.div`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.1rem;
    ${mobile({ padding: "10px 0" })};
    ${tablet({ margin: "5px" })};
     `;


const Navbar = () => {
  return (
    <Container>
      <Wrraper>
        <LeftNav />
        <CenterNav />
        <RightNav />
      </Wrraper>
    </Container>
  )
}

export default Navbar