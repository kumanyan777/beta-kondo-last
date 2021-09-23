const app = Vue.createApp({
  data() {
    return {
      showNum: 1,
      input1: "",
      input2: "",
      answer1: "プールの答え",
      answer2: "図書館の答え",
      collectClassName1: "hide",
      wrongClassName1: "hide",
      isPush1: false,
      collectClassName2: "hide",
      wrongClassName2: "hide",
      isPush2: false,
      collectBool1: false,
      collectBool2: false,
    }
  },
  methods: {
    changeSection(num) {
      this.showNum = num;
    },
    checkAnswer1() {
      if (this.input1 == this.answer1) {
        this.collectClassName1 = "show";
        this.wrongClassName1 = "hide";
        this.isPush1 = true;
        this.collectBool1 = true;
      } else {
        this.wrongClassName1 = "show";
      }
    },
    checkAnswer2() {
      if (this.input2 == this.answer2) {
        this.collectClassName2 = "show";
        this.wrongClassName2 = "hide";
        this.isPush2 = true;
        this.collectBool2 = true;
      } else {
        this.wrongClassName2 = "show";
      }
    }
  },
})

app.mount("#page")