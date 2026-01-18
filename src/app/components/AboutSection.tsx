import { Users, Target, Award, Zap, Code, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Frontend & Backend Development',
      description: 'We build robust and scalable web applications using the latest technologies, frameworks, and industry best practices to ensure high performance and reliability.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Our team creates native iOS and Android apps with intuitive UX/UI, seamless functionality, and optimized performance to engage your users effectively.',
    },
    {
      icon: Target,
      title: 'SMO & Marketing',
      description: 'Boost your online presence with our strategic social media optimization (SMO) and targeted digital marketing campaigns designed to generate leads and drive business growth.',
    },
    {
      icon: Award,
      title: 'Product Marketing',
      description: 'From concept to launch, we offer end-to-end product marketing solutions, helping businesses achieve measurable results and maximize ROI.',
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'By leveraging cutting-edge technologies, WebNexa delivers future-ready digital solutions that keep your business ahead of the competition.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'We focus on personalized IT solutions and dedicated support, ensuring every client gets tailored strategies and long-term value.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About WebNexa Tech Pvt. Ltd.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            WebNexa Tech Pvt. Ltd. is a cutting-edge software development company in India, delivering comprehensive IT solutions for businesses of all sizes. We specialize in web development, mobile app development, digital marketing services, and product marketing, bridging innovation with technology to transform your business vision into reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
