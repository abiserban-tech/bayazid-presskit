import { ArrowRight, Instagram, Music, Youtube } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { useToast } from "@/hooks/use-toast";

// --- Form Schema ---
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Please select an event date"),
  message: z.string().min(10, "Please provide more details about your event"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      message: "",
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking Request:", data);
    toast({
      title: "Request Sent Successfully",
      description: "BAYAZID's management will get back to you shortly.",
      variant: "default",
    });
    form.reset();
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-[length:400%_400%] animate-gradient-xy opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)/0.15) 0%, transparent 50%), linear-gradient(to bottom right, #050505, #0a0a0c, #111424, #050505)`
          }}
        />
        
        {/* Generated Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
        />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <FadeIn delay={0.2} direction="down">
            <span className="uppercase tracking-[0.3em] text-sm md:text-base text-primary font-semibold mb-6 block text-glow">
              Official Press Kit
            </span>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/bayazid-logo.png`}
                alt="BAYAZID"
                className="w-[70vw] max-w-3xl md:max-w-4xl mx-auto drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.08))" }}
              />
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light tracking-wide mb-12">
              Multicultural Energy. Hypnotic Grooves. Pure Connection.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6">
            <a
              href="#sound"
              onClick={(e) => scrollTo(e, "#sound")}
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-none overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Listen Now <Music size={18} />
              </span>
            </a>
            <a
              href="#booking"
              onClick={(e) => scrollTo(e, "#booking")}
              className="group px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-none hover:border-primary hover:text-primary transition-all hover:scale-105 flex items-center gap-2 box-glow"
            >
              Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SHORT BIO */}
      <section id="bio" className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <p className="text-2xl md:text-4xl font-display font-light leading-snug md:leading-tight text-white/90">
              BAYAZID is a DJ who transforms multicultural energy into a captivating sound, where <span className="text-primary font-medium">deep rhythms</span>, hypnotic grooves, and modern influences blend into an intense dancefloor experience.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              With roots in Brussels and shaped in Bucharest, his style reflects an authentic mix of cultures. Each set is crafted with precision and delivered with an energy that instantly connects with the crowd. A perfectionist by nature, guided by a discipline built through business, BAYAZID doesn't just play music, he creates moments.
            </p>
          </FadeIn>
        </div>
      </section>


      {/* LONG BIO / STORY */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 uppercase tracking-tighter">
                The Story
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <FadeIn delay={0.2}>
              <p>
                Born in Brussels and raised between cultures, BAYAZID built his artistic identity on contrast, international influences, urban energy, and a natural attraction to rhythm. Settled in Bucharest from his teenage years, he developed a disciplined, performance-driven mindset that would later define his path.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                After building a solid career in business and entrepreneurship, where he created and grew a recognized brand in the distribution industry, he uncovered a deeper creative side that had always been within him. The moment he first stepped behind the decks was decisive. It wasn't just a discovery, but a reconnection with an energy that had always been there.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p>
                Today, BAYAZID delivers sets built on groove, tension, and release, blending deep, house-driven sounds with rhythmic influences that keep the dancefloor moving. His style is not about following trends, but about creating a recognizable atmosphere. With a refined approach and controlled energy, each appearance becomes an experience, not just a set.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOUND SECTION */}
      <section id="sound" className="py-24 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-display font-bold tracking-[0.3em] uppercase text-primary mb-12 flex items-center justify-end gap-4 text-right">
              Sound
              <span className="w-12 h-[1px] bg-primary" />
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="glass-panel p-2 rounded-xl">
            <iframe 
              width="100%" 
              height="300" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567&color=%231a1a2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="rounded-lg"
            />
          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Moments</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Behind The Decks", "Crowd Connection", "Live Set Brussels",
              "Studio Sessions", "Bucharest Nights", "Festival Mainstage"
            ].map((label, i) => (
              <FadeIn key={label} delay={0.1 * i} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-card border border-white/5">
                {/* Placeholder gradient since no real images */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-110 transition-transform duration-700
                  ${i % 3 === 0 ? 'from-[#0f1224] to-black' : 
                    i % 3 === 1 ? 'from-[#14151a] to-[#050505]' : 
                    'from-[#0a0f1c] to-black'}`} 
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="font-display uppercase tracking-widest text-sm text-white/40 group-hover:text-white transition-colors duration-300">
                    {label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INFO / TECH RIDER */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-xl font-display uppercase tracking-[0.2em] mb-8 text-white">Artist Info</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-muted-foreground">
              <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-primary/70 mb-2">Genres</span>
                <span className="font-medium text-white/90">Afro House / Deep House / Groove</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-primary/70 mb-2">Based In</span>
                <span className="font-medium text-white/90">Bucharest & Brussels</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-primary/70 mb-2">Availability</span>
                <span className="font-medium text-white/90">International</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-24 md:py-32 relative">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4 flex flex-col items-center gap-3">
              <span className="text-5xl md:text-7xl font-display font-black tracking-tighter text-glow">BOOK</span>
              <img
                src={`${import.meta.env.BASE_URL}images/bayazid-logo.png`}
                alt="BAYAZID"
                className="w-64 md:w-80 mx-auto"
                style={{ filter: "drop-shadow(0 0 20px rgba(99,102,241,0.3))" }}
              />
            </h2>
            <p className="text-muted-foreground text-lg">For inquiries, festivals, and club bookings.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 glass-panel p-8 md:p-12 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-medium">Full Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full bg-background/50 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Enter your name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/60 font-medium">Email Address</label>
                  <input 
                    {...form.register("email")}
                    className="w-full bg-background/50 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="contact@agency.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-medium">Event Date</label>
                <input 
                  type="date"
                  {...form.register("date")}
                  className="w-full bg-background/50 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all [color-scheme:dark]"
                />
                {form.formState.errors.date && (
                  <p className="text-destructive text-xs">{form.formState.errors.date.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-medium">Event Details</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-background/50 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Venue, expected capacity, set time..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-primary text-white font-display font-bold uppercase tracking-widest py-4 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 box-glow"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Request"}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
