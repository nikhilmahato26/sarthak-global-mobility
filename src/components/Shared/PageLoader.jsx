import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div 
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="/assets/logo.jpg" 
          alt="SGM Sarthak Global Mobility" 
          className="h-24 w-24 object-contain rounded-full border-2 border-accent shadow-2xl bg-white p-1" 
        />
        <div className="text-3xl md:text-5xl font-extrabold text-white tracking-widest flex items-center gap-2">
          <span className="font-playfair">SGM</span><span className="text-accent">GLOBAL</span>
        </div>
        <span className="text-xs font-semibold tracking-widest text-accent uppercase">
          Sarthak Global Mobility
        </span>
      </motion.div>
    </motion.div>
  );
}
