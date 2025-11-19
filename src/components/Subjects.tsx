import { Badge } from "@/components/ui/badge";

const subjects = [
  { name: "Matemática", color: "info" },
  { name: "Português", color: "destructive" },
  { name: "História", color: "warning" },
  { name: "Geografia", color: "success" },
  { name: "Ciências", color: "accent" },
  { name: "Redação", color: "secondary" },
  { name: "Leitura & Interpretação", color: "primary" },
];

const Subjects = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {subjects.map((subject, index) => (
            <Badge 
              key={index}
              variant="outline"
              className={`text-lg px-6 py-3 border-2 hover:scale-110 transition-transform cursor-pointer bg-${subject.color}/5 border-${subject.color}/30 text-${subject.color} hover:bg-${subject.color}/10`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {subject.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
