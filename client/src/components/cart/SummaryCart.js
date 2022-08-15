import styled from "styled-components";
import { useSelector } from "react-redux";
const Summary = styled.div`
    flex:3;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const SummaryButton =styled.button`
    padding: 10px;
    border-radius: 1px;
    width: 100%;
    background-color: black;
    color: white;
`;
const SummaryCart = () => {
const {total} = useSelector((store)=>store.cart);
    return (
        <Summary>
            <SummaryTitle>summary orderd</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Total_Price</SummaryItemText>
                <SummaryItemPrice>{total} $</SummaryItemPrice>
            </SummaryItem>
             
            <SummaryButton>checkout now</SummaryButton>
        </Summary>
    )
}

export default SummaryCart