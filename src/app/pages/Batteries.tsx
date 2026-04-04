import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Battery, 
  Shield, 
  Zap, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Package,
  Truck,
  Sun,
  ShoppingCart
} from 'lucide-react';
import { GlowButton } from '../components/GlowButton';
// Replace with actual image imports if available
import anaishaBatteryImage from '../../assets/anaisha_battery.png';
import iconicaLogo from '../../assets/iconica_logo.png';

export default function Batteries() {
  const navigate = useNavigate();

  const handleBuyNow = (battery: any, type: string) => {
    navigate('/buy-now', {
      state: {
        id: battery.model,
        name: battery.name,
        type: 'battery',
        specs: battery.specs,
        price: 'Contact for pricing',
        category: type
      }
    });
  };

  const ev2WheelerBatteries = [
    {
      name: 'Anaisha Power 60',
      model: 'ANB-LFP-P-60V25Ah-EV2W',
      range: '70–80 km',
      bestFor: 'Daily commuting',
      warranty: '1 Year',
      specs: {
        voltage: '60V',
        capacity: '25Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Pro 60',
      model: 'ANB-LFP-PR-60V31Ah-EV2W',
      range: '90–100 km',
      bestFor: 'Better backup & performance',
      warranty: '1 Year',
      specs: {
        voltage: '60V',
        capacity: '31Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Ultra 60',
      model: 'ANB-LFP-UL-60V45Ah-EV2W',
      range: '120–140 km',
      bestFor: 'High performance',
      warranty: '18 Months',
      specs: {
        voltage: '60V',
        capacity: '45Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Max 60',
      model: 'ANB-LFP-MX-60V100Ah-EV2W',
      range: '200+ km',
      bestFor: 'Delivery / heavy-duty use',
      warranty: '2 Years',
      specs: {
        voltage: '60V',
        capacity: '100Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    }
  ];

  const eRickshawBatteries = [
    {
      name: 'Anaisha Max 48',
      model: 'ANB-LFP-MX-48V100Ah-EV3W',
      bestFor: 'Strong load performance',
      warranty: '18 Months',
      specs: {
        voltage: '48V',
        capacity: '100Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Max 60',
      model: 'ANB-LFP-MX-60V120Ah-EV3W',
      bestFor: 'High torque output',
      warranty: '18 Months',
      specs: {
        voltage: '60V',
        capacity: '120Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Ultra 72',
      model: 'ANB-LFP-UL-72V120Ah-EV3W',
      bestFor: 'Premium long-range battery',
      warranty: '2 Years',
      specs: {
        voltage: '72V',
        capacity: '120Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    }
  ];

  const solarBatteries = [
    {
      name: 'Anaisha Eco 12',
      model: 'ANB-LFP-EC-12.8V100Ah-ESS',
      specs: {
        voltage: '12.8V',
        capacity: '100Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Eco 24',
      model: 'ANB-LFP-EC-25.6V100Ah-ESS',
      specs: {
        voltage: '25.6V',
        capacity: '100Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Pro Solar',
      model: 'ANB-LFP-PR-48V100Ah-ESS',
      specs: {
        voltage: '48V',
        capacity: '100Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    },
    {
      name: 'Anaisha Ultra Storage',
      model: 'ANB-LFP-UL-51.2V200Ah-ESS',
      specs: {
        voltage: '51.2V',
        capacity: '200Ah',
        chemistry: 'LFP (LiFePO₄)'
      }
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Advanced LFP Technology',
      description: 'High-performance Lithium Iron Phosphate batteries for optimal efficiency',
      color: '#00ff88'
    },
    {
      icon: Shield,
      title: 'Intelligent BMS Protection',
      description: 'Smart battery management system with multiple safety layers',
      color: '#00d4aa'
    },
    {
      icon: TrendingUp,
      title: 'Long Lifecycle',
      description: '2000+ charge cycles for extended battery life',
      color: '#00e5ff'
    },
    {
      icon: Award,
      title: 'BIS Ready Design',
      description: 'Compliant with Indian safety standards',
      color: '#00ff88'
    }
  ];

  const smartFeatures = [
    'QR Code Warranty System',
    'Short Circuit Protection',
    'Overcharge / Overdischarge Protection',
    'Thermal Protection',
    'Deep Discharge Safety',
    'Lightweight & Compact Design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-6">
              <img src={iconicaLogo} alt="ICONICA" className="h-16 md:h-20" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
              Anaisha Batteries
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-4">
              Powered by Iconica Globex Pvt Ltd
            </p>
            <p className="text-lg md:text-xl text-[#00ff88] font-semibold">
              Powering Every Ride | Reliable Energy. Trusted Performance.
            </p>
          </motion.div>

          {/* Featured Battery Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-3xl mx-auto mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent rounded-2xl"></div>
            <img 
              src={anaishaBatteryImage} 
              alt="Anaisha Battery"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">About Anaisha Batteries</h2>
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Anaisha Batteries is a next-generation lithium battery brand focused on EV mobility 
              and energy storage solutions in India. We specialize in EV 2-Wheeler Batteries, 
              E-Rickshaw Batteries, and Solar & Inverter Storage solutions.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-opacity-30 transition-all duration-300"
                  style={{ borderColor: `${feature.color}20` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-50"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                    <Icon className="relative w-12 h-12 md:w-16 md:h-16" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-sm md:text-base text-white/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EV 2-Wheeler Series */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-[#00ff88] mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">EV 2-Wheeler Series</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Premium batteries for electric scooters and bikes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {ev2WheelerBatteries.map((battery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <Battery className="w-12 h-12 text-[#00ff88] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{battery.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{battery.model}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Range</span>
                    <span className="text-sm text-white font-semibold">{battery.range}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Voltage</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.voltage}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Capacity</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Warranty</span>
                    <span className="text-sm text-[#00ff88] font-semibold">{battery.warranty}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-white/70 italic">"{battery.bestFor}"</p>
                </div>

                <button
                  className="w-full py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] rounded-lg text-[#0a0b0f] font-semibold hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => handleBuyNow(battery, 'EV 2-Wheeler')}
                >
                  <ShoppingCart size={18} />
                  <span>Buy Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Rickshaw Series */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Truck className="w-8 h-8 text-[#00d4aa] mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">E-Rickshaw Series</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Heavy-duty batteries for commercial vehicles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {eRickshawBatteries.map((battery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00d4aa]/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <Battery className="w-12 h-12 text-[#00d4aa] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{battery.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{battery.model}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Voltage</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.voltage}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Capacity</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Warranty</span>
                    <span className="text-sm text-[#00d4aa] font-semibold">{battery.warranty}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-white/70 italic">"{battery.bestFor}"</p>
                </div>

                <button
                  className="w-full py-3 bg-gradient-to-r from-[#00d4aa] to-[#00e5ff] rounded-lg text-[#0a0b0f] font-semibold hover:shadow-lg hover:shadow-[#00d4aa]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => handleBuyNow(battery, 'E-Rickshaw')}
                >
                  <ShoppingCart size={18} />
                  <span>Buy Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar / Inverter Series */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Sun className="w-8 h-8 text-[#00e5ff] mr-3" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">Solar / Inverter Series</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Energy storage solutions for home and business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {solarBatteries.map((battery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00e5ff]/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <Battery className="w-12 h-12 text-[#00e5ff] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{battery.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{battery.model}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Voltage</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.voltage}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Capacity</span>
                    <span className="text-sm text-white font-semibold">{battery.specs.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Type</span>
                    <span className="text-sm text-[#00e5ff] font-semibold">ESS</span>
                  </div>
                </div>

                <button
                  className="w-full py-3 bg-gradient-to-r from-[#00e5ff] to-[#00d4aa] rounded-lg text-[#0a0b0f] font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => handleBuyNow(battery, 'Solar / Inverter')}
                >
                  <ShoppingCart size={18} />
                  <span>Buy Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Smart Features</h2>
            <p className="text-lg md:text-xl text-white/60">Advanced technology for safety and performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#00ff88]/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl"
          >
            <Battery className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-[#00ff88]" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Power Your Journey</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-8 px-4">
              Experience the future of energy storage with Anaisha Batteries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <GlowButton variant="primary">Contact Us</GlowButton>
              </Link>
              <Link to="/dealers">
                <GlowButton variant="outline">Find a Dealer</GlowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}