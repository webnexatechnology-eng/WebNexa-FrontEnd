import { motion } from "motion/react";
import { ShieldCheck, ShoppingCart, FileText, Calendar } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Website & Online Store",
      industry: "Retail / Grocery / D2C Business",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
      problem:
        "Client wanted to start selling products online with online payments and delivery management.",
      solution:
        "We built a full e-commerce platform with product management, cart, checkout, payment gateway, and admin panel.",
      result:
        "Business started selling online 24/7 and increased reach beyond local customers.",
    },
    {
      icon: FileText,
      title: "Billing, Invoice & Business Management System",
      industry: "Shop / Service / Agency Business",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
      problem:
        "Client was using manual billing and Excel sheets which caused errors and time waste.",
      solution:
        "We built a billing system with invoice generation, customer management, reports, and payment tracking.",
      result:
        "Billing became faster, more professional, and business records became fully organized.",
    },
    {
      icon: Calendar,
      title: "Online Booking & Appointment System",
      industry: "Clinic / Salon / Consultant / Service Provider",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      problem:
        "Client was managing appointments on phone calls and WhatsApp which caused confusion and missed bookings.",
      solution:
        "We built an online booking system with time slots, admin dashboard, and customer management.",
      result:
        "Customers can book anytime and the business now manages everything from one dashboard.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Build For Our Clients
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We respect client confidentiality. Below are real-world solution types we deliver without revealing client names or sensitive business data.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm">
            <ShieldCheck size={18} />
            Client Privacy & NDA Protected
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all relative"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Industry: {project.industry}
                  </p>

                  <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p><strong>Problem:</strong> {project.problem}</p>
                    <p><strong>Solution:</strong> {project.solution}</p>
                    <p><strong>Result:</strong> {project.result}</p>
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div className="h-1 w-0 z-10 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 absolute bottom-0 left-0"></div>
                {/* <div className="h-0 w-1 z-10 group-hover:h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 absolute top-0 left-0"></div>
                <div className="h-0 w-1 z-10 group-hover:h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 absolute bottom-0 right-0"></div>
                <div className="h-1 w-0 z-10 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 absolute top-0 right-0"></div> */}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
