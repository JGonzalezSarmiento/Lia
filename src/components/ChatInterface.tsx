import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "¡Hola! Soy Lía. ¿En qué puedo ayudarte hoy?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // This will connect to Lovable AI backend
      // For now, simulating a response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "Entiendo tu mensaje. Pronto podré ayudarte de forma más completa con la integración de IA. ¿Hay algo más en lo que pueda asistirte?"
        }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "No pude procesar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    toast({
      title: isListening ? "Micrófono desactivado" : "Escuchando...",
      description: isListening ? "Ya no te escucho" : "Háblame con naturalidad"
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4">
            Prueba a hablar conmigo
          </h2>
          <p className="text-2xl text-muted-foreground">
            Escribe o usa tu voz para interactuar
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-warm p-8 space-y-6">
          {/* Messages */}
          <div className="h-[400px] overflow-y-auto space-y-4 pr-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-6 rounded-2xl text-xl ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-6 rounded-2xl text-xl">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-4 items-end">
            <Button
              size="lg"
              variant={isListening ? "default" : "outline"}
              onClick={toggleVoice}
              className={`p-4 rounded-2xl ${isListening ? 'bg-secondary hover:bg-secondary/90 animate-pulse' : ''}`}
            >
              {isListening ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </Button>

            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Escribe tu mensaje aquí..."
              className="min-h-[80px] text-xl rounded-2xl resize-none"
            />

            <Button
              size="lg"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-primary hover:bg-primary/90 p-4 rounded-2xl"
            >
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
