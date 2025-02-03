import { ImageSourcePropType } from "react-native";

export interface Article {
  id: string;
  title: string;
  date: string;
  length: string;
  image: ImageSourcePropType;
}
