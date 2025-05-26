interface Product {
  id: number;
  username: string;
  email: string;
  mobileNumber: string;
}

export default interface ApiResponse {
  status: boolean;
  message: string;
  data: Product[];
}