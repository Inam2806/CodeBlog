// music.jsx

import React, { useState, useRef,useEffect } from 'react';
import './styles/Music.scss';
import t from './images/DJ Snake.jpg';
import a from './Music/DJ Snake - Let Me Love You ft. Justin Bieber (Official Video) ( 160kbps ).mp3';
import b from './Music/DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video).mp3';

const Music = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef(null);

 const music = [
    {
      musicUrl: a,
      image: t,
      title: 'Song 1',
    },
    {
      musicUrl: b,
      image: t,
      title: 'Song 2',
    },
    // Add more music objects as needed
  ];



  const handleDownload = (musicUrl) => {
    // Add download functionality here
    console.log(`Downloading ${musicUrl}`);
  };

  const filteredMusic = music.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % music.length);
  };

  const prevSongHandler = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + music.length) % music.length
    );
  };

  const volumeChangeHandler = (e) => {
    const value = e.target.value;
    setVolume(value);
    audioRef.current.volume = value;
  };

  // Pause the audio when the search term changes
  useEffect(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, [searchTerm]);

  return (
    <div className="Music">
      <input
        type="text"
        placeholder="Search for music"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredMusic.map((song, index) => (
          <div key={index}>
            <img src={song.image} alt={song.title} />
            <p>{song.title}</p>
            <audio ref={audioRef} src={song.musicUrl}></audio>
            <div className="controls">
              <button onClick={prevSongHandler}>Prev</button>
              <button onClick={playPauseHandler}>
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button onClick={nextSongHandler}>Next</button>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={volumeChangeHandler}
            />
            <a href="#" onClick={() => handleDownload(song.musicUrl)}>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
