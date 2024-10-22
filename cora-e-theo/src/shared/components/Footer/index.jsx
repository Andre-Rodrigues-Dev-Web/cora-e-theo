import React from "react";
import { FaFacebook, FaInstagram, FaSoundcloud, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  SocialIconsContainer,
  SocialIcon,
  DeveloperInfo
} from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Cora & Theo. Todos os direitos reservados.</p>
        <SocialIconsContainer aria-label="Links de redes sociais"> 
          <FooterLink href="https://www.instagram.com/coraetheo/" target="_blank" aria-label="Facebook">
            <SocialIcon>
              <FaFacebook />
            </SocialIcon>
          </FooterLink>
          <FooterLink href="https://soundcloud.com/cora-e-theo-victor?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" aria-label="Youtube">
            <SocialIcon>
              <FaSoundcloud />
            </SocialIcon>
          </FooterLink>
          <FooterLink href="https://www.instagram.com/coraetheo/" target="_blank" aria-label="Instagram">
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
