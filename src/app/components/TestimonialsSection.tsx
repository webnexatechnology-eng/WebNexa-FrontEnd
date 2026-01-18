import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc',
      content: 'Webnexa Tech transformed our vision into a stunning reality. Their frontend expertise and attention to detail exceeded all our expectations. Highly recommended!',
      rating: 4,
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Global Solutions',
      content: 'The backend systems they built for us are rock-solid. Scalable, secure, and performant. 2Square Tech truly understands enterprise-level development.',
      rating: 4,
      image: 'https://i.pravatar.cc/150?img=13',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandBoost',
      content: 'Their SMO strategies took our social media presence to the next level. We saw a 300% increase in engagement within just three months!',
      rating: 4,
      image: 'https://i.pravatar.cc/150?img=5',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}