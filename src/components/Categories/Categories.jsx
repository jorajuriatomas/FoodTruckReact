import { Categorie } from './Categorie';
import * as s from './CategoriesStyles';
import { categories } from "../../data/Categories";

export const Categories = () => {
  return (
    <s.CategoriasWrapper>
        
        <s.CategoriesTitle>
        <h2>Menu</h2>
        </s.CategoriesTitle>
      <s.CategoriesContainer>
        {categories.map(category => (
          <Categorie key={category.id} {...category}/>
        ))}
      </s.CategoriesContainer>
    </s.CategoriasWrapper>
  )
}

 