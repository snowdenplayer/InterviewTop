<template>
  <div class="app">
      <Header></Header>
    <div class="container">
      <a class="candidate__link" href="#">Кандидат/Python</a>
      <h2 class="candidate__header">Кандидат</h2>
      <Candidate></Candidate>
      <SliderSames></SliderSames>
      <Interview></Interview>
    </div>



  </div>

</template>

<script>
import Header from "@/components/Header";

 import Candidate from "@/components/Candidate";
 import SliderSames from "@/components/SliderSames";
 import Interview from "@/components/Interview";


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Header,
    Candidate,
    SliderSames,
    Interview
  },
  computed:{
  }
}
</script>

<style lang="scss">
.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E5E5E5;
  padding-bottom: 140px;
}
.candidate__link{
  display: block;
  margin-top: 55px;
  margin-bottom: 30px;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #5B5CEE;
}
.candidate__header{
  margin-bottom: 28px;
}
@media (min-width: 768px) and (max-width: 991px){
  .candidate__link{
    margin-top: 35px;
    margin-bottom: 20px;
  }
  .candidate__header{
    margin-bottom: 15px;
  }
}
@media (max-width: 767px){
  .candidate__link{
    margin: 15px 0;
  }
}
</style>
