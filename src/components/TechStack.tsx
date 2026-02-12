const categories = [
  {
    name: "Lakehouse & Data Platform",
    items: [
      "Azure Databricks",
      "Delta Lake",
      "Snowflake",
      "ADLS Gen2",
      "Medallion Architecture",
    ],
  },
  {
    name: "Data Engineering",
    items: [
      "PySpark",
      "SQL",
      "Data Modeling",
      "ETL / ELT Design",
      "Performance Optimization",
    ],
  },
  {
    name: "BI & Analytics",
    items: [
      "Power BI",
      "DAX",
      "Semantic Models",
      "Row-Level Security (RLS)",
      "Dashboard Optimization",
    ],
  },
  {
    name: "Azure Ecosystem",
    items: [
      "Azure Data Factory",
      "Azure Synapse",
      "Azure AD",
      "CI/CD Pipelines",
      "Dev / QA / Prod Architecture",
    ],
  },
  {
    name: "Governance & Cost Control",
    items: [
      "Unity Catalog",
      "Data Security Design",
      "Cloud Cost Optimization",
      "Workload Isolation",
      "Monitoring & Observability",
    ],
  },
];


const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Core Technical Expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Stack</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Enterprise-grade expertise across Azure lakehouse, Snowflake optimization, and secure BI architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
