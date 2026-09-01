import MusicPlayer from "@/components/music-player";
import Navbar from "@/components/navbar";

import AwardsSection from "@/sections/awards-section";
import HeroSection from "@/sections/hero-section";
import LetterSection from "@/sections/letter-section";
import MemoriesSection from "@/sections/memories-section";
import PatchNotesSection from "@/sections/patch-notes-section";
import ReasonsSection from "@/sections/reasons-section";
import StatsSection from "@/sections/stats-section";
import SurpriseSection from "@/sections/surprise-section";
import TimelineSection from "@/sections/timeline-section";

import { useAudio } from "@/hooks/use-audio";

const App = () => {
  useAudio();

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-background
        text-foreground

        [&>section]:relative
        [&>section]:z-10
      "
    >
      {/* ------------------------------------------------ */}
      {/* GLOBAL BIRTHDAY BACKGROUND DECORATION */}
      {/* ------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        {/* Top left blue glow */}

        <div
          className="
            birthday-pulse
            absolute
            -left-32
            -top-32
            size-[30rem]
            rounded-full
            bg-primary-400/15
            blur-3xl
          "
        />

        {/* Top right cyan glow */}

        <div
          className="
            birthday-float-large
            absolute
            -right-40
            top-[12%]
            size-[28rem]
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        {/* Middle blue glow */}

        <div
          className="
            birthday-pulse
            absolute
            left-[35%]
            top-[38%]
            size-[24rem]
            rounded-full
            bg-primary-600/8
            blur-3xl
          "
        />

        {/* Purple accent */}

        <div
          className="
            birthday-float
            absolute
            -left-40
            top-[62%]
            size-[26rem]
            rounded-full
            bg-violet-400/8
            blur-3xl
          "
        />

        {/* Bottom blue glow */}

        <div
          className="
            birthday-pulse
            absolute
            -right-32
            bottom-[-8rem]
            size-[32rem]
            rounded-full
            bg-primary-500/12
            blur-3xl
          "
        />

        {/* -------------------------------------------- */}
        {/* FLOATING PARTY DECORATIONS */}
        {/* -------------------------------------------- */}

        <span
          className="
            birthday-float
            absolute
            left-[6%]
            top-[18%]
            text-2xl
            opacity-40
            sm:text-3xl
          "
        >
          ✨
        </span>

        <span
          className="
            birthday-sway
            absolute
            right-[7%]
            top-[28%]
            text-3xl
            opacity-35
            sm:text-4xl
          "
        >
          🎈
        </span>

        <span
          className="
            birthday-float
            absolute
            left-[4%]
            top-[48%]
            text-2xl
            opacity-30
          "
          style={{
            animationDelay: "1s",
          }}
        >
          💙
        </span>

        <span
          className="
            birthday-sway
            absolute
            right-[5%]
            top-[58%]
            text-3xl
            opacity-30
          "
          style={{
            animationDelay: "1.4s",
          }}
        >
          🎉
        </span>

        <span
          className="
            birthday-float
            absolute
            left-[8%]
            top-[78%]
            text-2xl
            opacity-30
          "
          style={{
            animationDelay: "2s",
          }}
        >
          ⭐
        </span>

        <span
          className="
            birthday-sway
            absolute
            right-[9%]
            top-[86%]
            text-3xl
            opacity-25
          "
          style={{
            animationDelay: "0.7s",
          }}
        >
          🎊
        </span>

        {/* -------------------------------------------- */}
        {/* SMALL DECORATIVE BLUE DOTS */}
        {/* -------------------------------------------- */}

        <span
          className="
            birthday-pulse
            absolute
            left-[15%]
            top-[32%]
            size-2
            rounded-full
            bg-primary-400
            opacity-40
          "
        />

        <span
          className="
            birthday-pulse
            absolute
            right-[18%]
            top-[44%]
            size-3
            rounded-full
            bg-cyan-400
            opacity-30
          "
          style={{
            animationDelay: "0.8s",
          }}
        />

        <span
          className="
            birthday-pulse
            absolute
            left-[20%]
            top-[66%]
            size-2
            rounded-full
            bg-violet-400
            opacity-30
          "
          style={{
            animationDelay: "1.5s",
          }}
        />

        <span
          className="
            birthday-pulse
            absolute
            right-[22%]
            top-[76%]
            size-2
            rounded-full
            bg-primary-500
            opacity-35
          "
          style={{
            animationDelay: "2s",
          }}
        />
      </div>

      {/* ------------------------------------------------ */}
      {/* EXISTING WEBSITE */}
      {/* ------------------------------------------------ */}

      <Navbar />

      <MusicPlayer />

      <HeroSection />

      <StatsSection />

      <PatchNotesSection />

      <ReasonsSection />

      <MemoriesSection />

      <AwardsSection />

      <TimelineSection />

      <LetterSection />

      <SurpriseSection />

      {/* ------------------------------------------------ */}
      {/* FOOTER */}
      {/* ------------------------------------------------ */}

      <footer
  className="
    relative
    z-10
    overflow-hidden
    border-t
    border-primary-200/60
    bg-gradient-to-b
    from-primary-50/30
    to-primary-100/60
    px-5
    py-10
    text-center
    backdrop-blur-sm
  "
>
  <div
    aria-hidden="true"
    className="
      absolute
      left-1/2
      top-full
      size-72
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-primary-400/15
      blur-3xl
    "
  />

  <div className="relative">
    <div
      className="
        birthday-heartbeat
        mx-auto
        mb-3
        flex
        size-10
        items-center
        justify-center
        rounded-full
        bg-primary-100
        text-xl
        shadow-lg
        shadow-primary-500/10
      "
    >
      💙
    </div>

    <p
      className="
        font-brand-primary
        text-sm
        font-semibold
        text-foreground/60
      "
    >
      Made with{" "}
      <span className="text-primary-600">
        lots of love
      </span>{" "}
      for a very special birthday.
    </p>

    <div
      className="
        mx-auto
        my-5
        h-px
        max-w-xs
        bg-gradient-to-r
        from-transparent
        via-primary-300
        to-transparent
      "
    />

    <p className="text-xs text-foreground/45 sm:text-sm">
      © 2026 Birthday Celebration. All Rights Reserved.
    </p>

    <p className="mt-2 text-xs font-medium text-foreground/50 sm:text-sm">
      Developed with 💙 by{" "}
      <span
        className="
          font-bold
          text-primary-600
        "
      >
        Your Princess
      </span>
    </p>

    <p
      className="
        mt-3
        text-[10px]
        uppercase
        tracking-[0.2em]
        text-foreground/30
      "
    >
      Level 27 • September 2, 2026 ✨
    </p>
  </div>
</footer>
    </main>
  );
};

export default App;