import { Database, Zap, Shield, LineChart } from "lucide-react";

const focusAreas = [
  {
    icon: Database,
    title: "Data Platform Fragmentation",
    description:
      "Disjointed ETL pipelines and siloed reporting environments limiting unified analytics and cross-functional visibility.",
  },
  {
    icon: Zap,
    title: "Performance & Scalability Constraints",
    description:
      "Legacy workloads struggling with increasing data volumes, concurrent BI usage, and inefficient processing patterns.",
  },
  {
    icon: Shield,
    title: "Security & Governance Risks",
    description:
      "Inconsistent access control, unmanaged permissions, and lack of structured RLS and compliance frameworks.",
  },
  {
    icon: LineChart,
    title: "Uncontrolled Cloud Expenditure",
    description:
      "Over-provisioned warehouses, inefficient query designs, and absence of workload isolation driving unnecessary cloud spend.",
  },
];

const WhatISolve = () => {
  return (
    <section id="solve" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            Enterprise Focus Areas
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Enterprise Data Platform Challenges I Address
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Structured architectural solutions across scalability, governance, performance, and cost optimization within enterprise delivery environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className={`group relative p-6 rounded-xl border border-border bg-card hover:bg-secondary/40 transition-all duration-300 glow-border fade-up fade-up-delay-${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatISolve;
