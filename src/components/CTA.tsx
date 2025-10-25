import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Únete a nuestra familia</span>
          </div>

          <h2 className="font-bold">
            Comienza tu vida más{" "}
            <span className="block">independiente hoy</span>
          </h2>

          <p className="text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
            Lía está aquí para acompañarte, ayudarte y darte la confianza que necesitas para vivir tu día a día de forma autónoma.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-xl px-8 py-6 rounded-2xl shadow-lg"
            >
              Probar Lía gratis
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-xl px-8 py-6 rounded-2xl backdrop-blur-sm"
            >
              Hablar con soporte
            </Button>
          </div>

          <p className="text-lg opacity-75 pt-4">
            Sin compromisos • Cancela cuando quieras • Soporte 24/7
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
