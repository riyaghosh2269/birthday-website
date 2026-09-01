import AwardCard from "@/components/award-card";
import SectionTitle from "@/components/section-title";

import { awards } from "@/data/awards";
import { cn } from "@/utils/cn";

const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Official recognition"
          title="Brother Awards 2026"
          description="After extensive research, the jury has reached its completely unbiased conclusions."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => {
  const isLast = index === awards.length - 1;

  return (
    <div
      key={award.id}
      className={cn(
        isLast && [
          "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md",
          "lg:col-span-1 lg:col-start-2 lg:row-start-3",
        ],
      )}
    >
      <AwardCard
        title={award.title}
        description={award.description}
        icon={award.icon}
      />
    </div>
  );
})}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;