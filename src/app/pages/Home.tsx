import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GlowButton } from '../components/GlowButton';
import { vehicles } from '../data/vehicles';
import { 
  Zap, 
  Battery, 
  Smartphone, 
  Shield, 
  Award, 
  TrendingDown,
  Star,
  ArrowRight,
  Handshake
} from 'lucide-react';
import heroScooter1 from '../../assets/703c3ea87de11d404d32fe65ec1b6f945ee11d45.png';
import heroScooter2 from '../../assets/2e21e76cea61835ee54bfc253a56436d58d437b3.png';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [heroScooter1, heroScooter2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Powerful BLDC motors delivering exceptional acceleration and top speeds'
    },
    {
      icon: Battery,
      title: 'Long Range',
      description: 'Advanced lithium-ion batteries for extended range up to 170km'
    },
    {
      icon: Smartphone,
      title: 'Smart Technology',
      description: 'IoT-enabled with mobile app connectivity and real-time monitoring'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Advanced safety features including anti-theft and GPS tracking'
    }
  ];

  const techFeatures = [
    {
      title: 'Intelligent Motor Control',
      description: 'AI-powered motor management for optimal performance and efficiency',
      icon: '🚀'
    },
    {
      title: 'Smart Battery System',
      description: 'Advanced BMS with predictive analytics and health monitoring',
      icon: '🔋'
    },
    {
      title: 'Mobile Connectivity',
      description: 'Real-time vehicle diagnostics and remote control via smartphone',
      icon: '📱'
    },
    {
      title: 'OTA Updates',
      description: 'Continuous improvements through over-the-air software updates',
      icon: '☁️'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The Vira is absolutely amazing! Smooth ride, incredible range, and the app features are a game-changer.',
      model: 'Iconica Vira'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best investment I made. The Zoro has incredible power and the build quality is top-notch.',
      model: 'Iconica Zoro'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'Love my Navo! Perfect for city commuting and the charging is super convenient.',
      model: 'Iconica Navo'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0b0f] via-[#0a0b0f] to-[#050507]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="ICONICA Electric Scooter"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 via-[#0a0b0f]/60 to-[#0a0b0f]/90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ICONICA
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Future of Electric Mobility
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              High performance electric scooters engineered for modern riders.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/vehicles">
                <GlowButton variant="primary" className="text-lg px-10 py-4">Explore Vehicles</GlowButton>
              </Link>
              <Link to="/test-ride">
                <GlowButton variant="outline" className="text-lg px-10 py-4">Book Test Ride</GlowButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
          >
            <div className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-[#00ff88] rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Lineup */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Vehicle Lineup</h2>
            <p className="text-xl text-white/60">Choose from 9 innovative models designed for every rider</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ff88]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/0 to-[#00ff88]/0 group-hover:from-[#00ff88]/10 group-hover:to-transparent transition-all duration-300"></div>
                
                <div className="relative p-6">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{vehicle.name}</h3>
                  <p className="text-[#00ff88] mb-4">{vehicle.tagline}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-white/40 text-sm">Range</p>
                      <p className="text-white font-semibold">{vehicle.range} km</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">Top Speed</p>
                      <p className="text-white font-semibold">{vehicle.topSpeed} km/h</p>
                    </div>
                  </div>
                  
                  <Link to={`/vehicle/${vehicle.id}`}>
                    <button className="w-full py-3 bg-white/5 hover:bg-[#00ff88]/20 border border-white/10 hover:border-[#00ff88]/50 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ICONICA */}
      <section className="py-24 bg-gradient-to-b from-[#050507] to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose ICONICA</h2>
            <p className="text-xl text-white/60">Leading the electric revolution with innovation and excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4aa]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-[#00ff88]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart Technology */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Smart Technology</h2>
              <p className="text-xl text-white/60 mb-8">
                Experience the future with our cutting-edge IoT platform and intelligent systems
              </p>
              
              <div className="space-y-6">
                {techFeatures.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300"
                  >
                    <span className="text-4xl">{tech.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold mb-1 text-white">{tech.title}</h3>
                      <p className="text-white/60">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1631009640015-918990ad1914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzQ4ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Smart Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00ff88]/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Charging Ecosystem */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0f] to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzczNDE3MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Charging"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Charging Ecosystem</h2>
              <p className="text-xl text-white/60 mb-8">
                Convenient charging solutions designed for your lifestyle
              </p>
              
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-white">Home Charging</h3>
                  <p className="text-white/60">Simple plug-and-charge with any standard outlet</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#00d4aa]/10 to-transparent border border-[#00d4aa]/30 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-white">Public Charging Network</h3>
                  <p className="text-white/60">Access thousands of charging stations nationwide</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-white">Fast Charging</h3>
                  <p className="text-white/60">Get 80% charge in under 2 hours with fast charging</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#ffeb3b]/10 to-transparent border border-[#ffeb3b]/30 rounded-xl">
                  <h3 className="text-xl font-bold mb-2 text-white">Battery Swap</h3>
                  <p className="text-white/60">Swap your empty battery for a fully charged one in minutes at partner stations—no waiting, just ride!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EV Cost Savings */}
      <section className="py-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">EV Cost Savings</h2>
            <p className="text-xl text-white/60">Save money while saving the planet</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
              <h3 className="text-3xl font-bold mb-2 text-white">90%</h3>
              <p className="text-white/60">Lower Running Costs vs Petrol</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-[#00d4aa]" />
              <h3 className="text-3xl font-bold mb-2 text-white">₹1/km</h3>
              <p className="text-white/60">Average Cost Per Kilometer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <Battery className="w-12 h-12 mx-auto mb-4 text-[#00e5ff]" />
              <h3 className="text-3xl font-bold mb-2 text-white">Zero</h3>
              <p className="text-white/60">Emissions & Carbon Footprint</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-gradient-to-b from-[#050507] to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Our Riders Say</h2>
            <p className="text-xl text-white/60">Join thousands of satisfied ICONICA owners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{review.comment}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-[#00ff88]">{review.model} Owner</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="py-24 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Handshake className="w-16 h-16 mb-6 text-[#00ff88]" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Become a Dealer</h2>
                  <p className="text-xl text-white/80 mb-8">
                    Partner with India's fastest-growing EV brand. Join our expanding network of authorized dealers 
                    and be part of the electric mobility revolution.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <p className="text-white/70">Attractive dealer margins</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <p className="text-white/70">Comprehensive training & support</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <p className="text-white/70">Marketing & promotional assistance</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                      <p className="text-white/70">Exclusive territory rights</p>
                    </div>
                  </div>

                  <Link to="/dealers">
                    <GlowButton variant="primary">Apply Now</GlowButton>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-96 lg:h-auto"
              >
                <img 
                  src={heroScooter2} 
                  alt="ICONICA Dealer Partnership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent lg:bg-gradient-to-l"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0b0f] via-[#00ff88]/5 to-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Experience ICONICA?</h2>
            <p className="text-xl text-white/60 mb-8">
              Book your test ride today and discover the future of electric mobility
            </p>
            <Link to="/test-ride">
              <GlowButton variant="primary">Book Your Test Ride</GlowButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}