import { motion } from 'motion/react';
import { useState } from 'react';
import { GlowButton } from '../components/GlowButton';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['ceo@iconicaglobal.com'],
      color: '#00ff88'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 93107663990'],
      color: '#00d4aa'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['Plot No. AM 7, Sompura Industrial Area', 'Nidavanda Village, Nelamangala Taluk', 'Bangalore - 562 111'],
      color: '#00e5ff'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
      color: '#00ff88'
    }
  ];

  const departments = [
    'General Inquiry',
    'Sales',
    'Support',
    'Partnership',
    'Media',
    'Careers'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-opacity-30 transition-all duration-300"
                  style={{ borderColor: `${info.color}20` }}
                >
                  <Icon className="w-8 h-8 mb-4" style={{ color: info.color }} />
                  <h3 className="text-lg font-bold mb-3 text-white">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/60 text-sm mb-1">{detail}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[#0a0b0f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    >
                      <option value="" className="bg-[#0a0b0f]">Select a subject</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept} className="bg-[#0a0b0f]">
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Submit */}
                  <GlowButton type="submit" variant="primary" className="w-full">
                    Send Message
                  </GlowButton>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Quick Support</h3>
                <p className="text-white/70 mb-6">
                  Need immediate assistance? Our support team is available to help you with any questions or concerns.
                </p>
                <div className="space-y-4">
                  <a href="mailto:ceo@iconicaglobal.com" className="flex items-center space-x-3 text-[#00ff88] hover:text-[#00d4aa] transition-colors">
                    <Mail size={20} />
                    <span>ceo@iconicaglobal.com</span>
                  </a>
                  <a href="tel:+919310763990" className="flex items-center space-x-3 text-[#00ff88] hover:text-[#00d4aa] transition-colors">
                    <Phone size={20} />
                    <span>+91 9310763990</span>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">FAQs</h3>
                <p className="text-white/70 mb-4">
                  Find answers to commonly asked questions in our FAQ section.
                </p>
                <button className="text-[#00ff88] hover:text-[#00d4aa] transition-colors font-medium">
                  Visit FAQ Page →
                </button>
              </div>

              <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Social Media</h3>
                <p className="text-white/70 mb-6">
                  Connect with us on social media for the latest updates and news.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/20 border border-white/10 hover:border-[#00ff88]/50 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white/60" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/20 border border-white/10 hover:border-[#00ff88]/50 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5 text-white/60" />
                  </a>
                  <a
                    href="https://www.instagram.com/iconicaglobex?igsh=MWRpejd2a3U2YzZidA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/20 border border-white/10 hover:border-[#00ff88]/50 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white/60" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-[#00ff88]/20 border border-white/10 hover:border-[#00ff88]/50 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white/60" />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Careers</h3>
                <p className="text-white/70 mb-4">
                  Interested in joining the ICONICA team? We're always looking for talented individuals.
                </p>
                <a
                  href="/careers"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-[#00e5ff] to-[#00ff88] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300"
                >
                  View Open Positions & Apply
                </a>
                <button className="text-[#00e5ff] hover:text-[#00d4aa] transition-colors font-medium">
                  View Open Positions →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with Real Address and Google Map */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            style={{ minHeight: '32rem' }}
          >
            <div className="w-full flex flex-col items-center justify-center py-8">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-[#00ff88]" />
              <h3 className="text-2xl font-bold text-white mb-2">Visit Our Headquarters</h3>
              <p className="text-white/60 text-lg font-medium mb-6 text-center">
                Plot No. AM 7, Sompura Industrial Area,<br />
                Nidavanda Village, Nelamangala Taluk,<br />
                Bangalore - 562 111
              </p>
              <div className="w-full flex justify-center">
                <iframe
                  title="Google Map - ICONICA HQ"
                  src="https://www.google.com/maps?q=Plot+No.+AM+7,+Sompura+Industrial+Area,+Nidavanda+Village,+Nelamangala+Taluk,+Bangalore+-+562+111&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '1rem', maxWidth: '700px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}