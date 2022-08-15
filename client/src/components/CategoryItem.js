import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { mobile, tablet } from '../responsive.js';
const Container = styled.div `
 flex:1;
 height:50vh;
 margin:3px;
 position: relative;
`;
const Image = styled.img `
width:100%;
height:100%;
object-fit:cover;
 
`;
const Info = styled.div `
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1 `
color:white;
margin-bottom: 20px;
`;
const Button = styled.button `
border:none;
padding:10px;
background-color:white;
color: gray;
cursor:pointer;
font-weight:600;
`;

const CategoryItem = ({ item }) => {
    return ( 
        <Container>
         <Link to={`/products/${item.cat}`}>
         <Image src={item.img}/>
         <Info>
         <Title>{item.title}</Title>
         <Button>Shop Now</Button>
        </Info>
        </Link>
         </Container>
    )
}

export default CategoryItem;