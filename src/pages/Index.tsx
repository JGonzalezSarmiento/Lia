import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatInterface from "@/components/ChatInterface";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
    <Hero />
      <Features />
      <ChatInterface />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;