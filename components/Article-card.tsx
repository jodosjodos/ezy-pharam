import { View, Text, Image } from "react-native";
import React from "react";
import { Article } from "@/interface";
import { images } from "@/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface ArticleCardProps {
  article: Article;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <View className=" bg-red-50 p-2 h-fit rounded-lg  border-[1.5px] border-[#E8F3F1] flex flex-row  justify-between">
      <Image
        source={images.ArticleImg}
        className=" w-20 h-full"
        resizeMode="contain"
      />

      <View className="flex flex-col gapy-2 w-40">
        <Text className="font-poppins_bold">{article.title}</Text>
        <View className="flex flex-row justify-between">
          <Text className="text-text-primary">{article.date}</Text>
          <Text>{article.length}</Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons name="bookmark-minus" size={24} color="black" />
      </View>
    </View>
  );
};

export default ArticleCard;
