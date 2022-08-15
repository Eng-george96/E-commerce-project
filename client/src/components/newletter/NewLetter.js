import styled from '@emotion/styled';
import Head from './Head.js';
import Body from './Body.js';


const Container = styled.div`
    padding:20px 0;
    background-color:#fcf5f5;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const News = () => {
    return (
        <Container>
            <Head/>
            <Body/>
        </Container>
    )
}

export default News