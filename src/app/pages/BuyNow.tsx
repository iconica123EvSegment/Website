import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShoppingCart, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  CheckCircle2,
  ArrowLeft,
  Battery,
  Car
} from 'lucide-react';
import { GlowButton } from '../components/GlowButton';

interface ProductData {
  id: string;
  name: string;
  type: 'vehicle' | 'battery';
  image?: string;
  price?: string;
  specs?: any;
}

export default function BuyNow() {
  const location = useLocation();
  const navigate = useNavigate();
  const productData = location.state as ProductData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'full',
    preferredDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    // Load existing bookings from localStorage
    const savedBookings = localStorage.getItem('iconicaBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create booking data
    const bookingData = {
      id: Date.now().toString(),
      product: productData,
      customer: formData,
      bookingDate: new Date().toISOString(),
      status: 'pending'
    };

    // Save to localStorage
    const updatedBookings = [...bookings, bookingData];
    localStorage.setItem('iconicaBookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    
    setIsSubmitted(true);

    // Reset form after 3 seconds and show success
    setTimeout(() => {
      // Don't reset, keep success state
    }, 3000);
  };

  if (!productData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">No product selected</h2>
          <button
            onClick={() => navigate('/vehicles')}
            className="text-[#00ff88] hover:underline"
          >
            Browse our vehicles
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-[#00ff88]/30 rounded-3xl p-8 md:p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-[#0a0b0f]" />
              </div>
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Booking Confirmed! 🎉
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Thank you for your interest in {productData.name}. Our team will contact you within 24 hours to complete your purchase.
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Booking Details</h3>
              <div className="text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">Product:</span>
                  <span className="text-white font-semibold">{productData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Type:</span>
                  <span className="text-white font-semibold capitalize">{productData.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Customer:</span>
                  <span className="text-white font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Email:</span>
                  <span className="text-white font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Phone:</span>
                  <span className="text-white font-semibold">{formData.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] rounded-lg text-[#0a0b0f] font-semibold hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300"
              >
                Back to Home
              </button>
              <button
                onClick={() => navigate('/vehicles')}
                className="px-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Browse More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                {productData.type === 'vehicle' ? (
                  <Car className="w-8 h-8 text-[#00ff88]" />
                ) : (
                  <Battery className="w-8 h-8 text-[#00ff88]" />
                )}
                <h2 className="text-2xl font-bold text-white">
                  {productData.type === 'vehicle' ? 'Vehicle Details' : 'Battery Details'}
                </h2>
              </div>

              {productData.image && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={productData.image}
                    alt={productData.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              <h3 className="text-3xl font-bold text-white mb-4">{productData.name}</h3>
              
              {productData.price && (
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#00ff88]">{productData.price}</span>
                </div>
              )}

              {productData.specs && (
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {Object.entries(productData.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-white font-semibold">{value as string}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Purchase Benefits */}
            <div className="bg-gradient-to-br from-[#00ff88]/10 to-transparent border border-[#00ff88]/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Comprehensive warranty coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Free home delivery & installation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">24/7 customer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Access to ICONICA service network</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <ShoppingCart className="w-8 h-8 text-[#00ff88]" />
              <h2 className="text-2xl font-bold text-white">Complete Your Booking</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                  placeholder="Street address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    placeholder="000000"
                  />
                </div>
              </div>


              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-[#00ff88] mb-2">
                  <CreditCard className="w-4 h-4 inline mr-2 text-[#00ff88]" />
                  Payment Method *
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#00ff88]/30 rounded-lg text-[#00ff88] focus:border-[#00ff88] focus:outline-none transition-colors"
                  style={{ backgroundColor: '#0a0b0f' }}
                >
                  <option value="full" className="bg-black text-[#00ff88]">Full Payment</option>
                  <option value="emi" className="bg-black text-[#00ff88]">EMI Option</option>
                  <option value="financing" className="bg-black text-[#00ff88]">Bank Financing</option>
                  <option value="lease" className="bg-black text-[#00ff88]">Lease</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-[#00ff88] mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-[#00ff88]/30 rounded-lg text-[#00ff88] focus:border-[#00ff88] focus:outline-none transition-colors"
                  style={{ backgroundColor: '#0a0b0f' }}
                />
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-[#00ff88]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] rounded-lg text-[#0a0b0f] font-bold text-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Confirm Booking</span>
              </button>

              <p className="text-xs text-white/50 text-center">
                By confirming this booking, you agree to our terms and conditions. 
                Our team will contact you to finalize the payment and delivery details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
