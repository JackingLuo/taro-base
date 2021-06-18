const rules = {
  insured: {
    required: true,
  },
  idCard: {
    //form对象中的属性
    required: true, //是否校验空值
    idcard: true, //匹配校验规则，前提是这个规则是存在的
  },
  // date: {
  //   required: true,
  //   date: true,
  // },
};
//解释一下,idCard是我定义的属性,而idcard是这个插件自带的校验规则
//只有一项required:true表示就是未输入,上面的rules要和下面的messages对应
const messages = {
  insured: {
    required: "请填写姓名",
  },
  idCard: {
    required: "请填写身份证",
    idcard: "身份证号不正确",
  },
  // date: {
  //   required: "请选择日期",
  //   date: "请选择日期",
  // },
};
export default {
  rules,
  messages,
};
