import * as s from "./NavbarStyles";
import { IoHomeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  return (
    <s.HeaderContainer>
      <a href="">
        <img src="/img/file.png" alt="" />
      </a>
      <s.LinksContainer>
        <s.HomeContainer home>
          <motion.div whileTap={{ scale: 0.95 }}>
            <a href="#">
              <s.LinkContainer home>
                <IoHomeSharp />
              </s.LinkContainer>
              Home
            </a>
          </motion.div>
        </s.HomeContainer>

        <s.UserNav>
          <s.UserContainer>
            <s.SpanStyled>
              Iniciar Sesión
            </s.SpanStyled>
          </s.UserContainer>
        </s.UserNav>

        <motion.div whileTap={{ scale: 0.95 }}> 

          <s.MenuContainer>
            
            <IoMenu />
            
          </s.MenuContainer>

        </motion.div>
      </s.LinksContainer>
    </s.HeaderContainer>
  );
};
