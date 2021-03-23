<template>
    <div class="sliderSames">
      <div class="slider__header">
        <div class="slider__title">Cхожi кандидати:</div>
        <div class="slider__navigation">
          <button
              class="arrow arrow__left"
              @click="prev"
              :disabled="pos === 0"
          >
            <svg v-if="pos === 0" width="12" height="8" viewBox="0 0 12 8" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9231 7L11 4L7.9231 1" stroke="#A9A9CA" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M1 4L11 4" stroke="#A9A9CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9231 7L11 4L7.9231 1" stroke="#5B5CEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M1 4L11 4" stroke="#5B5CEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
              class="arrow arrow__right"
              @click="next"
              :disabled="pos === person.length - slidesToScroll"
          >
            <svg v-if="pos === person.length - slidesToScroll" width="12" height="8" viewBox="0 0 12 8" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9231 7L11 4L7.9231 1" stroke="#A9A9CA" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M1 4L11 4" stroke="#A9A9CA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9231 7L11 4L7.9231 1" stroke="#5B5CEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M1 4L11 4" stroke="#5B5CEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="wrap">
        <div class="scroller">
          <ul class="items">
            <li
                class="item"
                v-for="item of person"
                :key="item.id"
            >
              <SliderCard
                  :person-data="item"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import {person} from "@/data/data.person";
import SliderCard from "@/components/SliderCard";

export default {
  name: "SliderSames",
  data() {
    return {
      person,
      slidesToShow: 3,
      slidesToScroll: 3,
      pos: 0,

    }
  },
  components: {
    SliderCard,
  },
  mounted() {
    this.checkBtn()
    console.log(person.length)
  },
  watch() {

  },
  methods: {

    setTransform() {
      let items = document.querySelector('.items');
      let item = document.querySelector('.item');
      items.style.transform = 'translateX(' + (-this.pos * item.offsetWidth) * 1.03 + 'px)'
    },

    prev() {
      this.pos = Math.max(this.pos - 1, 0)
      this.setTransform()
      this.checkBtn()
    },

    next() {
      this.pos = Math.min(this.pos + 1, document.querySelectorAll('.item').length - 1);
      this.setTransform()
      this.checkBtn()
    },
    checkBtn() {
      //let itemsCount = document.querySelector('.item').length;
      console.log(this.pos)
      let flag = this.pos === 0;
      console.log(flag)

    }
  }


}
</script>


<style lang="scss">
.sliderSames {
  width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  .slider__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .slider__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #1A1E38;
    }
    .slider__navigation {
      display: flex;
      .arrow {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: none;
        background: #FFFFFF;
        box-shadow: 0px 15px 30px rgba(91, 92, 238, 0.15), 0px 2px 6px rgba(91, 92, 238, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
        &:disabled {
          box-shadow: none;
        }
        &__left {
          margin-right: 15px;

          svg {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  .wrap {
    display: flex;
    align-items: stretch;
    width: 100%;
    margin: auto;

    .scroller {
      flex: 1;
      overflow: hidden;

      .items {
        list-style-type: none;
        transition: transform 1s ease-in-out;
        display: flex;
        justify-content: space-between;

        .item {
          display: flex;
          justify-content: center;
          width: 250px;
          margin-right: 5px;
          box-sizing: border-box;
        }
      }
    }
  }

}

@media (min-width: 992px) and (max-width: 1199px) {
  .sliderSames {
    margin-top: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .sliderSames {
    margin-top: 20px;
    width: 740px;
   .wrap{
     .scroller{
       .items{
         .item{
           width: 242px;
         }
       }
     }
    }
  }
}

@media (max-width: 767px) {
  .sliderSames {
    margin-top: 20px;
    width: 505px;
    .wrap{
      .scroller{
        .items{
          .item{
            width: 250px;
          }
        }
      }
    }
  }
}
@media (max-width: 530px) {
  .sliderSames {
    width: 100%;
    .wrap{
      .scroller{
        .items{
          .item{

          }
        }
      }
    }
  }
}
</style>