import ReasonCard from "@/components/reason-card";
import SectionTitle from "@/components/section-title";

import { reasons } from "@/data/reason";

const ReasonsSection = () => {
  return (
    <section
      id="reasons"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          
          title="Why You're Awesome"
          description="There are probably hundreds. But here are the few highlights ."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={`${index}-${reason}`}
              number={index + 1}
              reason={reason}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;