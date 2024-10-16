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
    <Card className="max-w-2xl mx-auto bg-[#F4F4F4] shadow-none">
      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex space-x-2 shadow-[0_2px_12px_rgba(39,39,39,0.2)]">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What are you interested in?"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow focus:ring-[#1D3AF1] focus:border-[#1D3AF1] focus:ring-2 focus:outline-none"
          />
          <Button onClick={handleSend} className="bg-[#1D3AF1] hover:bg-[#1D3AF1]/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;