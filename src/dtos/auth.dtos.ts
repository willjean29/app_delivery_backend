export interface SignUpDTO {
  email: string;
  password: string;
  confirmPassword?: string;
  phone: string;
  image: string;
  name: string;
  lastName: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}
