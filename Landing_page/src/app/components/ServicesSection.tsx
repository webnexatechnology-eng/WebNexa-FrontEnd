import { Code, Smartphone, Megaphone, TrendingUp, Server, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'Startup & SaaS Product Development',
      description: 'From idea to MVP to scale. We design, build, and launch production-grade SaaS and digital products that are fast, scalable, and ready for growth.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1080',
    },
    {
      icon: Code,
      title: 'High-Performance Web Development',
      description: 'Modern, fast, SEO-friendly websites and web apps built with React, Next.js, and scalable architectures to convert visitors into customers.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080',
    },
    {
      icon: Server,
      title: 'Backend & System Architecture',
      description: 'Secure, scalable backend systems, APIs, dashboards, CRMs, and automation platforms designed to handle real business load.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1080',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'High-quality Android & iOS apps built for performance, usability, and long-term scalability.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1080',
    },
    {
      icon: Megaphone,
      title: 'Digital Growth & Brand Presence',
      description: 'We help you build authority, trust, and inbound leads using smart digital strategies and conversion-focused content.',
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1080',
    },
    {
      icon: TrendingUp,
      title: 'Product Launch & Scaling Strategy',
      description: 'We don’t stop at building. We help you launch, optimize, and scale your product to real users and real revenue.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What We Build For You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We design, build, and scale digital products and platforms that help businesses grow faster, operate smarter, and sell better.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="text-gray-900 dark:text-white" size={28} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
