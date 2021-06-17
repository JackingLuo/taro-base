import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import store from "../../store";
import "./index.less";

const Index = (props) => {
  const [text, setText] = useState("Hello World!");
  const localStore = useLocalStore(() => store);
  useEffect(() => {
    console.log(props);
  }, []);
  return useObserver(() => (
    <View className="index">
      <Text>{text}</Text>
      <Text>{localStore.text}</Text>
      <AtButton
        type="primary"
        onClick={() => {
          localStore.setText("李四");
          Taro.navigateTo({ url: "/pages/test/index?id=2&type=test" });
        }}
      >
        修改store数据
      </AtButton>
    </View>
  ));
};
export default Index;
