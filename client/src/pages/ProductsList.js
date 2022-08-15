import styled from 'styled-components';
import sytled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import NewLetter from '../components/newletter/NewLetter';
import Products from '../components/Products';
import {mobile} from '../responsive.js';
 
const Container = sytled.div`

`;
const Title = styled.h1`
margin:20px
`;
const FilterContainer = sytled.div`
display:flex;
justify-content:space-between;
`;
const Filter = sytled.div`
margin:20px;
${mobile({display:"flex",justifyContent:"space-between",alignItems:"cenetr",flexDirection:"column"})}
`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px; 
`;

const Select = styled.select`
margin-right:20px;
${mobile({margin:"5px 0"})}
`;
const Option = styled.option`
`;

const ProductsList = () => {

 

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dress</Title>
            <FilterContainer>
                <Filter>
                <FilterText>filter product:</FilterText>
                    <Select name='color'>
                        <Option disabled >color</Option>
                        <Option>white</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                    </Select>
                    <Select name='power'>
                        <Option disabled>power</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>sort product:</FilterText>
                    <Select>
                        <Option value='newest'>newest</Option>
                        <Option value='asc'>price (asc)</Option>
                        <Option value='desc'>price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <NewLetter />
            <Footer />
        </Container>
    )
}

export default ProductsList