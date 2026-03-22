import { motion } from 'motion/react';
import { Battery, Zap, Clock, Shield, TrendingUp, Repeat, CheckCircle2, XCircle } from 'lucide-react';
import { GlowButton } from '../components/GlowButton';

export default function Charging() {
  const swapBenefits = [
    {
      icon: Zap,
      title: 'Instant Swap',
      description: 'Replace your depleted battery with a fully charged one in under 2 minutes',
      color: '#00ff88'
    },
    {
      icon: Clock,
      title: 'Zero Downtime',
      description: 'No waiting for charging - get back on the road immediately',
      color: '#00d4aa'
    },
    {
      icon: Repeat,
      title: 'Unlimited Range',
      description: 'Swap as many times as needed for unlimited daily range',
      color: '#00e5ff'
    },
    {
      icon: Shield,
      title: 'Battery Health',
      description: 'Professionally maintained batteries ensure optimal performance',
      color: '#00ff88'
    }
  ];

  const batteryComparison = {
    lithiumIon: {
      type: 'Lithium-ion',
      usedIn: 'High-Speed Models (Zylo HS, Vexo HS, X-Factor)',
      pros: [
        'High energy density - more range per charge',
        'Longer lifespan (2000+ charge cycles)',
        'Lightweight and compact design',
        'Fast charging capability (4-5 hours)',
        'Low self-discharge rate',
        'Better performance in varying temperatures',
        'Eco-friendly with recyclable materials'
      ],
      cons: [
        'Higher initial cost',
        'Requires proper disposal/recycling',
        'Sensitive to extreme temperatures'
      ],
      specs: {
        voltage: '72V',
        range: '90-150 km/charge',
        weight: 'Lighter',
        lifespan: '5-7 years',
        charging: '4-5 hours'
      },
      color: '#00ff88'
    },
    leadAcid: {
      type: 'Lead Acid',
      usedIn: 'Low-Speed Models (Zylo, Vexo, Navo, Vira, Zeno, Ravo)',
      pros: [
        'Lower initial cost - affordable option',
        'Proven and reliable technology',
        'Widely available and easy to replace',
        'Good performance for low-speed applications',
        'Robust and durable construction',
        'Works well in various weather conditions'
      ],
      cons: [
        'Heavier weight affects handling',
        'Lower energy density - less range',
        'Shorter lifespan (300-500 cycles)',
        'Requires regular maintenance',
        'Slower charging times',
        'Contains toxic materials (requires proper disposal)'
      ],
      specs: {
        voltage: '48V / 60V / 72V',
        range: '40-60 km/charge',
        weight: 'Heavier',
        lifespan: '2-3 years',
        charging: '6-8 hours'
      },
      color: '#00d4aa'
    }
  };

  const swapSteps = [
    {
      step: '1',
      title: 'Locate Station',
      description: 'Find the nearest battery swap station using our mobile app'
    },
    {
      step: '2',
      title: 'Remove Battery',
      description: 'Unlock and remove your depleted battery from the scooter'
    },
    {
      step: '3',
      title: 'Insert Charged Battery',
      description: 'Pick a fully charged battery from the station and insert it'
    },
    {
      step: '4',
      title: 'Go',
      description: 'Lock the battery in place and continue your journey instantly'
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
              Battery Swap System
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto px-4">
              Revolutionary battery swapping technology for instant power and unlimited range
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-4xl mx-auto px-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzczNDE3MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Battery Swap"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Battery Swap Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Why Battery Swapping?</h2>
            <p className="text-lg sm:text-xl text-white/60 px-4">The future of electric mobility is here</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {swapBenefits.map((benefit, index) => {
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
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">How Battery Swap Works</h2>
            <p className="text-lg sm:text-xl text-white/60 px-4">Simple, fast, and efficient - in just 4 steps</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {swapSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <span className="text-[#0a0b0f] font-bold text-xl md:text-2xl">{item.step}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/60">{item.description}</p>
                </div>
                {index < swapSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00ff88] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Types Comparison */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Battery Technology Comparison</h2>
            <p className="text-lg sm:text-xl text-white/60 px-4">Choose the right battery type for your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Lithium-ion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Battery className="w-10 h-10 md:w-12 md:h-12 text-[#00ff88]" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{batteryComparison.lithiumIon.type}</h3>
                  <p className="text-sm md:text-base text-white/60 mt-1">{batteryComparison.lithiumIon.usedIn}</p>
                </div>
              </div>

              {/* Specs */}
              <div className="mb-6 p-4 md:p-6 bg-white/5 rounded-xl">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Voltage</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.lithiumIon.specs.voltage}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Range</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.lithiumIon.specs.range}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Weight</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.lithiumIon.specs.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Lifespan</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.lithiumIon.specs.lifespan}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs md:text-sm text-white/60">Charging Time</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.lithiumIon.specs.charging}</p>
                  </div>
                </div>
              </div>

              {/* Pros */}
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#00ff88]" />
                  Advantages
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {batteryComparison.lithiumIon.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-[#00ff88] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-white/80">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 text-red-400" />
                  Considerations
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {batteryComparison.lithiumIon.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-red-400/60 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-white/60">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Lead Acid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00d4aa]/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Battery className="w-10 h-10 md:w-12 md:h-12 text-[#00d4aa]" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{batteryComparison.leadAcid.type}</h3>
                  <p className="text-sm md:text-base text-white/60 mt-1">{batteryComparison.leadAcid.usedIn}</p>
                </div>
              </div>

              {/* Specs */}
              <div className="mb-6 p-4 md:p-6 bg-white/5 rounded-xl">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Specifications</h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Voltage</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.leadAcid.specs.voltage}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Range</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.leadAcid.specs.range}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Weight</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.leadAcid.specs.weight}</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-white/60">Lifespan</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.leadAcid.specs.lifespan}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs md:text-sm text-white/60">Charging Time</p>
                    <p className="text-sm md:text-base text-white font-semibold">{batteryComparison.leadAcid.specs.charging}</p>
                  </div>
                </div>
              </div>

              {/* Pros */}
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#00d4aa]" />
                  Advantages
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {batteryComparison.leadAcid.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-[#00d4aa] flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-white/80">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cons */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 text-red-400" />
                  Considerations
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {batteryComparison.leadAcid.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-2 rounded-full bg-red-400/60 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-white/60">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
            <TrendingUp className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-[#00ff88]" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Experience the Future Today</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-8 px-4">
              Join the battery swap revolution and never worry about charging time again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton variant="primary">Find Swap Stations</GlowButton>
              <GlowButton variant="outline">Learn More</GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
