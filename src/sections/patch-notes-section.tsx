import {
  Bug,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";

import SectionTitle from "@/components/section-title";

import { cn } from "@/utils/cn";

const features = [
  "+1 year of experience",
  "Wisdom upgraded",
  "Confidence improved",
  "More legendary stories added",
  "Responsibility module expanded",
];

const bugs = [
  "Doesn't care for ownself",
  "Emon chechae kaner porda fete jae",
  "Gets easily manipulated",
  "Sibling teasing cannot be disabled(and I don't want to get disabled too 👀👀)",
];

const PatchNotesSection = () => {
  return (
    <section
      id="patch-notes"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Release notes"
          title="Version 27.0"
          description="The newest and supposedly more mature release has officially arrived."
        />

        <div
          className={cn(
            "overflow-hidden rounded-[2rem]",
            "border border-primary/20",
            "bg-primary/5",
          )}
        >
          <div
            className={cn(
              "flex items-center gap-3",
              "border-b border-primary/15",
              "px-6 py-5",
            )}
          >
            <Code2 className="size-5 text-primary" />

            <div>
              <h3 className="font-bold text-foreground">
                Brother v27.0
              </h3>

              <p className="text-xs text-foreground/45">
                Stable release • September 2,
                2026
              </p>
            </div>
          </div>

          <div
            className={cn(
              "grid gap-10 p-6",
              "md:grid-cols-2 md:p-8",
            )}
          >
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="size-5 text-primary" />

                <h4 className="font-semibold text-foreground">
                  New Features
                </h4>
              </div>

              <div className="space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm text-foreground/65"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-2">
                <Bug className="size-5 text-primary" />

                <h4 className="font-semibold text-foreground">
                  Known Issues
                </h4>
              </div>

              <div className="space-y-4">
                {bugs.map((bug) => (
                  <div
                    key={bug}
                    className="flex gap-3 text-sm text-foreground/65"
                  >
                    <Bug className="mt-0.5 size-4 shrink-0 text-primary" />

                    {bug}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatchNotesSection;