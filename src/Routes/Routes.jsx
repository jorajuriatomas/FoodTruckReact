import { BrowserRouter, Routes as ReactDomRoutes,Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { ProductsPage } from "../pages/Product/ProductsPage"
import { Contact } from "../pages/Contact/Contact"


const Routes = () => {
  return (
    
    <BrowserRouter>
    <ReactDomRoutes>
      <Route path="/" element={<Home /> } />
      <Route path="/products" element={<ProductsPage /> } />
      <Route path="/contact" element={<Contact /> } />
      <Route path="*" element={<h2>ERROR 404</h2> } />
    </ReactDomRoutes>
    </BrowserRouter>
  )
}

export default Routes
