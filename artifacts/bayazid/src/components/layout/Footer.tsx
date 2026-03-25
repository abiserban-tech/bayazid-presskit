import { Instagram, Youtube, Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 md:py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-8">
        <img
          src={`${import.meta.env.BASE_URL}images/bayazid-logo.png`}
          alt="BAYAZID"
          className="h-8 w-auto opacity-20"
        />
        
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/5 text-muted-foreground hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/5 text-muted-foreground hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="SoundCloud"
          >
            <Music size={20} />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-white/5 text-muted-foreground hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground/60 tracking-wider">
          © {new Date().getFullYear()} BAYAZID. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
