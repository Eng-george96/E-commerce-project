import styled from '@emotion/styled';
import { mobile } from '../../responsive.js';


const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`;
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({textAline:"center"})}
`;

const Head = () => {
    return (
        <>
            <Title>News Letter</Title>
            <Description>
                Get timely updated from your favourite products
            </Description>
        </>
    )
}

export default Head