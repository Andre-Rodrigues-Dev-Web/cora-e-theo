import styled from "styled-components";
import imgAbout from "../../shared/assets/imgs/a-dupla.png";

const ContentHome = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dupla {
    display: block;
    img{
      object-fit: cover;
      width: 100%;
    }
  }

  .links-about {
    display: flex;
    gap: 1.5em;
    margin-top: 1.5em;

    a {
      background-color: #ff8c00;
      border-radius: 0.5em;
      color: #fff;
      cursor: pointer;
      font-size: 1em;
      font-weight: bold;
      padding: 0.8em 1.5em;
      text-decoration: none;
      transition: all 0.4s ease;

      &:hover {
        background-color: #fff;
        color: #ff8c00;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
  }

  @media (min-width: 768px) {
    background-image: url(${imgAbout});
    background-position-x: 480px;
    background-position-y: 5em;
    background-repeat: no-repeat;
    background-size: 36%;
    min-height: 100svh;
    padding-bottom: 2em;
    padding-left: 5em;
    padding-right: 2em;
    padding-top: 5em;
    .links-about a {
      font-size: 1.1em;
      padding: 0.9em 2.5em;
    }
    h2 {
      font-size: 2.5em;
      margin-bottom: 0.6em;
    }
    p {
      font-size: 1.2em;
    }
    .dupla {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    background-position-x: 700px;
    padding-bottom: 4em;
    padding-left: 5em;
    padding-right: 4em;
    padding-top: 4em;
    .links-about {
      margin-top: 2em;
      a {
        font-size: 0.97em;
        padding: 1em 3em;
      }
    }
    h2 {
      font-size: 4em;
      margin-bottom: 0.3em;
    }
    p {
      font-size: 1.6em;
      width: 90%;
    }
  }

  @media (min-width: 1400px) {
    background-position-x: 60em;
    padding-bottom: 4em;
    padding-left: 5em;
    padding-right: 4em;
    padding-top: 4em;
    .links-about {
      margin-top: 2em;
      a {
        font-size: 1.3em;
        padding: 1em 3em;
      }
    }
    h2 {
      font-size: 3.5em;
      margin-bottom: 0.3em;
    }
    p {
      font-size: 1.6em;
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    background-position: center;
    background-size: contain;
    .links-about {
      flex-direction: column;
      align-items: center;
    }
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export { ContentHome, SectionAbout };
