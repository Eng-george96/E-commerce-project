import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import {mobile } from '../../responsive.js';

const Left = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px;
    ${mobile({margin:"0 auto"})}
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    margin:5px;
    color:white;
    background-color: #${props => props.color};
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Logo = styled.h1`
    font-weight:500;
`;
const Desc = styled.p`
    margin: 10px 0;
`;

const LeftFooter = () => {
  return (
    <Left>
    <Logo>Logo</Logo>
    <Desc>our description</Desc>
    <SocialContainer>
        <SocialIcon color="3B5999"><FacebookIcon /></SocialIcon>
        <SocialIcon color="E4405F"><InstagramIcon /></SocialIcon>
        <SocialIcon color="55ACEE"> <TwitterIcon /></SocialIcon>
        <SocialIcon color="E60023"> <PinterestIcon /></SocialIcon>
    </SocialContainer>
</Left>
  )
}

export default LeftFooter