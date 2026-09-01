import { motion } from "framer-motion";

import SectionTitle from "@/components/section-title";
import StatCard from "@/components/stat-card";

import { stats } from "@/data/stats";

import { cn } from "@/utils/cn";

const StatsSection = () => {
  return (
    <section
      id="stats"
      className={cn(
        "birthday-section-blue",
        "relative overflow-hidden",
        "px-5 py-24",
        "sm:px-8 sm:py-28",
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
          "-left-40 top-10",
          "size-[26rem]",
          "rounded-full",
          "bg-primary-400/15",
          "blur-3xl",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "birthday-float-large",
          "pointer-events-none",
          "absolute",
          "-right-40 bottom-0",
          "size-[28rem]",
          "rounded-full",
          "bg-cyan-400/10",
          "blur-3xl",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "pointer-events-none",
          "absolute",
          "left-1/2 top-1/2",
          "size-[20rem]",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "rounded-full",
          "bg-violet-400/5",
          "blur-3xl",
        )}
      />

      {/* ================================================================ */}
      {/* FLOATING BIRTHDAY ELEMENTS                                      */}
      {/* ================================================================ */}

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "left-[5%] top-[22%]",
          "hidden text-2xl",
          "opacity-50",
          "sm:block",
        )}
      >
        ✨
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-sway",
          "absolute",
          "right-[6%] top-[18%]",
          "hidden text-3xl",
          "opacity-50",
          "sm:block",
        )}
        style={{
          animationDelay: "1s",
        }}
      >
        🎈
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "left-[9%] bottom-[15%]",
          "hidden text-2xl",
          "opacity-40",
          "sm:block",
        )}
        style={{
          animationDelay: "1.5s",
        }}
      >
        💙
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute",
          "right-[9%] bottom-[12%]",
          "hidden text-2xl",
          "opacity-40",
          "sm:block",
        )}
        style={{
          animationDelay: "0.7s",
        }}
      >
        ⭐
      </span>

      {/* Decorative glowing dots */}

      <span
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "absolute",
          "left-[18%] top-[42%]",
          "size-2",
          "rounded-full",
          "bg-primary-500",
          "opacity-50",
          "shadow-[0_0_14px_rgba(59,130,246,0.8)]",
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "absolute",
          "right-[16%] top-[58%]",
          "size-2",
          "rounded-full",
          "bg-cyan-400",
          "opacity-50",
          "shadow-[0_0_14px_rgba(34,211,238,0.8)]",
        )}
        style={{
          animationDelay: "1.3s",
        }}
      />

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <SectionTitle
            eyebrow="Character stats"
            title="Birthday Boy Analytics"
            description="Twenty-six years of continuous updates have produced some impressive statistics."
          />
        </motion.div>

        {/* ============================================================ */}
        {/* STATS GRID                                                  */}
        {/* ============================================================ */}

        <div
          className={cn(
            "birthday-perspective",
            "relative grid",
            "gap-5",
            "2xs:grid-cols-2",
            "lg:grid-cols-5",
          )}
        >
          {stats.map(
            (stat, index) => (
              <motion.div
                key={stat.id}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay:
                    index * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
              >
                <StatCard
                  label={
                    stat.label
                  }
                  value={
                    stat.value
                  }
                  icon={
                    stat.icon
                  }
                />
              </motion.div>
            ),
          )}
        </div>

        {/* ============================================================ */}
        {/* DECORATIVE BOTTOM DIVIDER                                   */}
        {/* ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className={cn(
            "mx-auto mt-16",
            "flex max-w-md",
            "items-center",
            "justify-center",
            "gap-3",
          )}
        >
          <span
            className={cn(
              "h-px flex-1",
              "bg-gradient-to-r",
              "from-transparent",
              "to-primary-400/60",
            )}
          />

          <span
            aria-hidden="true"
            className={cn(
              "birthday-heartbeat",
              "text-lg",
            )}
          >
            💙
          </span>

          <span
            className={cn(
              "h-px flex-1",
              "bg-gradient-to-r",
              "from-primary-400/60",
              "to-transparent",
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;