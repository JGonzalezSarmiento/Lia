import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle, Shield } from "lucide-react";
import heroImage from "@/assets/hero-lia.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container px-6 py-20 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <Heart className="w-5 h-5" />
              <span>Tu compañera de confianza</span>
            </div>
            
            <h1 className="font-bold leading-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lía
              </span>
            </h1>
            
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Tu asistente de voz inteligente, diseñada para acompañarte, recordarte lo importante y estar ahí cuando me necesites.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Conversación Natural</p>
                  <p className="text-muted-foreground">Háblame como a un amigo</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Siempre Disponible</p>
                  <p className="text-muted-foreground">24/7 a tu servicio</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-xl px-8 py-6 rounded-2xl shadow-warm"
              >
                Hablar con Lía
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 text-xl px-8 py-6 rounded-2xl"
              >
                Conoce más
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Lía, tu asistente de voz amigable"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
