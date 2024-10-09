import styled from 'styled-components';
import fundoContato from '../../shared/assets/imgs/contato.png';

// Container principal
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  background-image: url(${fundoContato});
  background-size: 78%;
  background-position: center;
  background-repeat: no-repeat;
  color: #333;
`;

// Título da seção
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Descrição textual
export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

// Botão de contato
export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 14px 28px;
  margin: 10px 0;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 1.1rem;
  }
`;

// Ícone dentro do botão
export const Icon = styled.span`
  margin-right: 12px;
  font-size: 1.8rem;
`;
