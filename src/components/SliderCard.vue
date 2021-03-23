<template>
  <div class="sliderCard">
    <div class="card__title">{{personData.developer}}</div>
    <div class="card__location"><img class="location__img" src="../assets/images/map-pin.png" alt="">{{ personData.town }}</div>
    <div class="card__sallary">{{personData.salary}} <img src="../assets/images/plus-circle.png" alt=""></div>

  </div>
</template>

<script>
export default {
  name: "SliderCard",
  props:{
    personData:{
      type: Object
    }
  }
}
</script>

<style lang="scss">
.sliderCard {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 125px;
  padding: 24px 17px 16px 32px;
  background: #FFFFFF;
  box-shadow: 0px 47px 93px rgba(72, 73, 175, 0.01), 0px 14.1691px 28.0368px rgba(72, 73, 175, 0.0195477), 0px 5.88513px 12px rgba(72, 73, 175, 0.015), 0px 2.12854px 4px rgba(72, 73, 175, 0.0104523);
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.3s;
  &:hover{
    transform: scale(1.03);
  }
  .card__title{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #9090AB;
  }
  .card__location, .card__sallary{
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #9090AB;
  }
  .card__location{
    display: flex;
    align-items: center;
    .location__img{
      margin-right: 6px;
    }
  }
  .card__sallary{
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
}
@media (max-width: 530px) {
  .sliderCard{
    width: 180px;
    margin: 0 auto;
  }
}

</style>