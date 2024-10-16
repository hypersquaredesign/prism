import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simulate AI response (replace with actual API call in production)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm processing your request. Can you provide more details?", isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-[#F4F4F4] shadow-none rounded-[24px] overflow-hidden">
      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3">
        <div className="relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What are you interested in?"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="w-full pr-10 rounded-[12px] focus:ring-[#1D3AF1] focus:border-[#1D3AF1] focus:ring-2 focus:outline-none shadow-[0_2px_12px_rgba(39,39,39,0.2)]"
          />
          <Button
            onClick={handleSend}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent p-1"
          >
            <Send className="h-5 w-5 text-[#1D3AF1]" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;