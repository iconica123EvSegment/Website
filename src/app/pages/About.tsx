import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Leaf, Zap, Quote } from 'lucide-react';
import founderImageSrc from '../../assets/ceo.jpeg';
const founderImage = typeof founderImageSrc === 'string' ? founderImageSrc : founderImageSrc.default;

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and design'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to a cleaner, greener future for all'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering premium quality in every detail'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global community of electric mobility enthusiasts'
    }
  ];

  const milestones = [
    { year: '2026', title: 'Foundation', description: 'ICONICA was founded with a vision to revolutionize urban mobility' },
    { year: '2026', title: 'First Launch', description: 'Introduced our flagship models to critical acclaim' }
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
              About ICONICA
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Pioneering the future of sustainable urban mobility
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Founder Image */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={founderImage} 
                  alt="Saumya Singh - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Founder Message */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 mb-6 text-[#00ff88]" />
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                  "We're not just building electric scooters; we're crafting the future of sustainable mobility. 
                  Every ICONICA vehicle represents our commitment to innovation, excellence, and a cleaner tomorrow. 
                  Together, we're making electric transportation accessible, aspirational, and transformative for millions."
                </blockquote>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-2xl font-bold text-white mb-1">Saumya Singh</p>
                  <p className="text-[#00ff88]">Founder & CEO</p>
                  <p className="text-white/40 text-sm mt-2">Founded in 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl"
            >
              <Target className="w-12 h-12 mb-6 text-[#00ff88]" />
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To revolutionize urban transportation by creating high-performance, sustainable electric scooters 
                that combine cutting-edge technology with exceptional design. We're committed to making electric 
                mobility accessible, affordable, and aspirational for riders worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#00e5ff]/10 to-transparent border border-[#00e5ff]/30 rounded-2xl"
            >
              <Eye className="w-12 h-12 mb-6 text-[#00e5ff]" />
              <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                A world where clean, efficient electric transportation is the norm, not the exception. 
                We envision cities free from pollution, where smart mobility solutions enhance quality of life 
                and create sustainable communities for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed text-left">
              <p>
                ICONICA was born from a simple yet powerful idea: electric mobility should be exhilarating, 
                not compromising. Founded in 2026 by visionary entrepreneur Saumya Singh and a team of automotive 
                engineers and technology innovators, we set out to create electric scooters that riders would truly love.
              </p>
              <p>
                What started as a bold vision has quickly grown into a pioneering movement. Today, ICONICA represents 
                the perfect fusion of performance, technology, and sustainability. Every scooter we build embodies 
                our commitment to excellence and our passion for innovation.
              </p>
              <p>
                We're not just building scooters—we're building a cleaner, smarter future. As a newly launched company 
                in 2026, ICONICA is leading the electric revolution, one ride at a time, with our innovative lineup 
                of 11 cutting-edge electric scooter models.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-white/60">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#00ff88]/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-6 text-[#00ff88]" />
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/60">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-xl text-white/60">Key milestones in ICONICA's evolution</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#00ff88] via-[#00d4aa] to-[#00e5ff]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="inline-block p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl">
                      <div className="text-[#00ff88] font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-white/60">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full border-4 border-[#0a0b0f] z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-transparent to-[#050507]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the Revolution</h2>
            <p className="text-xl text-white/60 mb-8">
              Be part of the electric mobility movement. Experience ICONICA today.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}