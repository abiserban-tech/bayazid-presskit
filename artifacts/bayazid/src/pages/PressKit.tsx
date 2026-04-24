import { Download, Instagram, Music, Youtube, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Footer } from "@/components/layout/Footer";
import jsPDF from "jspdf";

const BASE = import.meta.env.BASE_URL;

function downloadFile(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}

function generateEPK() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const margin = 18;
  let y = 0;

  // Background
  doc.setFillColor(8, 8, 12);
  doc.rect(0, 0, W, 297, "F");

  // Header bar
  doc.setFillColor(20, 20, 35);
  doc.rect(0, 0, W, 38, "F");

  // Accent line
  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(1.2);
  doc.line(0, 38, W, 38);

  y = 14;
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text("BAYAZID", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 200);
  doc.text("OFFICIAL ELECTRONIC PRESS KIT — 2025", margin, y + 8);

  doc.setTextColor(99, 102, 241);
  doc.setFontSize(8);
  doc.text("bayazid.com", W - margin, y + 4, { align: "right" });

  y = 50;

  // BIO
  doc.setFillColor(18, 18, 30);
  doc.roundedRect(margin, y, W - margin * 2, 52, 3, 3, "F");
  doc.setDrawColor(40, 40, 70);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, y, W - margin * 2, 52, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(99, 102, 241);
  doc.text("ARTIST BIO", margin + 6, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(220, 220, 240);
  const bio = "BAYAZID is a DJ who transforms multicultural energy into a captivating sound, where deep rhythms, hypnotic grooves, and modern influences blend into an intense dancefloor experience. Born in Brussels, raised between cultures and settled in Bucharest, his style reflects an authentic mix of international influences and urban energy. Each set is crafted with precision and delivered with energy that instantly connects with the crowd.";
  const bioLines = doc.splitTextToSize(bio, W - margin * 2 - 12);
  doc.text(bioLines, margin + 6, y + 16);

  y += 60;

  // Two columns: Artist Info + Social
  const colW = (W - margin * 2 - 6) / 2;

  // Artist Info box
  doc.setFillColor(18, 18, 30);
  doc.roundedRect(margin, y, colW, 58, 3, 3, "F");
  doc.setDrawColor(40, 40, 70);
  doc.roundedRect(margin, y, colW, 58, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(99, 102, 241);
  doc.text("ARTIST INFO", margin + 6, y + 8);

  const info = [
    ["Genres", "Afro House / Deep House / Groove"],
    ["Based In", "Bucharest & Brussels"],
    ["Origin", "Belgium"],
    ["Availability", "International"],
    ["Label", "Independent"],
  ];
  doc.setFontSize(8.5);
  info.forEach(([label, value], i) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(130, 130, 180);
    doc.text(label + ":", margin + 6, y + 18 + i * 8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(210, 210, 230);
    doc.text(value, margin + 32, y + 18 + i * 8);
  });

  // Social box
  const col2x = margin + colW + 6;
  doc.setFillColor(18, 18, 30);
  doc.roundedRect(col2x, y, colW, 58, 3, 3, "F");
  doc.setDrawColor(40, 40, 70);
  doc.roundedRect(col2x, y, colW, 58, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(99, 102, 241);
  doc.text("SOCIAL & STREAMING", col2x + 6, y + 8);

  const socials = [
    ["Instagram", "@tolga_cingiz"],
    ["YouTube", "@BAYAZIDMUSIC"],
    ["SoundCloud", "bayazid-music"],
    ["TikTok", "@bayazidmusic"],
  ];
  doc.setFontSize(8.5);
  socials.forEach(([platform, handle], i) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(130, 130, 180);
    doc.text(platform + ":", col2x + 6, y + 18 + i * 9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(210, 210, 230);
    doc.text(handle, col2x + 35, y + 18 + i * 9);
  });

  y += 66;

  // Music & Video
  doc.setFillColor(18, 18, 30);
  doc.roundedRect(margin, y, W - margin * 2, 38, 3, 3, "F");
  doc.setDrawColor(40, 40, 70);
  doc.roundedRect(margin, y, W - margin * 2, 38, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(99, 102, 241);
  doc.text("MUSIC & VIDEO LINKS", margin + 6, y + 8);

  const links = [
    ["SoundCloud", "soundcloud.com/bayazid-music-432837468"],
    ["YouTube", "youtube.com/@BAYAZIDMUSIC"],
    ["Live Set", "youtube.com/watch?v=ArlWGzpFFd8"],
  ];
  doc.setFontSize(8.5);
  links.forEach(([label, url], i) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(150, 150, 190);
    doc.text(label + ":", margin + 6, y + 18 + i * 7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(99, 102, 241);
    doc.text(url, margin + 32, y + 18 + i * 7);
  });

  y += 46;

  // Booking
  doc.setFillColor(25, 20, 50);
  doc.roundedRect(margin, y, W - margin * 2, 34, 3, 3, "F");
  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, y, W - margin * 2, 34, 3, 3, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(99, 102, 241);
  doc.text("BOOKING CONTACT", margin + 6, y + 8);

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("Booking@bayazid.com", margin + 6, y + 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(180, 180, 220);
  doc.text("+40 723 182 672", margin + 6, y + 26);

  y += 42;

  // Footer
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(60, 60, 90);
  doc.text("© 2025 BAYAZID · All Rights Reserved · For booking & press inquiries: Booking@bayazid.com", W / 2, 290, { align: "center" });

  doc.save("BAYAZID_EPK_2025.pdf");
}

export default function PressKit() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">

      {/* Sticky top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href={BASE} className="hover:opacity-70 transition-opacity">
            <img src={`${BASE}images/bayazid-logo.png`} alt="BAYAZID" className="h-7 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <a href={BASE} className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors hidden sm:block">← Back to site</a>
            <button
              onClick={generateEPK}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 box-glow"
            >
              <Download size={13} /> Download EPK
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">

        {/* HERO */}
        <section className="relative py-20 md:py-28 flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(ellipse at 50% 0%, hsl(230 100% 65% / 0.2), transparent 65%)` }} />
          <FadeIn direction="down" className="relative z-10 flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary/70 font-semibold">Official Electronic Press Kit</span>
            <img src={`${BASE}images/bayazid-logo.png`} alt="BAYAZID" className="w-56 md:w-80" style={{ filter: "drop-shadow(0 0 30px rgba(99,102,241,0.4))" }} />
            <p className="text-white/40 text-sm tracking-widest uppercase mt-1">2025 · Bucharest & Brussels</p>
          </FadeIn>
        </section>

        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-20">

          {/* BIO */}
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-3">Bio</p>
                <h2 className="text-3xl md:text-4xl font-display font-black leading-tight text-white">Artist<br/>Profile</h2>
              </div>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p className="text-lg text-white/90 font-light">BAYAZID is a DJ who transforms multicultural energy into a captivating sound, where <span className="text-primary">deep rhythms</span>, hypnotic grooves, and modern influences blend into an intense dancefloor experience.</p>
                <p>Born in Brussels and raised between cultures, BAYAZID built his artistic identity on contrast — international influences, urban energy, and a natural attraction to rhythm. Settled in Bucharest from his teenage years, he developed a disciplined, performance-driven mindset.</p>
                <p>After building a solid career in business and entrepreneurship, he uncovered a deeper creative side. Today, BAYAZID delivers sets built on groove, tension, and release — each appearance becomes an experience, not just a set.</p>
              </div>
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* ARTIST INFO */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-8">Artist Info</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Genres", value: "Afro House · Deep House · Groove" },
                { label: "Based In", value: "Bucharest & Brussels" },
                { label: "Origin", value: "Belgium" },
                { label: "Availability", value: "International" },
              ].map((item) => (
                <div key={item.label} className="glass-panel rounded-xl p-5 flex flex-col gap-2">
                  <span className="text-[9px] uppercase tracking-widest text-primary/60 font-semibold">{item.label}</span>
                  <span className="text-white font-medium leading-snug">{item.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* PHOTOS */}
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-1">Press Photos</p>
                <p className="text-white/40 text-sm">Click download to save high-resolution versions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { src: "bayazid-photo-1.jpg", label: "Artist Portrait 01" },
                { src: "bayazid-photo-3.jpg", label: "Live Set — CDJ" },
                { src: "bayazid-photo-2.jpg", label: "Artist Portrait 02" },
              ].map((photo) => (
                <div key={photo.src} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={`${BASE}images/${photo.src}`}
                      alt={photo.label}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                    <p className="text-white/80 text-xs tracking-wide mb-3">{photo.label}</p>
                    <button
                      onClick={() => downloadFile(`${BASE}images/${photo.src}`, `BAYAZID_${photo.src}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 w-fit"
                    >
                      <Download size={11} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* MUSIC */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-6">Music & Streaming</p>
            <div className="space-y-4">
              <div className="glass-panel rounded-xl p-3">
                <iframe
                  width="100%" height="260" scrolling="no" frameBorder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/bayazid-music-432837468&color=%231a1a2e&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "SoundCloud", icon: <Music size={14} />, url: "https://soundcloud.com/bayazid-music-432837468" },
                  { label: "YouTube", icon: <Youtube size={14} />, url: "https://www.youtube.com/@BAYAZIDMUSIC" },
                ].map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 glass-panel text-white/70 text-sm hover:text-white hover:border-primary border border-white/10 transition-all duration-300 rounded-lg">
                    {link.icon} {link.label} <ExternalLink size={11} className="opacity-40" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* LIVE SET VIDEO */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-6">Live Set</p>
            <div className="glass-panel rounded-xl p-3 overflow-hidden">
              <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ArlWGzpFFd8?rel=0&modestbranding=1&color=white"
                  title="BAYAZID Live Set"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* SOCIAL MEDIA */}
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-6">Social Media</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  platform: "Instagram",
                  handle: "@tolga_cingiz",
                  url: "https://www.instagram.com/tolga_cingiz/",
                  icon: <Instagram size={20} />,
                  color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
                  desc: "Behind the scenes & lifestyle",
                },
                {
                  platform: "YouTube",
                  handle: "@BAYAZIDMUSIC",
                  url: "https://www.youtube.com/@BAYAZIDMUSIC",
                  icon: <Youtube size={20} />,
                  color: "from-red-500 to-red-700",
                  desc: "Live sets & mixes",
                },
                {
                  platform: "TikTok",
                  handle: "@bayazidmusic",
                  url: "https://www.tiktok.com/@bayazidmusic",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z"/>
                    </svg>
                  ),
                  color: "from-[#010101] to-[#ee1d52]",
                  desc: "Short clips & moments",
                },
              ].map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="group glass-panel rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 border border-white/8 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{s.platform}</p>
                    <p className="text-primary text-sm">{s.handle}</p>
                    <p className="text-white/40 text-xs mt-1">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-white/30 text-xs group-hover:text-primary transition-colors">
                    Visit <ExternalLink size={10} />
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <div className="w-full h-[1px] bg-white/5" />

          {/* BOOKING */}
          <FadeIn>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              style={{ boxShadow: "0 0 60px rgba(99,102,241,0.1)" }}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold mb-4">Booking Contact</p>
                <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-6">Ready to book<br/>BAYAZID?</h3>
                <div className="space-y-3">
                  <a href="mailto:Booking@bayazid.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors duration-300 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={15} />
                    </div>
                    <span className="font-semibold text-lg">Booking@bayazid.com</span>
                  </a>
                  <a href="tel:+40723182672" className="flex items-center gap-3 text-white hover:text-primary transition-colors duration-300 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={15} />
                    </div>
                    <span className="font-semibold text-lg">+40 723 182 672</span>
                  </a>
                  <div className="flex items-center gap-3 text-white/40">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                      <MapPin size={15} />
                    </div>
                    <span className="text-sm">Bucharest, Romania · Available internationally</span>
                  </div>
                </div>
              </div>
              <button
                onClick={generateEPK}
                className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shrink-0 box-glow"
              >
                <Download size={16} /> Download EPK PDF
              </button>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
