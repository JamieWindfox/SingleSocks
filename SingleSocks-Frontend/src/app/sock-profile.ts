import {Material} from "./Material";
import {SockPattern} from "./SockPattern";
import {SockSize} from "./SockSize";
import {Color} from "./Color";

export interface SockProfile {
  _id: number;
  name: string;
  size: SockSize;
  mainColor: Color;
  material: Material;
  pattern: SockPattern

  condition: string;
  description: string;
  availability: boolean;

  picture: string; // imageName

}
