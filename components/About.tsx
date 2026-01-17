import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <TrendingUp size={32} />, value: "15+", label: "שנות ניסיון" },
    { icon: <Users size={32} />, value: "200+", label: "לקוחות מרוצים" },
    { icon: <Award size={32} />, value: "100%", label: "מחויבות להצלחה" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/2 relative order-2 md:order-1">
             <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500/20 to-transparent rounded-xl blur-lg"></div>
             <img 
              src="images/pic1.jpeg" 
              alt="Consulting Session" 
              className="relative rounded-lg shadow-2xl border border-slate-700 w-full grayscale-[20%]"
             />
          </div>

          <div className="md:w-1/2 order-1 md:order-2 space-y-6 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              על שמוליק רוזנפלד
            </h2>
            <div className="w-20 h-1 bg-accent-500 rounded-full"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              עם ניסיון עשיר בליווי חברות מובילות במשק, אני מתמחה בזיהוי חסמים עסקיים ופיתוח אסטרטגיות צמיחה מותאמות אישית. הגישה שלי משלבת ניתוח נתונים מעמיק עם הבנה פסיכולוגית של המערכת הארגונית.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              אני מאמין שכל עסק, גדול כקטן, מחזיק בפוטנציאל לא מנוצל. התפקיד שלי הוא לעזור לכם לחשוף אותו ולתרגם אותו לשורת הרווח.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-accent-500 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;