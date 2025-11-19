import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    role: "Mãe do Lucas, 8 anos",
    content: "Em 2 meses meu filho já estava lendo sozinho e adorando! A metodologia da Profe Lilly é mágica.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Pai da Sofia, 10 anos",
    content: "As notas de matemática subiram de 5 para 9. A Sofia agora tem confiança e autonomia nos estudos.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Mãe do Pedro, 6 anos",
    content: "A alfabetização foi incrível! O Pedro aprendeu brincando e hoje adora ler. Muito obrigada Profe Lilly!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que as famílias dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de quem confia na metodologia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
