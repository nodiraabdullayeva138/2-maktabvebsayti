import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../App';

interface NewsProps {
  items: NewsItem[];
}

export default function News({ items }: NewsProps) {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-school-secondary font-bold uppercase tracking-widest text-xs">Yangiliklar va E'lonlar</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-school-primary">Maktabimiz hayotidan</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              So'nggi yangiliklar, tadbirlar va maktabimizdagi muhim o'zgarishlar bilan tanishib boring.
            </p>
          </div>
          <button className="flex items-center gap-2 text-school-primary font-bold hover:gap-4 transition-all group">
            Barcha yangiliklar <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.article 
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-school-primary text-xs font-bold rounded-lg uppercase tracking-tight">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium uppercase tracking-tight">
                <Calendar size={14} className="text-school-secondary" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold leading-snug group-hover:text-school-secondary transition-colors">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
