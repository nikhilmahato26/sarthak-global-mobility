import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Airport Transfers',
    description: 'Punctual flight tracking & seamless pickup/drop services across all major airports.',
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Employee Transportation',
    description: 'Dedicated daily staff pick & drop shuttles, roster management, and corporate commuting.',
    image: '/assets/employee_transport.png',
    span: 'col-span-1 md:col-span-1'
  },
  {
    title: 'Corporate Mobility',
    description: 'Executive chauffeur cabs, monthly rentals, and corporate travel solutions.',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-1'
  },
  {
    title: 'Outstation Cabs',
    description: 'Safe, comfortable outstation & intercity rides with professional verified drivers.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-1'
  },
  {
    title: 'Luxury & VVIP Rentals',
    description: 'Mercedes-Benz, Fortuner, Innova Hycross & VIP vehicles for weddings & delegates.',
    image: 'https://images.unsplash.com/photo-1503370973809-b4b9b7754b2d?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Event & Delegation Fleet',
    description: 'Force Urbania & Tempo Travellers for large corporate delegations, events & group travel.',
    image: '/assets/urbania.png',
    span: 'col-span-1 md:col-span-1'
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[500px]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-gray-100 min-h-[260px] flex flex-col justify-end ${service.span}`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent"></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-xs md:text-sm mb-4 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Book Service <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
