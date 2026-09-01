import { cn } from "@/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

const SectionTitle = ({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto mb-14 max-w-3xl text-center",
        "birthday-perspective",
        className,
      )}
    >
      {/* Decorative glow behind heading */}
      <div
        aria-hidden="true"
        className={cn(
          "birthday-pulse",
          "pointer-events-none",
          "absolute left-1/2 top-1/2",
          "size-56",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "rounded-full",
          "bg-primary-400/10",
          "blur-3xl",
        )}
      />

      {/* Small floating sparkles */}
      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute -left-3 top-7",
          "hidden text-xl",
          "opacity-45",
          "sm:block",
        )}
      >
        ✨
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "birthday-float",
          "absolute -right-2 top-3",
          "hidden text-lg",
          "opacity-35",
          "sm:block",
        )}
        style={{
          animationDelay: "1s",
        }}
      >
        💫
      </span>

      <div className="relative">
        {eyebrow && (
          <div className="mb-4 flex justify-center">
            <p
              className={cn(
                "birthday-blue-glass",
                "birthday-shimmer",
                "inline-flex",
                "items-center",
                "gap-2",
                "rounded-full",
                "border",
                "border-primary-200/70",
                "px-4 py-2",
                "text-[10px]",
                "font-bold",
                "uppercase",
                "tracking-[0.28em]",
                "text-primary-700",
                "shadow-sm",
                "shadow-primary-500/10",
                "sm:text-xs",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "birthday-pulse",
                  "size-1.5",
                  "rounded-full",
                  "bg-primary-500",
                  "shadow-[0_0_10px_rgba(59,130,246,0.7)]",
                )}
              />

              {eyebrow}

              <span
                aria-hidden="true"
                className={cn(
                  "birthday-pulse",
                  "size-1.5",
                  "rounded-full",
                  "bg-cyan-400",
                  "shadow-[0_0_10px_rgba(34,211,238,0.7)]",
                )}
                style={{
                  animationDelay: "0.8s",
                }}
              />
            </p>
          </div>
        )}

        <h2
          className={cn(
            "birthday-gradient-text",
            "font-brand-primary",
            "text-3xl",
            "font-black",
            "leading-tight",
            "tracking-tight",
            "drop-shadow-sm",
            "sm:text-4xl",
            "lg:text-5xl",
          )}
        >
          {title}
        </h2>

        {/* Decorative underline */}
        <div
          aria-hidden="true"
          className={cn(
            "mx-auto mt-5",
            "flex items-center",
            "justify-center",
            "gap-2",
          )}
        >
          <span
            className={cn(
              "h-px w-10",
              "bg-gradient-to-r",
              "from-transparent",
              "to-primary-400",
            )}
          />

          <span
            className={cn(
              "birthday-pulse",
              "size-2",
              "rotate-45",
              "rounded-[2px]",
              "bg-primary-500",
              "shadow-[0_0_12px_rgba(59,130,246,0.65)]",
            )}
          />

          <span
            className={cn(
              "h-px w-16",
              "bg-gradient-to-r",
              "from-primary-500",
              "via-cyan-400",
              "to-primary-500",
            )}
          />

          <span
            className={cn(
              "birthday-pulse",
              "size-2",
              "rotate-45",
              "rounded-[2px]",
              "bg-cyan-400",
              "shadow-[0_0_12px_rgba(34,211,238,0.65)]",
            )}
            style={{
              animationDelay: "0.7s",
            }}
          />

          <span
            className={cn(
              "h-px w-10",
              "bg-gradient-to-r",
              "from-primary-400",
              "to-transparent",
            )}
          />
        </div>

        {description && (
          <p
            className={cn(
              "mx-auto mt-5",
              "max-w-2xl",
              "text-sm",
              "font-medium",
              "leading-7",
              "text-foreground/55",
              "sm:text-base",
              "sm:leading-8",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;