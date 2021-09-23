

 const app = Vue.createApp({
  data(){
    return{
      input: "",
      answerWord: "ぱそこんしつ",
      style: "hide",
    }
  },
  methods: {
    answer(){
      if (this.input === this.answerWord){
        window.location.href = "proN5.html";
      }else{
        this.style = "show";
      }
    }
  }
})

app.mount('#stage')