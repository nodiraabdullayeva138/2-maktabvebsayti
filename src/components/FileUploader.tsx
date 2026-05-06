import React, { useState, useRef } from 'react';
import { Upload, X, FileImage, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
}

export default function FileUploader({ onUpload }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [previews, setPreviews] = useState<{ id: string; url: string; name: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    
    const newPreviews = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name
    }));

    setPreviews(prev => [...prev, ...newPreviews]);
    onUpload(validFiles);
  };

  const removePreview = (id: string) => {
    setPreviews(prev => {
      const filtered = prev.filter(p => p.id !== id);
      // Clean up URL objects to avoid memory leaks
      const removed = prev.find(p => p.id === id);
      if (removed) URL.revokeObjectURL(removed.url);
      return filtered;
    });
  };

  return (
    <div className="space-y-6">
      <div 
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFiles(e.dataTransfer.files); }}
        className={`relative border-2 border-dashed rounded-3xl p-12 transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
          isDragging 
            ? 'border-school-secondary bg-school-secondary/5 scale-[0.99]' 
            : 'border-gray-200 hover:border-school-primary hover:bg-gray-50'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          className="hidden" 
          multiple 
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => handleFiles(e.target.files)}
        />
        
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
          isDragging ? 'bg-school-secondary text-white' : 'bg-gray-100 text-gray-400'
        }`}>
          <Upload size={32} />
        </div>

        <h3 className="text-lg font-bold text-gray-800">Rasmlarni shu yerga sudrab tashlang</h3>
        <p className="text-sm text-gray-500 mt-2">yoki kompyuterdan tanlash uchun bosing (JPG, PNG)</p>
        
        <div className="mt-6 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Max 5MB</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> JPG / PNG</span>
        </div>
      </div>

      <AnimatePresence>
        {previews.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {previews.map((preview) => (
              <motion.div 
                key={preview.id}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative aspect-square rounded-xl overflow-hidden group border border-gray-100 shadow-sm"
              >
                <img 
                  src={preview.url} 
                  alt="Preview" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-[10px] text-white truncate font-medium">{preview.name}</p>
                </div>
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      const link = document.createElement('a');
                      link.href = preview.url;
                      link.download = preview.name || 'image.jpg';
                      link.click();
                    }}
                    className="p-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-lg"
                    title="Yuklab olish"
                  >
                    <Upload size={14} className="rotate-180" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); removePreview(preview.id); }}
                    className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-lg"
                    title="O'chirish"
                  >
                    <X size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
