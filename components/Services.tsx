import React from 'react';
import { BarChart3, Target, Briefcase, Lightbulb, UserCheck, Globe } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'אסטרטגיה עסקית',
    description: 'בניית תוכנית אסטרטגית מקיפה לטווח הארוך, כולל הגדרת חזון, יעדים ומדדי הצלחה ברורים.',
    icon: <Target className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'פיתוח עסקי',
    description: 'זיהוי מנועי צמיחה חדשים, פתיחת שווקים ויצירת שיתופי פעולה אסטרטגיים להגדלת ההכנסות.',
    icon: <TrendingUpIcon />
  },
  {
    id: '3',
    title: 'ניהול משברים',
    description: 'ליווי צמוד במצבי משבר, קבלת החלטות מהירה ומזעור נזקים תוך שמירה על המוניטין.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'חדשנות ארגונית',
    description: 'הטמעת תהליכי חדשנות וטכנולוגיה לשיפור היעילות התפעולית והיתרון התחרותי.',
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    id: '5',
    title: 'ליווי מנהלים',
    description: 'מנטורינג אישי למנכ"לים ובכירים, חידוד יכולות מנהיגות וקבלת החלטות בתנאי אי-ודאות.',
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    id: '6',
    title: 'פעילות בינלאומית',
    description: 'סיוע לחברות ישראליות בפריצה לשווקים גלובליים והתאמת המוצר לקהל היעד הבינלאומי.',
    icon: <Globe className="w-8 h-8" />
  }
];

// Helper component just for this file
function TrendingUpIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
}

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
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-accent-500/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-accent-500 mb-6 group-hover:bg-accent-500 group-hover:text-slate-900 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;