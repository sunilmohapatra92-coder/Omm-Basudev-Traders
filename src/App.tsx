import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Package, X, ShieldCheck, Award, ThumbsUp, Star } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${isScrolled ? 'py-3 bg-[#050400]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(212,175,55,0.1)]' : 'py-6 bg-gradient-to-b from-black/90 to-transparent'}`}>
      <a href="#" className="flex items-center hover:scale-105 transition-transform duration-300">
        <div className={`rounded-full flex items-center justify-center overflow-hidden bg-white/5 p-1 transition-all duration-500 ${isScrolled ? 'w-16 h-16' : 'w-20 h-20 md:w-24 md:h-24'}`}>
          <img 
            src="https://i.ibb.co/tpYrd6jK/Whats-App-Image-2026-04-09-at-11-04-37-AM-removebg-preview.png" 
            alt="Omm Basudev Traders Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          />
        </div>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#occasions" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-light transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold-light hover:after:w-full after:transition-all after:duration-300">Occasions</a></li>
        <li><a href="#about" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-light transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold-light hover:after:w-full after:transition-all after:duration-300">About</a></li>
        <li><a href="#contact" className="font-cinzel text-xs tracking-[0.2em] uppercase text-[#C9A84C] hover:text-gold-light transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold-light hover:after:w-full after:transition-all after:duration-300">Contact</a></li>
      </ul>
    </nav>
  );
};

const CinematicSparksBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let sparks: any[] = [];
    let animationFrameId: number;
    let time = 0;

    const explode = () => {
      // Create ~160 sparks for the explosion
      for(let i = 0; i < 160; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Concentrate more sparks outwards but varied
        const velocity = (Math.random() * Math.random() * 18) + 2; 
        
        sparks.push({
          x: width / 2,
          y: height * 0.45,
          vx: Math.cos(angle) * velocity * 0.4, // Slow motion horizontal
          vy: Math.sin(angle) * velocity * 0.4, // Slow motion vertical
          life: 1.0,
          decay: Math.random() * 0.005 + 0.002, // 4-7s average decay
          size: Math.random() * 2 + 0.5,
          color: Math.random() > 0.6 ? '#FFD700' : (Math.random() > 0.5 ? '#FFA500' : '#FFF8E7'),
          trail: []
        });
      }
    };

    // Initial burst
    explode();

    const loopDuration = 360; // Approx 6 seconds at 60fps

    const render = () => {
      time++;
      
      // Use clean hardware-accelerated clear instead of expensive massive rect painting
      ctx.clearRect(0, 0, width, height);

      // Render glowing explosion core that fades
      const coreOpacity = Math.max(0, 1 - (time % loopDuration) / 60);
      if (coreOpacity > 0) {
        const gradient = ctx.createRadialGradient(width/2, height*0.45, 0, width/2, height*0.45, 300);
        gradient.addColorStop(0, `rgba(255, 180, 50, ${coreOpacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(width/2, height*0.45, 300, 0, Math.PI*2);
        ctx.fill();
      }

      // Loop explosion exactly on interval
      if (time % loopDuration === 0) {
        explode();
      }

      ctx.globalCompositeOperation = 'screen';

      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        
        p.trail.push({x: p.x, y: p.y});
        if(p.trail.length > 20) p.trail.shift(); // Longer manual trail

        // Friction for slow motion
        p.vx *= 0.985;
        p.vy *= 0.985;
        // Slow falling gravity
        p.vy += 0.015; 

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        // Draw spark trails
        ctx.beginPath();
        if (p.trail.length > 0) {
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for(let j=1; j<p.trail.length; j++) {
            ctx.lineTo(p.trail[j].x, p.trail[j].y);
          }
        }
        ctx.strokeStyle = p.color;
        ctx.lineCap = 'round';
        ctx.lineWidth = p.size * Math.max(0, p.life);
        ctx.globalAlpha = Math.max(0, p.life * 0.6);
        ctx.stroke();

        // Draw spark head (removed expensive shadow calculations)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * Math.max(0, p.life) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020202]">
      <motion.div 
        className="w-full h-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050400] pointer-events-none"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Cinematic Animated Background Replacing Static Video */}
      <CinematicSparksBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* Content */}
        <div className="pointer-events-none max-w-3xl flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6 inline-block bg-white/5 border border-gold/20 px-6 py-2 rounded-full pointer-events-auto backdrop-blur-md"
          >
            Wholesale Fireworks Dealer in Odisha
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-cinzel-dec text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white mb-4 pointer-events-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          >
            Omm Basudev<br/><span className="text-gradient-gold">Traders</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-cinzel text-sm md:text-xl tracking-[0.2em] uppercase text-gold-light mb-8 pointer-events-auto"
          >
            Illuminate Every Celebration
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl leading-relaxed text-[#C8B880] mb-12 pointer-events-auto"
          >
            Bringing joy, light, and divine sparkle to every festival. We provide premium quality firecrackers at competitive wholesale prices for all your grand celebrations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 mb-12 pointer-events-auto"
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B918249541419" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 font-cinzel text-sm tracking-[0.25em] uppercase text-black bg-[#25D366] py-4 px-10 rounded-sm hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 font-bold"
            >
              <WhatsAppIcon className="w-5 h-5 text-black" />
              WhatsApp Us
            </a>
            <a 
              href="#bulk-discount" 
              className="flex items-center justify-center gap-3 font-cinzel text-sm tracking-[0.25em] uppercase text-gold-light bg-transparent border border-gold py-4 px-10 rounded-sm hover:bg-gold/15 hover:-translate-y-1 transition-all duration-300"
            >
              <Package className="w-5 h-5" />
              Claim Discount
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center gap-4 opacity-70 pointer-events-auto"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24"></div>
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold whitespace-nowrap">Trusted by 1000+ Customers</span>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ClaimBulkDiscountSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', requirement: '' });
  
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Omm Basudev Traders! I'm interested in a Bulk Discount.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Requirement:* ${formData.requirement}%0A%0APlease let me know the best wholesale rates.`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B918249541419&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="bulk-discount" className="relative z-10 py-24 px-8 bg-black border-y border-gold/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <SectionHeader 
            label="Special Offer" 
            title="Claim Bulk Discount" 
            desc="Planning a big event or looking to resell? Get the best wholesale rates instantly by sharing your requirements." 
          />
        </div>
        
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0804] border border-gold/30 rounded-xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(212,175,55,0.15)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-xl blur-xl"></div>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-5 relative z-10">
              <div>
                <label className="block font-cinzel text-xs tracking-widest text-gold-pale mb-2 uppercase">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block font-cinzel text-xs tracking-widest text-gold-pale mb-2 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block font-cinzel text-xs tracking-widest text-gold-pale mb-2 uppercase">Requirement (Optional)</label>
                <textarea 
                  value={formData.requirement}
                  onChange={e => setFormData({...formData, requirement: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="Looking for sparkling fountains and aerial shots..."
                  rows={3}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full font-cinzel text-sm tracking-[0.2em] font-bold uppercase text-black bg-gradient-gold hover-shimmer py-4 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 mt-4 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Get Offer on</span>
                <WhatsAppIcon className="w-5 h-5 text-black relative z-10" />
                <span className="relative z-10">WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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

const About = () => (
  <section id="about" className="relative z-10 py-24 px-8 bg-[#0a0802]">
    <SectionHeader 
      label="About Omm Basudev Traders" 
      title="Odisha's Most Trusted Wholesale Dealer" 
      desc="Decades of experience bringing light to festivals, weddings, and celebrations. We guarantee 100% authentic, high-quality fireworks." 
      ornament
    />
    
    <div className="max-w-5xl mx-auto mb-20 text-center">
      <p className="text-lg text-[#C8B880] leading-relaxed max-w-3xl mx-auto">
        At Omm Basudev Traders, we believe that every celebration deserves the best illumination. Based in Puri, Odisha, we are a leading wholesale and retail distributor of premium firecrackers. Whether it's Diwali, a grand wedding, or a festive celebration, we bring you safe, dazzling, and high-quality fireworks at unbeatable wholesale prices.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { 
          icon: <ShieldCheck className="w-10 h-10 text-gold mb-4 mx-auto" />, 
          title: "100% Certified Safe", 
          desc: "All our products meet strict government safety standards." 
        },
        { 
          icon: <Award className="w-10 h-10 text-gold mb-4 mx-auto" />, 
          title: "Wholesale Pricing", 
          desc: "Best market rates direct from manufacturers." 
        },
        { 
          icon: <ThumbsUp className="w-10 h-10 text-gold mb-4 mx-auto" />, 
          title: "Trusted by 10k+", 
          desc: "Delivering joy to thousands of families across Odisha." 
        },
        { 
          icon: <Star className="w-10 h-10 text-gold mb-4 mx-auto" />, 
          title: "Premium Quality", 
          desc: "Carefully curated products that guarantee a spectacular show." 
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center p-8 rounded-xl bg-gradient-to-b from-[#1a1505] to-black border border-gold/20 shadow-[0_4px_20px_rgba(212,175,55,0.05)] hover:-translate-y-2 hover:border-gold/50 transition-all duration-300"
        >
          {item.icon}
          <div className="font-cinzel text-sm font-bold tracking-[0.1em] uppercase text-gold-light mb-3">{item.title}</div>
          <div className="text-sm text-[#7A6A40] leading-relaxed">{item.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="relative z-10 py-24 px-8 bg-black">
    <SectionHeader 
      ornament
      label="Our Products" 
      title="Premium & Wholesale Categories" 
      desc="Explore our extensive range of high-quality fireworks available for retail and bulk wholesale purchases." 
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { 
          img: "https://images.pexels.com/photos/8819261/pexels-photo-8819261.jpeg?auto=compress&cs=tinysrgb&w=800",
          name: "Sparklers & Fountains", 
          desc: "Bright, long-lasting sparklers and ground fountains perfect for kids and family celebrations.", 
          badge: "Family Safe" 
        },
        { 
          img: "https://images.pexels.com/photos/34620151/pexels-photo-34620151.jpeg?auto=compress&cs=tinysrgb&w=800", 
          name: "Aerial Skyshots", 
          desc: "Grand multi-shot cakes and rockets that light up the night sky with brilliant colors.", 
          badge: "Best Seller" 
        },
        { 
          img: "https://images.pexels.com/photos/1616228/pexels-photo-1616228.jpeg?auto=compress&cs=tinysrgb&w=800",
          name: "Traditional Crackers", 
          desc: "Classic atom bombs, bullet strings (ladis), and loud ground crackers for authentic festive feels.", 
          badge: "Classic" 
        },
        { 
          img: "https://lh3.googleusercontent.com/p/AF1QipOq2Bgxmiw8nUP1sO3j6iIdBLHg2DofCwrgnEIL=s1360-w1360-h1020-rw",
          name: "Wholesale Bulk Packs", 
          desc: "Discounted master cartons and bulk packaging ideal for resellers and event organizers.", 
          badge: "Wholesale" 
        },
        { 
          img: "https://images.pexels.com/photos/15497730/pexels-photo-15497730.jpeg?auto=compress&cs=tinysrgb&w=800",
          name: "Event & Display Kits", 
          desc: "Pre-assorted professional grade kits designed for weddings, stage shows, and grand events.", 
          badge: "Premium" 
        },
        { 
          img: "https://www.kaliswari-fireworks.com/img/products/assorted/4.jpg",
          name: "Festive Gift Boxes", 
          desc: "Elegantly packaged premium firecracker combos for gifting during Diwali and celebrations.", 
          badge: "Gift Ready" 
        }
      ].map((prod, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`group relative rounded-xl overflow-hidden border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer ${prod.name === 'Festive Gift Boxes' ? 'bg-[#0a0804]' : 'bg-[#080602]'} transition-all duration-500`}
        >
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pt-8">
            <img 
              src={prod.img} 
              alt={prod.name} 
              className={`w-full h-full transition-transform duration-1000 group-hover:scale-[1.05] opacity-60 group-hover:opacity-90 ${prod.name === 'Festive Gift Boxes' ? 'object-contain mix-blend-screen' : 'object-cover absolute inset-0'}`} 
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${prod.name === 'Festive Gift Boxes' ? 'from-[#050400] via-[#050400]/80 to-transparent' : 'from-[#050400] via-[#050400]/70 to-transparent'}`}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[340px]">
            <div className="mb-auto">
              <span className="inline-block font-cinzel text-[0.6rem] tracking-[0.2em] font-bold uppercase py-1 px-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {prod.badge}
              </span>
            </div>
            
            <h3 className="font-cinzel-dec text-2xl font-bold text-[#FBF5E5] tracking-wide mb-3 group-hover:text-[#D4AF37] transition-colors">{prod.name}</h3>
            <p className="text-[0.95rem] text-[#BFA97C] leading-relaxed mb-6">{prod.desc}</p>
            
            <a href="https://api.whatsapp.com/send/?phone=%2B918249541419" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-cinzel text-xs tracking-widest text-[#D4AF37] group-hover:text-[#FBF5E5] transition-colors uppercase font-bold relative w-fit overflow-hidden hover-shimmer">
              Enquire Now <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage]);

  return (
    <>
      <section id="gallery" className="py-24 px-6 md:px-12 bg-black relative z-10 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-cinzel-dec text-3xl md:text-5xl text-gradient-gold mb-4 tracking-wide">The Golden Gallery</h2>
            <p className="text-[#D4AF37] opacity-80 font-cinzel tracking-[0.3em] uppercase text-xs md:text-sm">A visual symphony of light</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mt-8"></div>
          </motion.div>

          {/* Masonry Layout using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="relative group overflow-hidden rounded-md break-inside-avoid bg-[#0C0A06] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-[1.05] transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100" 
                  loading="lazy" 
                />

                {/* Darker Overlay when not hovered */}
                <div className="absolute inset-0 bg-[#050400]/50 group-hover:bg-transparent transition-colors duration-700"></div>

                {/* Hover Content Details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-[#050400]/90 via-[#050400]/20 to-transparent">
                  <span className="font-cinzel text-[0.65rem] tracking-[0.25em] uppercase text-[#FBF5E5] opacity-90 mb-2">{img.category}</span>
                  <h4 className="font-garamond text-2xl text-[#D4AF37] italic">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-gold/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-md transition-all z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            
            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full rounded-sm object-contain shadow-[0_0_50px_rgba(212,175,55,0.15)] ring-1 ring-gold/20"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
      className="inline-block relative font-cinzel text-xs tracking-[0.25em] uppercase text-black bg-gradient-gold hover-shimmer py-4 px-10 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,150,30,0.5)] transition-all duration-300 overflow-hidden"
    >
      <span className="relative z-10 font-bold">Contact Us Now</span>
    </motion.a>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative z-10 py-24 px-8 bg-[#0a0802]">
    <SectionHeader 
      label="Find Us" 
      title="Get In Touch" 
      desc="Visit our store or contact us directly for bulk orders and wholesale pricing." 
    />
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-black/40 border border-gold/10 p-6 rounded-xl shadow-lg">
          <MapPin className="w-8 h-8 text-gold mb-4" />
          <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Location</div>
          <div className="text-base text-[#C8B880] leading-relaxed mb-auto">
            Chandrabrahmapur, Sakhigopal<br/>Puri, Odisha, India
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col bg-black/40 border border-gold/10 p-6 rounded-xl shadow-lg">
          <Phone className="w-8 h-8 text-gold mb-4" />
          <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Phone</div>
          <div className="text-base text-[#C8B880] leading-relaxed mb-auto">
            <a href="tel:+918249541419" className="hover:text-gold-light transition-colors block mb-1">+91 82495 41419</a>
            <a href="https://api.whatsapp.com/send/?phone=%2B918249541419" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-cinzel text-xs tracking-[0.1em] mt-2 group">
              <WhatsAppIcon className="w-4 h-4 text-current group-hover:-translate-y-0.5 transition-transform" />
              <span className="group-hover:underline">WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col bg-black/40 border border-gold/10 p-6 rounded-xl shadow-lg">
          <Clock className="w-8 h-8 text-gold mb-4" />
          <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Hours</div>
          <div className="text-base text-[#C8B880] leading-relaxed">
            Open Daily<br/>9:00 AM – 9:00 PM
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col bg-black/40 border border-gold/10 p-6 rounded-xl shadow-lg">
          <Package className="w-8 h-8 text-gold mb-4" />
          <div className="font-cinzel text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-2">Wholesale</div>
          <div className="text-base text-[#C8B880] leading-relaxed">
            Special pricing available<br/>for bulk orders & dealers
          </div>
        </motion.div>
      </div>

      {/* Embedded Map */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        transition={{ delay: 0.4 }}
        className="w-full h-full min-h-[300px] border border-gold/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.05)] relative bg-black/40"
      >
        <iframe 
          title="Omm Basudev Traders Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119864.12061266016!2d85.74830335272462!3d19.988294462153545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19b673070446fd%3A0xc6cb5aeb77983636!2sSakhigopal%2C%20Odisha%20752014!5e0!3m2!1sen!2sin!4v1714470921477!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%) grayscale(20%) border-radius(0.75rem)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
      className="fixed bottom-8 right-8 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_36px_rgba(37,211,102,0.65)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 group"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
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

const ScrollSparksBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles: {x: number, y: number, vx: number, vy: number, life: number, size: number, color: string, prevX: number, prevY: number}[] = [];
    let lastScrollY = window.scrollY;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    const colors = ['#C9922A', '#F0C050', '#FF6030', '#ffffff', '#FFD700', '#FF8C00'];

    const createParticle = (x: number, y: number, vyExtra: number, isBurst = false) => {
      particles.push({
        x,
        y,
        prevX: x,
        prevY: y,
        vx: (Math.random() - 0.5) * (isBurst ? 10 : 3),
        vy: (Math.random() * -3) - 1 + vyExtra,
        life: 1 + (isBurst ? Math.random() * 0.5 : 0),
        size: Math.random() * (isBurst ? 3 : 1.5) + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    };

    const createExplosion = (x: number, y: number, intensity: number) => {
      const count = Math.min(Math.floor(intensity * 1.0), 60); // Half the particle explosion size
      for(let i=0; i<count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * (intensity * 0.1) + 2;
        particles.push({
          x,
          y,
          prevX: x,
          prevY: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2, // Slight upward bias
          life: 1 + Math.random() * 0.6,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    let animationFrameId: number;

    const render = () => {
      // Use clean hardware-accelerated clear instead of expensive massive rect painting
      ctx.clearRect(0, 0, width, height);

      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Spawn on rapid scroll (Firework thrust)
      if (Math.abs(scrollDiff) > 5) {
         const spawnCount = Math.min(Math.floor(Math.abs(scrollDiff) * 0.6), 40); // Slightly fewer rapid scroll thrusts
         for(let i=0; i<spawnCount; i++) {
             // If scrolling down, burst comes from bottom. If up, from top.
             const startY = scrollDiff > 0 ? height + 10 : -10;
             const vyExtra = scrollDiff > 0 ? -Math.abs(scrollDiff) * 0.15 : Math.abs(scrollDiff) * 0.15;
             createParticle(Math.random() * width, startY, vyExtra, true);
         }
         
         // Trigger explosive bursts intensely on rapid downward scroll
         if (scrollDiff > 25 && Math.random() < 0.15) {
           createExplosion(
             Math.random() * width, 
             Math.random() * (height * 0.6) + height * 0.4, 
             scrollDiff
           );
         }
      }

      // Ambient floating embers
      if (Math.random() < 0.25) {
        createParticle(Math.random() * width, height + 10, 0);
      }

      ctx.globalCompositeOperation = 'screen';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Retain an actual trail segment instead of just 1 frame line since we removed the wipe
        const lineLenX = p.vx * 3;
        const lineLenY = p.vy * 3;

        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.015;
        p.vy -= 0.08; // upward drift 
        p.vx *= 0.98; // air friction

        ctx.globalAlpha = Math.max(0, p.life);
        
        // Draw extended trail stroke artificially scaling by velocity
        ctx.beginPath();
        ctx.moveTo(p.x - lineLenX, p.y - lineLenY);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        if (p.life <= 0) particles.splice(i, 1);
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] pointer-events-none opacity-80 mix-blend-screen" />;
};

const ParallaxGlowBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -800]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 800]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -400]);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px]" />
      <motion.div style={{ y: y3 }} className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-[#C9922A]/10 rounded-full blur-[150px]" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-[20%] left-[20%] w-[800px] h-[500px] bg-yellow-900/10 rounded-full blur-[150px]" />
    </div>
  );
};

export default function App() {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Normal fast ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Reset to standard to prevent jumping
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Provide Lenis to anchors so smooth scroll respects the layout
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if(target) {
          lenis.scrollTo(target);
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050400] text-[#EFE4C0] font-garamond overflow-x-hidden selection:bg-gold/30 selection:text-gold-light">
      <div className="premium-noise"></div>
      <ParallaxGlowBackground />
      <ScrollSparksBackground />
      <FireworkBackground />
      <FireworkClickEffect />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Occasions />
      <Testimonials />
      <CTA />
      <ClaimBulkDiscountSection />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
