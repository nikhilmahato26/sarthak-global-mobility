import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
export function Footer() {
  return (
    <footer className="bg-secondary pt-0 overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold text-secondary mb-1">Get Premium Offers</h3>
                <p className="text-muted-foreground">Exclusive corporate rates & updates straight to your inbox</p>
              </div>
            </div>
            
            <div className="w-full lg:w-auto flex-1 max-w-md flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-gray-200 h-12 focus-visible:ring-accent"
              />
              <Button className="bg-accent text-secondary hover:bg-primary hover:text-white font-bold px-8 h-12 transition-colors">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/assets/logo.jpg" 
                alt="SGM Sarthak Global Mobility" 
                className="h-14 w-auto object-contain rounded-full border-2 border-accent/60 shadow-lg bg-white p-0.5" 
              />
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white block leading-none">
                  <span className="font-playfair">SGM</span> <span className="text-accent">GLOBAL</span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-accent uppercase block mt-1">
                  Sarthak Global Mobility
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium airport transfers, executive chauffeur services, and luxury car rentals across India. Reliable, safe, and professional mobility solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-secondary transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Fleet', 'Corporate Services', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'FAQs', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">Delhi, India<br/>Serving Nationwide</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+919891335351" className="hover:text-accent transition-colors">+91 9891335351</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:sgmglobalmobility@gmail.com" className="hover:text-accent transition-colors">sgmglobalmobility@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SGM Global Mobility. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-sm font-medium">Designed for Premium Mobility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
