import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="top"   className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          Enterprise Data
          <br />
          <span className="text-gradient glow-text">Platform Architect</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
          I architect and optimize Azure-based lakehouse and BI platforms 
          using Databricks, Snowflake, and Power BI — focused on performance, 
          governance, and cloud cost efficiency.
        </p>

        <p className="text-sm text-muted-foreground font-mono mb-4">
          10+ years experience · 100M+ rows processed · 30–40% performance & cost optimization delivered
        </p>
        <p className="text-sm text-muted-foreground mb-10">
          Leading cross-functional data platform initiatives across enterprise environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            View Projects
          </a>

          <a
            href="/mayank_khandelwal_Resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-medium hover:bg-secondary/60 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
