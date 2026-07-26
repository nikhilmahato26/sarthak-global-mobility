import { motion } from 'framer-motion';
import { BookingForm } from './BookingForm';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero_airport.png" 
          alt="Luxury Car Airport Transfer" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Text Content */}
        <div className="text-white max-w-2xl mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent font-medium text-sm mb-6">
              THE WORLD IS WAITING
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6">
              Premium Mobility <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 italic">
                For Every Journey
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
              Luxury Airport Transfers • Corporate Mobility • Outstation Travel • Executive Chauffeur Services
            </p>
          </motion.div>
        </div>

        {/* Booking Form (Desktop/Tablet) */}
        <div className="hidden lg:block w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </div>

      {/* Booking Form (Mobile) */}
      <div className="lg:hidden relative z-10 container mx-auto px-4 mt-8">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BookingForm />
          </motion.div>
      </div>
    </section>
  );
}
