import styled from "styled-components";
import {mobile,tablet} from '../../responsive.js';
import LeftFooter from "./LeftFooter.js";
import CenterFooter from "./CenterFooter.js";
import RightFooter from "./RightFooter.js";

const Container = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 40px;
    justify-content: center;
    align-items: center;
    height: 100%;
    ${mobile({gridTemplateColumns:"repeat(1,1fr)"})}
    ${tablet({gridTemplateColumns:"repeat(1,1fr)"})}
`;
 
 
const Footer = () => {
    return (
        <Container>
             <LeftFooter/>
             <CenterFooter/>
             <RightFooter/>
        </Container>
    )
}

export default Footer