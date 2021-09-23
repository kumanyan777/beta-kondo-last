const app = Vue.createApp({
    data(){
      return{
        input: "",
        answerWord: "AA",
        style: "hide",
      }
    },
    methods: {
      answer(){
        if (this.input === this.answerWord){
          window.location.href = "proN9.html";
        }else{
          this.style = "show";
        }
      }
    }
  })
  
  app.mount('#stage')