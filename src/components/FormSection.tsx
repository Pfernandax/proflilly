import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const FormSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    whatsapp: "",
    studentName: "",
    ageRange: "",
    objective: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!formData.parentName || !formData.whatsapp || !formData.studentName || !formData.ageRange || !formData.objective) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      const message = `Olá! Gostaria de agendar uma avaliação lúdica gratuita.\n\n*Responsável:* ${formData.parentName}\n*Aluno(a):* ${formData.studentName}\n*Faixa etária:* ${formData.ageRange}\n*Objetivo:* ${formData.objective}`;
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp...",
        description: "Você será redirecionado para conversar diretamente com a Profe Lilly!",
      });
      
      setIsLoading(false);
      setFormData({
        parentName: "",
        whatsapp: "",
        studentName: "",
        ageRange: "",
        objective: "",
      });
    }, 1000);
  };

  return (
    <section id="form-section" className="py-24 bg-gradient-to-br from-primary/5 via-background to-success/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-primary/10 animate-fade-in-up">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold mb-2">
              Gratuito
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold">Avaliação lúdica gratuita</CardTitle>
            <CardDescription className="text-lg">
              Preencha o formulário e agende uma conversa com a Profe Lilly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="parentName">Seu nome (responsável)</Label>
                <Input
                  id="parentName"
                  placeholder="Maria da Silva"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentName">Nome do aluno(a)</Label>
                <Input
                  id="studentName"
                  placeholder="João da Silva"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ageRange">Faixa etária</Label>
                <Select
                  value={formData.ageRange}
                  onValueChange={(value) => setFormData({ ...formData, ageRange: value })}
                  required
                >
                  <SelectTrigger id="ageRange" className="h-12 text-base">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 anos</SelectItem>
                    <SelectItem value="6-8">6-8 anos</SelectItem>
                    <SelectItem value="9-12">9-12 anos</SelectItem>
                    <SelectItem value="13+">13+ anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objective">Objetivo principal</Label>
                <Select
                  value={formData.objective}
                  onValueChange={(value) => setFormData({ ...formData, objective: value })}
                  required
                >
                  <SelectTrigger id="objective" className="h-12 text-base">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alfabetizacao">Alfabetização</SelectItem>
                    <SelectItem value="reforco">Reforço escolar</SelectItem>
                    <SelectItem value="leitura">Leitura e interpretação</SelectItem>
                    <SelectItem value="estimulo">Estímulo cognitivo (atenção/memória)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 text-lg bg-success hover:bg-success/90 text-success-foreground hover:scale-[1.02] transition-all shadow-[var(--shadow-primary)]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Quero a avaliação gratuita"
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Ao enviar, você será redirecionado para o WhatsApp da Profe Lilly
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormSection;
