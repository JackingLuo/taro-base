import { action, observable } from "mobx";
class Store {
  @observable text = "张三";

  @action
  setText(value) {
    this.text = value;
  }
}

export default new Store();
