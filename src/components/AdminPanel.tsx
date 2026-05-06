import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Bell, 
  Settings, 
  LogOut, 
  TrendingUp,
  FileText,
  Plus,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FileUploader from './FileUploader';

import { NewsItem } from '../App';

interface AdminPanelProps {
  onLogout: () => void;
  news: NewsItem[];
  onAddNews: (news: NewsItem) => void;
  onDeleteNews: (id: string) => void;
}

type AdminTab = 'dashboard' | 'media' | 'news' | 'teachers';

function NewsManager({ news, onAdd, onDelete }: { news: NewsItem[], onAdd: (n: NewsItem) => void, onDelete: (id: string) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Yangilik',
    image: 'https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;
    
    onAdd({
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    
    setFormData({ title: '', content: '', category: 'Yangilik', image: formData.image });
  };

  return (
    <motion.div
      key="news-manager"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      {/* Form */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Plus size={20} className="text-school-secondary" /> Yangi maqola qo'shish
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sarlavha</label>
            <input 
              type="text" 
              required
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary/20 focus:border-school-primary"
              placeholder="Maqola sarlavhasini kiriting..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategoriya</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary/20 focus:border-school-primary"
              >
                <option>Yangilik</option>
                <option>Tadbir</option>
                <option>E'lon</option>
                <option>Muvaffaqiyat</option>
                <option>Sport</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sana</label>
              <input 
                type="text" 
                disabled
                value="Bugun"
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rasm URL</label>
            <input 
              type="url" 
              value={formData.image}
              onChange={e => setFormData({...formData, image: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary/20 focus:border-school-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mazmuni</label>
            <textarea 
              rows={4}
              value={formData.content}
              onChange={e => setFormData({...formData, content: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-school-primary/20 focus:border-school-primary"
              placeholder="Maqola matnini yozing..."
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-school-primary text-white font-bold rounded-xl hover:bg-school-secondary transition-all shadow-lg active:scale-[0.98]"
          >
            Maqolani e'lon qilish
          </button>
        </form>
      </div>

      {/* List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Mavjud yangiliklar ({news.length})</h3>
        <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2">
          {news.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl flex gap-4 border border-gray-100 shadow-sm group hover:border-school-secondary/30 transition-all">
              <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                <img src={item.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase text-school-secondary tracking-wider">{item.category}</span>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    title="O'chirish"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <h4 className="font-bold text-gray-800 truncate mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{item.content || 'Mazmun berilmagan...'}</p>
                <div className="text-[10px] text-gray-400 mt-2 font-medium">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AdminPanel({ onLogout, news, onAddNews, onDeleteNews }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Jami o\'quvchilar', value: '1,240', icon: <Users />, color: 'bg-blue-500' },
    { label: 'O\'qituvchilar', value: '86', icon: <BookOpen />, color: 'bg-green-500' },
    { label: 'Yangiliklar', value: '42', icon: <Bell />, color: 'bg-orange-500' },
    { label: 'Faol to\'garaklar', value: '28', icon: <TrendingUp />, color: 'bg-purple-500' },
  ];

  const handleImageUpload = (files: File[]) => {
    console.log('Fayllar qabul qilindi:', files);
    // Real server bo'lsa fetch() ishlatilardi
  };

  const navItems = [
    { id: 'dashboard', label: 'Boshqaruv', icon: <LayoutDashboard size={20} /> },
    { id: 'news', label: 'Yangiliklar', icon: <Bell size={20} /> },
    { id: 'media', label: 'Rasmlar yuklash', icon: <ImageIcon size={20} /> },
  ];

  return (
    <div id="admin-panel" className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-school-primary text-white hidden lg:flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-2 border-b border-white/10">
          <div className="w-8 h-8 bg-white text-school-primary rounded flex items-center justify-center font-bold">2</div>
          <span className="font-bold tracking-tight uppercase tracking-widest">Admin Panel</span>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveTab(item.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <Users size={20} /> O'quvchilar
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-sm font-medium transition-colors">
            <BookOpen size={20} /> O'qituvchilar
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-all"
          >
            <LogOut size={20} /> Chiqish
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 px-6 lg:px-8 py-4 flex items-center justify-between shadow-sm shrink-0">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 text-gray-500 bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Plus size={20} className={mobileMenuOpen ? 'rotate-45' : ''} />
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-gray-800">
              {activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'news' ? 'Yangiliklar boshqaruvi' : 'Rasmlar yuklash'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-500" onClick={onLogout}>
              <LogOut size={20} />
            </button>
            <div className="w-10 h-10 rounded-full bg-school-secondary text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setActiveTab(item.id as AdminTab); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeTab === item.id ? 'bg-gray-100 text-school-primary' : 'hover:bg-gray-50'
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 ${stat.color} text-white rounded-xl flex items-center justify-center shadow-lg shadow-${stat.color.split('-')[1]}-200`}>
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                      <h3 className="font-bold text-gray-800">Oxirgi yangiliklar</h3>
                      <button 
                        onClick={() => setActiveTab('news')}
                        className="text-xs font-bold text-school-primary hover:underline flex items-center gap-1"
                      >
                        <Plus size={14} /> Yangi qo'shish
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-4">Sarlavha</th>
                            <th className="px-6 py-4">Sana</th>
                            <th className="px-6 py-4">Kategoriya</th>
                            <th className="px-6 py-4">Amallar</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                          {news.slice(0, 5).map((item) => (
                            <tr key={item.id}>
                              <td className="px-6 py-4 font-medium truncate max-w-xs">{item.title}</td>
                              <td className="px-6 py-4 text-gray-500">{item.date}</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-[10px] font-bold uppercase">{item.category}</span>
                              </td>
                              <td className="px-6 py-4 text-school-primary font-bold hover:underline cursor-pointer">Ko'rish</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-6">Tezkor amallar</h3>
                    <div className="space-y-4">
                      <button className="w-full p-4 bg-gray-50 rounded-xl hover:bg-blue-50 text-left transition-colors flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                            <Users size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">O'quvchi qo'shish</p>
                            <p className="text-[10px] text-gray-500">Yangi o'quvchi ma'lumotlari</p>
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => setActiveTab('news')}
                        className="w-full p-4 bg-gray-50 rounded-xl hover:bg-green-50 text-left transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                            <FileText size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">Yangilik yozish</p>
                            <p className="text-[10px] text-gray-500">Yangi maqola e'lon qilish</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'news' && (
              <NewsManager 
                news={news} 
                onAdd={onAddNews} 
                onDelete={onDeleteNews} 
              />
            )}

            {activeTab === 'media' && (
              <motion.div
                key="media"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl"
              >
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-800">Media fayllarni boshqarish</h3>
                  <p className="text-gray-500 mt-2 italic text-sm">Veb-sayt galereyasi va yangiliklar uchun rasm yuklang (JPG rasm fayllari...)</p>
                </div>
                
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <FileUploader onUpload={handleImageUpload} />
                </div>

                <div className="mt-12">
                  <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <ImageIcon size={18} className="text-school-secondary" /> Mavjud rasmlar
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative group">
                        <img 
                          src={`https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&sig=${n}`} 
                          alt="Maktab rasmi" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button 
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = `https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&sig=${n}`;
                              link.download = `maktab_rasmi_${n}.jpg`;
                              link.click();
                            }}
                            className="px-3 py-1.5 bg-white text-xs font-bold rounded-lg text-school-primary hover:bg-school-secondary hover:text-white transition-colors"
                          >
                            Yuklab olish
                          </button>
                          <button className="px-3 py-1.5 bg-red-500 text-xs font-bold rounded-lg text-white hover:bg-red-600 transition-colors">
                            O'chirish
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
