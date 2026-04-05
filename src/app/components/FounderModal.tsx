import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface FounderModalProps {
  onClose: () => void;
}

export function FounderModal({ onClose }: FounderModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Don't prevent body scroll - allow page to be scrollable
  useEffect(() => {
    // Modal doesn't lock scroll anymore
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          {/* Modal Content */}
          <motion.div
            className="relative bg-gradient-to-br from-[#0a0b0f]/95 to-[#050507]/95 backdrop-blur-xl border border-[#00ff88]/30 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#00ff88] rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#00e5ff] rounded-full blur-2xl"></div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex items-start space-x-4">
                {/* Founder Image - Smaller */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00e5ff] rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff88]/50">
                      <img
                        src="/ceot.jpeg"
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Quote - Next to Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 pt-1"
                >
                  <p className="text-sm text-white/90 mb-3 leading-relaxed italic">
                    "We are building more than a company — we are shaping the future of mobility.
                    Iconica stands for innovation on the road, while Anaisha powers it with trust.
                    Every product we create reflects precision, performance, and purpose.
                    Our vision is to drive India towards cleaner, smarter energy solutions.
                    This is not just business — this is our commitment to the EV revolution."
                  </p>

                  {/* Founder Details */}
                  <div className="pt-2 border-t border-white/10">
                    <h3 className="text-sm font-bold text-white">Founder & CEO</h3>
                    <p className="text-xs text-[#00ff88]">ICONICA GLOBEX PVT. LTD.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}