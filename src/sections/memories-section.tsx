import MemoryCard from "@/components/memory-card";
import SectionTitle from "@/components/section-title";

import { memories } from "@/data/memories";

const MemoriesSection = () => {
  return (
    <section
      id="memories"
      className="px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="The archives"
          title="Some Good Memories"
          description="We don't need childhood photos. The best memories aren't always the oldest ones."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory) => (
            <MemoryCard
              key={memory.id}
              image={memory.image}
              title={memory.title}
              description={memory.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;