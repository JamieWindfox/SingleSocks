import {NGO} from "./NGO";

export interface Container {
  _id: string;
  location: {
    lng: number;
    lat: number;
  },
  maintainer: NGO;
}
