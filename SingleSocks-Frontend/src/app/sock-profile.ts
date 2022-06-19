import {Material} from "./Material";
import {SockPattern} from "./SockPattern";
import {SockSize} from "./SockSize";
import {Color} from "./Color";
import {SafeResourceUrl} from "@angular/platform-browser";

export interface SockProfile {
  _id: string;
  name: string;
  size: SockSize;
  mainColor: Color;
  material: Material;
  pattern: SockPattern

  condition: string;
  description: string;
  availability: boolean;

  picture: SafeResourceUrl;

}
