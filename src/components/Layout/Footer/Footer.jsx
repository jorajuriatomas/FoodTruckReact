import * as s from "./FooterStyle.js";

const footerLinks = [
  {
    id: 1,
    title: "Sobre Nosotros",
    path: "#",
  },
  {
    id: 2,
    title: "Tabaja con Nosotros",
    path: "#",
  },
  {
    id: 3,
    title: "Ayuda",
    path: "#",
  },
];

export const Footer = () => {
  return (
    <s.FooterContainer>
      <s.LinksContainer>
        {footerLinks.map((link)=>(
          <a key={link.id} href={link.path}>{link.title}</a>
        ))}
      </s.LinksContainer>
    </s.FooterContainer>
  );
};
