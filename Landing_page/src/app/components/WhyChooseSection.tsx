import { CheckCircle2, Users, Target, TrendingUp, Award, Zap, ShieldCheck, Rocket } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Zap,
      title: 'Fast & Reliable Execution',
      description: 'We move fast without breaking quality. From idea to launch, we help you ship products quickly and correctly.',
    },
    {
      icon: Target,
      title: 'Business-First Approach',
      description: 'We don’t just build software — we build solutions that solve real business problems and generate ROI.',
    },
    {
      icon: ShieldCheck,
      title: 'Production-Grade Quality',
      description: 'Clean code, scalable architecture, secure systems, and future-proof tech from day one.',
    },
    {
      icon: Rocket,
      title: 'Built for Scale',
      description: 'Whether you are a startup or a growing company, we build systems that grow with your business.',
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
            Why Businesses Choose WebNexa?
          </h2>
          <p className="text-xl font-semibold text-blue-100 mb-2">
            We Don’t Just Build Software. We Build Growth Engines.
          </p>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We help startups and businesses design, build, and scale high-impact digital products. From MVPs to full-scale platforms, our focus is simple: build systems that help you grow faster, operate smarter, and sell better.
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
            <span className="text-lg">
              Trusted by startups, founders, and growing businesses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
