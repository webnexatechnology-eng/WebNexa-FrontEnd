import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { getProjectById, projects } from '@/app/data/projects';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2" size={20} />
            Back to All Projects
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900 transition-colors">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <Button variant="outline" onClick={() => navigate('/projects')}>
          <ArrowLeft className="mr-2" size={20} />
          Back to All Projects
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden mb-12">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm text-blue-400 font-semibold mb-2">{project.category}</div>
              <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{project.shortDescription}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges</h2>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-red-600 dark:text-red-400 text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Solutions</h2>
              </div>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                    <CheckCircle2 className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Results & Impact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 p-6 rounded-xl border border-green-200 dark:border-green-800"
                  >
                    <CheckCircle2 className="text-green-600 dark:text-green-400 mb-3" size={24} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="text-gray-600 dark:text-gray-400 mr-3" size={20} />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Client</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{project.client}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="text-gray-600 dark:text-gray-400 mr-3" size={20} />
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{project.duration}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Key Outcome</div>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg font-semibold text-center">
                    {project.outcome}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Link to="/#contact">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to={`/projects/${prevProject.id}`} className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={prevProject.image}
                  alt={prevProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-blue-400 mb-2">Previous Project</div>
                  <h4 className="text-2xl font-bold text-white">{prevProject.title}</h4>
                </div>
              </div>
            </Link>

            <Link to={`/projects/${nextProject.id}`} className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-blue-400 mb-2">Next Project</div>
                  <h4 className="text-2xl font-bold text-white">{nextProject.title}</h4>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
