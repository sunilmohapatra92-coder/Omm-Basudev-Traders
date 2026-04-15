import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Package, MessageCircle, X } from 'lucide-react';

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: any[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random(),
          speed: Math.random() * 0.005 + 0.002,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const drawStars = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const a = 0.3 + 0.5 * Math.sin(s.phase + t * s.speed * 60);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,210,100,${a})`;
        ctx.fill();
      });
    };

    const loop = (t: number) => {
      drawStars(t / 1000);
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      initStars();
    });

    resizeCanvas();
    initStars();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-b from-black/85 to-transparent backdrop-blur-sm">
    <a href="#" className="flex items-center hover:scale-105 transition-transform duration-300">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden bg-white/5 p-1">
        <img 
          src="/logo.png?v=3" 
          alt="Omm Basudev Traders Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        />
      </div>
    </a>
    <ul className="hidden md:flex gap-8 list-none">
      <li><a href="#occasions" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-pale transition-colors">Occasions</a></li>
      <li><a href="#about" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-pale transition-colors">About</a></li>
      <li><a href="#contact" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-pale transition-colors">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 overflow-hidden">
    
    {/* Spline 3D Embed */}
    <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen pointer-events-auto">
      <iframe 
        src="https://my.spline.design/particlesrocket-CAGRK9gq2Nj1yLwxYWfviaps/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        title="Spline 3D Rocket"
      ></iframe>
    </div>

    {/* Content Container */}
    <div className="relative z-10 flex flex-col items-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-cinzel text-[0.7rem] tracking-[0.4em] uppercase text-gold mb-4 pointer-events-auto"
      >
        Est. in Odisha &nbsp;·&nbsp; Premium Fireworks
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-cinzel-dec text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-gradient-gold mb-2 pointer-events-auto"
      >
        Omm Basudev<br/>Traders
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="font-cinzel text-sm md:text-lg tracking-[0.3em] uppercase text-gold-light mb-6 pointer-events-auto"
      >
        Illuminate Every Celebration
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="text-lg leading-relaxed text-[#C8B880] max-w-xl mx-auto mb-10 pointer-events-auto"
      >
        Bringing joy, light, and divine sparkle to every festival. Trusted by families across Odisha for premium quality fireworks crafted to make every moment unforgettable.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
      >
        <a href="#products" className="inline-block font-cinzel text-xs tracking-[0.25em] uppercase text-black bg-gradient-gold py-4 px-10 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,150,30,0.5)] transition-all duration-300">
          Explore Our Collection
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B918249541419" target="_blank" rel="noopener noreferrer" className="inline-block font-cinzel text-xs tracking-[0.25em] uppercase text-gold-light bg-transparent border border-gold py-4 px-10 rounded-sm hover:bg-gold/15 hover:-translate-y-0.5 transition-all duration-300">
          Get in Touch
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-16 flex items-center gap-4 opacity-50 pointer-events-auto"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-16 md:w-32"></div>
        <span className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold whitespace-nowrap">Blessed by Lord Krishna · Est. with devotion</span>
        <div className="h-px bg-gradient-to-l from-transparent via-gold to-transparent w-16 md:w-32"></div>
      </motion.div>
    </div>
  </section>
);

const SectionHeader = ({ label, title, desc, ornament = false }: { label: string, title: string, desc: string, ornament?: boolean }) => (
  <div className="text-center mb-12">
    {ornament && (
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-16 h-px bg-gradient-to-l from-gold to-transparent"></div>
        <div className="w-2 h-2 bg-gold rotate-45"></div>
        <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent"></div>
      </div>
    )}
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-3"
    >
      {label}
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-cinzel-dec text-3xl md:text-5xl font-bold text-gradient-gold-simple mb-4"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-base text-text-muted max-w-lg mx-auto leading-relaxed"
    >
      {desc}
    </motion.p>
  </div>
);

const Legacy = () => (
  <section id="about" className="relative z-10 py-24 px-8 bg-black">
    <SectionHeader 
      label="Our Legacy" 
      title="Trusted Across Odisha" 
      desc="Decades of experience bringing light to festivals, weddings, and celebrations." 
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {[
        { num: "500+", label: "Products", sub: "A vast collection spanning sparklers, rockets, and grand displays" },
        { num: "10K+", label: "Happy Families", sub: "Trusted by thousands of families for every joyful occasion" },
        { num: "100%", label: "Certified Safe", sub: "All products meet government safety standards & regulations" },
        { num: "∞", label: "Devotion", sub: "Every product blessed with the spirit of Lord Krishna" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center p-6"
        >
          <div className="font-cinzel-dec text-5xl font-black text-gradient-gold-simple mb-2">{item.num}</div>
          <div className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold-light mb-2">{item.label}</div>
          <div className="text-sm text-[#7A6A40] leading-relaxed">{item.sub}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="relative z-10 py-24 px-8 bg-deep">
    <SectionHeader 
      ornament
      label="Our Collection" 
      title="Premium Fireworks" 
      desc="From ground sparklers to sky-high rockets — we carry everything you need to light up the night." 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { icon: "✨", name: "Sparklers & Phuljhadi", desc: "Handheld sparklers in various sizes for children and adults. Safe, bright, and long-lasting — perfect for every celebration.", badge: "Family Favourite" },
        { icon: "🚀", name: "Sky Rockets & Missiles", desc: "High-altitude rockets that burst into spectacular colours. Available in single and multi-shot varieties for grand displays.", badge: "Best Seller" },
        { icon: "🎆", name: "Flower Pots & Ground Chakra", desc: "Ground-level fireworks that spin and shower fountains of golden and coloured sparks into the night air.", badge: "Traditional" },
        { icon: "💥", name: "Atom Bombs & Crackers", desc: "Classic sound crackers for the authentic festival feel — available in all sizes from small ladis to powerful atom bombs.", badge: "Festival Special" },
        { icon: "🎇", name: "Aerial Shells & Bombs", desc: "Professional-grade aerial shells that deliver breathtaking bursts of colour at great heights. Ideal for large events.", badge: "Premium" },
        { icon: "🎁", name: "Gift Boxes & Combo Packs", desc: "Curated assortment boxes combining the best of our range — the perfect gift for Diwali, weddings, and all auspicious occasions.", badge: "Gift Ready" }
      ].map((prod, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-gradient-to-br from-[#1C1808] to-[#0E0D06] border border-gold/25 p-8 relative overflow-hidden hover:-translate-y-1 hover:border-gold/50 transition-all duration-300 group"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-4xl block mb-4">{prod.icon}</span>
          <h3 className="font-cinzel text-base font-bold text-gold-light tracking-wide mb-2">{prod.name}</h3>
          <p className="text-[0.95rem] text-[#9A8450] leading-relaxed mb-4">{prod.desc}</p>
          <span className="inline-block font-cinzel text-[0.6rem] tracking-[0.2em] uppercase py-1 px-3 border border-gold/40 text-gold">{prod.badge}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const galleryImages = [
  { id: 1, src: "https://images.pexels.com/photos/15497730/pexels-photo-15497730.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Ground Fireworks", category: "Fountains" },
  { id: 2, src: "https://images.pexels.com/photos/8819261/pexels-photo-8819261.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Sparklers", category: "Sparklers" },
  { id: 3, src: "https://images.pexels.com/photos/6054332/pexels-photo-6054332.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Nighttime Display", category: "Aerial" },
  { id: 4, src: "https://images.pexels.com/photos/1616228/pexels-photo-1616228.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Yellow Fireworks", category: "Aerial" },
  { id: 5, src: "https://images.pexels.com/photos/34620151/pexels-photo-34620151.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Spectacular Sky", category: "Aerial" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-black relative z-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel-dec text-3xl md:text-5xl text-gradient-gold mb-4">The Golden Gallery</h2>
          <p className="text-[#C8B880] font-cinzel tracking-widest uppercase text-sm">A visual symphony of light</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-8"></div>
        </motion.div>

        {/* Masonry Layout using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="relative group overflow-hidden rounded-sm break-inside-avoid bg-[#0a0804]"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100" 
                loading="lazy" 
              />

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none shadow-[inset_0_0_0_rgba(212,175,55,0)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.15)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Occasions = () => (
  <section id="occasions" className="relative z-10 py-24 px-8 bg-smoke">
    <SectionHeader 
      label="Perfect For" 
      title="Every Joyous Occasion" 
      desc="Whatever the celebration, we have the fireworks to make it extraordinary." 
    />
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {["Diwali", "Dussehra", "Weddings", "Janmashtami", "New Year", "Rath Yatra", "Holi", "Ganesh Chaturthi", "Birthdays", "Durga Puja", "Mundan Ceremony", "Grand Openings"].map((occ, i) => (
        <motion.span 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="font-cinzel text-xs tracking-[0.2em] uppercase py-2.5 px-6 border border-gold/35 text-gold hover:bg-gold/10 hover:border-gold hover:text-gold-light transition-all cursor-default"
        >
          {occ}
        </motion.span>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="relative z-10 py-24 px-8 bg-deep">
    <SectionHeader 
      ornament
      label="What People Say" 
      title="Voices of Joy" 
      desc="" 
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {[
        { text: "Our Diwali was truly magical this year thanks to Omm Basudev Traders. The quality of the rockets and sparklers was far superior to anything else we found locally.", author: "Suresh Panigrahi, Bhubaneswar" },
        { text: "We ordered gift boxes for our daughter's wedding and the entire family was delighted. Excellent service, great prices, and every item was perfectly safe and high quality.", author: "Priya Mohanty, Cuttack" },
        { text: "Jai Basudev! The fireworks we bought for Janmashtami celebrations were simply divine. The entire colony praised us. We will only buy from here from now on.", author: "Ramesh Das, Puri" },
        { text: "Bought a bulk order for our housing society's Dussehra event. The aerial shells were absolutely breathtaking — everyone was left speechless. Highly recommended!", author: "Bibhuti Sahoo, Sakhigopal" },
        { text: "I have been purchasing from Omm Basudev Traders for the last five years for our Rath Yatra celebrations. The consistency in quality and the warmth of service keeps me coming back.", author: "Gopinath Nayak, Puri" },
        { text: "The New Year fireworks package we got was fantastic value. The flower pots and ground chakras were a big hit with the children. Will definitely order again!", author: "Sasmita Jena, Bhubaneswar" }
      ].map((test, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-gradient-to-br from-[#1C1808] to-[#0E0D06] border border-gold/20 p-8"
        >
          <div className="text-5xl leading-none text-gold-dark font-serif mb-2">"</div>
          <p className="text-base text-[#B0984C] leading-relaxed italic mb-6">{test.text}</p>
          <div className="font-cinzel text-xs tracking-[0.15em] text-gold-light uppercase">— {test.author}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTA = () => (
  <section className="relative z-10 py-32 px-8 bg-black text-center">
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="w-16 h-px bg-gradient-to-l from-gold to-transparent"></div>
      <div className="w-2 h-2 bg-gold rotate-45"></div>
      <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent"></div>
    </div>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-cinzel text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-3"
    >
      Order Today
    </motion.p>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-cinzel-dec text-3xl md:text-5xl font-bold text-gradient-gold-simple mb-6"
    >
      Light Up Your Next Celebration
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-10"
    >
      Visit our store or call us today. Bulk orders welcome. Special discounts available for weddings and large events.
    </motion.p>
    <motion.a 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      href="https://api.whatsapp.com/send/?phone=%2B918249541419" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-block font-cinzel text-xs tracking-[0.25em] uppercase text-black bg-gradient-gold py-4 px-10 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,150,30,0.5)] transition-all duration-300"
    >
      Contact Us Now
    </motion.a>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative z-10 py-20 px-8 bg-deep">
    <SectionHeader 
      label="Find Us" 
      title="Get In Touch" 
      desc="" 
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
        <MapPin className="w-8 h-8 text-gold mb-3" />
        <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Location</div>
        <div className="text-base text-[#C8B880] leading-relaxed">
          Chandrabrahmapur, Sakhigopal<br/>Puri, Odisha<br/>
          <a href="https://maps.google.com/?q=WQHR%2B3P4" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-cinzel text-xs tracking-[0.1em] mt-2 inline-block hover:underline">📍 Get Directions</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center">
        <Phone className="w-8 h-8 text-gold mb-3" />
        <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Phone</div>
        <div className="text-base text-[#C8B880] leading-relaxed">
          <a href="tel:+918249541419" className="hover:text-gold-light transition-colors">+91 82495 41419</a><br/>
          <a href="https://api.whatsapp.com/send/?phone=%2B918249541419" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-cinzel text-xs tracking-[0.1em] mt-2 inline-block hover:underline">💬 WhatsApp Us</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
        <Clock className="w-8 h-8 text-gold mb-3" />
        <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Hours</div>
        <div className="text-base text-[#C8B880] leading-relaxed">Open Daily<br/>9:00 AM – 9:00 PM</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col items-center">
        <Package className="w-8 h-8 text-gold mb-3" />
        <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Bulk Orders</div>
        <div className="text-base text-[#C8B880] leading-relaxed">Special pricing available<br/>for events & wholesale</div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative z-10 bg-[#050400] py-10 px-8 text-center border-t border-gold/15">
    <div className="font-cinzel-dec text-lg text-gold tracking-[0.1em] mb-3">Omm Basudev Traders</div>
    <p className="text-xs text-[#5A4E28] tracking-[0.08em] mb-2">Premium Fireworks &nbsp;·&nbsp; Odisha, India &nbsp;·&nbsp; Blessed by Lord Basudev Krishna</p>
    <p className="text-[0.7rem] text-[#5A4E28] mt-2">© 2026 Omm Basudev Traders. All rights reserved. Always burst fireworks responsibly.</p>
  </footer>
);

const WhatsAppFAB = () => (
  <>
    <div className="fixed bottom-8 right-8 z-[998] w-14 h-14 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></div>
    <a 
      href="https://api.whatsapp.com/send/?phone=%2B918249541419" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] flex items-center gap-3 bg-[#25D366] text-white py-3 pr-5 pl-4 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] font-cinzel text-xs tracking-[0.1em] font-bold hover:shadow-[0_8px_36px_rgba(37,211,102,0.65)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  </>
);

const FireworkClickEffect = () => {
  useEffect(() => {
    const colors = ['#F0C050','#FDE68A','#E07820','#FF6030','#FF9030','#FFDD50','#FFB840'];
    
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 16; i++) {
        const el = document.createElement('div');
        el.className = 'fixed w-1 h-1 rounded-full pointer-events-none z-[200]';
        const angle = (i / 16) * Math.PI * 2;
        const dist = 60 + Math.random() * 80;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        const dur = 0.8 + Math.random() * 0.6;
        
        el.style.left = e.clientX + 'px';
        el.style.top = e.clientY + 'px';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.transition = `transform ${dur}s ease-out, opacity ${dur}s ease-out`;
        
        document.body.appendChild(el);
        
        // Trigger reflow
        void el.offsetWidth;
        
        el.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
        el.style.opacity = '0';
        
        setTimeout(() => el.remove(), dur * 1000);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

const FireworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let fireworks: Firework[] = [];
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Firework {
      x: number;
      y: number;
      targetY: number;
      speed: number;
      color: string;
      dead: boolean;
      trail: {x: number, y: number, alpha: number}[];

      constructor() {
        this.x = canvas!.width * 0.15 + Math.random() * (canvas!.width * 0.7);
        this.y = canvas!.height;
        this.targetY = canvas!.height * 0.15 + Math.random() * (canvas!.height * 0.4);
        this.speed = 2 + Math.random() * 2; 
        this.color = ['#C9922A', '#F0C050', '#FDE68A', '#ffffff', '#FFF8E7'][Math.floor(Math.random() * 5)];
        this.dead = false;
        this.trail = [];
      }

      update() {
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.trail.length > 15) this.trail.shift();
        this.trail.forEach(t => t.alpha -= 0.06);

        this.y -= this.speed;
        this.x += Math.sin(this.y * 0.02) * 0.5;

        if (this.y <= this.targetY) {
          this.dead = true;
          createParticles(this.x, this.y, this.color);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (this.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(this.trail[0].x, this.trail[0].y);
          for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          ctx.strokeStyle = `rgba(200, 160, 60, 0.3)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
      friction: number;
      gravity: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 2.5 + 0.5; 
        this.vx = Math.cos(angle) * velocity;
        this.vy = Math.sin(angle) * velocity;
        this.life = 0;
        this.maxLife = 120 + Math.random() * 80;
        this.color = color;
        this.size = Math.random() * 2.5 + 0.5;
        this.friction = 0.96;
        this.gravity = 0.015;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
      }

      draw() {
        if (!ctx) return;
        const progress = this.life / this.maxLife;
        const opacity = Math.max(0, 1 - Math.pow(progress, 1.5)); 
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        let r = 255, g = 255, b = 255;
        if (this.color === '#C9922A') { r = 201; g = 146; b = 42; }
        else if (this.color === '#F0C050') { r = 240; g = 192; b = 80; }
        else if (this.color === '#FDE68A') { r = 253; g = 230; b = 138; }
        else if (this.color === '#FFF8E7') { r = 255; g = 248; b = 231; }
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const createParticles = (x: number, y: number, color: string) => {
      const particleCount = 40 + Math.random() * 30;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    const loop = () => {
      if (!ctx || !canvas) return;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      if (Math.random() < 0.015 && fireworks.length < 4) {
        fireworks.push(new Firework());
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].dead) {
          fireworks.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].life >= particles[i].maxLife) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050400]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#EFE4C0] font-garamond overflow-x-hidden selection:bg-gold/30 selection:text-gold-light">
      <FireworkBackground />
      <FireworkClickEffect />
      <Navbar />
      <Hero />
      <Legacy />
      <Products />
      <Gallery />
      <Occasions />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
