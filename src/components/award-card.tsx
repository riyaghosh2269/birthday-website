import type { LucideIcon } from "lucide-react";

import { cn } from "@/utils/cn";

type AwardCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const AwardCard = ({
  title,
  description,
  icon: Icon,
}: AwardCardProps) => {
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
        "p-7",
        "shadow-xl",
        "shadow-primary-950/5",
        "transition-all duration-500",
        "hover:border-primary-300/80",
        "hover:shadow-2xl",
        "hover:shadow-primary-500/20",
      )}
    >
      {/* Blue ambient glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -right-10 -top-10",
          "size-32",
          "rounded-full",
          "bg-primary-400/15",
          "blur-3xl",
          "transition-all duration-500",
          "group-hover:scale-125",
          "group-hover:bg-primary-400/25",
        )}
      />

      {/* Cyan accent glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -bottom-12 -left-10",
          "size-28",
          "rounded-full",
          "bg-cyan-400/10",
          "blur-3xl",
          "transition-all duration-500",
          "group-hover:scale-125",
        )}
      />

      {/* Tiny floating sparkle */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute right-5 top-5",
          "text-base",
          "opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-70",
        )}
      >
        ✨
      </span>

      {/* Icon */}
      <div
        className={cn(
          "relative mb-6",
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
          className="relative size-6 drop-shadow-sm"
          strokeWidth={2.3}
        />
      </div>

      {/* Decorative badge */}
      <div
        className={cn(
          "mb-3 inline-flex",
          "items-center gap-1.5",
          "rounded-full",
          "border border-primary-200/60",
          "bg-primary-50/80",
          "px-3 py-1",
          "text-[10px]",
          "font-bold uppercase",
          "tracking-[0.18em]",
          "text-primary-700",
          "shadow-sm",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "birthday-pulse",
            "size-1.5 rounded-full",
            "bg-primary-500",
          )}
        />

        Achievement
      </div>

      {/* Title */}
      <h3
        className={cn(
          "relative",
          "font-brand-primary",
          "text-xl font-black",
          "tracking-tight",
          "text-foreground",
          "transition-all duration-300",
          "group-hover:text-primary-700",
          "sm:text-2xl",
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "relative mt-3",
          "text-sm leading-7",
          "text-foreground/60",
          "transition-colors duration-300",
          "group-hover:text-foreground/75",
        )}
      >
        {description}
      </p>

      {/* Bottom glowing line */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-8 bottom-0",
          "h-px",
          "scale-x-0",
          "bg-gradient-to-r",
          "from-transparent",
          "via-primary-500",
          "to-cyan-400",
          "transition-transform duration-500",
          "group-hover:scale-x-100",
        )}
      />

      {/* Top corner light reflection */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute right-0 top-0",
          "h-20 w-20",
          "rounded-bl-[2rem]",
          "bg-gradient-to-bl",
          "from-white/40",
          "to-transparent",
          "opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-100",
        )}
      />
    </article>
  );
};

export default AwardCard;