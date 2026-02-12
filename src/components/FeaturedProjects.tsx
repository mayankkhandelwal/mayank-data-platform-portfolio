import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Azure Lakehouse Implementation – Insurance Domain",
    client: "Global Insurance Client",
    description:
      "Owned architecture and delivery of Azure Databricks Medallion platform, replacing legacy ETL pipelines and implementing enterprise-grade semantic modeling.",
    metrics: [
      { value: "100M+", label: "Daily Data Volume" },
      { value: "35%", label: "Cloud Cost Reduction" },
      { value: "20→4", label: "Report Refresh Time" },
    ],
    tags: ["Databricks", "Delta Lake", "ADF", "Power BI"],
  },
  {
    title: "Snowflake Performance & Cost Optimization",
    client: "Financial Services Enterprise",
    description:
      "Led Snowflake performance engineering initiative, implementing clustering strategy, workload isolation, and governance controls to reduce uncontrolled cloud spend.",
    metrics: [
      { value: "30–40%", label: "Cost Optimization" },
      { value: "60%", label: "Query Speed Improved" },
      { value: "500+", label: "Business Users" },
    ],
    tags: ["Snowflake", "SQL", "Power BI", "Cost Governance"],
  },
  {
    title: "Enterprise BI Governance & RLS Framework",
    client: "Multi-Region Manufacturing Group",
    description:
      "Designed centralized Power BI semantic model with dynamic Row-Level Security and environment separation (Dev/QA/Prod) for controlled access.",
    metrics: [
      { value: "700+", label: "Users Secured" },
      { value: "45%", label: "Duplicate Datasets Reduced" },
      { value: "10+", label: "Engineers Led" },
    ],
    tags: ["Power BI", "DAX", "Azure AD", "Unity Catalog"],
  },
];



const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">Selected Enterprise Initiatives
</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Enterprise Architecture Engagements
</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Enterprise data platform initiatives delivering measurable performance, governance, and cost impact.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 glow-border"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-mono text-primary mb-2">{project.client}</p>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl md:text-3xl font-bold font-mono text-metric">
                        {m.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
