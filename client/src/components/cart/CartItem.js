import styled from "styled-components";
import { mobile, tablet } from '../../responsive.js';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useDispatch,useSelector } from "react-redux";
import { increaseItem,decreaseItem,removeItem} from "../../features/cartSlice.js";


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })};
    ${tablet({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    object-fit: cover;
    width: 200px;
    height: 200px;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;;
`;
const ProductName = styled.span`

`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};

`;
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ margin: "15px 0" })};
    ${tablet({ margin: "15px 0" })}

`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.p`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "10px" })};
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;
const Button = styled.button`
cursor:pointer;
background-color: transparent;
margin: 0 10px;
`

const CartItem = ({id,image,name,price,amount}) => {
  const dispatch = useDispatch();

   
 
    
    return (
        <Product>
            <ProductDetail>
                <Image src={ image} />
                <Details>
                    <ProductName><h2> {name} </h2></ProductName>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Button onClick={()=>dispatch(increaseItem({id}))}>
                        <AddRoundedIcon />
                    </Button>
                    <ProductAmount>
                        {amount}
                    </ProductAmount>
                    <Button  onClick={()=>{
                        if(amount===1){
                            dispatch(removeItem({id}))
                        }
                        dispatch(decreaseItem({id}))
                    }}>
                        <RemoveRoundedIcon />
                    </Button>
                </ProductAmountContainer>
                <ProductPrice>{price} $</ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export default CartItem