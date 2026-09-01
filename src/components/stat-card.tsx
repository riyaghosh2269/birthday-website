import type { LucideIcon } from "lucide-react";

import { cn } from "@/utils/cn";

type StatCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

const StatCard = ({
  label,
  value,
  icon: Icon,
}: StatCardProps) => {
  return (
    <article
      className={cn(
        "group",
        "birthday-card-3d",
        "birthday-glass",
        "birthday-shimmer",
        "relative overflow-hidden",
        "rounded-[2rem]",
        "border border-primary-200/60",
        "p-6 text-center",
        "shadow-xl",
        "shadow-primary-950/5",
        "transition-all duration-500",
        "hover:border-primary-300/80",
        "hover:shadow-2xl",
        "hover:shadow-primary-500/20",
      )}
    >
      {/* Blue background glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -right-8 -top-8",
          "size-28 rounded-full",
          "bg-primary-400/15",
          "blur-2xl",
          "transition-all duration-500",
          "group-hover:scale-125",
          "group-hover:bg-primary-400/25",
        )}
      />

      {/* Cyan glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -bottom-10 -left-10",
          "size-24 rounded-full",
          "bg-cyan-400/10",
          "blur-2xl",
          "transition-all duration-500",
          "group-hover:scale-125",
        )}
      />

      {/* Decorative sparkle */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute right-4 top-4",
          "text-sm opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-60",
        )}
      >
        ✨
      </span>

      {/* Icon */}
      <div
        className={cn(
          "relative mx-auto mb-5",
          "flex size-14",
          "items-center justify-center",
          "rounded-2xl",
          "border border-primary-300/40",
          "bg-gradient-to-br",
          "from-primary-500",
          "via-primary-600",
          "to-cyan-500",
          "text-white",
          "shadow-lg",
          "shadow-primary-600/25",
          "transition-all duration-500",
          "group-hover:-translate-y-1",
          "group-hover:rotate-6",
          "group-hover:scale-110",
          "group-hover:shadow-xl",
          "group-hover:shadow-primary-500/35",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-1",
            "rounded-xl",
            "bg-white/10",
            "opacity-0",
            "transition-opacity duration-300",
            "group-hover:opacity-100",
          )}
        />

        <Icon
          className={cn(
            "relative size-6",
            "drop-shadow-sm",
          )}
          strokeWidth={2.3}
        />
      </div>

      {/* Value */}
      <p
        className={cn(
          "relative",
          "font-brand-primary",
          "text-2xl font-black",
          "tracking-tight",
          "text-foreground",
          "transition-all duration-300",
          "group-hover:scale-105",
          "group-hover:text-primary-700",
          "sm:text-3xl",
        )}
      >
        {value}
      </p>

      {/* Label */}
      <p
        className={cn(
          "relative mt-2",
          "text-sm font-medium",
          "text-foreground/50",
          "transition-colors duration-300",
          "group-hover:text-foreground/70",
        )}
      >
        {label}
      </p>

      {/* Bottom highlight */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-8 bottom-0",
          "h-px",
          "scale-x-0",
          "bg-gradient-to-r",
          "from-transparent",
          "via-primary-500",
          "to-transparent",
          "transition-transform duration-500",
          "group-hover:scale-x-100",
        )}
      />
    </article>
  );
};

export default StatCard;