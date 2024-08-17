import { useState, createContext } from "react";

export const Context = createContext();

export const MenuContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Context.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </Context.Provider>
  );
};
