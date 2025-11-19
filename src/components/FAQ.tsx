import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funcionam as aulas?",
    answer: "As aulas podem ser online (via Zoom/Meet) ou presenciais. Cada encontro tem atividades lúdicas, jogos educativos e recursos visuais para tornar o aprendizado divertido e efetivo.",
  },
  {
    question: "Qual a duração de cada aula?",
    answer: "As aulas têm duração de 1 hora, com frequência combinada de acordo com a necessidade de cada aluno (1x, 2x ou 3x por semana).",
  },
  {
    question: "A avaliação inicial é realmente gratuita?",
    answer: "Sim! A primeira avaliação lúdica é totalmente gratuita e sem compromisso. É uma oportunidade para conhecer a metodologia e entender as necessidades do seu filho.",
  },
  {
    question: "Para qual faixa etária são as aulas?",
    answer: "Atendo crianças a partir de 3 anos (alfabetização) até adolescentes do ensino fundamental II. Cada plano é personalizado para a idade e necessidade do aluno.",
  },
  {
    question: "Como funciona o acompanhamento dos pais?",
    answer: "Os pais recebem relatórios regulares sobre a evolução do aluno, além de reuniões periódicas para alinhamento de estratégias e combinados.",
  },
  {
    question: "Quais matérias são oferecidas?",
    answer: "Ofereço reforço em Matemática, Português, História, Geografia, Ciências e Redação, além de alfabetização, leitura, interpretação e estimulação cognitiva.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre a metodologia e as aulas
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-2xl px-6 hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
