import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-accent-500 font-bold">SR</div>
             <span className="text-lg font-semibold text-white">שמוליק רוזנפלד</span>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-accent-500 transition-colors">אודות</a>
            <a href="#services" className="hover:text-accent-500 transition-colors">שירותים</a>
            <a href="#contact" className="hover:text-accent-500 transition-colors">צור קשר</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-accent-500 hover:text-slate-900 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-accent-500 hover:text-slate-900 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-accent-500 hover:text-slate-900 transition-all">
              <Twitter size={18} />
            </a>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Samuel Rosenfeld Consulting. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;