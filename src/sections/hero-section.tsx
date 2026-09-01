import {
  ArrowDown,
  Cake,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

const HeroSection = () => {
  const handleStart = () => {
    document
      .getElementById("stats")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className={cn(
        "birthday-section-party",
        "relative flex min-h-screen",
        "items-center overflow-hidden",
        "px-5 pb-20 pt-32",
        "sm:px-8",
        "lg:px-12",
      )}
    >
      {/* ================================================================ */}
      {/* BACKGROUND DECORATION                                            */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "pointer-events-none",
          "absolute",
          "-left-40 -top-40",
          "size-[32rem]",
          "rounded-full",
          "bg-primary-400/20",
          "blur-3xl",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "birthday-float-large",
          "pointer-events-none",
          "absolute",
          "-right-40 top-20",
          "size-[30rem]",
          "rounded-full",
          "bg-cyan-400/15",
          "blur-3xl",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "pointer-events-none",
          "absolute",
          "bottom-0 left-1/2",
          "size-[26rem]",
          "-translate-x-1/2",
          "rounded-full",
          "bg-violet-400/10",
          "blur-3xl",
        )}
      />

      {/* Decorative circular ring */}

      <div
        aria-hidden="true"
        className={cn(
          "birthday-spin",
          "pointer-events-none",
          "absolute",
          "right-[4%] top-[14%]",
          "hidden size-44",
          "rounded-full",
          "border",
          "border-dashed",
          "border-primary-300/30",
          "lg:block",
        )}
      />

      {/* ================================================================ */}
      {/* FLOATING BIRTHDAY ELEMENTS                                      */}
      {/* ================================================================ */}

      <span
        aria-hidden="true"
        className={cn(
          "birthday-sway",
          "absolute",
          "left-[4%] top-[20%]",
          "hidden text-5xl",
          "drop-shadow-xl",
          "sm:block",
        )}
      >
        🎈
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-sway",
          "absolute",
          "right-[5%] top-[34%]",
          "hidden text-4xl",
          "drop-shadow-xl",
          "sm:block",
        )}
        style={{
          animationDelay: "1.2s",
        }}
      >
        🎈
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "left-[8%] bottom-[17%]",
          "hidden text-3xl",
          "sm:block",
        )}
        style={{
          animationDelay: "0.8s",
        }}
      >
        🎉
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "right-[10%] bottom-[12%]",
          "hidden text-3xl",
          "sm:block",
        )}
        style={{
          animationDelay: "1.6s",
        }}
      >
        🎊
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "left-[18%] top-[13%]",
          "text-xl",
          "opacity-60",
        )}
      >
        ✨
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "right-[22%] top-[18%]",
          "text-xl",
          "opacity-50",
        )}
        style={{
          animationDelay: "0.9s",
        }}
      >
        ⭐
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "left-[46%] top-[12%]",
          "text-lg",
          "opacity-40",
        )}
        style={{
          animationDelay: "1.8s",
        }}
      >
        💙
      </span>

      {/* Tiny decorative dots */}

      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "absolute",
          "left-[13%] top-[45%]",
          "size-2 rounded-full",
          "bg-primary-500",
          "shadow-[0_0_14px_rgba(59,130,246,0.8)]",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "absolute",
          "right-[15%] top-[62%]",
          "size-2 rounded-full",
          "bg-cyan-400",
          "shadow-[0_0_14px_rgba(34,211,238,0.8)]",
        )}
        style={{
          animationDelay: "1s",
        }}
      />

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div
        className={cn(
          "relative z-10",
          "mx-auto grid w-full",
          "max-w-7xl",
          "items-center gap-16",
          "lg:grid-cols-2",
        )}
      >
        {/* ============================================================ */}
        {/* LEFT CONTENT                                                */}
        {/* ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          {/* Date badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className={cn(
              "birthday-blue-glass",
              "birthday-shimmer",
              "mb-6 inline-flex",
              "items-center gap-2",
              "rounded-full",
              "border",
              "border-primary-200/70",
              "px-4 py-2",
              "text-sm font-bold",
              "text-primary-700",
              "shadow-lg",
              "shadow-primary-500/10",
            )}
          >
            <Sparkles
              className={cn(
                "birthday-heartbeat",
                "size-4",
                "text-primary-500",
              )}
            />

            September 2, 2026
          </motion.div>

          <p
            className={cn(
              "mb-3",
              "text-xs",
              "font-bold uppercase",
              "tracking-[0.35em]",
              "text-primary-600",
              "sm:text-sm",
            )}
          >
            A special release
          </p>

          {/* Main heading */}

          <h1
            className={cn(
              "font-brand-primary",
              "text-5xl",
              "font-black",
              "leading-[1.05]",
              "tracking-tight",
              "text-foreground",
              "sm:text-6xl",
              "lg:text-7xl",
              "xl:text-8xl",
            )}
          >
            Happy Birthday

            <motion.span
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className={cn(
                "birthday-gradient-text",
                "relative mt-2 block",
                "drop-shadow-sm",
              )}
            >
              Pupiiiii Puuuuu

              <span
                aria-hidden="true"
                className={cn(
                  "birthday-float",
                  "absolute",
                  "-right-2 -top-5",
                  "hidden text-2xl",
                  "sm:inline",
                )}
              >
                ✨
              </span>
            </motion.span>
          </h1>

          <p
            className={cn(
              "mt-6 max-w-xl",
              "text-base",
              "font-medium",
              "leading-8",
              "text-foreground/60",
              "sm:text-lg",
            )}
          >
            Another year. Another level.
            Same incredible person who
            makes life a whole lot more
            interesting.
          </p>

          {/* Level card */}

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div
              whileHover={{
                y: -5,
                rotateX: 3,
                rotateY: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className={cn(
                "birthday-blue-glass",
                "birthday-blue-glow",
                "relative flex",
                "items-center gap-4",
                "overflow-hidden",
                "rounded-2xl",
                "border",
                "border-primary-200/70",
                "px-5 py-4",
                "shadow-xl",
                "shadow-primary-500/10",
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "absolute",
                  "-right-8 -top-8",
                  "size-20",
                  "rounded-full",
                  "bg-cyan-300/20",
                  "blur-xl",
                )}
              />

              <div
                className={cn(
                  "relative flex",
                  "size-11",
                  "items-center",
                  "justify-center",
                  "rounded-xl",
                  "bg-gradient-to-br",
                  "from-primary-500",
                  "via-primary-600",
                  "to-cyan-500",
                  "text-white",
                  "shadow-lg",
                  "shadow-primary-500/25",
                )}
              >
                <Cake className="size-5" />
              </div>

              <div className="relative">
                <p className="text-xs font-medium text-foreground/45">
                  Current Level
                </p>

                <p
                  className={cn(
                    "font-brand-primary",
                    "font-black",
                    "text-primary-700",
                  )}
                >
                  27 Unlocked
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA */}

          <motion.button
            type="button"
            onClick={handleStart}
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={cn(
              "birthday-shimmer",
              "birthday-blue-glow",
              "relative mt-10",
              "inline-flex",
              "items-center gap-3",
              "overflow-hidden",
              "rounded-full",
              "border",
              "border-primary-300/50",
              "bg-gradient-to-r",
              "from-primary-700",
              "via-primary-500",
              "to-cyan-500",
              "px-7 py-3.5",
              "font-bold",
              "text-white",
              "shadow-xl",
              "shadow-primary-600/25",
              "transition-shadow",
              "duration-300",
              "hover:shadow-2xl",
              "hover:shadow-primary-500/40",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-4 top-1",
                "h-1/2",
                "rounded-full",
                "bg-gradient-to-b",
                "from-white/25",
                "to-transparent",
              )}
            />

            <span className="relative">
              Start the experience
            </span>

            <ArrowDown
              className={cn(
                "birthday-float",
                "relative size-4",
              )}
            />
          </motion.button>
        </motion.div>

        {/* ============================================================ */}
        {/* PHOTO                                                       */}
        {/* ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.86,
            rotate: 4,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className={cn(
            "birthday-perspective",
            "relative mx-auto",
            "w-full max-w-md",
          )}
        >
          {/* Outer blue halo */}

          <div
            aria-hidden="true"
            className={cn(
              "birthday-pulse",
              "absolute -inset-12",
              "rounded-[4rem]",
              "bg-gradient-to-br",
              "from-primary-400/25",
              "via-cyan-400/15",
              "to-violet-400/15",
              "blur-3xl",
            )}
          />

          {/* Back decorative card */}

          <div
            aria-hidden="true"
            className={cn(
              "absolute",
              "-left-5 top-5",
              "h-full w-full",
              "-rotate-6",
              "rounded-[2.5rem]",
              "border",
              "border-primary-200/50",
              "bg-primary-200/30",
              "shadow-xl",
            )}
          />

          <div
            aria-hidden="true"
            className={cn(
              "absolute",
              "-right-4 top-3",
              "h-full w-full",
              "rotate-6",
              "rounded-[2.5rem]",
              "border",
              "border-cyan-200/40",
              "bg-cyan-100/25",
              "shadow-xl",
            )}
          />

          {/* Main photo frame */}

          <motion.div
            whileHover={{
              rotateY: -2,
              rotateX: 2,
              scale: 1.02,
            }}
            transition={{
              duration: 0.35,
            }}
            className={cn(
              "birthday-photo-3d",
              "birthday-glass",
              "relative",
              "overflow-visible",
              "rounded-[2.7rem]",
              "border",
              "border-primary-200/70",
              "p-3",
              "shadow-2xl",
              "shadow-primary-800/20",
            )}
          >
            <div
              className={cn(
                "relative",
                "overflow-hidden",
                "rounded-[2.2rem]",
              )}
            >
              <img
                src="/images/brother-main.jpeg"
                alt="Birthday boy"
                className={cn(
                  "aspect-[4/5]",
                  "w-full",
                  "object-cover",
                  "transition-transform",
                  "duration-700",
                  "hover:scale-105",
                )}
              />

              {/* Image overlay */}

              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none",
                  "absolute inset-0",
                  "bg-gradient-to-t",
                  "from-primary-950/25",
                  "via-transparent",
                  "to-primary-300/10",
                )}
              />

              {/* Light reflection */}

              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none",
                  "absolute",
                  "left-6 top-5",
                  "h-24 w-8",
                  "-rotate-12",
                  "rounded-full",
                  "bg-white/25",
                  "blur-md",
                )}
              />
            </div>

            {/* Status card */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "birthday-blue-glass",
                "absolute",
                "-bottom-6 -left-4",
                "rounded-2xl",
                "border",
                "border-primary-200/70",
                "px-5 py-4",
                "shadow-2xl",
                "shadow-primary-500/15",
                "backdrop-blur-xl",
                "sm:-left-7",
              )}
            >
              <p className="text-xs font-medium text-foreground/45">
                Status
              </p>

              <p
                className={cn(
                  "font-brand-primary",
                  "font-black",
                  "text-primary-700",
                )}
              >
                Legendary ✨
              </p>
            </motion.div>

            {/* Floating heart */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [
                  -5,
                  5,
                  -5,
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
              className={cn(
                "absolute",
                "-right-5 top-12",
                "flex size-12",
                "items-center",
                "justify-center",
                "rounded-2xl",
                "border",
                "border-primary-200/60",
                "bg-white/75",
                "text-2xl",
                "shadow-xl",
                "shadow-primary-500/15",
                "backdrop-blur-md",
              )}
            >
              💙
            </motion.div>

            {/* Floating sparkle */}

            <motion.div
              animate={{
                scale: [
                  1,
                  1.25,
                  1,
                ],
                rotate: [
                  0,
                  15,
                  0,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              aria-hidden="true"
              className={cn(
                "absolute",
                "-right-3 -top-4",
                "text-3xl",
                "drop-shadow-lg",
              )}
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* BOTTOM FADE                                                      */}
      {/* ================================================================ */}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute inset-x-0 bottom-0",
          "h-28",
          "bg-gradient-to-t",
          "from-background",
          "to-transparent",
        )}
      />
    </section>
  );
};

export default HeroSection;