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
      <NavLink to ="/">
        <img src="/img/file.png" />
      </NavLink>
      <s.LinksContainer>
        <s.NavContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <NavLink href="/">
              <s.LinkContainer home>
                <IoHomeSharp />
              </s.LinkContainer>
              Home
            </NavLink>
          </motion.div>
        </s.NavContainer>

        <s.NavContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <NavLink to ="/contact">Contact</NavLink>
          </motion.div>
        </s.NavContainer>

        <s.NavContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <NavLink to ="/products">Products</NavLink>
          </motion.div>
        </s.NavContainer>

        <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>Iniciar Sesión</s.SpanStyled>
          </s.UserContainer>
        </s.UserNav>
      </s.LinksContainer>

      <s.MenuContainer>
        <button onClick={toggleMenu}>
          <IoMenu />
        </button>

        <s.NavResponsive className={`${isMenuOpen ? "isActive" : ""}`}>
          <s.NavResponsiveContainer>
            <s.NavResponsiveList>
              <s.NavResponsiveLink to="/">Home</s.NavResponsiveLink>
            </s.NavResponsiveList>

            <s.NavResponsiveList>
            <s.NavResponsiveLink to="/contact">Contact</s.NavResponsiveLink>
            </s.NavResponsiveList>

            <s.NavResponsiveList>
            <s.NavResponsiveLink to="/products">Products</s.NavResponsiveLink>
            </s.NavResponsiveList>

            <s.NavResponsiveList>
            <s.NavResponsiveLink to="/">Iniciar Sesion</s.NavResponsiveLink>
            </s.NavResponsiveList>
          </s.NavResponsiveContainer>
        </s.NavResponsive>
      </s.MenuContainer>
    </s.HeaderContainer>
  );
};
