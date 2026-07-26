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
        className="text-4xl md:text-6xl font-extrabold text-white tracking-widest flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-playfair">SGM</span><span className="text-accent">GLOBAL</span>
      </motion.div>
    </motion.div>
  );
}
