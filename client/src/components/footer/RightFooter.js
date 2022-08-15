import styled from "styled-components";
import {mobile } from '../../responsive.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Right = styled.div`
    padding:20px;
    ${mobile({ margin: "0 auto" })}
`;
const Title = styled.h3`
    margin-bottom:15px;
`;
const ContactItem = styled.div`
    margin:5px;
    display:flex;
    align-items:center;
`;

const RightFooter = () => {
    return (
        <Right>
            <Title>Conatct</Title>
            <ContactItem> <LocationOnIcon style={{ marginRight: "5px" }} /> Syria-Damascus</ContactItem>
            <ContactItem> <PhoneIcon style={{ marginRight: "5px" }} /> +963 99462725</ContactItem>
            <ContactItem><EmailIcon style={{ marginRight: "5px" }} /> E-commerc@gmail.com</ContactItem>
        </Right>
    )
}

export default RightFooter