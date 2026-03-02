import { useState, useEffect } from 'react';
import { Calendar, Upload, Zap, Target, ArrowRight, Check, Info, X, Heart } from 'lucide-react';
import { AddToCalendarButton } from './components/AddToCalendarButton';
import { MatchHearts } from './components/MatchHearts';
import { AIParticles } from './components/AIParticles';

function App() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Cuenta regresiva hasta el 16 de marzo 2026 a las 8:00 AM
  useEffect(() => {
    const targetDate = new Date('2026-03-16T08:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img src="/fondo.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Top Navbar */}
        <div className="relative z-10 flex items-center justify-center gap-20 md:gap-32 lg:gap-40 px-6 md:px-12 pt-6 md:pt-8 mb-6">
          <img src="/logo-expotalentosas.svg" alt="Expo Talentosas" className="h-16 md:h-20 lg:h-24" />
          <img src="/logo-teamwork.svg" alt="TeamWork" className="h-10 md:h-12 lg:h-16" />
        </div>

        <div className="flex-1 flex items-center relative z-10">
          <div className="w-full px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">

              {/* Glassmorphism Main Card */}
              <div className="relative max-w-[680px] mx-auto mb-12 animate-scale-in">
                <div className="rounded-3xl border border-white/30 px-8 md:px-14 pt-8 md:pt-10 pb-14 md:pb-16" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                  
                  <p className="text-base md:text-lg text-white/90 font-bold mb-2">
                    Fer-<span className="italic">IA</span> <span className="not-italic font-light">Laboral Virtual </span>2026
                  </p>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 text-white whitespace-nowrap">EXPO TALENTOSAS</h2>
                  
                  <p className="text-white/70 text-sm md:text-base">
                    Sube tu CV y haz <span className="font-bold text-white">MATCH</span> con ofertas laborales que te están buscando.
                  </p>

                  {/* Date Badge - positioned at bottom of card */}
                  <div className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2">
                    <div className="bg-white rounded-full px-6 md:px-8 py-2.5 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 text-sm md:text-base font-bold whitespace-nowrap" style={{ color: '#2563eb' }}>
                      <Calendar className="w-5 h-5 md:w-5 md:h-5" />
                      16, 17 y 18 de marzo
                    </div>
                  </div>
                </div>
              </div>

              {/* Countdown */}
              <div className="max-w-[680px] mx-auto mb-10">
                <h4 className="text-white font-bold text-sm md:text-base mb-4">Faltan solo:</h4>
                <div className="rounded-2xl border border-white/30 py-4 md:py-5 px-2 md:px-4 inline-flex items-center" style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                  {[
                    { value: timeLeft.days, label: 'Días' },
                    { value: timeLeft.hours, label: 'Horas' },
                    { value: timeLeft.minutes, label: 'Minutos' },
                    { value: timeLeft.seconds, label: 'Segundos' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="px-5 md:px-8 py-1 text-center">
                        <div className="text-3xl md:text-5xl font-black text-white leading-tight">
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-white/50 font-semibold text-[9px] md:text-[11px] uppercase tracking-wider mt-1">{item.label}</div>
                      </div>
                      {i < 3 && <div className="w-px h-14 md:h-16 bg-white/25 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Calendar Button */}
              <div className="mb-10">
                <AddToCalendarButton variant="glass" size="lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tutorial Button */}
        <div className="fixed bottom-6 right-6 z-40 group">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'var(--gradient-magenta)', opacity: 0.3 }} />
          <div className="absolute inset-0 rounded-full animate-pulse" style={{ background: 'var(--gradient-magenta)', opacity: 0.2 }} />
          
          {/* Button */}
          <button
            onClick={() => setShowTutorial(true)}
            className="relative w-16 h-16 rounded-full text-white shadow-[0_8px_30px_rgb(220,22,120,0.4)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_12px_40px_rgb(220,22,120,0.6)] hover:scale-110 active:scale-95 animate-bounce"
            style={{ background: 'var(--gradient-button)', animationDuration: '2s' }}
            aria-label="Ver tutorial"
          >
            <Info className="w-7 h-7" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-white text-foreground px-4 py-2 rounded-xl shadow-lg border-2 border-primary/20 whitespace-nowrap font-bold text-sm">
              Prepárate para la feria con nuestro tutorial
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white border-r-2 border-b-2 border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <div className="text-center mb-20">
            <h2 className="text-magenta text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <img src="/pixel-shine.svg" className="w-15 h-12 inline mr-2 animate-pulse" />
              ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              En tres simples pasos, nuestra IA te conecta con las oportunidades perfectas para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Upload,
                title: "Sube tu CV",
                desc: "Carga tu CV en PDF o Word.",
                step: 1,
                features: ["Formatos PDF, DOCX, TXT", "Análisis en segundos", "100% privado"],
                effect: 'scan'
              },
              {
                icon: Zap,
                title: "IA completa tu perfil",
                desc: "La IA extrae tu experiencia automáticamente.",
                step: 2,
                features: ["Extracción automática", "Detección de habilidades", "Análisis inteligente"],
                effect: 'ai'
              },
              {
                icon: Target,
                title: "Smart Match",
                desc: "Ofertas ordenadas por compatibilidad.",
                step: 3,
                features: ["Matching personalizado", "Postula con 1 click", "Resultados instantáneos"],
                effect: 'match'
              },
            ].map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border-2 border-border shadow-[4px_4px_0px_0px_hsl(var(--accent)/0.2)] hover:shadow-[6px_6px_0px_0px_hsl(var(--accent)/0.3)] transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Efectos animados según el tipo de paso */}
                {step.effect === 'scan' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="scan-line" />
                  </div>
                )}
                
                {step.effect === 'ai' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <AIParticles />
                  </div>
                )}
                
                {step.effect === 'match' && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <MatchHearts />
                  </div>
                )}
                
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-magenta)' }}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center animate-scale-in shadow-lg" style={{ background: 'var(--gradient-magenta)', animationDelay: `${i * 0.1 + 0.2}s` }}>
                    {step.step}
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${i * 0.1 + j * 0.05}s` }}>
                      <Check className="w-4 h-4 flex-shrink-0 text-magenta animate-scale-in" style={{ animationDelay: `${i * 0.1 + j * 0.05 + 0.1}s` }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-tight relative z-10">
          {/* Footer Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Expo Talentosas Window */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-white/20 shadow-[4px_4px_0px_0px_hsl(var(--accent)/0.3)] hover:shadow-[6px_6px_0px_0px_hsl(var(--accent)/0.4)] transition-all">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b-2 border-primary/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full retro-control-pink" />
                  <span className="w-3 h-3 rounded-full retro-control-violet" />
                  <span className="w-3 h-3 rounded-full retro-control-blue" />
                </div>
              </div>
              
              {/* Window Content */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                    <img src="/logo-teamwork-azul.svg" alt="Teamwork" className="h-10" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Expo Talentosas es una iniciativa de TeamWork para conectar el talento femenino con las mejores oportunidades laborales del mercado.
                </p>
              </div>
            </div>

            {/* Redes sociales Window */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-white/20 shadow-[4px_4px_0px_0px_hsl(var(--accent)/0.3)] hover:shadow-[6px_6px_0px_0px_hsl(var(--accent)/0.4)] transition-all">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b-2 border-primary/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full retro-control-pink" />
                  <span className="w-3 h-3 rounded-full retro-control-violet" />
                  <span className="w-3 h-3 rounded-full retro-control-blue" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-xl mb-3 text-foreground text-primary">Síguenos en nuestras redes sociales</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Mantente al día con las últimas noticias, consejos y oportunidades laborales siguiéndonos en nuestras redes sociales.
                </p>
                {/* Social Icons with gradient borders */}
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/teamworkchile/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all hover:scale-110"
                    style={{ borderImage: 'linear-gradient(135deg, hsl(var(--magenta)), hsl(var(--pink))) 1' }}
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" style={{ color: 'hsl(var(--magenta))' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://cl.linkedin.com/company/team-work-consultora-rrhh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all hover:scale-110"
                    style={{ borderImage: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent))) 1' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@Teamwork-chile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all hover:scale-110"
                    style={{ borderImage: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--pink))) 1' }}
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center space-y-3">
            <p className="text-sm text-white/80 flex items-center justify-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-white animate-bounce" /> para las talentosas de Chile
            </p>
          </div>
        </div>
      </footer>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b-2 border-primary/10 px-6 py-4 flex items-center justify-between">
              <img src="/pixel-shine.svg" className="w-10 h-10 inline animate-pulse" />
              <h3 className="text-magenta text-2xl font-bold">Tutorial: ¿Cómo usar Expo Talentosas?</h3>
              <button
                onClick={() => setShowTutorial(false)}
                className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {[
                {
                  icon: Upload,
                  title: "REGÍSTRATE A PARTIR DEL 16 DE MARZO",
                  description: "Crea tu cuenta en Expo Talentosas en solo unos segundos.",
                  number: "01"
                },
                {
                  icon: Upload,
                  title: "SUBE O CREA TU CV",
                  description: "Carga tu currículum en formato PDF o Word. Si no cuentas con CV podrás crearlo en la plataforma.",
                  number: "02"
                },
                {
                  icon: Zap,
                  title: "IA COMPLETA TU PERFIL",
                  description: "Nuestra IA extrae tu información y crea un perfil optimizado. Te indicará los campos faltantes para sacar el máximo provecho a tu postulación.",
                  number: "03"
                },
                {
                  icon: Target,
                  title: "ENCUENTRA LAS OFERTAS QUE TE ESTÁN BUSCANDO",
                  description: "Inicia el Match y conecta con las ofertas laborales que más se ajustan a tu perfil.",
                  number: "04"
                },
                {
                  icon: ArrowRight,
                  title: "POSTULA FÁCILMENTE",
                  description: "Aplica a las ofertas con un solo clic.",
                  number: "05"
                },
              ].map((step, i) => (
                <div key={i} className="bg-muted/50 rounded-xl p-5 border border-border hover:border-accent/50 transition-all hover:shadow-md animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center relative shadow-lg animate-scale-in" style={{ background: 'var(--gradient-magenta)', animationDelay: `${i * 0.1}s` }}>
                        <step.icon className="w-6 h-6 text-white" />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white text-xs font-bold flex items-center justify-center  animate-scale-in" style={{ color: 'hsl(var(--magenta))', borderColor: 'hsl(var(--magenta))', animationDelay: `${i * 0.1 + 0.2}s` }}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base mb-2 text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-t-2 border-primary/10 px-6 py-4">
              <button
                onClick={() => setShowTutorial(false)}
                className="btn-primary w-full justify-center"
              >
                ¡Entendido!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
