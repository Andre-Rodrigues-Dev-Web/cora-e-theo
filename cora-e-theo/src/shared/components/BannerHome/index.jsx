import { ContainerBanner, TextContainer } from "./style";
import { Container, Col, Row } from "../Grids/style";
import { Link } from "react-router-dom";
import PlayerAudio from "../PlayerAudio";
const BannerHome = () => {
  return (
    <ContainerBanner>
      <Container padding="10em 4em">
        <Row>
          <Col width="50%">
            <TextContainer>
              <h1>Cora & Theo</h1>
              <h2>
                Seja bem-vindo(a) ao site da dupla Cora e Theo, irmãos
                talentosos que estão encantando o Brasil com suas vozes
                extraordinárias.
              </h2>
              <h3>Ouça agora alguns de nossos sucessos</h3>
              <PlayerAudio/>
              <Link to="/">Confira outros lançamentos</Link>
            </TextContainer>
          </Col>
        </Row>
      </Container>
    </ContainerBanner>
  );
};

export default BannerHome;
