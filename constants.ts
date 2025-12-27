
import { BusinessInfo, Service, Review, FAQItem } from './types';

export const BUSINESS: BusinessInfo = {
  name: "Eduardo's Roofing",
  phone: "(832) 461-7957",
  address: "409 Betty St, South Houston, TX 77587",
  hours: "Open 24 Hours",
  city: "South Houston",
  state: "TX",
  zip: "77587",
  areas: ["South Houston TX", "Houston TX", "Pasadena TX", "Deer Park TX", "Galena Park TX", "77587", "77017", "77502", "77536"]
};

export const SERVICES: Service[] = [
  { title: "Roof Repair", description: "Stopping leaks fast to protect your home's interior from costly water damage.", icon: "wrench" },
  { title: "Roof Replacement", description: "Complete tear-offs and high-quality installations for long-term peace of mind.", icon: "home" },
  { title: "Emergency Roofing", description: "24/7 rapid response for storm damage and critical leaks when you need us most.", icon: "alert" },
  { title: "Flat Roofing", description: "Specialized solutions for residential and commercial flat roof systems.", icon: "layers" },
  { title: "Roof Leak Repair", description: "Precision detection and sealing to ensure your roof stays bone dry.", icon: "droplet" },
  { title: "Waterproofing", description: "Advanced protective coatings to extend the life of your roofing system.", icon: "shield" }
];

export const REVIEWS: Review[] = [
  { text: "Eduardo showed up fast and fixed our leak the same day. Highly recommend.", author: "Local Homeowner", rating: 5 },
  { text: "Very professional and honest. Explained everything clearly and the price was fair.", author: "Satisfied Customer", rating: 5 }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I know if I need a full roof replacement or just a repair?",
    answer: "Our free inspection identifies the root cause. If damage is localized (like a few shingles), a repair is usually sufficient. If the underlayment is failing or age has compromised the entire system, we provide honest replacement recommendations."
  },
  {
    question: "Do you help with roofing insurance claims?",
    answer: "Yes. We understand the confusion storm damage causes. We provide documented inspection reports to help you navigate the process with your provider."
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "Most residential roof replacements in South Houston are completed in 1-2 days, depending on weather conditions and house size."
  },
  {
    question: "Are you locally owned and operated?",
    answer: "Absolutely. Eduardo's Roofing is based right here in South Houston at 409 Betty St. We are your neighbors and stand by our work."
  },
  {
    question: "What areas do you serve outside of South Houston?",
    answer: "We proudly serve Houston, Pasadena, Deer Park, Galena Park, and surrounding zip codes like 77017 and 77536."
  }
];
