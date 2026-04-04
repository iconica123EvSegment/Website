import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { ScrollToTop } from '../components/ScrollToTop';

export default function Root() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}