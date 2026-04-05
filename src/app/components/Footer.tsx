import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import iconicaLogoSrc from '../../assets/00ae5a5bf96ad0a467a78b5cb2dac25336ad0c63.png';
const iconicaLogo = typeof iconicaLogoSrc === 'string' ? iconicaLogoSrc : iconicaLogoSrc.default;
import { vehicles } from '../data/vehicles';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0a0b0f] to-[#050507] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stay Updated Section */}
        <div className="mb-16 p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Stay Updated</h3>
            <p className="text-white/60 mb-6">
              Be the first to know about our latest launches, updates, and exclusive offers from ICONICA.
            </p>
            
            {subscribed ? (
              <div className="text-[#00ff88] font-semibold">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={iconicaLogo} alt="ICONICA" className="h-12 w-auto" />
            <p className="text-white/60 text-sm">
              The future of electric mobility. High-performance electric scooters engineered for modern riders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#00ff88] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00ff88] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/iconicaglobex?igsh=MWRpejd2a3U2YzZidA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#00ff88] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#00ff88] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/charging" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Charging
                </Link>
              </li>
              <li>
                <Link to="/test-ride" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Test Ride
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/60 hover:text-[#00ff88] transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Models - All 11 Models */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Models</h3>
            <ul className="space-y-2">
              {vehicles.map((vehicle) => (
                <li key={vehicle.id}>
                  <Link 
                    to={`/vehicle/${vehicle.id}`} 
                    className="text-white/60 hover:text-[#00ff88] transition-colors text-sm"
                  >
                    {vehicle.model}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/60">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Plot No. AM 7, Sompura Industrial Area, Nidavanda Village, Nelamangala Taluk, Bangalore - 562 111</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 9310763390</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Mail size={18} className="flex-shrink-0" />
                <span>ceo@iconicaglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm">
              © 2026 ICONICA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-white/40 hover:text-[#00ff88] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/40 hover:text-[#00ff88] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-white/40 hover:text-[#00ff88] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}