import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { ArrowRight, Zap, Battery, Gauge } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Vehicles() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Low Speed' | 'High Speed'>('all');
  const navigate = useNavigate();

  const lowSpeedVehicles = vehicles.filter(v => v.category === 'Low Speed');
  const highSpeedVehicles = vehicles.filter(v => v.category === 'High Speed');

  const getDisplayVehicles = () => {
    if (selectedCategory === 'Low Speed') return lowSpeedVehicles;
    if (selectedCategory === 'High Speed') return highSpeedVehicles;
    return vehicles;
  };

  const displayVehicles = getDisplayVehicles();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
              Our Vehicles
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto px-4">
              Choose from our lineup of 9 premium electric scooters across low-speed and high-speed categories
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
          >
            {[
              { key: 'all', label: 'All Models', count: vehicles.length },
              { key: 'Low Speed', label: 'Low Speed', count: lowSpeedVehicles.length },
              { key: 'High Speed', label: 'High Speed', count: highSpeedVehicles.length }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key as any)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="text-sm sm:text-base">{category.label}</span>
                <span className={`ml-2 text-xs sm:text-sm ${selectedCategory === category.key ? 'text-[#0a0b0f]/70' : 'text-white/50'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vehicle Sections */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Low Speed Section */}
          {(selectedCategory === 'all' || selectedCategory === 'Low Speed') && (
            <div className="mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 md:mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Low Speed Scooters</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/60">
                  Perfect for city commuting with Lead Acid battery technology • Top speed 25 km/h
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {lowSpeedVehicles.map((vehicle, index) => (
                  <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ff88]/50 transition-all duration-300 cursor-pointer h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/10 group-hover:to-transparent transition-all duration-300"></div>
                      
                      <div className="relative">
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#00d4aa]/20 backdrop-blur-sm border border-[#00d4aa]/50 rounded-full">
                          <span className="text-xs sm:text-sm font-semibold text-[#00d4aa]">Low Speed</span>
                        </div>

                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{vehicle.name}</h3>
                          <p className="text-sm sm:text-base text-white/60 mb-1">{vehicle.model}</p>
                          <p className="text-[#00ff88] mb-4 text-sm sm:text-base">{vehicle.tagline}</p>
                          
                          {/* Specs */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00e5ff]" />
                              <p className="text-xs text-white/40">Voltage</p>
                              <p className="text-white font-semibold text-xs sm:text-sm">{vehicle.voltage}</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00d4aa]" />
                              <p className="text-xs text-white/40">Speed</p>
                              <p className="text-white font-semibold text-xs sm:text-sm">{vehicle.topSpeed}km/h</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Battery className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00ff88]" />
                              <p className="text-xs text-white/40">Battery</p>
                              <p className="text-white font-semibold text-xs sm:text-sm">Lead Acid</p>
                            </div>
                          </div>

                          {/* Buy Now CTA */}
                          <div className="flex items-center justify-between">
                            <button
                              className="px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 text-sm sm:text-base"
                              onClick={e => {
                                e.preventDefault();
                                navigate('/buy-now', {
                                  state: {
                                    id: vehicle.id,
                                    name: vehicle.name,
                                    type: 'vehicle',
                                    image: vehicle.image,
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
                            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white/5 group-hover:bg-[#00ff88]/20 border border-white/10 group-hover:border-[#00ff88]/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center space-x-2">
                              <span className="text-sm sm:text-base">Details</span>
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* High Speed Section */}
          {(selectedCategory === 'all' || selectedCategory === 'High Speed') && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 md:mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">High Speed Scooters</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/60">
                  Advanced performance with Lithium-ion battery technology • Top speed up to 80 km/h
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {highSpeedVehicles.map((vehicle, index) => (
                  <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00e5ff]/50 transition-all duration-300 cursor-pointer h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/0 to-[#00e5ff]/0 group-hover:from-[#00e5ff]/10 group-hover:to-transparent transition-all duration-300"></div>
                      
                      <div className="relative">
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#00e5ff]/20 backdrop-blur-sm border border-[#00e5ff]/50 rounded-full">
                          <span className="text-xs sm:text-sm font-semibold text-[#00e5ff]">High Speed</span>
                        </div>

                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{vehicle.name}</h3>
                          <p className="text-sm sm:text-base text-white/60 mb-1">{vehicle.model}</p>
                          <p className="text-[#00e5ff] mb-4 text-sm sm:text-base">{vehicle.tagline}</p>
                          
                          {/* Specs */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Battery className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00ff88]" />
                              <p className="text-xs text-white/40">Range</p>
                              <p className="text-white font-semibold text-xs sm:text-sm">{vehicle.range}km</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00e5ff]" />
                              <p className="text-xs text-white/40">Speed</p>
                              <p className="text-white font-semibold text-xs sm:text-sm">{vehicle.topSpeed}km/h</p>
                            </div>
                            <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1 text-[#00d4aa]" />
                              <p className="text-xs text-white/40">Motor</p>
                              <p className="text-white font-semibold text-[10px] sm:text-xs leading-tight">{vehicle.motor.split(' ')[0]}</p>
                            </div>
                          </div>

                          {/* Buy Now CTA */}
                          <div className="flex items-center justify-between">
                            <button
                              className="px-4 py-2 bg-gradient-to-r from-[#00e5ff] to-[#00ff88] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 text-sm sm:text-base"
                              onClick={e => {
                                e.preventDefault();
                                navigate('/buy-now', {
                                  state: {
                                    id: vehicle.id,
                                    name: vehicle.name,
                                    type: 'vehicle',
                                    image: vehicle.image,
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
                            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white/5 group-hover:bg-[#00e5ff]/20 border border-white/10 group-hover:border-[#00e5ff]/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center space-x-2">
                              <span className="text-sm sm:text-base">Details</span>
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a0b0f] via-[#00ff88]/5 to-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Can't Decide?</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-6 md:mb-8 px-4">
              Book a test ride and experience our vehicles firsthand
            </p>
            <Link to="/test-ride">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 text-sm sm:text-base">
                Book Test Ride
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
