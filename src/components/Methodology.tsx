import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Gamepad2, BookMarked, Users, BarChart3 } from "lucide-react";

const methodologyCards = [
  {
    icon: BookOpen,
    title: "Diagnóstico divertido",
    description: "Jogos e leitura para mapear habilidades sem pressão.",
    color: "info",
  },
  {
    icon: Target,
    title: "Plano por metas",
    description: "Objetivos semanais atingíveis para manter o foco.",
    color: "success",
  },
  {
    icon: Gamepad2,
    title: "Trilhas gamificadas",
    description: "Atividades que dão vontade de continuar.",
    color: "warning",
  },
  {
    icon: BookMarked,
    title: "Rotina de leitura",
    description: "Textos curtos, repertório e interpretação progressiva.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Reuniões com a família",
    description: "Alinhamento de estratégias e combinados.",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Relatórios claros",
    description: "Evolução visual e próximos passos.",
    color: "primary",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como a metodologia da Profe Lilly ajuda seu filho
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diagnóstico lúdico, metas claras e trilhas gamificadas para que a criança{" "}
            <strong className="text-primary">aprenda com leveza</strong> e evolua de forma consistente. 
            Resultado: <strong className="text-success">autonomia</strong>, <strong className="text-info">confiança</strong> e 
            boletim melhorando.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {methodologyCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-card rounded-3xl p-8 shadow-lg border-2 border-primary/10">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">O que acontece na prática?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-foreground">Acolhimento e conversa inicial (família + aluno)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-success font-bold">2</span>
              </div>
              <p className="text-foreground">Plano com metas mensais e combinados</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-info font-bold">3</span>
              </div>
              <p className="text-foreground">Aulas com jogos, recursos visuais e desafios</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-secondary font-bold">4</span>
              </div>
              <p className="text-foreground">Feedback a cada encontro e microajustes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
