import styled from "styled-components";
import { mobile, tablet } from '../../responsive.js';
import Search from '@mui/icons-material/Search';



const Left = styled.div`
    display: flex;
    flex:1;
    align-items: center;
  `;
  const Language = styled.span`
  
 cursor: pointer;
 ${mobile({ display: "none" })};
 ${tablet({ display: "none" })};
 `;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 35px;
    padding: 5px;
    ${mobile({ marginLeft: "5px" })}
    ${tablet({ marginLeft: "5px" })}
`;
const Input = styled.input`
border: none;
outline:none;
${mobile({ width: "70px" })};
${tablet({ width: "200px" })};
`;

const LeftNav = () => {
  return (
    <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search' />
            <Search style={{ color: "gray", fontSize: "16px" }}></Search>
          </SearchContainer>
        </Left>
  )
}

export default LeftNav;