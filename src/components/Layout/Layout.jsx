import styled from "styled-components";
import { Hero } from "../Hero/Hero";
import { Categories } from "../Categories/Categories";


const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = ( {children} ) => {
  return(
    <LayoutWrapper>
     <Hero/> 
     <Categories/>
     {children}
    </LayoutWrapper>
    );
};

