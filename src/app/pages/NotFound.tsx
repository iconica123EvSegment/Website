import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GlowButton } from '../components/GlowButton';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-[#00ff88] via-[#00d4aa] to-[#00e5ff] bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-xl text-white/60 mb-12">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <GlowButton variant="primary">
                <span className="flex items-center space-x-2">
                  <Home size={20} />
                  <span>Back to Home</span>
                </span>
              </GlowButton>
            </Link>
            <Link to="/vehicles">
              <GlowButton variant="outline">
                <span className="flex items-center space-x-2">
                  <Search size={20} />
                  <span>View Vehicles</span>
                </span>
              </GlowButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
