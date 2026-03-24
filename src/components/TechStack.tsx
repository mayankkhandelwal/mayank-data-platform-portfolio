const categories = [
  {
    name: "Lakehouse & Data Platform",
    items: ["Databricks", "Delta Lake", "Snowflake", "Medallion Architecture", "Microsoft Fabric"],
  },
  {
    name: "Data Engineering",
    items: ["SnapLogic", "PySpark", "Delta Live Tables", "Auto Loader", "Star Schema", "Advanced SQL"],
  },
  {
    name: "BI & Analytics",
    items: ["Power BI", "DAX", "Power Query (M)", "Power BI Embedded", "Tableau"],
  },
  {
    name: "Source Systems",
    items: ["MySQL", "MS SQL Server", "Snowflake Cross-Region", "Flat Files (CSV/Excel)"],
  },
  {
    name: "Governance & Security",
    items: ["Row-Level Security (RLS)", "Unity Catalog", "GSI Data Lake", "OLS", "Azure AD", "CWS ID Groups"],
  },
  {
    name: "Delivery",
    items: ["Azure DevOps", "CI/CD", "Agile/Scrum", "Git", "Team Leadership (10+ members)"],
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
            Enterprise-grade expertise across Snowflake, Databricks, SnapLogic, and Power BI ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="p-6 rounded-xl border border-border bg-card">
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
