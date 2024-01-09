import { Link } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`
z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70px;
  background-color: var(--darkgrey);
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.2);
`;
const Contents = styled.div`
display: flex;
padding: 12px;
height: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const Logo = styled.img`
    height: 100%;
    border-radius: 0.2rem;
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const Links = styled(Link) `
background-color: teal;
`

const Header = () => {
    return (
      <Wrapper>
        <Contents>
          <Logo src="src/images/Ggomi.jpg" />
          <Menu>
            <Links to="/">menu 1</Links>
            <Links to="/breed">menu 2</Links>
          </Menu>
        </Contents>
      </Wrapper>
    );
}
export default Header