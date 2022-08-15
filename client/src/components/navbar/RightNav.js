import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { mobile, tablet } from '../../responsive.js';
import { useSelector } from "react-redux";




const Right = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    ${mobile({ justifyContent: "center" })};
    ${tablet({ justifyContent: "center" })};
 `;

const UnorderedList = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    cursor: pointer;
`;
const Li = styled.li`
    cursor:pointer;
    margin: 0 10px;
    ${mobile({ fontSize: "20px" })}
    ${tablet({ fontSize: "20px" })}
`;
  
const RightNav = () => {
    const {amount} = useSelector((store)=>store.cart);
    return (
        <Right>
            <UnorderedList>
                <Li> <Link to={'/register'} style={{ textDecoration: "none", color: "inherit" }}>Register</Link></Li>
                <Li> <Link to={'/login'} style={{ textDecoration: "none", color: "inherit" }}>Login</Link></Li>
                <Li><Link to={'/cart'} style={{ textDecoration: "none", color: "inherit" }}>
                    <Badge badgeContent={amount} color="primary"  >
                        <ShoppingCartIcon style={{ fontSize: "25px" }} />
                    </Badge>
                </Link>
                </Li>
            </UnorderedList>
        </Right>
    )
}

export default RightNav;