import styled from "styled-components";
import { mobile, tablet } from '../../responsive.js';
import ProductCart from "./CartItem.js";
import  SummaryCart from "./SummaryCart.js"
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "./CartItem.js";
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
    ${tablet({ flexDirection: "column" })};
`;
const Info = styled.div`
    flex:9;
    ${mobile({ margin: "5px" })};
`;
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 3px;
    margin:"10px 0";
`;
const BottomCart = () => {
const {cartItems} = useSelector((store)=>store.cart);
    return (
        <Bottom>
            <Info>
                {  
                cartItems.map((item)=>(
                    <>
                    <CartItem  key={item.id} {...item}/>
                    <Hr></Hr>
                    </>
                )
                    )
                
                }
            </Info>
            <SummaryCart />
        </Bottom>
    )
}

export default BottomCart