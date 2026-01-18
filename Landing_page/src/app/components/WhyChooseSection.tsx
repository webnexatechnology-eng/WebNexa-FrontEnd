import { CheckCircle2, Users, Target, TrendingUp, Award } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Users,
      title: 'Dedicated Professionals',
      description: 'Our team of skilled experts brings years of experience and passion to every project.',
    },
    {
      icon: Target,
      title: 'Customer-Centric Approach',
      description: 'We prioritize your needs and goals, ensuring solutions that truly work for you.',
    },
    {
      icon: TrendingUp,
      title: 'Long-term Success',
      description: 'Focused on continuous improvement and sustainable growth for your business.',
    },
    {
      icon: Award,
      title: 'End-to-End Services',
      description: 'From development to marketing, we provide comprehensive solutions under one roof.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white relative overflow-hidden transition-colors">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why WebNexa Tech Pvt. Ltd.?
          </h2>
          <p className="text-xl font-bold text-blue-100 mb-2">
            Innovative Technology. Reliable Results.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            With extensive industry experience, a team of passionate professionals, and an unwavering commitment to quality, WebNexa Tech Pvt. Ltd. is your trusted partner for software development, mobile and web app development, and digital marketing services in India. From startups to established enterprises, we deliver customized IT solutions that drive measurable business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-blue-100">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <CheckCircle2 size={24} />
            <span className="text-lg">Trusted by businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}