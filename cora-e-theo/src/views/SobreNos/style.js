import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const SubTitle = styled.h2`
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  color: #34495e;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1em;
    line-height: 1.5;
  }
`;

export const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  margin-left: 40px;
  margin-top: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 70%;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const WhatsappButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #25d366;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #1ebe57;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 15px;
  }
`;