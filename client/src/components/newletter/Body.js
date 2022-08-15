import styled from "styled-components";
import {mobile} from '../../responsive.js';
import SendIcon from '@mui/icons-material/Send';


const InputContainer = styled.div`
    width:50%;
    height: 35px;
    background-color:white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;
const Input = styled.input`
    flex:8;
    outline:none;
    border:none;
    padding-left:20px;

`;
const Button = styled.button`
    flex:1;
    border:none;
    background-color: teal;
    color:white;
`;




const Body = () => {
    return (
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    )
}

export default Body