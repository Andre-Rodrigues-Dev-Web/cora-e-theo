import React from "react";
import { Title, Paragraph, Image, WhatsappButton } from "./style";
import { Container, Col, Row } from "../../shared/components/Grids/style";
//icons
import { FaWhatsapp } from "react-icons/fa";
// Imagens
import irmaosCoraeTheo from "../../shared/assets/imgs/irmaos.jpg";
import { SubTitle } from "./style";

const SobreNos = () => {
  return (
    <Container padding="4em">
      <Row>
        <Col width="50%">
          <Title>Conheça Cora e Theo</Title>
          <Paragraph>
            Olá! Nós somos Cora e Theo, dois irmãos apaixonados pela música e
            pela vida. Nascemos em Bambuí, mas em 2024 nos mudamos para
            Divinópolis. A música é a nossa maior paixão e adoramos cantar
            juntos! Cora, com seus 13 anos, traz a energia e a criatividade,
            enquanto Theo, com apenas 9 anos, encanta a todos com seu talento.
          </Paragraph>
          <SubTitle>Sobre os nossos shows</SubTitle>
          <Paragraph>
            Nosso show é uma experiência inovadora, repleta de energia positiva
            que encanta públicos de todas as idades. Com um repertório
            cuidadosamente selecionado, que agrada tanto crianças quanto
            adultos, proporcionamos momentos inesquecíveis e cheios de emoção.
            Cada apresentação é pensada para envolver, inspirar e fazer com que
            todos possam viver uma grande experiência musical.
          </Paragraph>
          <WhatsappButton
            href="https://wa.me/5531999999999?text=Ol%C3%A1%20Ricardo%2C%20tudo%20bem%3F%20Gostaria%20de%20contratar%20o%20show%20de%20Cora%20e%20Theo%20para%20meu%20evento.%20Poderia%20me%20passar%20o%20valor%3F"
            target="_blank"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={24} />
            Contrate nosso show para abrilhantar seu evento
          </WhatsappButton>
        </Col>
        <Col width="50%">
          <Image src={irmaosCoraeTheo} alt="Cora e Theo" />
        </Col>
      </Row>
    </Container>
  );
};

export default SobreNos;
