export interface SignUpDto {
  email: string;
  password: string;
  confirmPassword?: string;
  phone: string;
  image: string;
  name: string;
  lastName: string;
}

export interface SignInDto {
  email: string;
  password: string;
}
