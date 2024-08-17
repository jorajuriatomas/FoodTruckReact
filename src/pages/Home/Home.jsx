import { Layout } from "../../components/Layout/Layout";
import { Categories } from "./Categories/Categories";
import { Hero } from "./Hero/Hero";
import { HomeProducts } from "./HomeProducts/HomeProducts";

export const Home = () => {
  return (
    <>
    <Layout>
      <Hero />
      <Categories />
      <HomeProducts />
    </Layout>
  </>
  );
};
