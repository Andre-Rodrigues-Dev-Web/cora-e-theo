import React from 'react';
import Seo from "../../shared/components/Seo";
import { ContactContainer, Title, Description, ContactButton, Icon } from './style';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const whatsappMessage = "Olá, gostaria de falar sobre o desejo de contrato do show de Cora e Theo para o empresário Ricardo Victor.";
  const emailMessage = "mailto:email@gmail.com?subject=Desejo de contrato para show&body=Olá, gostaria de falar sobre o desejo de contrato do show de Cora e Theo para o empresário Ricardo Victor.";

  return (
    <ContactContainer>
      <Seo
        titleSite="Entre em contato para contratar o show de Cora e Theo"
        descriptionSite=" Entre em contato conosco para informações sobre o show de Cora e Theo. Utilize um dos métodos abaixo para falar diretamente com o pai e empresário Ricardo Victor."
        imageSite="https://coraetheo.com.br/logo512.png"
        urlSite="https://coraetheo.com.br/contato"
      />
      <Title>Entre em Contato</Title>
      <Description>
        Entre em contato conosco para informações sobre o show de Cora e Theo. Utilize um dos métodos abaixo para falar diretamente com o pai e empresário Ricardo Victor.
      </Description>
      <ContactButton
        href={`https://wa.me/5531999999999?text=${encodeURIComponent(whatsappMessage)}`}
        bgColor="#25D366"
      >
        <Icon><FaWhatsapp /></Icon>
        Fale via WhatsApp
      </ContactButton>
      <ContactButton
        href={emailMessage}
        bgColor="#D44638"
      >
        <Icon><FaEnvelope /></Icon>
        Envie um Email
      </ContactButton>
    </ContactContainer>
  );
};

export default Contact;
