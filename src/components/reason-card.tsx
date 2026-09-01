import { Heart } from "lucide-react";

import { cn } from "@/utils/cn";

type ReasonCardProps = {
  number: number;
  reason: string;
};

const ReasonCard = ({
  number,
  reason,
}: ReasonCardProps) => {
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
        "p-6",
        "shadow-xl",
        "shadow-primary-950/5",
        "transition-all duration-500",
        "hover:border-primary-300/80",
        "hover:shadow-2xl",
        "hover:shadow-primary-500/20",
      )}
    >
      {/* Decorative blue glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute -right-10 -top-10",
          "size-28",
          "rounded-full",
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
          "absolute -bottom-12 -left-10",
          "size-28",
          "rounded-full",
          "bg-cyan-400/10",
          "blur-2xl",
          "transition-all duration-500",
          "group-hover:scale-125",
        )}
      />

      {/* Small decorative stars */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute right-5 top-5",
          "text-sm",
          "opacity-0",
          "transition-opacity duration-300",
          "group-hover:opacity-60",
        )}
      >
        ✨
      </span>

      <div className="relative mb-8 flex items-center justify-between">
        {/* Number */}
        <span
          className={cn(
            "font-brand-primary",
            "text-4xl",
            "font-black",
            "tracking-tight",
            "text-primary-500/25",
            "transition-all duration-300",
            "group-hover:scale-110",
            "group-hover:text-primary-600/45",
          )}
        >
          {String(number).padStart(
            2,
            "0",
          )}
        </span>

        {/* Heart */}
        <div
          className={cn(
            "relative flex",
            "size-11",
            "items-center justify-center",
            "rounded-2xl",
            "border",
            "border-primary-200/70",
            "bg-gradient-to-br",
            "from-primary-100",
            "via-white",
            "to-cyan-100",
            "text-primary-600",
            "shadow-md",
            "shadow-primary-500/10",
            "transition-all duration-500",
            "group-hover:-translate-y-1",
            "group-hover:rotate-6",
            "group-hover:scale-110",
            "group-hover:bg-primary-600",
            "group-hover:text-white",
            "group-hover:shadow-lg",
            "group-hover:shadow-primary-500/25",
          )}
        >
          <Heart
            className={cn(
              "size-5",
              "transition-all duration-300",
              "group-hover:birthday-heartbeat",
            )}
            fill="currentColor"
          />
        </div>
      </div>

      {/* Reason text */}
      <p
        className={cn(
          "relative",
          "font-medium",
          "leading-7",
          "text-foreground/75",
          "transition-colors duration-300",
          "group-hover:text-foreground",
        )}
      >
        {reason}
      </p>

      {/* Bottom accent line */}
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

      {/* Corner shine */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute right-0 top-0",
          "h-16 w-16",
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

export default ReasonCard;