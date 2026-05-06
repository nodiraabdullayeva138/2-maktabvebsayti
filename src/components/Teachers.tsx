import React from 'react';
import { motion } from 'motion/react';
import { Award, Star } from 'lucide-react';

const teachers = [
  {
    name: "Abdullayeva Dilnoza",
    role: "Oaliy toifali Matematika o'qituvchisi",
    experience: "15 yil",
    image: "https://images.unsplash.com/photo-1544717297-fa154ddad54f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Karimov Javohir",
    role: "Ona tili va adabiyot o'qituvchisi",
    experience: "10 yil",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sultonova Malika",
    role: "Ingliz tili fani o'qituvchisi",
    experience: "8 yil",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
  },
  {
    name: "Nazarov Shokir",
    role: "Informatika fani o'qituvchisi",
    experience: "12 yil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-bold uppercase tracking-widest text-xs">Bizning faxrimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-school-primary">Tajribali Pedagoglar</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Maktabimizda o'z kasbiga sadoqatli, malakali va zamonaviy dars berish usullarini puxta egallagan ustozlar faoliyat yuritadilar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4]">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                    <div className="flex items-center gap-2 text-school-secondary text-xs font-bold uppercase mb-1">
                      <Star size={12} fill="currentColor" /> {teacher.experience} tajriba
                    </div>
                    <p className="text-[10px] text-gray-500 leading-tight">Viloyat miqyosidagi ko'plab tanlovlar g'olibi.</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-school-primary">{teacher.name}</h3>
              <p className="text-sm text-gray-500 mt-1 font-medium italic">{teacher.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
