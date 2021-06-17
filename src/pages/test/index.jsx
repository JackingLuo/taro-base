import { useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { getCurrentInstance } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import store from "../../store";
import "./index.less";

const Test = (props) => {
  const localStore = useLocalStore(() => store);
  useEffect(() => {
    console.log(getCurrentInstance().router.params);
  }, []);
  return useObserver(() => (
    <View>
      <Text>{localStore.text}</Text>
    </View>
  ));
};
export default Test;
