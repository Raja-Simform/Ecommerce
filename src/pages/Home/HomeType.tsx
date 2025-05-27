interface Product {
  id: number;
  username: string;
  email: string;
  mobileNumber: string;
  createdAt: string;
}

export default interface ApiResponse {
  status: boolean;
  message: string;
  data: Product[];
}
