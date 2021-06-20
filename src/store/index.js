import { observable, action } from "mobx";
class Store {
  @observable text = "张三";
  @observable dafultData = {
    name: "王老六",
    child: [
      { name: "六一", child: [] },
      { name: "六二", child: [] },
    ],
  };

  @action
  setDafultData(value) {
    this.dafultData = value;
  }
  @action
  setText(value) {
    this.text = value;
  }
}

export default new Store();
