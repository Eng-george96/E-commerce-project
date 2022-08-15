import styled from "styled-components";
import {mobile,tablet} from '../responsive.js';



const Container =styled.div`
width:100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper =styled.div`
 width: 25%;
 padding:20px;
 background-color: white;
 border: 1px solid lightgray;
${mobile({width:"50%"})};
${tablet({width:"75%"})};
`;
const Title =styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form =styled.form`
display: flex;
flex-direction: column;
 
`;
const Input =styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;
`;
const Link = styled.a`
margin: 10px 0;
font-size: 15px;
font-weight:200;
cursor: pointer;
text-decoration: underline;
`;
const Button =styled.button`
margin: 10px auto;
width:40%;
border: none;
padding: 10px;
background-color: teal;
color:white;
cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN_IN</Title>
            <Form>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
                <Button>LOG_IN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login;