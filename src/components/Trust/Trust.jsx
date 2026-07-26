import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Users, Clock } from 'lucide-react';

export function Trust() {
  const stats = [
    { label: 'Successful Trips', value: '10,000+', icon: Trophy },
    { label: 'Professional Drivers', value: '100%', icon: ShieldCheck },
    { label: 'Customer Support', value: '24×7', icon: Clock },
    { label: 'Happy Customers', value: '50K+', icon: Users },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-secondary font-montserrat mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
