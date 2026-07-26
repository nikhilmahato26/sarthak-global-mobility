import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const fleetData = [
  { category: 'Premium Hybrid MUV', name: 'Toyota Innova Hycross', image: '/assets/innova_hycross.png', idealFor: 'Executive & VIP Hybrid Travel', badge: 'HYBRID LUXURY' },
  { category: 'Force Urbania', name: 'Force Urbania (10 / 13 / 17 Seater)', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Force/Urbania/11849/1763466348855/front-left-side-47.jpg', idealFor: 'VVIP Group & Delegation Travel', badge: 'LUXURY VAN' },
  { category: 'Premium MUV', name: 'Toyota Innova Crysta', image: '/assets/innova.png', idealFor: 'Corporate & Long Trips', badge: 'MOST POPULAR' },
  { category: 'Sedan', name: 'Maruti Suzuki Dzire', image: '/assets/dzire.png', idealFor: 'Airport & Business Travel' },
  { category: 'MUV', name: 'Maruti Suzuki Ertiga', image: '/assets/ertiga.png', idealFor: 'Family & Group Travel' },
  { category: 'Premium Sedan', name: 'Honda City / Virtus / Slavia', image: 'https://imgd.aeplcdn.com/642x361/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75', idealFor: 'Executive Travel' },
  { category: 'SUV', name: 'Brezza / Venue / Nexon', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800', idealFor: 'Compact City Travel' },
  { category: 'Mid-Size SUV', name: 'Hyundai Creta / Kia Seltos', image: 'https://img.gaadicdn.com/images/car-images/large/Hyundai/Creta/11439/1777531540562/Atlas-White_d8dfe5.jpg', idealFor: 'Comfortable Journeys' },
  { category: 'Premium SUV', name: 'Mahindra XUV700 / Safari', image: '/assets/xuv700.png', idealFor: 'Family & Executive Outstation', badge: 'PREMIUM SUV' },
  { category: 'Luxury SUV', name: 'Toyota Fortuner Legender', image: 'https://www.topgearmag.in/uploads/News/Image/news_snapedit_1713784276991jpg1713785362.jpg', idealFor: 'VIP Outstation' },
  { category: 'Luxury Sedan', name: 'Mercedes-Benz E-Class', image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/E-Class/9790/1763471140336/front-left-side-47.jpg', idealFor: 'Executive & VIP Travel', badge: 'EXECUTIVE CLASS' },
  { category: 'Executive Luxury', name: 'Mercedes-Benz S-Class', image: '/assets/mercedes_benz.png', idealFor: 'Elite VVIP Transportation', badge: 'VVIP LUXURY' },
  { category: 'Luxury MPV', name: 'Toyota Vellfire / Lexus LM', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Vellfire/10337/1755846282322/front-left-side-47.jpg?imwidth=420&impolicy=resize', idealFor: 'Ultra Luxury Group' },
  { category: 'Tempo Traveller', name: '9 / 12 / 17 / 26 Seater', image: 'https://www.jcrcab.com/wp-content/uploads/2020/07/Force-Tempo-Traveller-non-ac-1250x917.jpg', idealFor: 'Group Tours & Events' },
  { category: 'Luxury Coach Bus', name: 'Volvo / Scania / BharatBenz', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', idealFor: 'Large Event Logistics' },
  { category: 'Electric Vehicles', name: 'BYD e6 / MG ZS EV / Tata EV', image: 'https://mgmotor.scene7.com/is/image/mgmotor/zs-img-dsc-0318?$mg-rgb-tablet-image-responsive$&fmt=png-alpha', idealFor: 'Eco-Friendly Mobility' },
];

export function Fleet() {
  const handleVehicleBook = (vehicleName, category, idealFor) => {
    const targetPhone = '919891335351';
    const msg = `*VEHICLE BOOKING INQUIRY - SGM GLOBAL MOBILITY*\n\nHello, I want to book the *${vehicleName}* (${category}).\n\n🎯 *Usage:* ${idealFor}\n\nPlease share availability, per km / daily rental rates!`;
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

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
              From budget city cabs to VVIP executive sedans, Innova Hycross, Force Urbania and luxury coaches, explore our fleet.
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
              onClick={() => handleVehicleBook(vehicle.name, vehicle.category, vehicle.idealFor)}
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
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVehicleBook(vehicle.name, vehicle.category, vehicle.idealFor);
                  }}
                  className="w-full bg-accent text-secondary hover:bg-secondary hover:text-white transition-colors h-9 text-xs rounded-lg font-bold shadow-sm"
                >
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
