import * as s from "./ProductsStyles";
import { products } from "../../../data/Products";
import { Product } from "./Product";

export const Products = () => {
  return (
    <s.ProductsWrapper>
      <s.CategoriesTitle>
        <h2>Productos</h2>
      </s.CategoriesTitle>

      <s.ProductsContainer>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </s.ProductsContainer>
    </s.ProductsWrapper>
  );
};
