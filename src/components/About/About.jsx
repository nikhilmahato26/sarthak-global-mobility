import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src="/assets/hero_airport.png" 
                alt="Luxury Corporate Travel" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] z-20"
            >
              <p className="text-secondary font-bold text-3xl font-montserrat mb-1">10+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Experience</p>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-6 leading-tight">
                Redefining Premium Ground Transportation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                SGM Global Mobility is your trusted partner for airport transfers, corporate travel, executive transportation, and outstation journeys across India. We blend unparalleled comfort, impeccable safety, and absolute reliability.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Premium & meticulously maintained fleet",
                  "Verified, professional chauffeurs",
                  "24/7 priority customer support",
                  "Corporate billing & transparent pricing"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-secondary font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Button className="bg-primary hover:bg-secondary text-white rounded-full px-8 h-12 text-base font-semibold transition-all group">
                Discover Our Fleet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
