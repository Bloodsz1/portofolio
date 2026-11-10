import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import FloatingLogos from '@/components/FloatingLogos';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Journey from '@/components/Journey';
import Certification from '@/components/Certification';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [motionOff, setMotionOff] = useState(false);

  return (
    <MotionConfig reducedMotion={motionOff ? 'always' : 'user'}>
      <div data-motion={motionOff ? 'off' : 'on'} className="relative isolate grain min-h-screen overflow-x-clip bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Lewati ke konten
        </a>
        <FloatingLogos />
        <Navbar motionOff={motionOff} onToggleMotion={() => setMotionOff((v) => !v)} />
        <main id="main">
          <Hero />
          <Ticker />
          <About />
          <Projects />
          <TechStack />
          <Journey />
          <Certification />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
