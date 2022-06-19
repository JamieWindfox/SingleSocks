import {Material} from "./Material";
import {SockPattern} from "./SockPattern";
import {SockSize} from "./SockSize";
import {Color} from "./Color";
import {SafeResourceUrl} from "@angular/platform-browser";
import {SockType} from "./SockType";

export interface SockProfile {
  _id?: string;
  name: string;
  size: SockSize;
  mainColor: Color;
  material: Material;
  pattern: SockPattern;
  type: SockType;

  condition: string;
  description: string;
  availability?: boolean;

  picture?: SafeResourceUrl;
  imageData?: any;

  user?: string
}
