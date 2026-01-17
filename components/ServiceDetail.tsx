import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import { servicesData } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4">
        <h2 className="text-3xl font-bold mb-4">השירות לא נמצא</h2>
        <Link to="/" className="text-accent-500 hover:text-accent-400 font-medium flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          חזרה לדף הבית
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 z-10"></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-accent-500/10 backdrop-blur-sm border border-accent-500/30 rounded-xl mb-6 text-accent-400">
                {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{service.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
            
            {/* Description Column */}
            <div className="md:col-span-2 space-y-8">
                <div className="bg-slate-850 p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-accent-500 pr-4">אודות השירות</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-slate-300 whitespace-pre-line">
                        {service.fullDescription}
                    </div>
                </div>

                <div className="bg-slate-850 p-8 rounded-2xl border border-slate-800 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-accent-500 pr-4">מה כולל השירות?</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-accent-500 shrink-0" />
                                <span className="text-slate-200 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-4">מעוניינים לשמוע עוד?</h3>
                    <p className="text-slate-400 mb-6 text-sm">
                        אשמח לתאם פגישת היכרות ולבחון כיצד אוכל לסייע לארגון שלכם להשיג את מטרותיו.
                    </p>
                    
                    <button 
                        onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 100);
                        }}
                        className="w-full py-3 bg-accent-500 hover:bg-accent-400 text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2 mb-4"
                    >
                        <Calendar className="w-5 h-5" />
                        תיאום פגישה
                    </button>

                    <Link 
                        to="/" 
                        className="w-full py-3 border border-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowRight className="w-4 h-4" />
                        חזרה לדף הבית
                    </Link>
                </div>
            </div>

        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;

