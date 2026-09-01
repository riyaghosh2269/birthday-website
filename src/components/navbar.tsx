import {
  Cake,
  Heart,
} from "lucide-react";

import { cn } from "@/utils/cn";

const links = [
  {
    label: "Stats",
    target: "stats",
  },
  {
    label: "Reasons",
    target: "reasons",
  },
  {
    label: "Memories",
    target: "memories",
  },
  {
    label: "Surprise",
    target: "surprise",
  },
];

const Navbar = () => {
  const handleScroll = (
    target: string,
  ) => {
    document
      .getElementById(target)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0",
        "z-40",
        "px-3 pt-3",
        "sm:px-5",
      )}
    >
      <nav
        className={cn(
          "birthday-glass",
          "birthday-blue-glow",
          "relative mx-auto flex",
          "h-16 max-w-7xl",
          "items-center",
          "justify-between",
          "overflow-hidden",
          "rounded-2xl",
          "border",
          "border-primary-200/60",
          "px-4",
          "shadow-xl",
          "shadow-primary-900/5",
          "sm:px-6",
          "lg:px-8",
        )}
      >
        {/* ------------------------------------------------ */}
        {/* NAVBAR DECORATION */}
        {/* ------------------------------------------------ */}

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none",
            "absolute",
            "-left-12 -top-16",
            "size-40",
            "rounded-full",
            "bg-primary-400/20",
            "blur-3xl",
          )}
        />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none",
            "absolute",
            "-right-10 -bottom-16",
            "size-40",
            "rounded-full",
            "bg-cyan-400/15",
            "blur-3xl",
          )}
        />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none",
            "absolute inset-x-0 top-0",
            "h-px",
            "bg-gradient-to-r",
            "from-transparent",
            "via-primary-300/70",
            "to-transparent",
          )}
        />

        {/* ------------------------------------------------ */}
        {/* LOGO */}
        {/* ------------------------------------------------ */}

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={cn(
            "group relative z-10",
            "flex items-center",
            "gap-2.5",
          )}
        >
          <span
            className={cn(
              "birthday-shimmer",
              "birthday-card-3d",
              "relative flex",
              "size-10",
              "items-center",
              "justify-center",
              "rounded-xl",
              "border",
              "border-primary-300/50",
              "bg-gradient-to-br",
              "from-primary-500",
              "via-primary-600",
              "to-cyan-500",
              "text-white",
              "shadow-lg",
              "shadow-primary-600/30",
              "transition-all",
              "duration-300",
              "group-hover:rotate-6",
              "group-hover:scale-110",
            )}
          >
            <Cake
              className={cn(
                "size-5",
                "drop-shadow-sm",
              )}
            />

            <span
              aria-hidden="true"
              className={cn(
                "birthday-pulse",
                "absolute",
                "-right-1 -top-1",
                "size-2.5",
                "rounded-full",
                "bg-cyan-300",
                "shadow",
                "shadow-cyan-400/50",
              )}
            />
          </span>

          <div className="hidden text-left xs:block">
            <span
              className={cn(
                "block",
                "font-brand-primary",
                "text-sm",
                "font-black",
                "tracking-tight",
                "text-foreground",
                "transition-colors",
                "group-hover:text-primary-600",
              )}
            >
              Level 26
            </span>

            <span
              className={cn(
                "block",
                "text-[9px]",
                "font-semibold",
                "uppercase",
                "tracking-[0.22em]",
                "text-primary-500/70",
              )}
            >
              Birthday Edition
            </span>
          </div>
        </button>

        {/* ------------------------------------------------ */}
        {/* DESKTOP NAVIGATION */}
        {/* ------------------------------------------------ */}

        <div
          className={cn(
            "relative z-10",
            "hidden",
            "items-center",
            "gap-1.5",
            "rounded-full",
            "border",
            "border-primary-200/50",
            "bg-white/45",
            "p-1.5",
            "shadow-inner",
            "shadow-primary-950/5",
            "backdrop-blur-md",
            "md:flex",
          )}
        >
          {links.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() =>
                handleScroll(
                  link.target,
                )
              }
              className={cn(
                "group relative",
                "overflow-hidden",
                "rounded-full",
                "px-4 py-2",
                "text-sm",
                "font-semibold",
                "text-foreground/60",
                "transition-all",
                "duration-300",
                "hover:-translate-y-0.5",
                "hover:bg-primary-100/70",
                "hover:text-primary-700",
                "hover:shadow-md",
                "hover:shadow-primary-500/10",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute",
                  "inset-x-3 bottom-0",
                  "h-0.5",
                  "origin-center",
                  "scale-x-0",
                  "rounded-full",
                  "bg-gradient-to-r",
                  "from-primary-500",
                  "to-cyan-400",
                  "transition-transform",
                  "duration-300",
                  "group-hover:scale-x-100",
                )}
              />

              <span className="relative">
                {link.label}
              </span>
            </button>
          ))}
        </div>

        {/* ------------------------------------------------ */}
        {/* BIRTHDAY BUTTON */}
        {/* ------------------------------------------------ */}

        <button
          type="button"
          onClick={() =>
            handleScroll("surprise")
          }
          className={cn(
            "birthday-shimmer",
            "relative z-10",
            "flex items-center",
            "gap-2",
            "overflow-hidden",
            "rounded-full",
            "border",
            "border-primary-400/40",
            "bg-gradient-to-r",
            "from-primary-600",
            "via-primary-500",
            "to-cyan-500",
            "px-4 py-2.5",
            "text-xs",
            "font-bold",
            "text-white",
            "shadow-lg",
            "shadow-primary-600/25",
            "transition-all",
            "duration-300",
            "hover:-translate-y-0.5",
            "hover:scale-[1.05]",
            "hover:shadow-xl",
            "hover:shadow-primary-600/35",
            "active:scale-[0.98]",
          )}
        >
          <Heart
            className={cn(
              "size-4",
              "birthday-heartbeat",
            )}
            fill="currentColor"
          />

          <span className="hidden xs:inline">
            Birthday
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "absolute",
              "-right-1 -top-1",
              "size-2",
              "rounded-full",
              "bg-cyan-200",
              "shadow",
              "shadow-cyan-300/60",
            )}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;