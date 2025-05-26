export interface Product {
  id: number;
  username: string;
  email: string;
  mobileNumber: string;
  createdAt: string;
}

export interface CardProps<T extends Product> {
  Products: T[];
}
