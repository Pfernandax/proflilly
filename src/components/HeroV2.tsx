import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Award, Clock } from "lucide-react";
import heroIllustration from "@/assets/hero-bg-v2.png";

const HeroV2 = () => {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroIllustration}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Metodologia Gamificada
                </Badge>
                <Badge className="bg-success/10 text-success border-success/20 px-4 py-1.5">
                  <Award className="w-4 h-4 mr-1" />
                  +200 Aulas
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Aprender de forma{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    lúdica e eficaz
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 2 100 2 150 6C200 10 250 8 298 4"
                      stroke="url(#paint0_linear)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="hsl(var(--primary))" />
                        <stop offset="1" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Reforço escolar personalizado com{" "}
                <strong className="text-primary">aulas interativas</strong>,{" "}
                <strong className="text-accent">metas claras</strong> e{" "}
                <strong className="text-secondary">resultados reais</strong>.
                Online ou presencial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-[var(--shadow-glow)] text-lg px-8 py-7 rounded-full hover:scale-105 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    Começar Agora
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("metodologia")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-lg px-8 py-7 rounded-full border-2 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all"
                >
                  Ver Metodologia
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    +200
                  </div>
                  <div className="text-sm text-muted-foreground">Aulas realizadas</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent to-info bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Seguro</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
                    2x
                  </div>
                  <div className="text-sm text-muted-foreground">Modalidades</div>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Card */}
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-3xl shadow-2xl border-2 border-primary/10 backdrop-blur-sm hover:scale-[1.02] transition-transform">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Horário Flexível</div>
                      <div className="text-sm text-muted-foreground">Segunda a Sábado</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/10">
                      <span className="font-medium text-foreground">Alfabetização</span>
                      <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-accent/10">
                      <span className="font-medium text-foreground">Reforço Escolar</span>
                      <Badge className="bg-accent text-accent-foreground">Eficaz</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-success/5 rounded-xl border border-success/10">
                      <span className="font-medium text-foreground">Estimulação Cognitiva</span>
                      <Badge className="bg-success text-success-foreground">Novo</Badge>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToForm}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
                    size="lg"
                  >
                    Agendar Avaliação Gratuita
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-info/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
