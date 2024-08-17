import { useNavigate } from "react-router-dom";
import {Button} from "../../../components/UI/Button/Button";
import * as s from "./HeroStyles";

export const Hero = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <s.HeroContainerStyled>
      <s.HeroTextContainerStyled>
        <h1>Food Truck</h1>
        <h2>Capital</h2>
        <p>Busca el menu que mas te guste</p>
        <Button onClick = {handleClick} radius = {"10"} disable = {false}>Ver mas</Button>
      </s.HeroTextContainerStyled>
      <s.HeroImageContainerStyled>
        <img src="img/banner.jpg" alt="" />
      </s.HeroImageContainerStyled>
    </s.HeroContainerStyled>
  );
};
