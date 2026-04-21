import React, { useState } from 'react';
import { submitForm } from '../lib/formsApi';

interface BuyNowFormProps {
  vehicleName?: string;
  onClose: () => void;
}

const BuyNowForm: React.FC<BuyNowFormProps> = ({ vehicleName, onClose }) => {
  const [form, setForm] = useState({ name: '', phone: '', place: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const buyRequest = {
      ...form,
      model: vehicleName || '',
      timestamp: new Date().toISOString(),
    };
    try {
      setIsSubmitting(true);
      await submitForm('quick-buy', buyRequest);
      setSubmitted(true);
      setTimeout(onClose, 2000);
    } catch (error) {
      console.error('Failed to submit quick buy form', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[90vw] max-w-sm relative animate-float-in">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-green-600">Thank you!</h3>
            <p className="text-gray-700">We have received your request. Our team will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-2 text-center">Buy Now</h3>
            {vehicleName && <p className="text-center text-gray-600 mb-2">Vehicle: <span className="font-semibold">{vehicleName}</span></p>}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="place">Place</label>
              <input
                id="place"
                type="text"
                name="place"
                placeholder="Enter your city or area"
                value={form.place}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00ff88] text-black font-bold py-2 rounded hover:bg-[#00e5ff] transition"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 0.2s; }
        .animate-float-in { animation: floatIn 0.3s cubic-bezier(.4,2,.6,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes floatIn { from { transform: translateY(40px) scale(0.95); opacity: 0; } to { transform: none; opacity: 1; } }
      `}</style>
    </div>
  );
};

export default BuyNowForm;
