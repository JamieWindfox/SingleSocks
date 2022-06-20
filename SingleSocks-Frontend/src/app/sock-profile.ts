import {SafeResourceUrl} from "@angular/platform-browser";

export interface SockProfile {
  _id?: string;
  name: string;
  size: string;
  mainColor: string;
  material: string;
  pattern: string;
  type: string;

  condition: string;
  description: string;
  availability?: boolean;

  picture?: SafeResourceUrl;
  imageData?: any;

  user?: string
}
