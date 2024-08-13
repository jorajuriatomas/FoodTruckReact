import styled from "styled-components";

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const CategoriesTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid var(--blue);
  width: 90%;
  height: 60px;
  margin: 60px 0;
  font-size: 2rem;
`;

export const ProductsContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;

export const ProductCard = styled.div`
  height: 200px;
  padding: 10px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  border-radius: 7px;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  box-shadow: grey 0px 0px 2px 0px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 300px;
  img {
    filter: contrast(75%);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease 0s;
    &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
  }
  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;

export const ProductInfo = styled.div`

  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 15px;
  color: white;
  background-color: rgba(0, 0, 0, 0.44);
  width: 320px;
  z-index: 1;
  h2 {
    padding-left: 10px;
 
  }
  span {
    padding-left: 10px;
    align-self: center;
  }

  @media (max-width: 768px) {
    text-align: start;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: linear-gradient(83deg, #fbfbfb, #374961);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

