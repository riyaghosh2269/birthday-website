import {
  useEffect,
  useRef,
} from "react";

import { useBirthdayStore } from "../components/store/birthday-store";

export const useAudio = () => {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null,
    );

  const isMusicPlaying =
    useBirthdayStore(
      (state) =>
        state.isMusicPlaying,
    );

  const setMusicPlaying =
    useBirthdayStore(
      (state) =>
        state.setMusicPlaying,
    );

  useEffect(() => {
    const audio = new Audio(
      "/music/Dudi-Dudi-Dam-Dam-Baby-Voice.mp3",
    );

    audio.loop = true;
    audio.volume = 0.7;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMusicPlaying) {
      audio
        .play()
        .catch(() => {
          setMusicPlaying(false);
        });
    } else {
      audio.pause();
    }
  }, [
    isMusicPlaying,
    setMusicPlaying,
  ]);
};