import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Clock, Users, Car, Phone, User, MessageCircle } from 'lucide-react';

export function BookingForm() {
  const [tripType, setTripType] = useState('one-way');

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
        {['one-way', 'round-trip', 'airport', 'local', 'employee-transport'].map((type) => (
          <button
            key={type}
            onClick={() => setTripType(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              tripType === type 
                ? 'bg-secondary text-white shadow-md' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {type === 'employee-transport' ? 'Employee Transport' : type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input placeholder="Pickup Location" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input placeholder="Drop Location" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input type="date" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent text-gray-600" />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input type="time" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent text-gray-600" />
        </div>

        <Select>
          <SelectTrigger className="h-12 bg-gray-50 border-transparent focus:ring-accent">
            <div className="flex items-center gap-2 text-gray-600">
              <Car className="h-5 w-5 text-gray-400" />
              <SelectValue placeholder="Vehicle Category" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="innova-hycross">Toyota Innova Hycross (Hybrid Luxury)</SelectItem>
            <SelectItem value="urbania">Force Urbania (10/13/17 Seater Van)</SelectItem>
            <SelectItem value="premium-muv">Toyota Innova Crysta</SelectItem>
            <SelectItem value="sedan">Sedan (Dzire, Amaze)</SelectItem>
            <SelectItem value="premium-sedan">Premium Sedan (City, Verna, Slavia)</SelectItem>
            <SelectItem value="suv">SUV (Creta, Seltos, Brezza)</SelectItem>
            <SelectItem value="muv">MUV (Ertiga, Carens)</SelectItem>
            <SelectItem value="luxury-suv">Luxury SUV (Fortuner, XUV700)</SelectItem>
            <SelectItem value="luxury">Luxury Executive (Mercedes E/S Class)</SelectItem>
            <SelectItem value="traveller">Tempo Traveller (9 to 26 Seater)</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input type="number" placeholder="Passengers" min="1" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" />
        </div>

        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input placeholder="Your Name" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input type="tel" placeholder="Phone Number" className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1 h-12 bg-accent text-secondary hover:bg-secondary hover:text-white font-bold text-base transition-colors shadow-lg">
          Book Now
        </Button>
        <Button className="flex-1 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base transition-colors shadow-lg gap-2">
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
