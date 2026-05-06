import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Users, Compass } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="text-blue-500" />, 
    value: "1200+", 
    label: "O'quvchilar soni",
    desc: "Bilimga chanqoq yoshlar"
  },
  { 
    icon: <Award className="text-orange-500" />, 
    value: "50+", 
    label: "Oltin medallar",
    desc: "Bitiruvchilar yutuqlari"
  },
  { 
    icon: <BookOpen className="text-green-500" />, 
    value: "25+", 
    label: "Fan to'garaklari",
    desc: "Qiziqishlar bo'yicha ta'lim"
  },
  { 
    icon: <Compass className="text-purple-500" />, 
    value: "100%", 
    label: "Sifatli ta'lim",
    desc: "Zamonaviy o'quv dasturi"
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:translate-y-[-4px] transition-all"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-school-primary group-hover:text-white transition-colors duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-school-primary mb-2">{stat.value}</h3>
              <p className="font-bold text-sm uppercase tracking-wider text-gray-800 mb-1">{stat.label}</p>
              <p className="text-xs text-gray-400 font-medium italic">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
