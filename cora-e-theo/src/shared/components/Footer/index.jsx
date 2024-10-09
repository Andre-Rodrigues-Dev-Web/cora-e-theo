import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  SocialIconsContainer,
  SocialIcon,
  DeveloperInfo
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container mx-auto text-center"> {/* Adicionando text-center para centralizar o texto */}
        <p>&copy; 2023 My Website. Todos os direitos reservados.</p>
        <FooterLinksContainer>
          <FooterLink to="/sobre" aria-label="Página Sobre">Sobre</FooterLink>
          <FooterLink to="/contato" aria-label="Página de Contato">Contato</FooterLink>
        </FooterLinksContainer>
        <SocialIconsContainer aria-label="Links de redes sociais"> {/* Adicionando aria-label para descrever o grupo de ícones */}
          <FooterLink to="/facebook" aria-label="Facebook">
            <SocialIcon>
              <FaFacebook />
            </SocialIcon>
          </FooterLink>
          <FooterLink to="/youtube" aria-label="Youtube">
            <SocialIcon>
              <FaYoutube />
            </SocialIcon>
          </FooterLink>
          <FooterLink to="/instagram" aria-label="Instagram">
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
          </FooterLink>
        </SocialIconsContainer>
        <DeveloperInfo>
          Desenvolvido por: 
          <FooterLink to="https://velance.com.br" target="_blank" rel="noopener noreferrer" aria-label="Portfólio de Velance">
            Velance
          </FooterLink>
        </DeveloperInfo>
      </div>
    </FooterContainer>
  );
};

export default Footer;
