import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Info = styled.div`
opacity:0; 
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
transition : all 0.5s ease; 
cursor: pointer;
`;
const Container = styled.div`
flex:1;
margin:10px;
width:280px;
height:350px;
background-color:#f5f6fa;
display:flex;
align-items:center;
justify-content:center;
position:relative;
flex-direction: column;
&:hover ${Info}{
opacity:1;
}
 
`;
const Circle = styled.div`
width:200px;
height:200px;
background-color:white;
border-radius:50%;
position:absolute;
`;
const Image = styled.img`
width:280px;
height:75%;
z-index:2;
`;

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
margin:10px;
cursor:pointer;
transition : all 0.5s ease; 
&:hover{
    background-color:#f1f2f6;
    transform:scale(1.1);
}
`;

const Product = ({ item }) => {
    return (
        <Container>

            <Circle />
            <Image src={item.img} />
            <Link to={`/products/${item.cat}/${item.id}`}>
                <Info>
                    <Icon>
                        <ShoppingCartOutlinedIcon />
                    </Icon>
                    <Icon>
                        <SearchOutlinedIcon />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlinedIcon />
                    </Icon>
                </Info>
            </Link>
        </Container>
    )
}

export default Product;