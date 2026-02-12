const steps = [
  {
    number: "01",
    title: "Assess & Baseline",
    description:
      "Evaluate existing data platform, pipeline performance, cloud cost patterns, and security posture. Define measurable KPIs for performance, cost, and governance.",
  },
  {
    number: "02",
    title: "Architect Lakehouse Blueprint",
    description:
      "Design Azure Databricks Medallion architecture (Bronze/Silver/Gold), semantic modeling strategy, partitioning standards, and environment separation (Dev/QA/Prod).",
  },
  {
    number: "03",
    title: "Engineer for Performance & Cost",
    description:
      "Implement Delta optimization, workload isolation, query tuning, and warehouse right-sizing to ensure scalable performance with controlled cloud expenditure.",
  },
  {
    number: "04",
    title: "Govern, Secure & Scale",
    description:
      "Apply Unity Catalog, dynamic RLS, Azure AD integration, CI/CD pipelines, and monitoring dashboards to deliver production-grade enterprise systems.",
  },
];


const ArchitectureApproach = () => {
  return (
    <section id="approach" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
            Architecture Framework
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Architecture Approach</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A structured framework for designing secure, scalable, and cost-optimized enterprise data platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300"
            >
              <span className="text-5xl font-bold font-mono text-primary/15 absolute top-4 right-4">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureApproach;
