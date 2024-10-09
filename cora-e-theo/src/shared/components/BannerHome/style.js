import styled from "styled-components";
import backgroundBanner from "../../assets/imgs/banner-home.png";

const ContainerBanner = styled.section`
  background-color: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media(max-width: 768px){
    background-position-y: 4em;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  @media(min-width: 768px){
    background-image: url(${backgroundBanner});
    background-size: cover;
    background-position: center;
  }
`;

const TextContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    background-color: #8d4641;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-color: #337bc4;
    border-width: 1px;
    border-bottom-right-radius: 5px;
    box-shadow: 3px 4px 0px 0px #c35952;
    color: #fff;
    cursor: pointer;
    font-size: 19px;
    font-family: Arial;
    font-weight: bold;
    margin-top: 20px;
    padding: 20px 20px;
    text-shadow: 0px 1px 0px #528ecc;
    width: 300px;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 1.6em;
  }
  @media (min-width: 768px) {
    a {
      font-size: 1.5em;
      width: 380px;
    }
    h1 {
      font-size: 5rem;
    }
    h2 {
        font-size: 25px;
    }
    h3{
        font-size: 30px;
    }
  }
`;

export { ContainerBanner, TextContainer };
