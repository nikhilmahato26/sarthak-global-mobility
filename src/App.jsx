import { useState, useEffect } from 'react';
import { SmoothScroll } from './components/Shared/SmoothScroll';
import { PageLoader } from './components/Shared/PageLoader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';

import { Trust } from './components/Trust/Trust';
import { About } from './components/About/About';

import { Fleet } from './components/Fleet/Fleet';
import { Services } from './components/Services/Services';

import { Testimonials } from './components/Testimonials/Testimonials';
import { Footer } from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the luxury loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      {loading && <PageLoader />}
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Fleet />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
