export interface User {
  username: string;
  password: string;
}

export interface RegistrationUser {
  displayName: string;
  email: string;
  location: {
    lat: number,
    lng: number
  };
  password: string;
}

export interface UserInfo {
  displayName: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  }
}
