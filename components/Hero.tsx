import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40 z-10"></div>
        <img 
          src="https://picsum.photos/id/4/1920/1080" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1 border border-accent-500/30 rounded-full bg-accent-500/10 backdrop-blur-sm">
            <span className="text-accent-400 text-sm font-semibold tracking-wide uppercase">
              ייעוץ אסטרטגי בכיר
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            להפוך חזון <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-400">
              למציאות עסקית
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
            אני עוזר למנהלים ולחברות לפרוץ את תקרת הזכוכית, לייעל תהליכים ולבנות אסטרטגיה מנצחת לצמיחה בטווח הארוך.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent-500 text-slate-900 font-bold rounded hover:bg-accent-400 transition-all flex items-center justify-center gap-2 group"
            >
              קבע פגישת ייעוץ
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border border-slate-600 text-white font-semibold rounded hover:bg-white/5 transition-all flex items-center justify-center"
            >
              השירותים שלי
            </a>
          </div>
        </div>

        {/* Abstract/Professional visual representation */}
        <div className="hidden md:block relative">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl">
               <img 
                 src="https://picsum.photos/id/103/800/1000" 
                 alt="Samuel Rosenfeld" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                 <p className="text-white font-bold text-lg">שמוליק רוזנפלד</p>
                 <p className="text-accent-400 text-sm">יועץ אסטרטגי</p>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-accent-500/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;