import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Home,
  Plug,
  Shield,
  TrendingUp,
  CheckCircle2,
  Battery,
  Clock,
  Wifi,
  ThermometerSun,
  Globe
} from 'lucide-react';
import { GlowButton } from '../components/GlowButton';

export default function Charging() {
  const chargingBenefits = [
    {
      icon: Plug,
      title: 'Plug & Charge',
      description: 'Simply plug into any standard home socket - no special setup required',
      color: '#00ff88'
    },
    {
      icon: Home,
      title: 'Charge at Home',
      description: 'Power up overnight at home, office, or anywhere with a power outlet',
      color: '#00d4aa'
    },
    {
      icon: Clock,
      title: 'Overnight Ready',
      description: 'Wake up to a fully charged scooter every morning',
      color: '#00e5ff'
    },
    {
      icon: Shield,
      title: 'Smart & Safe',
      description: 'Intelligent charging system with overcharge and temperature protection',
      color: '#00ff88'
    }
  ];

  const inHouseFeatures = [
    {
      icon: Battery,
      title: 'In-House Engineering',
      description: 'Batteries designed and developed by ICONICA for maximum reliability',
      details: [
        'Higher efficiency & performance',
        'Enhanced safety systems',
        'Longer battery lifespan',
        'Smart power management'
      ]
    },
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'Multi-layer protection for worry-free charging',
      details: [
        'Overcharge protection',
        'Temperature control',
        'Stable power flow',
        'Battery health monitoring'
      ]
    }
  ];

  const smartFeatures = [
    'Protection against overcharging',
    'Temperature control for battery safety',
    'Stable and efficient power flow',
    'Long-term battery health preservation',
    'Compact & portable charger',
    'Works with regular power outlets',
    'Safe and optimized for Indian households',
    'Designed for overnight charging'
  ];

  const freedomPoints = [
    {
      icon: Globe,
      title: 'No Infrastructure Dependency',
      description: 'No need to search for charging stations or wait in queues'
    },
    {
      icon: Zap,
      title: 'Zero Range Anxiety',
      description: 'Charge overnight and ride all day with confidence'
    },
    {
      icon: Home,
      title: 'Your Space, Your Control',
      description: 'Complete flexibility in your daily commute'
    }
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Zap className="w-16 h-16 md:w-20 md:h-20 text-[#00ff88]" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
              Charging Made Effortless
            </h1>
            <p className="text-xl md:text-3xl text-white mb-6">
              Power That Fits Your Life
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto px-4 leading-relaxed">
              At ICONICA, we believe charging your scooter should be as simple as charging your phone.
              That's why every ICONICA scooter comes with our advanced in-house battery technology, designed for convenience, safety, and everyday usability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Charge Anywhere Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              🔋 Charge Anywhere. Anytime.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-8">
              No dependency on charging stations.<br />
              No waiting in long queues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {chargingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-opacity-30 transition-all duration-300"
                  style={{ borderColor: `${benefit.color}20` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-50"
                      style={{ backgroundColor: benefit.color }}
                    ></div>
                    <Icon className="relative w-12 h-12 md:w-16 md:h-16" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-white/60">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 md:p-12 bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl">
              <p className="text-lg md:text-2xl text-white font-semibold mb-4">
                With ICONICA:
              </p>
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                  <span className="text-base md:text-lg text-white">Plug into any standard home socket</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                  <span className="text-base md:text-lg text-white">Charge at your home, office, or anywhere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                  <span className="text-base md:text-lg text-white">No special setup required</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-[#00ff88] font-bold mt-8">
                Just plug in and power up.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Home Charging Simplified */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              🏠 Home Charging, Simplified
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
              Your daily routine stays uninterrupted.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#00ff88]/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                <span className="text-sm md:text-base text-white">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-2xl md:text-3xl text-[#00ff88] font-bold">
              Wake up to a fully charged ride — every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built In-House Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              ⚙️ Built In-House. Built Better.
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto px-4">
              Unlike generic battery systems, ICONICA uses in-house engineered batteries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {inHouseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#00ff88] mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-base md:text-lg text-white/60 mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#00ff88]"></div>
                        <span className="text-sm md:text-base text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl"
          >
            <p className="text-xl md:text-2xl text-white">
              This means more <span className="text-[#00ff88] font-bold">reliability</span>, more <span className="text-[#00d4aa] font-bold">control</span>, and more <span className="text-[#00e5ff] font-bold">confidence</span> in every ride.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Charging Experience */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              🔌 Smart Charging Experience
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
              Charging isn't just easy — it's smart and secure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00ff88]/20 rounded-2xl"
            >
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-[#00ff88] mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Overcharge Protection</h3>
              <p className="text-sm text-white/60">Automatically stops when fully charged</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00d4aa]/20 rounded-2xl"
            >
              <ThermometerSun className="w-12 h-12 md:w-16 md:h-16 text-[#00d4aa] mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Temperature Control</h3>
              <p className="text-sm text-white/60">Monitors heat for safe charging</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00e5ff]/20 rounded-2xl"
            >
              <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#00e5ff] mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Stable Power Flow</h3>
              <p className="text-sm text-white/60">Consistent and efficient charging</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00ff88]/20 rounded-2xl"
            >
              <Battery className="w-12 h-12 md:w-16 md:h-16 text-[#00ff88] mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Battery Health</h3>
              <p className="text-sm text-white/60">Long-term preservation system</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Freedom Without Infrastructure */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white">
              🌍 Freedom Without Infrastructure
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
              With ICONICA, you're not dependent on public charging networks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {freedomPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#00ff88] mx-auto mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{point.title}</h3>
                  <p className="text-base md:text-lg text-white/60">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl"
          >
            <p className="text-2xl md:text-3xl text-white font-bold">
              Your charger. Your space. Your control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ready When You Are */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white">
              🚀 Ready When You Are
            </h2>
            <p className="text-2xl md:text-3xl text-[#00ff88] font-bold mb-8">
              Charge overnight. Ride all day. Repeat.
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              ICONICA is built for a world where mobility is effortless and energy is always within reach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-[#00ff88]/10 to-[#00e5ff]/10 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl"
          >
            <Zap className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-[#00ff88]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Experience Effortless Charging</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-8 px-4">
              Join the future of electric mobility with ICONICA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/test-ride">
                <GlowButton variant="primary">Book a Test Ride</GlowButton>
              </Link>
              <Link to="/vehicles">
                <GlowButton variant="outline">Explore ICONICA Scooters</GlowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
