import { Button } from "@/components/ui/button";
import treeLogo from "@/assets/tree-logo.png";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fade-in">
          <img src={treeLogo} alt="Profe Lilly Logo" className="w-10 h-10 animate-float" />
          <span className="text-xl font-bold text-foreground">Profe Lilly</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={scrollToForm}
            className="hidden sm:flex hover:scale-105 transition-transform"
          >
            Agendar
          </Button>
          <Button 
            onClick={scrollToWhatsApp}
            className="bg-success hover:bg-success/90 text-success-foreground hover:scale-105 transition-transform"
          >
            WhatsApp
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
