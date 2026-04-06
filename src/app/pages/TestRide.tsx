import { motion } from 'motion/react';
import { useState } from 'react';
import { GlowButton } from '../components/GlowButton';
import { vehicles } from '../data/vehicles';
import { Calendar, MapPin, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import dealerImage from '../../assets/2e21e76cea61835ee54bfc253a56436d58d437b3.png';

export default function TestRide() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    model: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('phone', formData.phone);
      fd.append('email', formData.email);
      fd.append('city', formData.city);
      fd.append('model', formData.model);
      fd.append('date', formData.date);
      fd.append('message', formData.message);
      fd.append('sheetName', 'TestRideForm');
      await fetch('https://script.google.com/macros/s/AKfycby_PsTewf8KC0dbR47ap0xZTk0C94TY7_VsZYayXCarc00GINbhTrCrusydHRhKExiqVA/exec', {
        method: 'POST',
        body: fd
      });
    } catch (error) {
      console.error('Failed to submit form to Google Sheet', error);
    }
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="p-12 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-12 h-12 text-[#0a0b0f]" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4 text-white">Booking Confirmed!</h1>
            <p className="text-xl text-white/70 mb-8">
              Thank you, {formData.name}! We've received your test ride request for the {formData.model}.
              Our team will contact you shortly at {formData.phone} to confirm your booking.
            </p>
            <GlowButton variant="primary" onClick={() => setSubmitted(false)}>
              Book Another Test Ride
            </GlowButton>
          </div>
        </motion.div>
      </div>
    );
  }

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
              Book a Test Ride
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Experience the future of electric mobility firsthand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="flex text-white mb-2 items-center space-x-2">
                    <User size={18} />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="flex text-white mb-2 items-center space-x-2">
                    <Phone size={18} />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex text-white mb-2 items-center space-x-2">
                    <Mail size={18} />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="flex text-white mb-2 items-center space-x-2">
                    <MapPin size={18} />
                    <span>City *</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                    placeholder="Your city"
                  />
                </div>

                {/* Model */}
                <div>
                  <label htmlFor="model" className="block text-white mb-2">
                    Preferred Model *
                  </label>
                  <select
                    id="model"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                  >
                    <option value="" className="bg-[#0a0b0f]">Select a model</option>
                    {vehicles.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.name} className="bg-[#0a0b0f]">
                        {vehicle.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="flex text-white mb-2 items-center space-x-2">
                    <Calendar size={18} />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors resize-none"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                {/* Submit Button */}
                <GlowButton type="submit" variant="primary" className="w-full">
                  Book Test Ride
                </GlowButton>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Expert guidance from our trained staff',
                    'Test ride on your preferred model',
                    'Detailed product demonstration',
                    'Technical specifications walkthrough',
                    'Financing and payment options discussion',
                    'Questions and answers session'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-[#00ff88] mt-1 flex-shrink-0" size={20} />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Important Information</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Valid driver's license required</li>
                  <li>• Minimum age: 18 years</li>
                  <li>• Test rides are 15-20 minutes</li>
                  <li>• Subject to availability</li>
                  <li>• We'll confirm within 24 hours</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-white">Need Help?</h3>
                <div className="space-y-3 text-white/80">
                  <p className="flex items-center space-x-2">
                    <Phone size={18} className="text-[#00ff88]" />
                    <span>+91 9310763990</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail size={18} className="text-[#00ff88]" />
                    <span>ceo@iconicaglobal.com</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dealer Locations */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Find a Dealer Near You</h2>
            <p className="text-xl text-white/60">Visit our authorized dealers for test rides and purchases</p>
          </motion.div>

          {/* Featured Dealer Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <img 
              src={dealerImage} 
              alt="ICONICA Showroom"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Dealer locations grid removed as requested */}
        </div>
      </section>
    </div>
  );
}