import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { View, Text, Picker } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import TimesPicker from "../../utils/dateTimePicker";
import store from "../../store";
import "./index.less";
const { dateTimePicker, generateTimeStr } = TimesPicker;

const Index = (props) => {
  const localStore = useLocalStore(() => store);
  const [dateTimeRange, setDateTimeRange] = useState(null);
  const [dateTimeValue, setDateTimeValue] = useState(null);
  const [checkedTimes, setCheckedTimes] = useState("");

  const initTimePicker = () => {
    const startYear = "2010";
    const endYear = new Date().getFullYear();
    // 获取完整的年月日 时分秒，以及默认显示的数组
    const pinckerBack = dateTimePicker(startYear, endYear);
    setDateTimeRange(pinckerBack.dateTimeArray);
    setDateTimeValue(pinckerBack.dateTime);
    setCheckedTimes(
      generateTimeStr(pinckerBack.dateTimeArray, pinckerBack.dateTime)
    );
  };
  useEffect(() => {
    initTimePicker();
  }, []);
  return useObserver(() => (
    <View className="index">
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
      <View>
        <Picker
          mode="multiSelector"
          range={dateTimeRange}
          value={dateTimeValue}
          onChange={(e) => {
            const { value } = e.detail;
            setDateTimeValue(value);
            setCheckedTimes(generateTimeStr(dateTimeRange, value));
          }}
        >
          <AtList>
            <AtListItem title="请选择具体时间" extraText={checkedTimes} />
          </AtList>
        </Picker>
      </View>
    </View>
  ));
};
export default Index;
