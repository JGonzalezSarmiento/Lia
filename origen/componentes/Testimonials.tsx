import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    age: 74,
    text: "Lía me recuerda mis medicinas y me ayuda a enviar mensajes a mis nietos. Es como tener una amiga que siempre está ahí.",
    scenario: "Recordatorios de medicación y mensajería"
  },
  {
    name: "Carlos Ramírez",
    age: 52,
    text: "Con mi discapacidad visual, Lía me ha dado independencia. Controlo las luces, pago facturas, todo con mi voz.",
    scenario: "Control del hogar y gestión financiera"
  },
  {
    name: "Laura Martínez",
    age: 38,
    text: "Cuido a mi madre y Lía nos ayuda a ambas. Ella pide taxis, yo recibo alertas. Es tranquilidad para toda la familia.",
    scenario: "Movilidad y alertas familiares"
  },
  {
    name: "Eduardo Sánchez",
    age: 80,
    text: "Lía detecta cuando estoy triste y me anima. También avisa a mi hijo si necesito ayuda urgente. Me siento seguro.",
    scenario: "Compañía emocional y emergencias"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-bold">
            Historias reales de personas como tú
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo Lía está mejorando vidas cada día
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 space-y-6"
            >
              <Quote className="w-12 h-12 text-primary/30" />
              
              <p className="text-xl leading-relaxed text-foreground">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-muted-foreground text-lg">{testimonial.age} años</p>
                <p className="text-primary font-medium mt-2">
                  {testimonial.scenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
