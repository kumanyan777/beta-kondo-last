const app = Vue.createApp({
  data(){
    return{
      input: "",
      answerWord: "81833",
      style: "hide",
    }
  },
  methods: {
    answer(){
      if (this.input === this.answerWord){
        window.location.href = "index25.html";
      }else{
        this.style = "show";
      }
    }
  }
})

app.mount('#stage')
