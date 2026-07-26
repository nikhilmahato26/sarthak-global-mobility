import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fleetData = [
  { category: 'Premium Hybrid MUV', name: 'Toyota Innova Hycross', image: '/assets/innova_hycross.png', idealFor: 'Executive & VIP Hybrid Travel', badge: 'HYBRID LUXURY' },
  { category: 'Force Urbania', name: 'Force Urbania (10 / 13 / 17 Seater)', image: '/assets/urbania.png', idealFor: 'VVIP Group & Delegation Travel', badge: 'LUXURY VAN' },
  { category: 'Premium MUV', name: 'Toyota Innova Crysta', image: '/assets/innova.png', idealFor: 'Corporate & Long Trips', badge: 'MOST POPULAR' },
  { category: 'Sedan', name: 'Maruti Suzuki Dzire', image: '/assets/dzire.png', idealFor: 'Airport & Business Travel' },
  { category: 'MUV', name: 'Maruti Suzuki Ertiga', image: '/assets/ertiga.png', idealFor: 'Family & Group Travel' },
  { category: 'Premium Sedan', name: 'Honda City / Virtus / Slavia', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800', idealFor: 'Executive Travel' },
  { category: 'SUV', name: 'Brezza / Venue / Nexon', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800', idealFor: 'Compact City Travel' },
  { category: 'Mid-Size SUV', name: 'Hyundai Creta / Kia Seltos', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', idealFor: 'Comfortable Journeys' },
  { category: 'Premium SUV', name: 'Mahindra XUV700 / Safari', image: '/assets/xuv700.png', idealFor: 'Family & Executive Outstation', badge: 'PREMIUM SUV' },
  { category: 'Luxury SUV', name: 'Toyota Fortuner Legender', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', idealFor: 'VIP Outstation' },
  { category: 'Luxury Sedan', name: 'Mercedes-Benz E-Class', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/E-Class/9790/1763471140336/front-left-side-47.jpg', idealFor: 'Executive & VIP Travel', badge: 'EXECUTIVE CLASS' },
  { category: 'Executive Luxury', name: 'Mercedes-Benz S-Class', image: '/assets/mercedes_benz.png', idealFor: 'Elite VVIP Transportation', badge: 'VVIP LUXURY' },
  { category: 'Luxury MPV', name: 'Toyota Vellfire / Lexus LM', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', idealFor: 'Ultra Luxury Group' },
  { category: 'Tempo Traveller', name: '9 / 12 / 17 / 26 Seater', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800', idealFor: 'Group Tours & Events' },
  { category: 'Luxury Coach Bus', name: 'Volvo / Scania / BharatBenz', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', idealFor: 'Large Event Logistics' },
  { category: 'Electric Vehicles', name: 'BYD e6 / MG ZS EV / Tata EV', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800', idealFor: 'Eco-Friendly Mobility' },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Fleet Collection</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
              Premium Vehicles For Every Journey
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-base">
              From budget city cabs to VVIP executive sedans and luxury coaches, explore our meticulously maintained fleet.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {fleetData.map((vehicle, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-secondary/90 text-white backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  {vehicle.category}
                </div>
                {vehicle.badge && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 font-extrabold px-2 py-0.5 rounded text-[9px] uppercase tracking-wider shadow-md animate-pulse">
                    {vehicle.badge}
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-secondary mb-1 leading-tight group-hover:text-primary transition-colors">{vehicle.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{vehicle.idealFor}</p>
                </div>
                <Button className="w-full bg-accent text-secondary hover:bg-secondary hover:text-white transition-colors h-9 text-xs rounded-lg font-bold shadow-sm">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
