import { motion } from 'motion/react';
import { 
  Cpu, 
  Battery, 
  Smartphone, 
  Wifi, 
  Cloud, 
  Shield,
  Zap,
  Settings
} from 'lucide-react';

export default function Technology() {
  const technologies = [
    {
      icon: Zap,
      title: 'High-Efficiency BLDC Motor',
      description: 'Our brushless DC motors deliver exceptional power-to-weight ratio with minimal energy loss. Advanced motor control algorithms ensure smooth torque delivery and maximum efficiency across all speed ranges.',
      features: ['99% Efficiency', 'Instant Torque', 'Silent Operation', 'Minimal Maintenance']
    },
    {
      icon: Battery,
      title: 'Advanced Battery System',
      description: 'High-density lithium-ion cells with intelligent Battery Management System (BMS) for optimal performance, safety, and longevity. Our proprietary thermal management ensures consistent performance in all conditions.',
      features: ['1000+ Cycles', 'Fast Charging', 'Temperature Control', 'Safety Protection']
    },
    {
      icon: Cpu,
      title: 'Smart ECU',
      description: 'Powerful Electronic Control Unit processes millions of data points per second to optimize performance, efficiency, and safety. AI-powered algorithms learn your riding style for personalized experience.',
      features: ['Real-time Analytics', 'Predictive Maintenance', 'Adaptive Performance', 'Safety Monitoring']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Stay connected with your scooter through our advanced mobile application. Monitor performance, customize settings, track rides, and receive real-time notifications on your smartphone.',
      features: ['Remote Diagnostics', 'Ride Analytics', 'Navigation', 'Find My Scooter']
    }
  ];

  const softwareFeatures = [
    {
      icon: Cloud,
      title: 'Cloud Connectivity',
      description: 'Seamless over-the-air updates keep your scooter up-to-date with the latest features and improvements',
      color: '#00ff88'
    },
    {
      icon: Wifi,
      title: 'IoT Platform',
      description: 'Advanced IoT integration for smart city compatibility and connected mobility ecosystem',
      color: '#00d4aa'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Bank-grade encryption and security protocols to protect your data and vehicle from threats',
      color: '#00e5ff'
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Personalize riding modes, acceleration curves, and regenerative braking to match your style',
      color: '#00ff88'
    }
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
              Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Engineering excellence meets cutting-edge innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Technologies</h2>
            <p className="text-xl text-white/60">The innovations that power ICONICA</p>
          </motion.div>

          <div className="space-y-24">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={isEven ? 'order-1' : 'order-2'}>
                    <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
                      <Icon className="w-16 h-16 mb-6 text-[#00ff88]" />
                      <h3 className="text-3xl font-bold mb-4 text-white">{tech.title}</h3>
                      <p className="text-white/70 mb-6">{tech.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {tech.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? 'order-2' : 'order-1'}>
                    <img 
                      src={index === 0 
                        ? "https://images.unsplash.com/photo-1631009640015-918990ad1914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzQ4ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1609682243212-7b5d77f37ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBiYXR0ZXJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM0ODgyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        : index === 2
                        ? "https://images.unsplash.com/photo-1655432244940-c361ff5e441f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9iaWxpdHklMjBzY29vdGVyfGVufDF8fHx8MTc3MzQ4ODI0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        : "https://images.unsplash.com/photo-1656639334323-3fbb64a1686a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjByaWRlcnxlbnwxfHx8fDE3NzM0ODgyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      }
                      alt={tech.title}
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Features */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Smart Software</h2>
            <p className="text-xl text-white/60">Intelligence built into every ride</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softwareFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: feature.color }} />
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">ICONICA Mobile App</h2>
              <p className="text-xl text-white/60 mb-8">
                Your scooter in your pocket. Complete control and insights at your fingertips.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Real-time Monitoring', desc: 'Track speed, range, battery status, and more' },
                  { title: 'Ride History', desc: 'Analyze your trips with detailed statistics and maps' },
                  { title: 'Remote Control', desc: 'Lock/unlock, locate, and customize settings remotely' },
                  { title: 'Service Alerts', desc: 'Get notified about maintenance and service requirements' },
                  { title: 'Navigation', desc: 'Turn-by-turn navigation with charging station locations' },
                  { title: 'Community', desc: 'Connect with other ICONICA riders and share experiences' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-[#0a0b0f]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
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
              <div className="relative bg-gradient-to-br from-[#00ff88]/20 to-[#00e5ff]/20 rounded-3xl p-12">
                <img 
                  src="https://images.unsplash.com/photo-1656639334323-3fbb64a1686a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjByaWRlcnxlbnwxfHx8fDE3NzM0ODgyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Mobile App"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Continuous Innovation</h2>
            <p className="text-xl text-white/60 mb-8">
              We're constantly pushing boundaries with research and development. 
              Our commitment to innovation ensures ICONICA riders always have access to the latest technology.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#00ff88]">
              <span className="text-lg font-semibold">Learn more about our R&D</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
