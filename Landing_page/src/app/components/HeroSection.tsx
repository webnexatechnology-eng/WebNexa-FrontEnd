import { Button } from "@/app/components/ui/button";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";
import HeroImage from "../../Assets/hero.svg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto p-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 py-2 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 
      bg-blue-100 text-blue-700 
      dark:bg-blue-900/30 dark:text-blue-400 
      px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles size={16} />
              Trusted by startups & growing businesses
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold 
      text-gray-900 dark:text-white 
      leading-tight"
            >
              We Build & Launch{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                High-Impact Digital Products
              </span>{" "}
              for Startups & Businesses
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl 
      text-gray-600 dark:text-gray-300 
      max-w-xl mx-auto lg:mx-0"
            >
              WebNexa helps founders and companies design, build, and scale powerful websites, SaaS platforms, and digital systems.
            </motion.p>

            {/* Feature bullets */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm md:text-base 
    text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Zap className="text-blue-600 dark:text-blue-400" size={18} /> Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-600 dark:text-green-400" size={18} /> Production-Ready Quality
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="text-purple-600 dark:text-purple-400" size={18} /> Built for Scale
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 
        hover:from-blue-700 hover:to-purple-700 
        text-white px-8 py-6 text-lg rounded-full"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>

              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2 
        text-gray-900 dark:text-white 
        border-gray-300 dark:border-gray-600 
        hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                View Our Work
              </Button>
            </div>

          </div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <motion.img
              src={HeroImage}
              alt="WebNexa platform illustration"
              className="w-full max-w-xl mx-auto"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -inset-12 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
