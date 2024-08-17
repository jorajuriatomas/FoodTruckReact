import * as s from "./NavbarStyles";
import { IoHomeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../../../Hooks/MenuContext";

export const Navbar = () => {
  const { isMenuOpen, toggleMenu } = useContext(Context);

  return (
    <s.HeaderContainer>
      <a href="/">
        <img src="/img/file.png"  />
      </a>
      <s.LinksContainer>
        <s.NavContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="/">
              <s.LinkContainer home>
                <IoHomeSharp />
              </s.LinkContainer>
              Home
            </a>
          </motion.div>
        </s.NavContainer>

        <s.NavContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="/contact">Contact</a>
          </motion.div>
        </s.NavContainer>

        <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>Iniciar Sesión</s.SpanStyled>
          </s.UserContainer>
        </s.UserNav>

      </s.LinksContainer>
       
          <s.MenuContainer>
            <button onClick = {toggleMenu} >
              <IoMenu />
            </button>

              <s.NavResponsive className={`${isMenuOpen ? "isActive": ""}`}>
                <s.NavResponsiveContainer >
                  <s.NavResponsiveLink>
                    <a href="/">Home</a>
                  </s.NavResponsiveLink>
                
                  <s.NavResponsiveLink>
                    <a href="/contact">Contacto</a>
                  </s.NavResponsiveLink>
             
                  <s.NavResponsiveLink>
                    <a href="/products">Productos</a>
                  </s.NavResponsiveLink>
           
                  <s.NavResponsiveLink>
                    <a href="/">Iniciar Sesion </a>
                  </s.NavResponsiveLink>
                </s.NavResponsiveContainer>
              </s.NavResponsive>
            
          </s.MenuContainer>
     
    </s.HeaderContainer>
  );
};
