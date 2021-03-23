<template>
  <div class="candidate">
    <div class="candidate__container">
      <div class="candidate__information">
        <div class="information__header">
          <h3 class="information__name">Python Developer</h3>
          <span class="information__date">Профiль вiд: 04.06.2020</span>
        </div>
        <div class="information__general">
          <div class="general__top">
            <p>Зарплата: <b>{{ person.salary }}</b></p>
            <p>Місто: <b>{{ person.town }}</b></p>
          </div>
          <div class="general__bottom">
            <p>Досвід роботи: <b>{{ person.language }}</b></p>
            <p>Знання мов: <b>{{ person.language }}</b></p>
          </div>
        </div>
        <div class="information__btn-more"><span @click="isVisibleDetails = !isVisibleDetails , changaArrow()">Детальніше</span>
        </div>
        <div v-if="isVisibleDetails" class="info__skills">
          <ul class="skills__menu">
            <li
                class="skills__item"
                v-for="item of person.moreDetails"
                :key="item.name"
            >
              <p class="item__header">{{ item.name }}</p>
              <p class="item__text" v-html="item.skils"></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="candidate__card">
        <div class="candidate__foto">
          <img src="../assets/images/candidateFoto.png" alt="">
        </div>
        <div class="candidate__text-wrap">
          <p class="candidate__name">{{ person.name }}</p>
          <div class="candidate__social">
            <a href="" class="social__link"><img src="../assets/images/telegram.png" alt=""></a>
            <a href="" class="social__link"><img src="../assets/images/linked.png" alt=""></a>
            <a href="" class="social__link"><img src="../assets/images/skype.png" alt=""></a>
            <a href="" class="social__link"><img src="../assets/images/github.png" alt=""></a>
          </div>
          <div class="candidate__contacts">
            <div class="contacts-tel">
              <img class="contacts__img" src="../assets/images/phone-call.png" alt="">
              <a class="contacts__link" href="">{{ person.number }}</a>
            </div>
            <div class="contacts-mail">
              <img class="contacts__img" src="../assets/images/mail.png" alt="">
              <a class="contacts__link" href="">{{ person.mail }}</a>
            </div>
          </div>
        </div>

        <button class="candidate__btn btn">
          Завантажити CV
        </button>

      </div>

    </div>
  </div>
</template>

<script>
import {person} from '@/data/data.person'

export default {
  name: "Candidate",
  data() {
    return {
      person: person[0],
      isVisibleDetails: false
    }
  },
  components: {},
  methods: {
    changaArrow() {
      console.log('sa')
    }
  }
}
</script>

<style lang="scss">
.candidate {
  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__information {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 776px;
    background: #FFFFFF;
    box-shadow: 0px 47px 93px rgba(72, 73, 175, 0.01), 0px 14.1691px 28.0368px rgba(72, 73, 175, 0.0195477), 0px 5.88513px 12px rgba(72, 73, 175, 0.015), 0px 2.12854px 4px rgba(72, 73, 175, 0.0104523);
    border-radius: 4px;
    padding: 28px 32px 40px 32px;
    box-sizing: border-box;
    margin-bottom: 36px;

    .information__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      .information__name {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #5B5CEE;
      }

      .information__date {
        margin-top: 9px;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        color: #A9A9CA;
      }
    }

    .information__general {
      display: flex;
      margin-bottom: 21px;

      .general__top, .general__bottom {
        display: flex;
        flex-direction: column;

        p {
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.05em;
          color: #141F31;

          &:nth-child(1) {
            margin-bottom: 20px;
          }
        }

        b {
          font-weight: bold;
        }
      }

      .general__top {
        margin-right: 80px;
      }

    }

    .information__btn-more {
      span {
        cursor: pointer;

        &:before {
          content: url("../assets/images/chevron-right.png");
          position: absolute;
          top: -4px;
          right: -15px;
        }
      }

      position: relative;
      display: flex;
      justify-content: flex-end;
      padding-right: 15px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #5B5CEE;

    }

    .info__skills {
      .skills__menu {
        .skills__item {
          margin-bottom: 25px;

          &:nth-child(last) {
            margin-bottom: 0;
          }

          .item__header {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.05em;
            color: #141F31;
            margin-bottom: 8px;
          }

          .item__text {
            font-weight: normal;
            font-size: 16px;
            line-height: 140%;
            letter-spacing: 0.03em;
            color: #9090AB;
          }
        }
      }

    }
  }

  &__card {
    width: 248px;
    max-height: 390px;
    padding: 25px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 47px 93px rgba(72, 73, 175, 0.01), 0px 14.1691px 28.0368px rgba(72, 73, 175, 0.0195477), 0px 5.88513px 12px rgba(72, 73, 175, 0.015), 0px 2.12854px 4px rgba(72, 73, 175, 0.0104523);
    border-radius: 4px;
    box-sizing: border-box;
  }

  &__foto {
    margin-bottom: 20px;
  }

  &__text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #1A1E38;
    margin-bottom: 13px;
  }

  &__social {
    margin-bottom: 30px;

    .social__link {
      margin-right: 17px;

      :nth-child(last) {
        margin-right: 0;
      }
    }

  }
  &__contacts {
    align-self: flex-start;
    margin-bottom: 32px;
    .contacts__img {
      margin-right: 8px;
    }
    .contacts__link {
      text-decoration: none;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.05em;
      color: #141F31;
    }
    .contacts-tel {
      margin-bottom: 16px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 197px;
    height: 50px;
    background: #5B5CEE;
    box-shadow: 0px 15px 30px rgba(91, 92, 238, 0.15), 0px 2px 6px rgba(91, 92, 238, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 2px;
    border: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .candidate {
    &__information {
      width: 68%;
    }
    &__card {
      width: 30%;
    }
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .candidate {
    &__information {
      width: 68%;
      padding-bottom: 20px;
    }
    &__card {
      padding: 15px;
      width: 30%;
    }
    &__social, &__contacts {
      margin-bottom: 20px;
    }
    &__foto {
      img {
        width: 100px;
        height: 100px;
      }
    }
    &__btn {
      height: 40px;
    }
    .information__general {
      .general__top {
        margin-right: 5%;
      }
    }
  }
}
@media (max-width: 767px) {
  .candidate {
    &__container {
      flex-direction: column;
      width: 100%;
    }
    &__information {
      width: 100%;
      order: 2;
      margin-bottom: 0;
      .information__general {
        width: 100%;
        .general__top {
          margin-right: 5%;
        }
      }
    }
    &__card {
      width: 100%;
      margin-bottom: 15px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
    &__text-wrap {
      height: 100px;
      justify-content: space-around;
    }
    &__social, &__name {
      align-self: flex-start;
      margin-bottom: 0;

    }
    &__contacts, &__foto {
      margin-bottom: 0;
    }
    &__btn {
      width: 150px;
      font-size: 14px;
      height: 40px;
    }
  }
}

@media (max-width: 520px) {
  .candidate {
    &__card {
      flex-direction: column;
      justify-content: center;
    }
    &__text-wrap {
      justify-content: center;
      align-items: center;
    }
    &__name, &__social, .contacts-tel {
      align-self: center;
      margin-bottom: 5px;
    }
    &__contacts {
      margin-bottom: 5px;
    }
    &__information {
      padding: 20px;
      .information__header, .information__general {
        flex-direction: column;
      }
      .information__general {
        .general__bottom p, .general__top p {
          margin-bottom: 20px;
          font-size: 14px;
        }
      }
    }
  }
}

</style>