import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-mono text-primary mb-3 tracking-wider uppercase">
          Opportunities
        </p>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Open to GCC & Enterprise Data Platform Roles
        </h2>

        <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto">
          Exploring senior data engineering and enterprise architecture opportunities 
          within Global Capability Centers, focused on scalable lakehouse platforms, 
          governance, and cloud cost optimization.
        </p>

        <p className="text-sm text-muted-foreground font-mono mb-10">
          60-day notice period · Can negotiate to 30 days · Open to Bangalore, Hyderabad, Pune, Chennai GCC roles
        </p>

        <a
          href="mailto:mayankkhandelwal08@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 mb-4"
        >
          <Mail className="w-4 h-4" />
          mayankkhandelwal08@gmail.com
        </a>

        {/* <p className="text-xs text-muted-foreground mt-2">
          60-day notice period · Can negotiate to 30 days · Open to Bangalore, Hyderabad, Pune, Chennai GCC roles
        </p> */}

        <div className="flex items-center justify-center gap-6 text-muted-foreground mt-6">
          <a
            href="https://linkedin.com/in/mayank-khandelwal-30953858"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/mayankkhandelwal"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
