import * as s from './CategoriesStyles';


export const Categorie = ({img,title,category}) => {
  return (
    <s.CardCategory whileTap = {{scale : 0.95}}>
      <img src= {img} alt={category} />
      <h2>{title}</h2>
    </s.CardCategory>
  )
}


