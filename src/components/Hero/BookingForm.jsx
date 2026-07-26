import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, Clock, Users, Car, Phone, User, MessageCircle } from 'lucide-react';

export function BookingForm() {
  const [tripType, setTripType] = useState('one-way');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [passengers, setPassengers] = useState('');
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleBookingSubmit = (e) => {
    if (e) e.preventDefault();
    const targetPhone = '919891335351';
    
    let msg = `*NEW BOOKING INQUIRY - SGM GLOBAL MOBILITY*\n\n`;
    msg += `🚖 *Trip Type:* ${tripType === 'employee-transport' ? 'Employee Transport' : tripType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}\n`;
    if (pickup) msg += `📍 *Pickup Location:* ${pickup}\n`;
    if (drop) msg += `🎯 *Drop Location:* ${drop}\n`;
    if (date) msg += `📅 *Date:* ${date}\n`;
    if (time) msg += `⏰ *Time:* ${time}\n`;
    if (vehicle) msg += `🚘 *Vehicle Category:* ${vehicle}\n`;
    if (passengers) msg += `👥 *Passengers:* ${passengers}\n`;
    if (name) msg += `👤 *Customer Name:* ${name}\n`;
    if (phoneNum) msg += `📞 *Phone Number:* ${phoneNum}\n`;

    msg += `\nPlease share rate quotation and confirm availability!`;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleBookingSubmit} className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
        {['one-way', 'round-trip', 'airport', 'local', 'employee-transport'].map((type) => (
          <button
            type="button"
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
          <Input 
            placeholder="Pickup Location" 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" 
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Drop Location" 
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" 
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent text-gray-600" 
          />
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent text-gray-600" 
          />
        </div>

        <Select value={vehicle} onValueChange={setVehicle}>
          <SelectTrigger className="h-12 bg-gray-50 border-transparent focus:ring-accent">
            <div className="flex items-center gap-2 text-gray-600">
              <Car className="h-5 w-5 text-gray-400" />
              <SelectValue placeholder="Vehicle Category" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Toyota Innova Hycross (Hybrid Luxury)">Toyota Innova Hycross (Hybrid Luxury)</SelectItem>
            <SelectItem value="Force Urbania (10/13/17 Seater Van)">Force Urbania (10/13/17 Seater Van)</SelectItem>
            <SelectItem value="Toyota Innova Crysta">Toyota Innova Crysta</SelectItem>
            <SelectItem value="Maruti Dzire / Honda Amaze">Sedan (Dzire, Amaze)</SelectItem>
            <SelectItem value="Honda City / Skoda Slavia">Premium Sedan (City, Verna, Slavia)</SelectItem>
            <SelectItem value="Creta / Seltos / Brezza">SUV (Creta, Seltos, Brezza)</SelectItem>
            <SelectItem value="Maruti Ertiga / Carens">MUV (Ertiga, Carens)</SelectItem>
            <SelectItem value="Fortuner Legender / XUV700">Luxury SUV (Fortuner, XUV700)</SelectItem>
            <SelectItem value="Mercedes E/S Class">Luxury Executive (Mercedes E/S Class)</SelectItem>
            <SelectItem value="Tempo Traveller (9-26 Seater)">Tempo Traveller (9 to 26 Seater)</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            type="number" 
            placeholder="Passengers" 
            min="1" 
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" 
          />
        </div>

        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" 
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            type="tel" 
            placeholder="Phone Number" 
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-transparent focus-visible:ring-accent" 
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          type="submit"
          className="flex-1 h-12 bg-accent text-secondary hover:bg-secondary hover:text-white font-bold text-base transition-colors shadow-lg"
        >
          Book Now
        </Button>
        <Button 
          type="button"
          onClick={handleBookingSubmit}
          className="flex-1 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base transition-colors shadow-lg gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          Book via WhatsApp
        </Button>
      </div>
    </form>
  );
}
