import { motion } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Battery,
  Gauge,
  Zap,
  Timer,
  Shield,
  Disc,
  Settings,
  Weight,
  ArrowLeft,
  CheckCircle2,
  Smartphone
} from 'lucide-react';
import { getVehicleById } from '../data/vehicles';
import { GlowButton } from '../components/GlowButton';
import { useState } from 'react';

export default function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const vehicle = id ? getVehicleById(id) : undefined;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#0a0b0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Vehicle Not Found</h1>
          <Link to="/vehicles">
            <GlowButton variant="outline">Back to Vehicles</GlowButton>
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { icon: Battery, label: vehicle.category === 'High Speed' ? 'Range' : 'Battery Type', value: vehicle.category === 'High Speed' ? `${vehicle.range} km` : vehicle.batteryType, color: '#00ff88' },
    { icon: Gauge, label: 'Top Speed', value: `${vehicle.topSpeed} km/h`, color: '#00d4aa' },
    { icon: Zap, label: vehicle.category === 'High Speed' ? 'Motor' : 'Voltage', value: vehicle.category === 'High Speed' ? vehicle.motor : vehicle.voltage, color: '#00e5ff' },
    { icon: Timer, label: vehicle.category === 'High Speed' ? 'Charging Time' : 'Category', value: vehicle.category === 'High Speed' ? `${vehicle.chargingTime} hours` : vehicle.category, color: '#00ff88' },
    { icon: Battery, label: 'Battery System', value: vehicle.battery, color: '#00d4aa' },
    { icon: Shield, label: 'Warranty', value: '3 Years', color: '#00e5ff' }
  ];

  const detailedSpecsArray = vehicle.detailedSpecs ? [
    { icon: Disc, label: 'Brakes', value: vehicle.detailedSpecs.brakes || 'N/A', color: '#00e5ff' },
    { icon: Settings, label: 'Suspension', value: vehicle.detailedSpecs.suspension || 'N/A', color: '#00ff88' },
    { icon: Weight, label: 'Load Capacity', value: vehicle.detailedSpecs.loadCapacity || 'N/A', color: '#00d4aa' }
  ] : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <Link to="/vehicles" className="inline-flex items-center space-x-2 text-white/60 hover:text-[#00ff88] transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">Back to Vehicles</span>
        </Link>
      </div>

      {/* Hero Section with Image Gallery */}
      <section className="relative py-8 md:py-12">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative mb-3 md:mb-4">
                <img 
                  src={vehicle.images[selectedImageIndex]} 
                  alt={`${vehicle.name} - View ${selectedImageIndex + 1}`}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff88]/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImageIndex === index 
                        ? 'ring-2 ring-[#00ff88] scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${vehicle.name} thumbnail ${index + 1}`}
                      className="w-full h-16 md:h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
                {vehicle.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#00ff88] mb-4 md:mb-6">{vehicle.tagline}</p>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8">{vehicle.description}</p>
              

              <div className="mb-6 md:mb-8 flex flex-col gap-2">
                <button
                  className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 text-lg"
                  onClick={() => {
                    navigate('/buy-now', {
                      state: {
                        id: vehicle.id,
                        name: vehicle.name,
                        type: 'vehicle',
                        image: vehicle.images[0],
                        price: vehicle.price,
                        specs: vehicle.specs,
                        model: vehicle.model,
                        tagline: vehicle.tagline,
                        range: vehicle.range,
                        topSpeed: vehicle.topSpeed,
                        voltage: vehicle.voltage,
                        motor: vehicle.motor
                      }
                    });
                  }}
                >
                  Buy Now
                </button>
              </div>


              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/test-ride" className="flex-1">
                  <GlowButton variant="primary" className="w-full">Book Test Ride</GlowButton>
                </Link>
                <GlowButton variant="outline" className="flex-1">Download Brochure</GlowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Technical Specifications</h2>
            <p className="text-lg sm:text-xl text-white/60 px-4">Engineered for performance and efficiency</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="mb-3 sm:mb-4" size={28} style={{ color: spec.color }} />
                  <p className="text-white/40 text-xs sm:text-sm mb-1">{spec.label}</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">{spec.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Specifications */}
          {detailedSpecsArray.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-12 mt-12 sm:mt-16"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Detailed Specifications</h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {detailedSpecsArray.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
                    >
                      <Icon className="mb-3 sm:mb-4" size={24} style={{ color: spec.color }} />
                      <p className="text-white/40 text-xs sm:text-sm mb-1">{spec.label}</p>
                      <p className="text-base sm:text-lg font-semibold text-white break-words">{spec.value}</p>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Premium Features</h2>
            <p className="text-lg sm:text-xl text-white/60 px-4">Advanced technology for the modern rider</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {vehicle.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#00ff88]/30 transition-all duration-300"
              >
                <CheckCircle2 className="text-[#00ff88] flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{feature}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Advanced technology for enhanced riding experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery & Charging Technology */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl"
            >
              <Battery className="w-12 h-12 mb-6 text-[#00ff88]" />
              <h3 className="text-3xl font-bold mb-4 text-white">Battery & Charging Technology</h3>
              <p className="text-white/70 mb-6">
                Advanced 60V Lithium-ion (LiFePO₄) battery system engineered for high efficiency, safety, and long-term performance. Designed with an intelligent Battery Management System (BMS) to ensure stable power delivery, fast charging, and extended battery life across all riding conditions.
              </p>
              <div className="mb-4">
                <span className="block text-lg font-semibold text-[#00ff88] mb-2">Key Highlights</span>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#00ff88]" size={20} />
                    <span className="text-white/80 font-medium">Smart BMS Protection</span>
                    <span className="text-white/60 text-sm">Protects against overcharge, over-discharge, overheating, and short circuits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#00ff88]" size={20} />
                    <span className="text-white/80 font-medium">Fast Charging Efficiency</span>
                    <span className="text-white/60 text-sm">Optimized charging system with 4–5 hours full charge time</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#00ff88]" size={20} />
                    <span className="text-white/80 font-medium">High Cycle Life</span>
                    <span className="text-white/60 text-sm">Durable performance with 1000+ charge cycles for long-term use</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#00ff88]" size={20} />
                    <span className="text-white/80 font-medium">Thermal Stability</span>
                    <span className="text-white/60 text-sm">Advanced temperature control for consistent performance in all conditions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#00ff88]" size={20} />
                    <span className="text-white/80 font-medium">Swappable & Removable Design</span>
                    <span className="text-white/60 text-sm">Easy battery replacement for convenience and flexibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30 rounded-2xl"
            >
              <Gauge className="w-12 h-12 mb-6 text-[#00e5ff]" />
              <h3 className="text-3xl font-bold mb-4 text-white">Range & Performance</h3>
              <p className="text-white/70 mb-6">
                Travel up to {vehicle.range}km on a single charge with our efficient powertrain. 
                Reach speeds of {vehicle.topSpeed}km/h with smooth acceleration and regenerative braking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-[#00e5ff]" size={20} />
                  <span className="text-white/80">Multiple Riding Modes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-[#00e5ff]" size={20} />
                  <span className="text-white/80">Regenerative Braking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="text-[#00e5ff]" size={20} />
                  <span className="text-white/80">Hill Climb Assist</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Ride?</h2>
            <p className="text-xl text-white/60 mb-8">
              Experience the {vehicle.name} firsthand. Book your test ride today.
            </p>
            <Link to="/test-ride">
              <GlowButton variant="primary">Book Test Ride</GlowButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}