import React from 'react';
import BannerHome from "../../shared/components/BannerHome";
import { ContentHome, SectionAbout } from "./style";
import Seo from "../../shared/components/Seo";
import { Col, Container, Row } from "../../shared/components/Grids/style";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import imagemDupla from '../../shared/assets/imgs/a-dupla.png'; 

const Home = () => {
  return (
    <ContentHome>
      <Seo
        titleSite="Seja bem-vindo ao site Cora & Theo"
        descriptionSite="Bem vindo ao nosso site! Confira nossa história, agenda de shows, músicas e muito mais."
        imageSite="https://coraetheo.com.br/logo512.png"
        urlSite="https://coraetheo.com.br"
      />
      <BannerHome />
      <SectionAbout>
        <Container>
          <Row>
            <Col width="60%">
              <h2>Olá, somos Cora & Theo</h2>
              <p>
                Somos uma dupla de irmãos apaixonados pela música, com o canto
                correndo em nossas veias desde a infância. Herdamos essa paixão
                de nossos pais, que sempre nos inspiraram com seu amor pela arte
                musical. Cantar, para nós, vai além de um simples hobby – é uma
                forma de expressar emoções, contar histórias e nos conectar com
                as pessoas. Cada nota que entoamos carrega um pedaço da nossa
                história familiar, e nos dedicamos a transmitir essa herança
                musical com todo o coração.
              </p>
              <ul className="links-about">
                <Link to='/sobre-nos'>Confira nossa história</Link>
                <Link to='/contato'>Contrate-nos para seu evento</Link>
              </ul>
            </Col>
            <Col width="50%">
              <figure className="dupla">
                <LazyLoadImage 
                  src={imagemDupla} 
                  alt="Cora e Theo" 
                  width="100%"
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </SectionAbout>
    </ContentHome>
  );
};

export default Home;
