import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-850">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">תחומי ההתמחות שלי</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg">
            פתרונות מקיפים המותאמים אישית לצרכי הארגון שלך, מתוך ראייה הוליסטית של הסביבה העסקית המשתנה.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              to={`/service/${service.id}`}
              key={service.id} 
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-accent-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-slate-900 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-grow">
                {service.shortDescription}
              </p>
              
              <div className="flex items-center text-accent-500 text-sm font-bold group-hover:gap-2 transition-all">
                <span>למידע נוסף</span>
                <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
