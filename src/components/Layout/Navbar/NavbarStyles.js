import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  img {
    height: 100px;
  }
`;

export const LinksContainer = styled.ul`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: white;
  }
  a:hover {
    background: var(--blue-bg);
    border-radius: 1rem;
  }
`;

export const LinkContainer = styled.li`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#65baee" : "#374961")};
`;

export const UserContainer = styled(LinkContainer)`
  display: flex;
  align-items: center;
`;

export const NavContainer = styled(LinkContainer)`
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const UserNav = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuContainer = styled(LinkContainer)`
  display: none;

  button {
    background: none;
    border: none;
    font-size: 2rem;
    color: #65baee;
    cursor: pointer;
  }

  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const NavResponsive = styled.nav`
  width: 100%;
  top: 132px;
  position: absolute;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 0vh;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  background-color: #18191a;
  z-index: 100;

  &.isActive {
    height: 35vh;
    opacity: 1;
    ul {
      display: flex;
      flex-direction: column;
      gap: 35px;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
    }
  }
`;

export const NavResponsiveContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const NavResponsiveLink = styled.li`
  list-style-type: none;
`;
