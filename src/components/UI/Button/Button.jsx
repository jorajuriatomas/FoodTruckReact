import * as s from "./ButtonStyles";

export const Button = ({ children, radius = "32",secondary,disable = false }) => {
  return (
    <s.Button whileTap={{ scale: 0.95 }} radius={radius} secondary ={secondary} disable = {disable} >
      {children}
    </s.Button>
  );
};
