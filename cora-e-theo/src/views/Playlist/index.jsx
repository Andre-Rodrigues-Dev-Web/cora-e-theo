import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
  FaRedo,
} from "react-icons/fa";
import {
  MusicPlayerContainer,
  Controls,
  ControlButton,
  TrackInfo,
  ProgressBar,
  BottomBar,
  VolumeControl,
  TrackList,
  TrackCard,
  CardButton,
  AlbumArt,
  TimeDisplay,
  TextContainer,
} from "./style";

import { tracks } from "./mock";
import { Col, Container, Row } from "../../shared/components/Grids/style";
import Seo from "../../shared/components/Seo";

const Playlist = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack(
      (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
    );
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const decreaseVolume = () => {
    setVolume((prevVolume) => Math.max(prevVolume - 0.1, 0));
    audioRef.current.volume = Math.max(volume - 0.1, 0);
  };

  const increaseVolume = () => {
    setVolume((prevVolume) => Math.min(prevVolume + 0.1, 1));
    audioRef.current.volume = Math.min(volume + 0.1, 1);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const toggleRepeat = () => {
    setIsRepeating(!isRepeating);
    audioRef.current.loop = !isRepeating;
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
    playMusic();
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00"; // Retorna 00:00 se o tempo for NaN
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audioElement = audioRef.current; // Salva o valor atual de audioRef.current

    const handleProgress = () => {
      const currentTime = audioElement.currentTime;
      const progressPercent = (currentTime / audioElement.duration) * 100;
      setProgress(progressPercent);
      setCurrentTime(currentTime);
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener("timeupdate", handleProgress);

    return () => {
      audioElement.removeEventListener("timeupdate", handleProgress); // Remove o listener corretamente
    };
  }, []);

  useEffect(() => {
    audioRef.current.load();
    if (isPlaying) {
      playMusic();
    }
  }, [currentTrack, isPlaying]); // Agora incluímos `isPlaying` como dependência

  return (
    <MusicPlayerContainer>
      <Seo
        titleSite="Ouça agora a playlist de Cora & Theo"
        descriptionSite="Confira diversas músicas com as vozes de Cora e Theo, músicas de composições próprias e regravações de sucessos."
        imageSite="https://coraetheo.com.br/logo512.png"
        urlSite="https://coraetheo.com.br/playlist"
      />
      <Container padding="7em 3em 2em 3em">
        <Row>
          <Col width="80%">
            <TextContainer>
              <h2>Playlist Cora & Theo</h2>
              <p>
                Bem-vindo à nossa playlist aleatória, onde você pode curtir os
                maiores sucessos de Cora e Theo de uma maneira super
                descontraída! Aqui, cada vez que você der play, uma nova
                surpresa musical aparece no seu caminho!
              </p>
              <p>
                Com um repertório que mistura hits contagiantes, baladas
                emocionantes, modas sertanejas e músicas inéditas, a playlist de
                Cora e Theo foi criada especialmente para quem gosta de viver a
                experiência completa da nossa música. Quer dançar, cantar junto
                ou apenas relaxar? Esta é a playlist perfeita para você! Aumente
                o som e curta nossos sucessos.
              </p>
            </TextContainer>
          </Col>
          <Col width="40%">
            <div className="content-audio">
              <TrackInfo>
                <AlbumArt src={tracks[currentTrack].albumArt} alt="Album Art" />
                <div>
                  <h3>{tracks[currentTrack].title}</h3>
                  <p>{tracks[currentTrack].artist}</p>
                </div>
              </TrackInfo>

              <ProgressBar progress={progress} />
              <TimeDisplay>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </TimeDisplay>

              <Controls>
                <ControlButton onClick={prevTrack} aria-label="Previous Track">
                  <FaBackward size={28} />
                </ControlButton>
                {isPlaying ? (
                  <ControlButton onClick={pauseMusic} aria-label="Pause">
                    <FaPause size={28} />
                  </ControlButton>
                ) : (
                  <ControlButton onClick={playMusic} aria-label="Play">
                    <FaPlay size={28} />
                  </ControlButton>
                )}
                <ControlButton onClick={nextTrack} aria-label="Next Track">
                  <FaForward size={28} />
                </ControlButton>
              </Controls>

              <TrackList>
                {tracks.map((track, index) => (
                  <TrackCard key={index} isActive={index === currentTrack}>
                    <AlbumArt src={track.albumArt} alt="Album Art" small />
                    <div>
                      <h4>{track.title}</h4>
                      <p>{track.artist}</p>
                    </div>
                    <CardButton
                      onClick={() => selectTrack(index)}
                      aria-label="Play Track"
                    >
                      {index === currentTrack && isPlaying ? (
                        <FaPause size={28} />
                      ) : (
                        <FaPlay size={28} />
                      )}
                    </CardButton>
                  </TrackCard>
                ))}
              </TrackList>

              <BottomBar>
                <VolumeControl>
                  <ControlButton
                    onClick={decreaseVolume}
                    aria-label="Decrease Volume"
                  >
                    <FaVolumeDown size={28} />
                  </ControlButton>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{
                      background: "linear-gradient(90deg, orange, red)",
                    }}
                    aria-label="Volume Control"
                  />
                  <ControlButton
                    onClick={increaseVolume}
                    aria-label="Increase Volume"
                  >
                    <FaVolumeUp size={28} />
                  </ControlButton>
                </VolumeControl>

                <ControlButton onClick={toggleMute} aria-label="Mute/Unmute">
                  {isMuted ? (
                    <FaVolumeMute size={28} />
                  ) : (
                    <FaVolumeUp size={28} />
                  )}
                </ControlButton>

                <ControlButton
                  onClick={toggleRepeat}
                  aria-label="Toggle Repeat"
                  style={{ color: isRepeating ? "rgb(255, 140, 0)" : "#fff" }}
                >
                  <FaRedo size={28} />
                </ControlButton>
              </BottomBar>

              <audio ref={audioRef}>
                <source src={tracks[currentTrack].url} type="audio/mpeg" />
              </audio>
            </div>
          </Col>
        </Row>
      </Container>
    </MusicPlayerContainer>
  );
};

export default Playlist;
