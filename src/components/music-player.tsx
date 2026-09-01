import {
  Music,
  Pause,
} from "lucide-react";

import { useBirthdayStore } from "./store/birthday-store";

import { cn } from "@/utils/cn";

const MusicPlayer = () => {
  const isMusicPlaying =
    useBirthdayStore(
      (state) =>
        state.isMusicPlaying,
    );

  const toggleMusic =
    useBirthdayStore(
      (state) =>
        state.toggleMusic,
    );

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={
        isMusicPlaying
          ? "Pause music"
          : "Play music"
      }
      className={cn(
        "group",
        "fixed bottom-5 right-5",
        "z-50",
        "flex size-14",
        "items-center justify-center",
        "rounded-full",

        "border",
        "border-primary-300/50",

        "bg-gradient-to-br",
        "from-primary-500",
        "via-primary-600",
        "to-cyan-500",

        "text-white",

        "shadow-xl",
        "shadow-primary-600/30",

        "transition-all",
        "duration-500",

        "hover:-translate-y-1",
        "hover:scale-110",
        "hover:shadow-2xl",
        "hover:shadow-primary-500/45",

        "active:scale-95",

        isMusicPlaying &&
          "birthday-glow scale-105",
      )}
    >
      {/* --------------------------------------------- */}
      {/* OUTER PULSING RING */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute inset-0",
          "rounded-full",
          "border",
          "border-primary-400/40",

          isMusicPlaying
            ? "animate-ping"
            : "opacity-0",
        )}
      />

      {/* --------------------------------------------- */}
      {/* SECOND GLOWING RING */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -inset-2",
          "rounded-full",
          "border",
          "border-cyan-300/20",

          "transition-all",
          "duration-500",

          isMusicPlaying
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0",
        )}
      />

      {/* --------------------------------------------- */}
      {/* BLUE GLOW */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -inset-4",
          "-z-10",
          "rounded-full",

          "bg-primary-500/20",

          "blur-xl",

          "transition-opacity",
          "duration-500",

          isMusicPlaying
            ? "opacity-100"
            : "opacity-40",
        )}
      />

      {/* --------------------------------------------- */}
      {/* GLASS HIGHLIGHT */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute",
          "left-2 top-1.5",
          "h-4 w-6",
          "rotate-[-25deg]",
          "rounded-full",
          "bg-white/25",
          "blur-[2px]",
        )}
      />

      {/* --------------------------------------------- */}
      {/* FLOATING MUSIC NOTES */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "pointer-events-none",
          "absolute",
          "-left-3 -top-4",
          "text-sm",

          "transition-all",
          "duration-300",

          isMusicPlaying
            ? "opacity-80"
            : "scale-75 opacity-0",
        )}
      >
        ♪
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "pointer-events-none",
          "absolute",
          "-right-3 -top-2",
          "text-xs",

          "transition-all",
          "duration-300",

          isMusicPlaying
            ? "opacity-70"
            : "scale-75 opacity-0",
        )}
        style={{
          animationDelay:
            "0.8s",
        }}
      >
        ♫
      </span>

      {/* --------------------------------------------- */}
      {/* ICON */}
      {/* --------------------------------------------- */}

      <span
        className={cn(
          "relative z-10",
          "flex items-center",
          "justify-center",

          "transition-all",
          "duration-300",

          isMusicPlaying &&
            "scale-110",
        )}
      >
        {isMusicPlaying ? (
          <Pause
            className={cn(
              "size-5",
              "drop-shadow-sm",
            )}
            strokeWidth={2.5}
          />
        ) : (
          <Music
            className={cn(
              "size-5",
              "drop-shadow-sm",

              "transition-transform",
              "duration-500",

              "group-hover:-rotate-12",
            )}
            strokeWidth={2.5}
          />
        )}
      </span>

      {/* --------------------------------------------- */}
      {/* PLAYING INDICATOR */}
      {/* --------------------------------------------- */}

      <span
        aria-hidden="true"
        className={cn(
          "absolute",
          "bottom-1 right-1",

          "size-2",

          "rounded-full",

          "border",
          "border-white/70",

          "bg-cyan-300",

          "shadow-[0_0_10px_rgba(103,232,249,0.9)]",

          "transition-all",
          "duration-300",

          isMusicPlaying
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0",
        )}
      />
    </button>
  );
};

export default MusicPlayer;