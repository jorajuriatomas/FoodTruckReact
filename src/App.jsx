import { Navbar } from "./components/Navbar/Navbar";
import { Layout } from "./components/Layout/Layout";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Layout>
        
        <Products />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
