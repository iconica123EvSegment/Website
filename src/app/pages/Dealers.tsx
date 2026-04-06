import { motion } from 'motion/react';
import { useState } from 'react';
import { GlowButton } from '../components/GlowButton';
import { MapPin, Phone, Mail, Building2, Users, Award, TrendingUp, Handshake } from 'lucide-react';

export default function Dealers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('company', formData.company);
      fd.append('city', formData.city);
      fd.append('experience', formData.experience);
      fd.append('investment', formData.investment);
      fd.append('message', formData.message);
      fd.append('sheetName', 'DealersForm');
      await fetch('https://script.google.com/macros/s/AKfycby_PsTewf8KC0dbR47ap0xZTk0C94TY7_VsZYayXCarc00GINbhTrCrusydHRhKExiqVA/exec', {
        method: 'POST',
        body: fd
      });
    } catch (error) {
      console.error('Failed to submit form to Google Sheet', error);
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        city: '', 
        experience: '', 
        investment: '', 
        message: '' 
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Award,
      title: 'Premium Brand',
      description: 'Associate with India\'s fastest-growing premium EV brand',
      color: '#00ff88'
    },
    {
      icon: TrendingUp,
      title: 'High Margins',
      description: 'Competitive pricing with attractive dealer margins',
      color: '#00d4aa'
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing business support',
      color: '#00e5ff'
    },
    {
      icon: Handshake,
      title: 'Marketing Support',
      description: 'National advertising and local marketing assistance',
      color: '#00ff88'
    }
  ];

  const requirements = [
    '300-500 sq ft showroom space in prime location',
    'Investment capacity of ₹15-25 lakhs',
    'Experience in automotive/EV industry (preferred)',
    'Strong local market knowledge',
    'Commitment to customer service excellence',
    'Team of 3-5 trained staff members'
  ];

  const cities = [
    'Bangalore', 'Delhi', 'Mumbai', 'Noida', 'Gurgaon', 'Pune',
    'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
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
              Become a Dealer
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8">
              Partner with ICONICA and be part of India's electric mobility revolution
            </p>
            <p className="text-white/60 max-w-2xl mx-auto">
              Join our rapidly expanding dealer network and help us bring sustainable, 
              high-performance electric scooters to riders across India.
            </p>
          </motion.div>
        </div>
      </section>


            {/* Application Form */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Apply Now</h2>
            <p className="text-xl text-white/60">Fill out the form and our team will contact you within 48 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-[#0a0b0f]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-white/60">Our team will review your application and contact you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name *
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

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="Your Company Pvt Ltd"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-white mb-2">
                      Preferred City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    >
                      <option value="" className="bg-[#0a0b0f]">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city} className="bg-[#0a0b0f]">
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-white mb-2">
                      Industry Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    >
                      <option value="" className="bg-[#0a0b0f]">Select Experience</option>
                      <option value="0-2" className="bg-[#0a0b0f]">0-2 years</option>
                      <option value="2-5" className="bg-[#0a0b0f]">2-5 years</option>
                      <option value="5-10" className="bg-[#0a0b0f]">5-10 years</option>
                      <option value="10+" className="bg-[#0a0b0f]">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="investment" className="block text-white mb-2">
                      Investment Capacity *
                    </label>
                    <select
                      id="investment"
                      name="investment"
                      required
                      value={formData.investment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    >
                      <option value="" className="bg-[#0a0b0f]">Select Range</option>
                      <option value="15-20" className="bg-[#0a0b0f]">₹15-20 Lakhs</option>
                      <option value="20-25" className="bg-[#0a0b0f]">₹20-25 Lakhs</option>
                      <option value="25+" className="bg-[#0a0b0f]">₹25+ Lakhs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors resize-none"
                    placeholder="Tell us about your business plans and why you want to partner with ICONICA..."
                  />
                </div>

                <GlowButton type="submit" variant="primary" className="w-full">
                  Submit Application
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Partner with ICONICA?</h2>
            <p className="text-xl text-white/60">Unlock unlimited growth potential in the EV industry</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mb-6" style={{ color: benefit.color }} />
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Dealership Requirements</h2>
              <p className="text-xl text-white/60 mb-8">
                We're looking for passionate partners who share our vision for sustainable mobility.
              </p>
              
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl"
                  >
                    <div className="w-2 h-2 mt-2 bg-[#00ff88] rounded-full flex-shrink-0"></div>
                    <p className="text-white/80">{req}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl"
            >
              <Building2 className="w-12 h-12 mb-6 text-[#00ff88]" />
              <h3 className="text-3xl font-bold mb-4 text-white">Investment Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-white/40 text-sm mb-2">Initial Investment</p>
                  <p className="text-2xl font-bold text-white">₹15 - 25 Lakhs</p>
                </div>
                
                <div>
                  <p className="text-white/40 text-sm mb-2">Showroom Space</p>
                  <p className="text-2xl font-bold text-white">300 - 500 sq ft</p>
                </div>
                
                <div>
                  <p className="text-white/40 text-sm mb-2">Expected ROI</p>
                  <p className="text-2xl font-bold text-white">18 - 24 months</p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm">
                    Includes: Inventory, Display Units, Signage, Training, Marketing Materials
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl text-center"
            >
              <Phone className="w-10 h-10 mx-auto mb-4 text-[#00ff88]" />
              <h3 className="text-lg font-bold mb-2 text-white">Call Us</h3>
              <p className="text-white/60">+91 9310763390</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl text-center"
            >
              <Mail className="w-10 h-10 mx-auto mb-4 text-[#00d4aa]" />
              <h3 className="text-lg font-bold mb-2 text-white">Email Us</h3>
              <p className="text-white/60">ceo@iconicaglobal.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl text-center"
            >
              <MapPin className="w-10 h-10 mx-auto mb-4 text-[#00e5ff]" />
              <h3 className="text-lg font-bold mb-2 text-white">Visit Us</h3>
              <p className="text-white/60 text-sm">Bangalore, India</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
