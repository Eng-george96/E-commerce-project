import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive.js";
const Center = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  ${mobile({ fontSize: "20px" })};
  ${tablet({ fontSize: "20px" })};
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "25px" })};
  ${tablet({ fontSize: "25px" })}
`;

const CenterNav = () => {
  return (
    <Center>
      <Logo>
        {" "}
        <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          E-commerce{" "}
        </Link>
      </Logo>
    </Center>
  );
};

export default CenterNav;
