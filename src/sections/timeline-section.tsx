import {
  CalendarDays,
  Sparkles,
} from "lucide-react";

import SectionTitle from "@/components/section-title";

import { timeline } from "@/data/timeline";

import { cn } from "@/utils/cn";

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className={cn(
        "relative overflow-hidden",
        "px-5 py-24",
        "sm:px-8",
        "lg:px-12",
      )}
    >
      <div
        className={cn(
          "absolute -right-40 top-20",
          "size-96 rounded-full",
          "bg-primary/10 blur-3xl",
        )}
      />

      <div
        className={cn(
          "absolute -bottom-40 -left-40",
          "size-96 rounded-full",
          "bg-secondary/10 blur-3xl",
        )}
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="The story so far"
          title="A Very Serious Timeline"
          description="No childhood photos required. Some stories are better told through memories and milestones."
        />

        <div className="relative mt-14">
          <div
            className={cn(
              "absolute bottom-0 top-0",
              "left-[19px] w-px",
              "bg-primary/20",
              "md:left-1/2",
              "md:-translate-x-1/2",
            )}
          />

          <div className="space-y-12">
            {timeline.map(
              (item, index) => {
                const isEven =
                  index % 2 === 0;

                return (
                  <article
                    key={`${item.year}-${item.title}`}
                    className={cn(
                      "relative grid",
                      "grid-cols-[40px_1fr]",
                      "gap-4",
                      "md:grid-cols-[1fr_80px_1fr]",
                      "md:gap-6",
                    )}
                  >
                    <div className="relative flex justify-center md:hidden">
                      <div
                        className={cn(
                          "relative z-10 mt-5",
                          "grid size-10 place-items-center",
                          "rounded-full",
                          "border-4 border-background",
                          "bg-primary text-background",
                        )}
                      >
                        <Sparkles className="size-4" />
                      </div>
                    </div>

                    <div
                      className={cn(
                        "hidden md:block",
                        isEven
                          ? "text-right"
                          : "md:order-3",
                      )}
                    >
                      {isEven && (
                        <TimelineCard
                          year={item.year}
                          title={item.title}
                          description={
                            item.description
                          }
                          align="right"
                        />
                      )}
                    </div>

                    <div className="relative hidden items-start justify-center md:order-2 md:flex">
                      <div
                        className={cn(
                          "relative z-10 mt-5",
                          "grid size-11 place-items-center",
                          "rounded-full",
                          "border-4 border-background",
                          "bg-primary text-background",
                        )}
                      >
                        <Sparkles className="size-4" />
                      </div>
                    </div>

                    <div
                      className={cn(
                        "min-w-0",
                        isEven
                          ? "md:order-3"
                          : "md:order-1",
                      )}
                    >
                      <div className="md:hidden">
                        <TimelineCard
                          year={item.year}
                          title={item.title}
                          description={
                            item.description
                          }
                        />
                      </div>

                      {!isEven && (
                        <div className="hidden md:block">
                          <TimelineCard
                            year={
                              item.year
                            }
                            title={
                              item.title
                            }
                            description={
                              item.description
                            }
                          />
                        </div>
                      )}
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>

        <div
          className={cn(
            "mx-auto mt-16 max-w-2xl",
            "rounded-[2rem]",
            "border border-primary/20",
            "bg-primary/5",
            "p-6 text-center sm:p-8",
          )}
        >
          <div
            className={cn(
              "mx-auto mb-4",
              "grid size-12 place-items-center",
              "rounded-2xl",
              "bg-primary/10 text-primary",
            )}
          >
            <CalendarDays className="size-5" />
          </div>

          <p
            className={cn(
              "font-brand-secondary",
              "text-xl font-bold",
              "text-foreground sm:text-2xl",
            )}
          >
            And the best chapters are
            still ahead.
          </p>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-foreground/55">
            Twenty-six is just another
            checkpoint. There are still
            countless adventures,
            achievements and sibling
            arguments waiting to happen.
          </p>
        </div>
      </div>
    </section>
  );
};

function TimelineCard({
  year,
  title,
  description,
  align = "left",
}: {
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem]",
        "border border-primary/15",
        "bg-background p-5",
        "shadow-lg",
        "transition duration-300",
        "hover:-translate-y-1",
        "hover:border-primary/30",
        "sm:p-6",
        align === "right"
          ? "md:text-right"
          : "md:text-left",
      )}
    >
      <div
        className={cn(
          "mb-3 flex",
          align === "right"
            ? "md:justify-end"
            : "md:justify-start",
        )}
      >
        <span
          className={cn(
            "inline-flex rounded-full",
            "border border-primary/20",
            "bg-primary/5",
            "px-3 py-1.5",
            "text-xs font-bold text-primary",
          )}
        >
          {year}
        </span>
      </div>

      <h3
        className={cn(
          "font-brand-secondary",
          "text-xl font-bold",
          "text-foreground",
          "sm:text-2xl",
        )}
      >
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-foreground/55">
        {description}
      </p>
    </div>
  );
}

export default TimelineSection;