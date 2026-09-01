import { cn } from "@/utils/cn";

type MemoryCardProps = {
  image: string;
  title: string;
  description: string;
};

const MemoryCard = ({
  image,
  title,
  description,
}: MemoryCardProps) => {
  return (
    <article
      className={cn(
        "group",
        "birthday-card-3d",
        "birthday-glass",
        "relative overflow-hidden",
        "rounded-[2rem]",
        "border",
        "border-primary-200/60",
        "shadow-xl",
        "shadow-primary-950/5",
        "transition-all",
        "duration-500",
        "hover:border-primary-300/80",
        "hover:shadow-2xl",
        "hover:shadow-primary-500/25",
      )}
    >
      {/* ------------------------------------------------ */}
      {/* DECORATIVE BACKGROUND GLOW */}
      {/* ------------------------------------------------ */}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute",
          "-right-12 -top-12",
          "z-0",
          "size-36",
          "rounded-full",
          "bg-primary-400/20",
          "blur-3xl",
          "transition-all",
          "duration-500",
          "group-hover:scale-125",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute",
          "-bottom-16 -left-12",
          "z-0",
          "size-32",
          "rounded-full",
          "bg-cyan-400/15",
          "blur-3xl",
          "transition-all",
          "duration-500",
          "group-hover:scale-125",
        )}
      />

      {/* ------------------------------------------------ */}
      {/* IMAGE */}
      {/* ------------------------------------------------ */}

      <div
        className={cn(
          "birthday-perspective",
          "relative z-10",
          "m-3",
          "aspect-[4/5]",
          "overflow-hidden",
          "rounded-[1.6rem]",
          "border",
          "border-primary-200/50",
          "bg-primary-50",
          "shadow-lg",
          "shadow-primary-950/10",
        )}
      >
        <img
          src={image}
          alt={title}
          className={cn(
            "size-full",
            "object-cover",
            "transition-all",
            "duration-700",
            "ease-out",
            "group-hover:scale-110",
            "group-hover:rotate-[0.5deg]",
          )}
        />

        {/* Image gradient overlay */}

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none",
            "absolute inset-0",
            "bg-gradient-to-t",
            "from-primary-950/35",
            "via-transparent",
            "to-primary-300/10",
            "opacity-60",
            "transition-opacity",
            "duration-500",
            "group-hover:opacity-35",
          )}
        />

        {/* Blue shine */}

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none",
            "absolute",
            "-left-1/2 top-0",
            "h-full w-1/3",
            "-skew-x-12",
            "bg-gradient-to-r",
            "from-transparent",
            "via-white/30",
            "to-transparent",
            "opacity-0",
            "transition-all",
            "duration-700",
            "group-hover:left-[120%]",
            "group-hover:opacity-100",
          )}
        />

        {/* Floating sparkle */}

        <span
          aria-hidden="true"
          className={cn(
            "birthday-float",
            "absolute",
            "right-4 top-4",
            "text-xl",
            "opacity-0",
            "drop-shadow-md",
            "transition-opacity",
            "duration-300",
            "group-hover:opacity-80",
          )}
        >
          ✨
        </span>

        {/* Bottom label */}

        <div
          className={cn(
            "absolute",
            "bottom-4 left-4",
            "rounded-full",
            "border",
            "border-white/30",
            "bg-white/20",
            "px-3 py-1.5",
            "text-[10px]",
            "font-semibold",
            "uppercase",
            "tracking-[0.2em]",
            "text-white",
            "shadow-lg",
            "backdrop-blur-md",
            "transition-all",
            "duration-300",
            "group-hover:-translate-y-1",
          )}
        >
          Memory 💙
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* CONTENT */}
      {/* ------------------------------------------------ */}

      <div
        className={cn(
          "relative z-10",
          "px-6 pb-7 pt-3",
        )}
      >
        <div
          className={cn(
            "mb-3",
            "h-1 w-12",
            "rounded-full",
            "bg-gradient-to-r",
            "from-primary-500",
            "to-cyan-400",
            "transition-all",
            "duration-500",
            "group-hover:w-20",
          )}
        />

        <h3
          className={cn(
            "font-brand-primary",
            "text-xl",
            "font-black",
            "tracking-tight",
            "text-foreground",
            "transition-all",
            "duration-300",
            "group-hover:text-primary-700",
            "sm:text-2xl",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-2",
            "text-sm",
            "leading-7",
            "text-foreground/60",
            "transition-colors",
            "duration-300",
            "group-hover:text-foreground/75",
          )}
        >
          {description}
        </p>
      </div>

      {/* ------------------------------------------------ */}
      {/* BOTTOM GLOW LINE */}
      {/* ------------------------------------------------ */}

      <div
        aria-hidden="true"
        className={cn(
          "absolute",
          "inset-x-8 bottom-0",
          "h-px",
          "scale-x-0",
          "bg-gradient-to-r",
          "from-transparent",
          "via-primary-500",
          "to-cyan-400",
          "transition-transform",
          "duration-500",
          "group-hover:scale-x-100",
        )}
      />

      {/* Corner reflection */}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none",
          "absolute",
          "right-0 top-0",
          "h-20 w-20",
          "rounded-bl-[2rem]",
          "bg-gradient-to-bl",
          "from-white/35",
          "to-transparent",
          "opacity-0",
          "transition-opacity",
          "duration-300",
          "group-hover:opacity-100",
        )}
      />
    </article>
  );
};

export default MemoryCard;