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
 width: 40%;
 padding:20px;
 background-color: white;
 ${mobile({width:"70%"})};
 ${tablet({width:"75%"})};

`;
const Title =styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Form =styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input =styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;

${mobile({minWidth:"50%",margin:"10px 5px 0 0 "})}
`;
const Agreement =styled.span`
font-size: 12px;
font-weight: 1000;
margin: 20px 0;
`;
const Button =styled.button`
margin: 0 auto;
width:20%;
border: none;
padding: 10px;
background-color: teal;
color:white;
cursor: pointer;
${mobile({width:"50%"})}
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Add your account</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>By creating an account, I consent to the processing
                    of my personal data in accordance with <b>PRIVACY PLOICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;