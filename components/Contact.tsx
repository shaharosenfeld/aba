import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormState } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const subject = encodeURIComponent('פנייה חדשה מאתר הייעוץ');
    const body = encodeURIComponent(
      `שם: ${form.name}\n` +
      `טלפון: ${form.phone}\n` +
      `אימייל: ${form.email}\n\n` +
      `הודעה:\n${form.message}`
    );
    
    // Open email client
    window.location.href = `mailto:office@rosenfeld-cons.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">יצירת קשר</h2>
              <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">
                מוכנים לקחת את העסק לשלב הבא? השאירו פרטים ואחזור אליכם בהקדם.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8 bg-slate-850 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              
              {/* Contact Info */}
              <div className="md:col-span-2 bg-slate-800 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">פרטי התקשרות</h3>
                  <div className="space-y-6">
                    <a href="tel:+972547070444" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                      <div className="p-3 bg-slate-900 rounded-lg text-accent-500">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">טלפון</p>
                        <p className="text-white font-medium hover:text-accent-400 transition-colors">054-707-0444</p>
                      </div>
                    </a>
                    
                    <a href="sammmmmmmmmm@gmail.com" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                      <div className="p-3 bg-slate-900 rounded-lg text-accent-500">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">אימייל</p>
                        <p className="text-white font-medium hover:text-accent-400 transition-colors">office@rosenfeld-cons.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-900 rounded-lg text-accent-500">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">משרד</p>
                        <p className="text-white font-medium">מגדלי עזריאלי, תל אביב</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                   <div className="w-full h-32 bg-slate-900 rounded-lg overflow-hidden opacity-50">
                     <img src="https://picsum.photos/id/175/400/200" alt="Map" className="w-full h-full object-cover grayscale" />
                   </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">ההודעה נשלחה!</h3>
                    <p className="text-slate-400">תודה שפנית אלינו. נחזור אליך בהקדם האפשרי.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-accent-500 font-medium hover:underline mt-4"
                    >
                      שלח הודעה נוספת
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">שם מלא</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all"
                          placeholder="ישראל ישראלי"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">טלפון</label>
                        <input 
                          type="tel" 
                          name="phone"
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all"
                          placeholder="050-0000000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">אימייל</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">הודעה</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all resize-none"
                        placeholder="כיצד אוכל לעזור?"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-accent-500 hover:bg-accent-600 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-accent-500/20"
                    >
                      שלח הודעה
                    </button>
                  </form>
                )}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;