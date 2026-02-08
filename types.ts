
export interface ManifestoFormData {
  type: string;
  company: string;
  name?: string;
  email?: string;
  phone?: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
}
