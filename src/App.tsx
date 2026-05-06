/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import News from './components/News';
import Teachers from './components/Teachers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Gallery from './components/Gallery';

export interface NewsItem {
  id: string;
  title: string;
  content?: string;
  date: string;
  image: string;
  category: string;
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Maktabimizda 'Navro'z' bayrami keng nishonlandi",
    date: "21 Mart, 2024",
    image: "https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000",
    category: "Tadbir"
  },
  {
    id: '2',
    title: "Matematika fanidan viloyat olimpiadasi g'oliblari",
    date: "15 Mart, 2024",
    image: "https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000",
    category: "Muvaffaqiyat"
  },
  {
    id: '3',
    title: "Yangi kutubxona fondi o'quvchilar ixtiyorida",
    date: "10 Mart, 2024",
    image: "https://drive.google.com/thumbnail?id=1BLiiiQcNPuxaNQpc3WrWxkhnWsk0CeI-&sz=w1000",
    category: "Yangilik"
  }
];

type ViewMode = 'landing' | 'admin';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [news, setNews] = useState<NewsItem[]>(() => {
    const saved = localStorage.getItem('school_news');
    return saved ? JSON.parse(saved) : DEFAULT_NEWS;
  });

  useEffect(() => {
    localStorage.setItem('school_news', JSON.stringify(news));
  }, [news]);

  const goToAdmin = () => setViewMode('admin');
  const goToLanding = () => setViewMode('landing');

  const handleAddNews = (item: NewsItem) => setNews([item, ...news]);
  const handleDeleteNews = (id: string) => setNews(news.filter(n => n.id !== id));

  if (viewMode === 'admin') {
    return (
      <AdminPanel 
        onLogout={goToLanding} 
        news={news} 
        onAddNews={handleAddNews} 
        onDeleteNews={handleDeleteNews}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogin={goToAdmin} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Teachers />
        <Gallery />
        <News items={news} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
