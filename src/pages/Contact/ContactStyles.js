import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionContact = styled.section`
  width: 100%;
    height: 100vh;
`

export const FormContact = styled.form`
    background: url("/img/contact.jpg") center/cover no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & h2 {
        font-size: 52px;
    }

    & input,
    & textarea{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #4e688d;
        padding: 10px;  
    }

    @media (max-width: 1600px) {

        height: 100%;
    }

    @media (max-width: 768px) {


        & h2 {
            font-size: 32px;
        }
        
        & input,
        & textarea{
            width: 250px;
        }
    }
`
export const ButtonContact = styled(motion.button)`
   background-color: #4e688d;
   border-radius: 5px;
   color: white;
   padding: 15px 30px;
   border: none;
   font-size: 16px;
   display: flex;
   align-items: center;
   border: 1px solid #4e688d;
   gap: 5px;
   cursor: pointer;
   font-weight: bold;

   &:hover {
    background-color: black;
    color: #4e688d;
    border: 1px solid #4e688d;
    border-radius: 5px;
    font-weight: bold;
   } 
`