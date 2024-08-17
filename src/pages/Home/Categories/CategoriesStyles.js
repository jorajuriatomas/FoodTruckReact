import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriasWrapper = styled.section`
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
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--blue);
  border-bottom: 1px solid var(--blue);
  width: 90%;
  height: 60px;
  margin: 30px 0;
  font-size: 2rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
  max-width: 1300px;
`;

export const CardCategory = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 150px;
  padding: 1.5rem 0.5rem;
  background-color: ${({ selected }) =>
    selected ? "var(--orange-bg)" : "var(--gray-bg)"};
  border-radius: 15px;
  cursor: pointer;
  h2 {
    font-size: 1rem;
  }
  img {
    border-radius: 90px;
  }
`;
