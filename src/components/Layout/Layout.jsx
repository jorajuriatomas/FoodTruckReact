import styled from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { MenuContext } from "../../Hooks/MenuContext";

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <MenuContext>
      <Navbar />
      </MenuContext>
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
};
