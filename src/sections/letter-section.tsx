import {
  Heart,
  Quote,
} from "lucide-react";

import SectionTitle from "@/components/section-title";

import { cn } from "@/utils/cn";

const LetterSection = () => {
  return (
    <section
      id="letter"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="From me to you"
          title="One Serious Minute"
        />

        <div
          className={cn(
            "relative rounded-[2rem]",
            "border border-primary/20",
            "bg-primary/5",
            "p-7 sm:p-10",
          )}
        >
          <Quote className="mb-6 size-10 text-primary/40" />

          <div
            className={cn(
              "space-y-5",
              "text-base leading-8",
              "text-foreground/70",
              "sm:text-lg",
            )}
          >
            <p>Happy Birthday, Dada.</p>

            <p>
              You have been the best mentor of mine and you are the only one who never failed to appreciate me even over my little achievements.
            </p>

            <p>
              Thank you for being
              someone I can look up to,
              depend on and share some
              of the funniest moments
              of my life with.
            </p>

            <p>
              I hope this new year of
              your life brings you
              everything you've been
              working for, plenty of
              happiness and many more
              memories for us to laugh
              about later.
            </p>

            <p className="font-semibold text-foreground">
              Happy Level 27. ❤️
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-primary">
            <Heart
              className="size-5"
              fill="currentColor"
            />

            <span className="text-sm font-semibold">
              Written with love by your Baby Bunu

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;