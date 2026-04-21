import React, { useState } from 'react';
import { submitForm } from '../lib/formsApi';

export default function Careers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    cv: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await submitForm('careers', {
        name: form.name,
        email: form.email,
        position: form.position,
        cv: form.cv
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit careers form', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0b0f] via-[#050507] to-[#0a0b0f] py-12 px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#00e5ff]">Careers at Iconica</h1>
        {submitted ? (
          <div className="text-green-400 text-center font-semibold">Thank you for applying! We will get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-medium">Position Applying For</label>
              <input
                type="text"
                name="position"
                value={form.position}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
                placeholder="e.g. Sales Manager, Designer"
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-medium">Upload CV</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="w-full text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-gradient-to-r from-[#00e5ff] to-[#00ff88] text-[#0a0b0f] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
