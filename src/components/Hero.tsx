import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroIllustration from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-20">
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroIllustration} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary" className="text-sm px-4 py-1">Aulas lúdicas</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">Trilhas gamificadas</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">Plano por metas</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-1">Relatório simples</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Aprender pode ser{" "}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              moderno, lúdico e colorido
            </span>
            {" "}— com resultados reais
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Reforço em <strong className="text-info">Matemática</strong>, <strong className="text-success">Português</strong>, 
            <strong className="text-warning"> História</strong> e <strong className="text-secondary">Geografia</strong> 
            — além de alfabetização, leitura e estimulação cognitiva. Online ou presencial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full hover:scale-105 transition-all shadow-[var(--shadow-primary)]"
            >
              Avaliação Lúdica Gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all"
            >
              Conhecer a Metodologia
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">+200</div>
              <div className="text-sm text-muted-foreground">Aulas realizadas</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-success">100%</div>
              <div className="text-sm text-muted-foreground">Seguro (LGPD)</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-secondary">2</div>
              <div className="text-sm text-muted-foreground">Modalidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
