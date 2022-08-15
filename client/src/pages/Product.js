import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import NewLetter from "../components/newletter/NewLetter";
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {mobile,tablet} from '../responsive.js';
const Container = styled.div`
overflow:hidden;
width:100%;
`;
const Wrraper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})};
${tablet({padding:"10px",flexDirection:"column"})};
`;
const ImgContainer = styled.div`
 flex:1;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`;
const InfoContainer = styled.div`
 flex:1;
 padding: 0 50px;
 ${mobile({padding:"10px"})};
 ${tablet({padding:"10px"})}
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content:space-between;
margin: 30px 0px;
${mobile({width:"100%"})};
${tablet({width:"100%"})};
`;
const Filter =styled.div`
display:flex;
align-items:center;
 
`;
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin :0 5px;
cursor:pointer;
`; 
const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`; 
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})};
${tablet({width:"100%"})};
`;
const Amountcontainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
 
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: solid 1px teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding:10px;
border: solid 1px teal;
background-color: white;
font-weight: 500;
cursor: pointer;
&:hover{
    background-color:#f5f6fa;
}
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrraper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </ImgContainer>
                <InfoContainer>
                    <Title>My car</Title>
                    <Desc>loram ipsum
                    </Desc>
                    <Price>20$</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </Filter>
                        <Filter>
                        <FilterTitle>Size</FilterTitle>
                         <FilterSize>
                             <FilterSizeOption>XS</FilterSizeOption>
                             <FilterSizeOption>S</FilterSizeOption>
                             <FilterSizeOption>M</FilterSizeOption>
                             <FilterSizeOption>L</FilterSizeOption>
                             <FilterSizeOption>XL</FilterSizeOption>
                         </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <Amountcontainer>
                           <RemoveRoundedIcon/>  
                            <Amount>1</Amount>
                            <AddRoundedIcon/>
                        </Amountcontainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrraper>
            <NewLetter />
            <Footer />
        </Container>
    )
}

export default Product