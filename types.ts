
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  text: string;
  author: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  address: string;
  hours: string;
  city: string;
  state: string;
  zip: string;
  areas: string[];
}
