import React from 'react';
import { BookOpen, Heart, Instagram, Send, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-school-primary transition-transform group-hover:scale-110">
                <BookOpen size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">2-MAKTAB</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200">Bilim va kelajak</p>
              </div>
            </a>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Bizning maktab o'quvchilarga nafaqat bilim, balki kelajakda porloq istiqbol sari yetaklovchi hayotiy tajriba ulashadi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Foydali havolalar</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#home" className="hover:text-white transition-colors">Bosh sahifa</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Maktab haqida</a></li>
              <li><a href="#teachers" className="hover:text-white transition-colors">O'qituvchilar</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Yangiliklar va tadbirlar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hujjatlar</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Nizom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lirsenziya</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ochiq ma'lumotlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Siyosat</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Biz bilan bog'lanish</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-school-secondary" />
                <a href="tel:+998880232027" className="hover:text-white transition-colors">+998-88-023-20-27</a>
              </li>
              <li className="flex items-center gap-3">
                <Send size={16} className="text-school-secondary" />
                <a href="#" className="hover:text-white transition-colors">Telegram</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-school-secondary" />
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={16} className="text-school-secondary" />
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-blue-200/50">
              © {currentYear} 2-umumta'lim maktabi. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-[10px] text-blue-200/40 mt-1 font-medium tracking-wide italic">
              Loyiha rahbari: Abdullayeva Nodira | Tel: +998-88-023-20-27
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-200/50">
            Design with <Heart size={12} className="text-red-400 fill-current" /> in Uzbekistan
          </div>
        </div>
      </div>
    </footer>
  );
}
