import React from 'react';
import { ContactContainer, Title, Description, ContactButton, Icon } from './style';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const whatsappMessage = "Olá, gostaria de falar sobre o desejo de contrato do show de Cora e Theo para o empresário Ricardo Victor.";
  const emailMessage = "mailto:email@gmail.com?subject=Desejo de contrato para show&body=Olá, gostaria de falar sobre o desejo de contrato do show de Cora e Theo para o empresário Ricardo Victor.";

  return (
    <ContactContainer>
      <Title>Entre em Contato</Title>
      <Description>
        Entre em contato conosco para informações sobre o show de Cora e Theo. Utilize um dos métodos abaixo para falar diretamente com o empresário Ricardo Victor.
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
