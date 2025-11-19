import treeLogo from "@/assets/tree-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={treeLogo} alt="Profe Lilly Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold">Profe Lilly</span>
            </div>
            <p className="text-background/80">
              Reforço escolar moderno, lúdico e eficaz. Transformando dificuldades em conquistas!
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>contato@profelilly.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP - Online e Presencial</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Horário de atendimento</h3>
            <div className="space-y-2 text-background/80">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Profe Lilly. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
