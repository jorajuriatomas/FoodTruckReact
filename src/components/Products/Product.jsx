import * as s from "./ProductsStyles";
import { Button } from "../UI/Button/Button";

export const Product = ({ img, title, price, category }) => {
  return (
    <s.ProductCard>
      <img src={img} alt={category} />
      <s.ProductInfo>
        <h2>{title}</h2>
        <s.ContainerPrice>
          <s.CardPrice>${price}</s.CardPrice>
          <Button>Agregar</Button>
        </s.ContainerPrice>
      </s.ProductInfo>
    </s.ProductCard>
  );
};
