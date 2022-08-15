import styled from "styled-components";
import "@fontsource/montez";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
  background-color: #55e6c1;
   
`;
const Header = styled.h4`
  font-size: 30px;
  font-family: "Montez";
  font-weight: 1000;
`;
const Announcement = () => {
  return (
    <Container>
      <Header>Announcement</Header>
    </Container>
  );
};

export default Announcement;
