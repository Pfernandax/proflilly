import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Gamepad2, BookMarked, Users, BarChart3 } from "lucide-react";

const methodologySteps = [
  {
    icon: BookOpen,
    title: "Diagnóstico Lúdico",
    description: "Avaliação através de jogos e atividades divertidas para mapear o nível atual sem pressão.",
    gradient: "from-info to-info/60",
  },
  {
    icon: Target,
    title: "Metas Personalizadas",
    description: "Criação de objetivos semanais e mensais específicos para cada aluno.",
    gradient: "from-success to-success/60",
  },
  {
    icon: Gamepad2,
    title: "Gamificação",
    description: "Trilhas de aprendizado com desafios, conquistas e recompensas que motivam.",
    gradient: "from-warning to-warning/60",
  },
  {
    icon: BookMarked,
    title: "Rotina de Leitura",
    description: "Desenvolvimento progressivo com textos adequados e interpretação guiada.",
    gradient: "from-secondary to-secondary/60",
  },
  {
    icon: Users,
    title: "Envolvimento Familiar",
    description: "Reuniões regulares com pais para alinhamento de estratégias e acompanhamento.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: BarChart3,
    title: "Relatórios Visuais",
    description: "Dashboard claro mostrando evolução, conquistas e próximos passos do aluno.",
    gradient: "from-primary to-primary/60",
  },
];

const MethodologyV2 = () => {
  return (
    <section id="metodologia" className="py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            Nossa Metodologia
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Como funciona o{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              aprendizado
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma metodologia completa que une diversão e resultados concretos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient}`} />
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
                <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${step.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              </Card>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-card to-primary/5 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary/10">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Na prática, como acontece?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { step: "1", text: "Acolhimento inicial com família e aluno para entender necessidades", color: "primary" },
              { step: "2", text: "Criação de plano personalizado com metas mensais e combinados", color: "success" },
              { step: "3", text: "Aulas interativas com jogos, recursos visuais e desafios gamificados", color: "info" },
              { step: "4", text: "Feedback contínuo com microajustes baseados na evolução do aluno", color: "secondary" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background/80 rounded-2xl border-2 border-border hover:border-primary/30 transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 flex-shrink-0 rounded-xl bg-${item.color}/10 border-2 border-${item.color}/20 flex items-center justify-center`}>
                  <span className={`text-${item.color} text-xl font-bold`}>{item.step}</span>
                </div>
                <p className="text-foreground leading-relaxed flex-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyV2;
