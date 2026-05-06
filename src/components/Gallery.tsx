import React from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Download } from 'lucide-react';

const galleryImages = [
  { url: "https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000", title: "Maktabimiz hayotidan" },
  { url: "https://images.unsplash.com/photo-1577891729319-f4871c674881?q=80&w=2064&auto=format&fit=crop", title: "Sport musobaqalari" },
  { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", title: "Dars jarayonlari" },
  { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", title: "Maktab binosi" },
  { url: "https://images.unsplash.com/photo-1523050335392-9ae953569528?q=80&w=2070&auto=format&fit=crop", title: "Bitiruv kechasi" },
  { url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop", title: "Kompyuter xonasi" },
  { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", title: "Bayram tadbirlari" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-school-secondary font-bold uppercase tracking-widest text-xs">Galereya</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-school-primary">Maktabimiz foto-lavhalarda</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Maktabimizning kundalik hayoti, dars jarayonlari va unutilmas lahzalarini tomosha qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer shadow-lg shadow-blue-900/5"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-8">
                <div className="text-white">
                  <div className="w-10 h-10 bg-school-secondary rounded-xl flex items-center justify-center mb-3">
                    <ImageIcon size={20} />
                  </div>
                  <h4 className="text-xl font-bold">{img.title}</h4>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = img.url;
                    link.download = `${img.title.toLowerCase().replace(/\s+/g, '_')}.jpg`;
                    link.click();
                  }}
                  className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-xl backdrop-blur-md transition-all shadow-xl"
                  title="Yuklab olish"
                >
                  <Download size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
