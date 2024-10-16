import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 pb-16">
        <ChatInterface />
      </main>
      <MenuBar />
    </div>
  );
};

export default Index;