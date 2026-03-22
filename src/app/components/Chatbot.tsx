import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm ICONICA Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'View Models',
    'Book Test Ride',
    'Pricing',
    'Dealers Near Me',
    'Charging Info'
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('model') || lowerInput.includes('vehicle')) {
      return "We have 11 premium electric scooter models: Vira, Zoro, Navo, Vexo, Ravo, Zylo, Arova, Viano, Zeno, Ryno, and Varo. Each offers unique features and performance. Which one interests you?";
    } else if (lowerInput.includes('price') || lowerInput.includes('pricing') || lowerInput.includes('cost')) {
      return "Our scooters range from ₹85,000 to ₹165,000. Prices vary based on features, battery capacity, and performance. Would you like to know about a specific model?";
    } else if (lowerInput.includes('test ride') || lowerInput.includes('book')) {
      return "Great! You can book a test ride through our website. We have showrooms in Bangalore, Noida, Delhi, Gurgaon, Mumbai, and Pune. When would you like to schedule your test ride?";
    } else if (lowerInput.includes('dealer') || lowerInput.includes('showroom')) {
      return "We have authorized dealers in Bangalore, Noida, Delhi, Gurgaon, Mumbai, and Pune. Our flagship store is in Bangalore. Which city are you located in?";
    } else if (lowerInput.includes('charging') || lowerInput.includes('charge') || lowerInput.includes('battery')) {
      return "Our scooters support home charging (6-8 hours) and fast charging (2-3 hours for 80%). They use removable lithium-ion batteries with ranges from 100-170km depending on the model.";
    } else if (lowerInput.includes('range')) {
      return "Our scooters offer ranges between 100-170km on a single charge, depending on the model. The Vira offers the highest range at 170km, perfect for long commutes!";
    } else if (lowerInput.includes('spec') || lowerInput.includes('feature')) {
      return "Our scooters feature BLDC motors (1500W-3000W), IoT connectivity, GPS tracking, anti-theft systems, digital displays, and mobile app integration. Which feature interests you most?";
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to ICONICA. I'm here to help you find your perfect electric scooter. What would you like to know?";
    } else if (lowerInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else {
      return "That's a great question! For detailed information, you can explore our website or contact us at +91 (800) 123-4567. How else can I assist you?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00d4aa] rounded-full shadow-[0_0_30px_rgba(0,255,136,0.4)] flex items-center justify-center cursor-pointer hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-[#0a0b0f]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-[#0a0b0f]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-gradient-to-br from-[#0a0b0f] to-[#050507] border border-[#00ff88]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00ff88] to-[#00d4aa] p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0a0b0f] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#0a0b0f]">ICONICA Assistant</h3>
                <p className="text-xs text-[#0a0b0f]/70">Online • Ready to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4aa] text-[#0a0b0f]'
                        : 'bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00ff88]/50 rounded-full text-white transition-all duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00ff88]/50 transition-colors text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#00ff88] to-[#00d4aa] rounded-xl text-[#0a0b0f] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
