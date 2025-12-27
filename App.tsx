import React, { useState, useEffect } from 'react';
import { BUSINESS, SERVICES, REVIEWS, FAQS } from './constants';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle, 
  Wrench, 
  Home, 
  AlertTriangle, 
  Layers, 
  Droplets, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X
} from 'lucide-react';

// --- Utility Components ---

const IconWrapper = ({ name, className = "" }: { name: string; className?: string }) => {
  switch (name) {
    case 'wrench': return <Wrench className={className} />;
    case 'home': return <Home className={className} />;
    case 'alert': return <AlertTriangle className={className} />;
    case 'layers': return <Layers className={className} />;
    case 'droplet': return <Droplets className={className} />;
    case 'shield': return <ShieldCheck className={className} />;
    default: return <CheckCircle className={className} />;
  }
};

// Fixed: Made children optional in SectionHeading props to satisfy TS compiler when used in JSX
const SectionHeading = ({ children, light = false }: { children?: React.ReactNode; light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-6 ${light ? 'text-white' : 'text-slate-900'}`}>
    {children}
  </h2>
);

// --- Section Components ---

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-blue-700 p-3 shadow-2xl flex justify-around items-center border-t border-blue-600">
    <a 
      href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`} 
      className="flex-1 bg-white text-blue-700 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-lg active:scale-95 transition-transform"
    >
      <Phone size={20} fill="currentColor" />
      Call Now
    </a>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-black text-blue-700 tracking-tight">EDUARDO'S <span className="text-slate-900">ROOFING</span></span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-slate-600 hover:text-blue-700 font-medium">Services</a>
            <a href="#why-us" className="text-slate-600 hover:text-blue-700 font-medium">Why Us</a>
            <a href="#reviews" className="text-slate-600 hover:text-blue-700 font-medium">Reviews</a>
            <a 
              href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              {BUSINESS.phone}
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Services</a>
          <a href="#why-us" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Why Us</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Reviews</a>
          <a href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`} className="block text-blue-700 font-bold text-xl">{BUSINESS.phone}</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative py-16 md:py-24 overflow-hidden bg-slate-900">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <img src="https://picsum.photos/id/1070/1600/900" alt="Roofing Background" className="w-full h-full object-cover" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-700/20 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          <CheckCircle size={16} />
          Locally Owned & Operated in South Houston
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          Expert Roof Repair & <span className="text-blue-500">Replacement</span> in South Houston
        </h1>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Don't let a small leak turn into a major disaster. Eduardo's Roofing provides fast, reliable, and fair-priced solutions for your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-extrabold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            Get Free Inspection
          </a>
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-white font-bold">5.0 Rating</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-slate-100 border-y border-slate-200 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold text-slate-900">5.0 Stars</p>
          <p className="text-sm text-slate-600 uppercase tracking-widest font-semibold">9 Reviews</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">24 Hours</p>
          <p className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Open Daily</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">Same Day</p>
          <p className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Leak Response</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-slate-900">FREE</p>
          <p className="text-sm text-slate-600 uppercase tracking-widest font-semibold">Inspections</p>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <SectionHeading>Professional Roofing Services</SectionHeading>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Complete roofing and waterproofing solutions for South Houston homeowners and businesses.
      </p>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, idx) => (
        <div key={idx} className="group p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <IconWrapper name={service.icon} />
          </div>
          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
          <p className="text-slate-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why-us" className="py-20 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <SectionHeading light>Why South Houston Trusts Eduardo's Roofing</SectionHeading>
        <div className="space-y-8 mt-10">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center text-blue-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Honest & Professional</h4>
              <p className="text-slate-400">We explain every repair clearly and provide fair pricing without high-pressure sales tactics.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center text-blue-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Rapid Response Time</h4>
              <p className="text-slate-400">When storm damage hits or leaks appear, we show up fast to mitigate interior damage.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center text-blue-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Local Area Expertise</h4>
              <p className="text-slate-400">We know the specific weather challenges of the Houston Gulf Coast and install roofs built to last.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
          <img src="https://picsum.photos/id/1031/600/800" alt="Worker on roof" className="w-full h-auto" />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-blue-700 p-8 rounded-2xl shadow-xl max-w-xs">
          <p className="text-3xl font-black mb-1">5.0/5</p>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Customer Satisfaction</p>
        </div>
      </div>
    </div>
  </section>
);

const PrimaryOffer = () => (
  <section className="py-20 bg-blue-700">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-black mb-6">Free Professional Roof Inspection</h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        Wondering if your roof survived the latest storm? Let Eduardo take a look. No obligation, just expert advice.
      </p>
      <a 
        href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`}
        className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl"
      >
        <Phone size={28} fill="currentColor" />
        Schedule Now
      </a>
      <p className="mt-6 text-blue-200 font-medium">Available 24/7 in South Houston and Surrounding Areas</p>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <SectionHeading>What Our Neighbors Say</SectionHeading>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {REVIEWS.map((review, idx) => (
        <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 italic relative">
          <div className="flex text-yellow-500 mb-6">
            {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <p className="text-xl text-slate-800 leading-relaxed mb-6">"{review.text}"</p>
          <p className="text-slate-600 font-bold not-italic">— {review.author}</p>
        </div>
      ))}
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1">
        <SectionHeading>Where We Work</SectionHeading>
        <p className="text-xl text-slate-600 mb-8">
          Based in the heart of South Houston, we provide rapid roofing services to our community and neighboring cities.
        </p>
        <div className="grid grid-cols-2 gap-y-3 gap-x-8">
          {BUSINESS.areas.map((area, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-700 font-semibold">
              <MapPin size={16} className="text-blue-600" />
              {area}
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-blue-600" />
            <h4 className="font-bold">Business Hours</h4>
          </div>
          <p className="text-slate-600">{BUSINESS.hours} - Available 24/7 for roofing emergencies.</p>
        </div>
      </div>
      <div className="flex-1 w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden grayscale">
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center">
            <MapPin size={48} className="mb-4 text-blue-600 opacity-50" />
            <p className="text-lg font-bold">Serving South Houston, TX & Surrounding Areas</p>
            <p className="text-sm">409 Betty St, South Houston, TX 77587</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-32 md:pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <span className="text-2xl font-black text-blue-500 tracking-tight block mb-6 uppercase">Eduardo's Roofing</span>
        <p className="text-slate-400 leading-relaxed">
          High-quality roofing and waterproofing for the Houston area. Locally owned, professional, and dedicated to protecting your home.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-6">Contact Us</h4>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-slate-400">
            <Phone size={18} className="text-blue-500" />
            <a href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{BUSINESS.phone}</a>
          </li>
          <li className="flex items-start gap-3 text-slate-400">
            <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
            <span>{BUSINESS.address}</span>
          </li>
          <li className="flex items-center gap-3 text-slate-400">
            <Clock size={18} className="text-blue-500" />
            <span>{BUSINESS.hours}</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
        <div className="grid grid-cols-2 gap-4">
          <a href="#services" className="text-slate-400 hover:text-white">Services</a>
          <a href="#why-us" className="text-slate-400 hover:text-white">Why Us</a>
          <a href="#reviews" className="text-slate-400 hover:text-white">Reviews</a>
          <a href={`tel:${BUSINESS.phone.replace(/\D/g, '')}`} className="text-slate-400 hover:text-white">Free Estimate</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Eduardo's Roofing. All rights reserved. | South Houston, TX</p>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <PrimaryOffer />
        <Reviews />
        <FAQ />
        <ServiceArea />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}