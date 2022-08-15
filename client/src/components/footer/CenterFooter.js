import styled from "styled-components";
import { mobile, tablet } from '../../responsive.js';

const Center = styled.div`
padding:20px;
${mobile({ display: "none" })};
${tablet({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom:15px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;


const CenterFooter = () => {
    return (
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Contact</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>About</ListItem>
            </List>
        </Center>
    )
}

export default CenterFooter