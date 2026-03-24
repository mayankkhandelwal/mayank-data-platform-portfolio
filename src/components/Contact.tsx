import { Mail, Linkedin, Phone } from "lucide-react";

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
          Exploring senior Data Platform Architect, BI Architect, and Lead Data Engineer opportunities
          within GCCs and MNCs. Focused on scalable lakehouse platforms, Snowflake, Power BI, and cloud cost optimization.
        </p>

        <p className="text-sm text-muted-foreground font-mono mb-10">
          Available from April 2026 · Open to Indore, Bangalore, Hyderabad, Pune, Remote
        </p>

        <a
          href="mailto:mayankkhandelwal08@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 mb-4"
        >
          <Mail className="w-4 h-4" />
          mayankkhandelwal08@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 text-muted-foreground mt-6">
          <a
            href="https://linkedin.com/in/mayank-khandelwal-30953858"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2 text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="tel:+919977791323"
            className="hover:text-primary transition-colors flex items-center gap-2 text-sm"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
            +91 9977791323
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
