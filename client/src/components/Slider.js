import { useState } from 'react';
import styled from 'styled-components';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { sliderItems } from '../data.js';
import { mobile, tablet } from '../responsive.js';

/////////////// My STYLED COMPONENTS ///////////////////
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })};
${tablet({height:"50vh"})};
`;
const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items:center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   margin:auto;
   left: ${props => props.direction === 'left' && "10px"};
   right: ${props => props.direction === 'right' && "10px"};
   cursor: pointer;
   opacity: 0.5;
   z-index:2;
`;
const Wrraper = styled.div`
   display: flex;
   height: 100%;
   transition : all 1.5s ease;
   transform : translateX(${props => props.slideIndex * -100}vw);
   ${tablet({})};
`;
const Slide = styled.div`
   width:100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color:#f5f6fa;  
   ${tablet({ height: "50vh" })};
`;
const ImageContainer = styled.div`
   flex: 1;
   height: 100%;
   width:75%;
   padding:50px 50px;
`;
const Image = styled.img`
width:75%;
height:75%;
border-radius:50%;
`;
const InfoContainer = styled.div`
flex: 1;
width:50vw;
`;
const Title = styled.h1`
font-size: 70px;
${tablet({ fontSize: "40px" })};
`;
const Desc = styled.div`
   margin: 50px 0;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
   ${tablet({ margin: "20px 0" })};
`;
const Button = styled.button`
   padding: 5px;
   background-color: transparent;
   cursor: pointer;
`;
/////////////// My STYLED COMPONENTS ///////////////////

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handelClick("left")}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
            </Arrow>
            <Wrraper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc> {item.desc} </Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrraper>
            <Arrow direction='right' onClick={() => handelClick("right")}>
                <KeyboardDoubleArrowRightOutlinedIcon />
            </Arrow>
        </Container>

    )
}

export default Slider;