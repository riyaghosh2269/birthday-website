import { Gift } from "lucide-react";

import { cn } from "@/utils/cn";

type SurpriseButtonProps = {
  onClick: () => void;
};

const SurpriseButton = ({
  onClick,
}: SurpriseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group",
        "birthday-shimmer",
        "relative",
        "inline-flex",
        "items-center justify-center",
        "gap-3",
        "overflow-hidden",
        "rounded-full",

        "border",
        "border-primary-300/50",

        "bg-gradient-to-r",
        "from-primary-700",
        "via-primary-500",
        "to-cyan-500",

        "px-8 py-4",

        "font-brand-primary",
        "font-bold",

        "text-white",

        "shadow-xl",
        "shadow-primary-600/30",

        "transition-all",
        "duration-500",

        "hover:-translate-y-1",
        "hover:scale-105",

        "hover:shadow-2xl",
        "hover:shadow-primary-500/45",

        "active:translate-y-0",
        "active:scale-[0.97]",
      )}
    >
      {/* Glow behind button */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -inset-6",
          "-z-10",
          "rounded-full",
          "bg-primary-500/25",
          "blur-2xl",
          "opacity-60",
          "transition-all duration-500",
          "group-hover:scale-125",
          "group-hover:opacity-100",
        )}
      />

      {/* Inner glass highlight */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute inset-x-4 top-1",
          "h-1/2",
          "rounded-full",
          "bg-gradient-to-b",
          "from-white/25",
          "to-transparent",
          "opacity-70",
        )}
      />

      {/* Left sparkle */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute -left-2 -top-3",
          "text-sm",
          "opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-90",
        )}
      >
        ✨
      </span>

      {/* Right sparkle */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute -right-2 -top-2",
          "text-xs",
          "opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-80",
        )}
        style={{
          animationDelay: "0.8s",
        }}
      >
        ✨
      </span>

      {/* Gift icon */}
      <span
        className={cn(
          "relative z-10",
          "flex size-8",
          "items-center justify-center",
          "rounded-full",
          "bg-white/15",
          "shadow-inner",
          "transition-all duration-500",
          "group-hover:-rotate-12",
          "group-hover:scale-110",
          "group-hover:bg-white/20",
        )}
      >
        <Gift
          className="size-5 drop-shadow-sm"
          strokeWidth={2.4}
        />
      </span>

      {/* Text */}
      <span className="relative z-10">
        Open Birthday Surprise
      </span>

      {/* Bottom glowing line */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute",
          "bottom-0 left-1/2",
          "h-px w-2/3",
          "-translate-x-1/2",
          "bg-gradient-to-r",
          "from-transparent",
          "via-cyan-200/80",
          "to-transparent",
        )}
      />
    </button>
  );
};

export default SurpriseButton;