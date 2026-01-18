import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "@/Assets/Logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
              <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">WebNexa</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Pvt Ltd</p>
            </div>
            </div>
            <p className="text-gray-400 text-sm">
              Bridging Innovation with Technology. Your trusted partner for comprehensive software development and digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Mobile Development</li>
              <li>SMO & Marketing</li>
              <li>Product Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>webnexa.technology@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 7489498425</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>186 LIG-2 Bagmugaliya ext Laharpur Bhopal, MP 462043</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://x.com/tech_webnexa"
                className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/webnexa-tech-9b8b8a3a6/"
                className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/webne.xa/?hl=en"
                className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} 2Square Tech Pvt Ltd. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            {' '} | {' '}
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
