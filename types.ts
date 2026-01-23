export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
  installments: string;
  isVirtual?: boolean;
  virtualPrice?: string;
  presencialPrice?: string;
  isPercentage?: boolean;
}

export interface PricingPack {
  title: string;
  items: string[];
  price: string;
  installments: string;
  discount: string;
  isPopular?: boolean;
  color?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}