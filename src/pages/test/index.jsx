import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import { getCurrentInstance } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtList, AtListItem } from "taro-ui";
import Validate from "@/utils/validate";
import schemas from "./validateSchemas";
import store from "@/store";
import "./index.less";

const Test = (props) => {
  const localStore = useLocalStore(() => store);
  const validate = new Validate(schemas.rules, schemas.messages);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(getCurrentInstance().router.params);
  }, []);
  return useObserver(() => (
    <View>
      <Text
        onClick={() => {
          localStore.setText("store变化了");
        }}
      >
        {localStore.text}
      </Text>
      <AtForm>
        <AtInput
          required
          name="insured"
          title="姓名"
          type="text"
          placeholder="请填写姓名"
          value={formData.insured || ""}
          onChange={(value) => setFormData({ ...formData, insured: value })}
        />
        <AtInput
          required
          name="idCard"
          title="身份证"
          type="idcard"
          placeholder="请填写身份证号"
          value={formData.idCard || ""}
          onChange={(value) => setFormData({ ...formData, idCard: value })}
        />
        <AtButton
          type="primary"
          onClick={() => {
            if (!validate.checkForm(formData)) {
              const errMsg = validate.errorList[0].msg;
              Taro.showToast({
                title: errMsg,
                icon: "none",
                duration: 2500,
              });
              return;
            }
          }}
        >
          提交
        </AtButton>
      </AtForm>
    </View>
  ));
};
export default Test;
