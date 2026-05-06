import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[50vw] h-[50vw] bg-school-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[40vw] h-[40vw] bg-school-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-school-secondary/10 text-school-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} /> Bilim - baxt poydevori
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-school-primary">
              Kelajakni <span className="text-school-secondary italic underline decoration-2 underline-offset-8">bilim</span> orqali quramiz
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              2-umumta'lim maktabi - bu sifatli ta'lim, individual yondashuv va yuksak natijalar maskani. Biz har bir o'quvchining qobiliyatini kashf etamiz.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-school-primary text-white rounded-2xl font-semibold flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-xl transition-all group">
                Batafsil ma'lumot <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all">
                Bog'lanish
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-gray-100 pt-10">
              <div>
                <h4 className="text-3xl font-bold text-school-primary">1200+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">O'quvchilar</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-school-primary">85+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">O'qituvchilar</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-school-primary">25+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">To'garaklar</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Placeholder (Decorative) */}
            <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000" 
                alt="2-maktab hayoti" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 md:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap size={24} />
              </div>
              <p className="text-xs font-semibold text-gray-800">Yuqori sifatli ta'lim tizimi</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[200px]"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <p className="text-xs font-semibold text-gray-800">Ahil jamoa va muhit</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
