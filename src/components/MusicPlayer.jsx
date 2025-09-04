import React, { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

const songs = [
  {
    id: 1,
    title: "Calm Vibes",
    artist: "Jobayer",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    title: "Energy Boost",
    artist: "Jane Smith",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    title: "Chill Nights",
    artist: "Mike Johnson",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 4,
    title: "Morning Energy",
    artist: "Alice Brown",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://picsum.photos/200/200?random=4",
  },
  {
    id: 5,
    title: "Focus Mode",
    artist: "Chris Green",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://picsum.photos/200/200?random=5",
  },
  {
    id: 6,
    title: "Party Time",
    artist: "Emma Wilson",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    cover: "https://picsum.photos/200/200?random=6",
  },
];

export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  return (
    <div className="flex h-screen bg-green-900 text-white">
      <aside className="w-65 bg-black p-6 flex flex-col">
        <h1 className="text-2xl text-white font-bold mb-8">
          🎵 Goriber Player
        </h1>
        <nav className="space-y-4 text-white">
          <a href="#" className="block hover:text-green-400">
            Home
          </a>
          <a href="#" className="block hover:text-green-400">
            Search
          </a>
          <a href="#" className="block hover:text-green-400">
            Library
          </a>
          <a href="#" className="block hover:text-green-400">
            Playlists
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Recommended Songs
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {songs.map((song, index) => (
            <div
              key={song.id}
              onClick={() => setCurrentIndex(index)}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
            >
              <img
                src={song.cover}
                alt={song.title}
                className="rounded-lg mb-3 "
              />
              <h3 className="font-semibold">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-black p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={songs[currentIndex].cover}
            alt={songs[currentIndex].title}
            className="w-14 h-14 rounded-md"
          />
          <div>
            <h3 className="font-semibold">{songs[currentIndex].title}</h3>
            <p className="text-sm text-gray-400">
              {songs[currentIndex].artist}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={prevSong}>
            <SkipBack size={24} />
          </button>
          <button
            onClick={togglePlay}
            className="bg-green-500 p-3 rounded-full hover:bg-green-600"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button onClick={nextSong}>
            <SkipForward size={24} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="w-24"
            onChange={(e) => (audioRef.current.volume = e.target.value)}
          />
        </div>

        <audio
          ref={audioRef}
          src={songs[currentIndex].url}
          onEnded={nextSong}
        />
      </footer>
    </div>
  );
}
