import styled from "styled-components";

export const MusicPlayerContainer = styled.section`
  @media (min-width: 768px) {
    .content-audio {
      background-color: #282828;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4rem 20px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(255, 140, 0);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  p {
    color: #b3b3b3;
    font-size: 0.9rem;
  }
`;

export const ProgressBar = styled.div`
  height: 10px;
  background: linear-gradient(90deg, orange, red);
  margin: 20px 0;
  width: 100%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    height: 10px;
    background-color: #fff;
    width: ${({ progress }) => progress}%;
    left: 0;
    top: 0;
    transition: width 0.1s ease;
  }
`;

export const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  color: #b3b3b3;
  font-size: 0.9rem;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(255, 140, 0);
    }
  }

  input {
    width: 100px;
    background: linear-gradient(90deg, orange, red);
    border-radius: 5px;
    height: 5px;
    appearance: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const TrackCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? "rgb(255, 140, 0)" : "#404040"};
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  h4,
  p {
    margin: 0;
    color: ${({ isActive }) => (isActive ? "#fff" : "#b3b3b3")};
  }

  &:hover {
    background-color: #333;
  }
`;

export const CardButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(255, 140, 0);
  }
`;

export const AlbumArt = styled.img`
  border-radius: 5px;
  height: ${({ small }) => (small ? "50px" : "auto")};
  margin-right: 15px;
  width: ${({ small }) => (small ? "50px" : "60%")};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2{
    font-size: 1.5rem;
  }
  p{
    color: #333;
    font-size: 0.9rem;
  }
  @media(min-width: 768px){
    width: 90%;
    h2{
      font-size: 2rem;
    }
    p{
      font-size: 26px;
    }
  }
`;
