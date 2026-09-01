import confetti from "canvas-confetti";

import {
  Gift,
  Heart,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import SurpriseButton from "@/components/surprise-button";

import { useBirthdayStore } from "@/components/store/birthday-store";

import { cn } from "@/utils/cn";

const SurpriseSection = () => {
  const isSurpriseOpen =
    useBirthdayStore(
      (state) =>
        state.isSurpriseOpen,
    );

  const openSurprise =
    useBirthdayStore(
      (state) =>
        state.openSurprise,
    );

  const setMusicPlaying =
    useBirthdayStore(
      (state) =>
        state.setMusicPlaying,
    );

  const handleSurprise = () => {
    openSurprise();

    setMusicPlaying(true);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: {
        y: 0.65,
      },
    });

    window.setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 150,
        origin: {
          x: 0.2,
          y: 0.6,
        },
      });
    }, 400);

    window.setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 150,
        origin: {
          x: 0.8,
          y: 0.6,
        },
      });
    }, 700);
  };

  return (
    <section
      id="surprise"
      className={cn(
        "relative",
        "flex min-h-screen",
        "items-center",
        "overflow-hidden",
        "px-5 py-28",
        "sm:px-8",
        "lg:px-12",
      )}
    >
      {/* Background glow */}

      <div
        className={cn(
          "absolute",
          "left-1/2 top-1/2",
          "size-[32rem]",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "rounded-full",
          "bg-primary/10",
          "blur-3xl",
        )}
      />

      <div className="relative mx-auto w-full max-w-4xl text-center">
        {!isSurpriseOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div
              className={cn(
                "mx-auto mb-6",
                "flex size-20",
                "items-center",
                "justify-center",
                "rounded-3xl",
                "bg-primary/10",
                "text-primary",
              )}
            >
              <Gift className="size-9" />
            </div>

            <p
              className={cn(
                "mb-4",
                "text-xs",
                "font-bold uppercase",
                "tracking-[0.35em]",
                "text-primary",
                "sm:text-sm",
              )}
            >
              One last thing
            </p>

            <h2
              className={cn(
                "font-brand-primary",
                "text-4xl",
                "font-black",
                "leading-tight",
                "tracking-tight",
                "text-foreground",
                "sm:text-6xl",
                "lg:text-7xl",
              )}
            >
              Ready for your
              surprise?
            </h2>

            <p
              className={cn(
                "mx-auto mt-6",
                "max-w-xl",
                "text-base",
                "leading-8",
                "text-foreground/60",
                "sm:text-lg",
              )}
            >
              There's one final
              birthday surprise
              waiting for you.
            </p>

            <div className="mt-10">
              <SurpriseButton
                onClick={
                  handleSurprise
                }
              />
            </div>

            <p className="mt-5 text-xs text-foreground/35">
              Go on. Open it. 🎁
            </p>
          </motion.div>
        )}

        <AnimatePresence>
          {isSurpriseOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 12,
              }}
            >
              <motion.div
                initial={{
                  rotate: -20,
                  scale: 0,
                }}
                animate={{
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                }}
                className={cn(
                  "mx-auto mb-7",
                  "flex size-20",
                  "items-center",
                  "justify-center",
                  "rounded-full",
                  "bg-primary",
                  "text-background",
                  "shadow-xl",
                  "shadow-primary/20",
                )}
              >
                <PartyPopper className="size-9" />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className={cn(
                  "mb-5",
                  "flex items-center",
                  "justify-center",
                  "gap-2",
                  "text-xs",
                  "font-bold uppercase",
                  "tracking-[0.25em]",
                  "text-primary",
                  "sm:text-sm",
                )}
              >
                <Sparkles className="size-5" />

                Level 27 Unlocked

                <Sparkles className="size-5" />
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className={cn(
                  "font-brand-primary",
                  "text-5xl",
                  "font-black",
                  "leading-[1.05]",
                  "tracking-tight",
                  "text-foreground",
                  "sm:text-7xl",
                  "lg:text-8xl",
                )}
              >
                HAPPY BIRTHDAY

                <span className="mt-2 block text-primary">
                  PUPUUU ❤️
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                }}
                className={cn(
                  "mx-auto mt-8",
                  "max-w-2xl",
                  "text-base",
                  "leading-8",
                  "text-foreground/65",
                  "sm:text-lg",
                )}
              >
                May this year bring
                you bigger
                achievements, better
                memories, endless
                happiness and
                everything you've
                been working toward.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                }}
                className={cn(
                  "mx-auto mt-10",
                  "max-w-2xl",
                  "rounded-[2rem]",
                  "border",
                  "border-primary/20",
                  "bg-primary/5",
                  "p-6",
                  "sm:p-8",
                )}
              >
                <p
                  className={cn(
                    "text-base",
                    "leading-8",
                    "text-foreground/70",
                    "sm:text-lg",
                  )}
                >
                  Happiest Birthday
                  my baby
                  pupuuuuuuuuuuu. I
                  love you the most.
                  You are the world's
                  best pupu baby
                  😘😘
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}
                className={cn(
                  "mt-10",
                  "flex items-center",
                  "justify-center",
                  "gap-2",
                  "text-primary",
                )}
              >
                <Heart
                  className="size-5"
                  fill="currentColor"
                />

                <span className="font-semibold">
                  Always your sibling
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseSection;