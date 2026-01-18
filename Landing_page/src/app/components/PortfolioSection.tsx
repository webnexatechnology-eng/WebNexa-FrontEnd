import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '@/app/data/projects';

export function PortfolioSection() {
  const navigate = useNavigate();
  
  // Take only first 3 projects for preview
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transforming Businesses with Innovative Technology Solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {featuredProjects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-gray-900 dark:text-white" size={20} />
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {project.outcome}
                    </div>
                    <ArrowRight className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="px-8" onClick={() => navigate('/projects')}>
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}