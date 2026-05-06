import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-school-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 grid lg:grid-cols-2">
          
          <div className="p-10 md:p-16 bg-school-primary text-white">
            <h2 className="text-4xl font-bold mb-8">Biz bilan bog'laning</h2>
            <p className="text-blue-100 mb-12 leading-relaxed">
              Savollaringiz bormi? Bizga yozing yoki qo'ng'iroq qiling. Biz har doim yordam berishga tayyormiz.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Manzil</h4>
                  <p className="text-blue-100/70 text-sm italic">Toshkent viloyati, Yangiyo'l tumani, Mustaqillik ko'chasi, 45-uy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon</h4>
                  <p className="text-blue-100/70 text-sm">+998 (71) 234-56-78</p>
                  <p className="text-blue-100/70 text-sm">+998 (90) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ish vaqti</h4>
                  <p className="text-blue-100/70 text-sm">Dushanba - Shanba: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div className="p-10 md:p-16">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Ismingiz</label>
                  <input 
                    type="text" 
                    placeholder="Eshmatov Toshmat" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-school-primary focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Telefon raqamingiz</label>
                  <input 
                    type="tel" 
                    placeholder="+998" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-school-primary focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Mavzu</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-school-primary focus:bg-white transition-all outline-none appearance-none">
                  <option>Qabul bo'limi</option>
                  <option>O'quv ishlari</option>
                  <option>Shikoyat va takliflar</option>
                  <option>Hamkorlik</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Xabaringiz</label>
                <textarea 
                  rows={4} 
                  placeholder="Xabaringizni bu yerga yozing..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-school-primary focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-school-secondary text-white rounded-xl font-bold hover:shadow-lg hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                Xabar yuborish <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
