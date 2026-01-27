export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
  installments: string;
  isVirtual?: boolean;
  virtualPrice?: string;
  virtualInstallments?: string;
  presencialPrice?: string;
  presencialInstallments?: string;
  isPercentage?: boolean;
  link?: string;
}

export interface PricingPack {
  title: string;
  items: string[];
  price: string;
  installments: string;
  discount: string;
  isPopular?: boolean;
  color?: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}