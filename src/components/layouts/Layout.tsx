import Navbar from '../sections/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer';
import ScrollToTop from '../common/ScrollToTop';
import BackToTop from '../common/BackToTop';

export default function Layout() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <ScrollToTop />
      <BackToTop />
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-1/2 left-0 w-100 h-100 bg-amber-100/30 dark:bg-amber-950/10 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="sticky top-0 z-50 bg-cream/90 dark:bg-zinc-950/90 backdrop-blur-md dark:border-zinc-800/30">
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-8">
          <Navbar />
        </div>
      </div>

      <div className="flex-grow w-full max-w-7xl mx-auto px-4 pb-4 md:px-8 md:pb-12 pt-6 md:pt-12 flex flex-col gap-10 md:gap-20">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
