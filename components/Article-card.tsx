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
    <View className=" my-2 p-2 h-fit rounded-lg  border-[1.5px] border-[#E8F3F1] flex flex-row  justify-between">
      <View className="w-20 h-20">
        <Image
          source={article.image}
          className=" w-full h-full rounded-md"
          resizeMode="contain"
        />
      </View>

      <View className="flex flex-col gap-y-2 w-40">
        <Text className="font-poppins_bold text-xs">{article.title}</Text>
        <View className="flex flex-row justify-between">
          <Text className="text-text-primary font-poppins_reg text-xs">
            {article.date}
          </Text>
          <Text className="text-text-primary font-poppins_reg text-xs">
            {article.length}
          </Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons
          name="bookmark-minus"
          size={24}
          color="#407ce2"
        />
      </View>
    </View>
  );
};

export default ArticleCard;
