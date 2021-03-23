<template>
  <div class="interview">

    <div class="interview__left">
      <h2>Інтерв`ю</h2>
      <div id="player" />


    </div>
    <div class="interview__right">
      <h4>Запитання:</h4>
      <div class="video__menu">
        <ul class="menu__list">
          <li
              class="menu__item"
              v-for="item in question"
              :key="item.id"
          >
            <div class="item__start">
              <b>{{ item.id }}.</b>
              <p>{{ item.name }} </p>
            </div>
            <span
                @click="changeTimeLine(item.time)"
            >{{ item.time }}</span>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
import {question} from "@/data/data.question";
import YTPlayer from "yt-player"

export default {
  name: "Interview",
  data() {
    return {
      question,
      player: null,
    }
  },
  mounted() {
    this.player = new YTPlayer('#player')
    this.player.load('e2hBvHFtzHA')
  },
  methods: {
    changeTimeLine(time) {
      this.player.seek(this.formatTime(time))
    },
    formatTime(time){
      const timeData = time.split(':')
      return Number(timeData[0]) * 60 + Number(timeData[1])
    }
  },

}
</script>
<style lang="scss">
.interview {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  &__left {
    h2 {
      margin-bottom: 28px;
    }
    #player{
      width: 600px;
      height: 350px;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;

    h4 {
      align-self: flex-start;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #1A1E38;
      margin-top: 11px;
      margin-bottom: 28px;
    }

    .video__menu {
      height: 350px;
      width: 420px;
      padding: 29px 24px 0;
      background: #FFFFFF;
      box-shadow: 0px 47px 93px rgba(72, 73, 175, 0.01), 0px 14.1691px 28.0368px rgba(72, 73, 175, 0.0195477), 0px 5.88513px 12px rgba(72, 73, 175, 0.015), 0px 2.12854px 4px rgba(72, 73, 175, 0.0104523);
      border-radius: 4px;
      box-sizing: border-box;
      overflow: hidden;
      overflow-y: scroll !important;

      &::-webkit-scrollbar {
        width: 4px;
        background: #FFFFFF;
        border-left: 1px solid #E6ECF5;

        height: 94px;
      }

      &::-webkit-scrollbar-thumb {
        background: #5B5CEE;
        height: 20px;
        border-radius: 6px;
      }

      .menu__list {
        .menu__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #E6ECF5;

          .item__start {
            display: flex;

            b {
              font-weight: bold;
              margin-right: 5px;
              font-size: 16px;
              line-height: 19px;
            }

            p {
              font-style: normal;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.05em;
              color: #141F31;

            }

          }

          span {
            align-self: center;
            justify-self: center;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.05em;
            color: #5B5CEE;
          }


        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1199px) {
  .interview{
    &__left{
      width: 58%;
      #player{
        width: 100%;
      }

    }
    &__right{
      width: 40%;
      .video__menu {
        width: 100%;
      }
    }
  }
}
@media (max-width: 767px) {
  .interview{
    flex-direction: column;
    margin-top: 20px;
    &__left{
      width: 100%;
      #player{
        width: 100%;
      }

    }
    &__right{
      width: 100%;
      .video__menu {
        width: 100%;
      }
    }
  }
}
</style>