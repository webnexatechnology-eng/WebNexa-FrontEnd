import { motion } from "motion/react";
import { ShieldCheck, Building2, Rocket, Layers } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      icon: Building2,
      title: "Enterprise CRM & Sales Automation Platform",
      industry: "B2B Services Company",
      problem: "Client needed a centralized system to manage leads, sales pipeline, and customer communication.",
      solution:
        "We designed and built a secure CRM platform with lead tracking, role-based access, analytics dashboard, and automated follow-ups.",
      result: "Improved sales tracking efficiency and reduced manual work by over 60%.",
    },
    {
      icon: Rocket,
      title: "SaaS Lead Management & Analytics System",
      industry: "Marketing & Growth Company",
      problem: "Client struggled to manage leads coming from multiple channels and had no visibility into conversions.",
      solution:
        "We built a scalable SaaS platform with lead capture, tagging, pipeline management, and conversion analytics.",
      result: "Enabled real-time tracking of leads and improved conversion decision-making.",
    },
    {
      icon: Layers,
      title: "Business Operations & Workflow Automation Tool",
      industry: "Operations & Consulting Firm",
      problem: "Internal processes were scattered across tools and spreadsheets.",
      solution:
        "We developed a custom internal platform to manage workflows, tasks, documents, and reporting in one system.",
      result: "Streamlined operations and significantly reduced operational overhead.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work & Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We respect client confidentiality. Below are selected case studies presented without revealing client names or sensitive business information.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm">
            <ShieldCheck size={18} />
            NDA & Client Privacy Protected
          </div>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  Industry: {project.industry}
                </p>

                <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Result:</strong> {project.result}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
