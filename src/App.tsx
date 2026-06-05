import Navbar from './components/Navbar';
import Hero from './components/Hero.tsx';

export const App = () => {

  return (
    <>
<div className="min-h-screen relative overflow-hidden">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-100 h-100 bg-amber-100/30 rounded-full blur-3xl -z-10 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 md:py-12 flex flex-col gap-10 md:gap-20">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </div>

    </>
  )
}

export default App
