import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Founder, Fintech Startup",
      company: "Confidential Client",
      content:
        "Very professional team. They understood our requirements clearly and delivered on time with excellent quality. The communication and execution were top-notch.",
    },
    {
      name: "CTO, Healthcare Platform",
      company: "Confidential Client",
      content:
        "WebNexa Tech built a robust and scalable system for us. Their technical depth and structured process really impressed our internal team.",
    },
    {
      name: "Product Manager, SaaS Company",
      company: "Confidential Client",
      content:
        "From UI to backend, everything was delivered with high quality standards. We are extremely satisfied with the outcome and long-term support.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#0B1220] to-[#0E1628] text-white"
    >
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div>
            <div className="text-4xl font-bold">10+</div>
            <div className="text-gray-400 mt-1">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold">25+</div>
            <div className="text-gray-400 mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold">20+</div>
            <div className="text-gray-400 mt-1">Client Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold">3+</div>
            <div className="text-gray-400 mt-1">Countries Served</div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We build long-term partnerships by delivering reliable, scalable,
            and high-quality software solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-[#121B2F] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <Quote className="text-white" size={22} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-8">
                “{t.content}”
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/10">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-sm text-gray-400">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
