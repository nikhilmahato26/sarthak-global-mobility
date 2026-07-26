import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "SGM Global made our corporate event transportation truly magical. Every detail was beyond our expectations! Highly recommended for executive travel.",
    author: "Rajesh Kumar",
    company: "Tech Solutions Inc."
  },
  {
    id: 2,
    quote: "The Mercedes S-Class we rented for our VIP clients was impeccable. The chauffeur was professional and punctual. A premium experience.",
    author: "Priya Sharma",
    company: "Event Management Co."
  },
  {
    id: 3,
    quote: "Reliable, comfortable, and safe. Their outstation cab service from Delhi to Jaipur was smooth and the driver was extremely courteous.",
    author: "Amit Singh",
    company: "Business Traveler"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2940" 
          alt="Sunset Drive" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Traveler Stories</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-12">
              Loved by Corporate Clients Worldwide
            </h2>

            <div className="relative">
              <div className="text-6xl text-accent/30 font-playfair absolute -top-8 -left-6">"</div>
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-[0_0_100%] min-w-0">
                      <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 italic relative z-10">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="text-white font-bold text-lg">{testimonial.author}</p>
                        <p className="text-white/60 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Empty column to allow background image to show on the right */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}
