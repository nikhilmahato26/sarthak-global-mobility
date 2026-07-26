import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Airport Transfers',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    title: 'Corporate Mobility',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1'
  },
  {
    title: 'Outstation Cabs',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1'
  },
  {
    title: 'Luxury Rentals',
    image: 'https://images.unsplash.com/photo-1503370973809-b4b9b7754b2d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1'
  },
  {
    title: 'Employee Transport',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Choose Your Journey</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary mb-4">
              Travel Your Way
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you need a reliable airport transfer, a luxury car for a wedding, or a corporate fleet for your team – we have the perfect mobility solution.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-auto"
          >
             <button className="bg-secondary text-white hover:bg-primary transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                BROWSE ALL SERVICES
                <ArrowRight size={18} />
             </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${service.span}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-2">{service.title}</h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <p className="text-white/80 font-medium flex items-center gap-2 mt-2">
                    Explore Service <ArrowRight size={16} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
