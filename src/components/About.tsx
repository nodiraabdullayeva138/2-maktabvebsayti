import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    "Malakali pedagoglar jamoasi",
    "Zamonaviy kompyuter xonalari",
    "Keng va yorug' o'quv xonalari",
    "Boy kutubxona va o'quv zali",
    "Sport majmuasi va to'garaklar",
    "Sifatli va bepul darsliklar"
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
                alt="Biz haqimizda" 
                className="w-full h-full object-cover -rotate-3 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-school-secondary rounded-full -z-10 blur-2xl opacity-20" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-school-primary rounded-full -z-10 blur-2xl opacity-20" />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-school-secondary font-bold uppercase tracking-widest text-xs">Maktab haqida ma'lumot</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-school-primary leading-tight">Bizning asosiy maqsadimiz - barkamol avlod tarbiyasi</h2>
              <p className="text-gray-600 mt-6 leading-relaxed text-lg">
                2-umumta'lim maktabi 1985-yilda tashkil etilgan bo'lib, o'zining ko'p yillik an'analari va yuksak ta'lim standartlari bilan tanilgan. Biz har bir bolaning qiziqishlarini inobatga olgan holda, ularni hayotga tayyorlaymiz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-school-secondary shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-semibold text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-school-primary/5 border-l-4 border-school-primary rounded-r-2xl italic text-school-primary font-medium">
              "Ta'lim - bu dunyoni o'zgartirish uchun ishlatishingiz mumkin bo'lgan eng qudratli quroldir."
              <span className="block mt-2 font-bold not-italic text-sm">- Nelson Mandela</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
