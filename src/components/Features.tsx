import { Bell, Calendar, Heart, Home, Phone, Volume2 } from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "Reconocimiento de Voz Natural",
    description: "Háblame con tus propias palabras. Te entiendo y respondo de forma natural.",
    color: "primary"
  },
  {
    icon: Bell,
    title: "Recordatorios Inteligentes",
    description: "Medicinas, citas médicas, llamadas importantes. Nunca olvidarás nada.",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Compañía Empática",
    description: "Detecto emociones y adapto mi forma de hablar para brindarte apoyo.",
    color: "accent"
  },
  {
    icon: Home,
    title: "Control del Hogar",
    description: "Enciende luces, ajusta temperatura, controla dispositivos con tu voz.",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Organización Personal",
    description: "Gestiono tu agenda, te ayudo con tareas y simplifico la información.",
    color: "secondary"
  },
  {
    icon: Phone,
    title: "Alertas de Emergencia",
    description: "En caso de necesidad, puedo contactar a tus familiares automáticamente.",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-bold">
            ¿Qué puedo hacer por ti?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Estoy diseñada para facilitar tu día a día y darte tranquilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
