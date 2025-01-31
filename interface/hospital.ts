import { ImageSourcePropType } from "react-native";

export interface Hospital {
  id: number;
  name: string;
  service: string;
  location: string;
  rating: number;
  image:ImageSourcePropType
}
