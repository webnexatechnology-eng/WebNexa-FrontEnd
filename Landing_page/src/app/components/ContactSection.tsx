import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      setSuccess(false);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const res = await fetch("https://webnexa-backend.onrender.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error("Failed");

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

      setSuccess(true);
      toast.success("Your request has been received!");

      setTimeout(() => setSuccess(false), 4000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldClass =
  "w-full h-11 rounded-md border px-3 text-sm bg-white dark:bg-gray-700 dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";


  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* FORM */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

            <form onSubmit={handleSubmit} className="space-y-5">

              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className={fieldClass}/>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Business Email *" required className={fieldClass} />
              <Input name="company" value={formData.company} onChange={handleChange} placeholder="Company / Startup Name" className={fieldClass} />

              <select name="projectType" value={formData.projectType} onChange={handleChange} required className="w-full h-11 rounded-md border px-3 bg-white dark:bg-gray-700 dark:border-gray-600">
                <option value="">Select Project Type *</option>
                <option value="website">Website / Landing Page</option>
                <option value="webapp">Web Application</option>
                <option value="mobile">Mobile App</option>
                <option value="saas">SaaS Platform</option>
                <option value="other">Other</option>
              </select>

              <select name="budget" value={formData.budget} onChange={handleChange} required className="w-full h-11 rounded-md border px-3 bg-white dark:bg-gray-700 dark:border-gray-600">
                <option value="">Estimated Budget *</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>

              <select name="timeline" value={formData.timeline} onChange={handleChange} required className="w-full h-11 rounded-md border px-3 bg-white dark:bg-gray-700 dark:border-gray-600">
                <option value="">Project Timeline *</option>
                <option value="urgent">ASAP</option>
                <option value="1-3">1–3 Months</option>
                <option value="3-6">3–6 Months</option>
                <option value="flexible">Flexible</option>
              </select>

              <Textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Briefly describe your project..." required className={fieldClass} />

              <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" /> Send Request
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Your data is confidential. NDA & privacy respected.
              </p>

              {success && (
                <div className="flex items-center justify-center gap-2 text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle2 />
                  Your request has been sent successfully!
                </div>
              )}

            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Turn your vision into reality with WebNexa Tech Pvt. Ltd., a leading software development company in India. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">webnexa.technology@gmail.com</p>
                  <p className="text-gray-600 dark:text-gray-400">contact.webnexatech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 7489498425</p>
                  {/* <p className="text-gray-600 dark:text-gray-400">+1 (555) 987-6543</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    186 LIG-2 Bagmugaliya ext<br />
                    Laharpur<br />
                    Bhopal, MP 462043
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Office Hours</h4>
              <p className="text-gray-600 dark:text-gray-400">Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-600 dark:text-gray-400">Saturday – Sunday: Closed</p>
              {/* <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
