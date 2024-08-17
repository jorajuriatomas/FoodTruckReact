import * as s from "./HomeProductsStyle";
import { products } from "../../../data/Products";
import { HomeProduct } from "./HomeProduct";

export const HomeProducts = () => {
  return (
    <s.ProductsWrapper>
      <s.CategoriesTitle>
        <h2>Especialidad de la casa</h2>
      </s.CategoriesTitle>

      <s.ProductsContainer>
        {products.slice(0, 3).map((product) => (
          <HomeProduct key={product.id} {...product} />
        ))}
      </s.ProductsContainer>
    </s.ProductsWrapper>
  );
};
