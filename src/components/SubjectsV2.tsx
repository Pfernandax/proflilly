import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calculator, Globe, History, FlaskConical, PenTool, Book } from "lucide-react";

const subjects = [
  { name: "Matemática", icon: Calculator, color: "from-info to-info/80" },
  { name: "Português", icon: BookOpen, color: "from-destructive to-destructive/80" },
  { name: "História", icon: History, color: "from-warning to-warning/80" },
  { name: "Geografia", icon: Globe, color: "from-success to-success/80" },
  { name: "Ciências", icon: FlaskConical, color: "from-accent to-accent/80" },
  { name: "Redação", icon: PenTool, color: "from-secondary to-secondary/80" },
  { name: "Leitura", icon: Book, color: "from-primary to-primary/80" },
];

const SubjectsV2 = () => {
  return (
    <section id="materias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Matérias oferecidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reforço personalizado em todas as disciplinas fundamentais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-110 transition-all duration-300 cursor-pointer border-2 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="font-semibold text-foreground text-center text-sm">
                    {subject.name}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubjectsV2;
