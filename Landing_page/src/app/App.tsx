import '@/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AllProjectsPage } from '@/app/pages/AllProjectsPage';
import { ProjectDetailPage } from '@/app/pages/ProjectDetailPage';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}