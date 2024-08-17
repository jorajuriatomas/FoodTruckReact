import * as s from './HomeProductsStyle';


export const HomeProduct = ({ img, title, price, category }) => {
  return (
    <s.ProductCard>
      <img src={img} alt={category} />
      <s.ProductInfo>
        <h2>{title}</h2>
        <s.ContainerPrice>
          <s.CardPrice>${price}</s.CardPrice>
        </s.ContainerPrice>
      </s.ProductInfo>
    </s.ProductCard>
  );
};

