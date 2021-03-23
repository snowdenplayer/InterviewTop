<template>
  <div class="header">
    <div class="header__container container">
      <div class="header__logo">
        <router-link>InterviewTop</router-link>
      </div>

      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-list__item">
            <router-link>Кандидати</router-link>
          </li>
          <li class="header__menu-list__item">
            <router-link>Пропозиції</router-link>
          </li>
          <li class="header__menu-list__item">
            <router-link>Найми</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-client">
        <div
            class="header-client__language"
            @click="areLanguageVisible = !areLanguageVisible"
        >
          <p class="selected-language">
            {{ curentLanguage }}
          </p>
          <img src="../assets/images/Union.png" alt="">
          <div
              class="languges__list"
              v-if="areLanguageVisible"
          >
            <p
                class="languges__list__item"
                v-for="codeLang in sortLanguage"
                :key="codeLang.value"
                @click="selectLanguage(codeLang)"
            >
              {{ codeLang.name }}
            </p>
          </div>
        </div>

        <div class="header-client__bell">
          <img src="../assets/images/bell.png" alt="">
        </div>
        <div class="header-client__logo">
          <img class="header-client__logo-img" src="../assets/images/headerClientLogo.png" alt="">
        </div>
        <div class="header-client__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
            class="header-client__burger"
            @click="showMenu = !showMenu"
        >
          <span></span>
        </div>
        <div
            v-if="showMenu"
            class="burger__menu"

        >
          <img
              class="menu-close"
              @click="changeShowMenu"
              src="../assets/images/arrow.png" alt="">
          <nav class="burger__menu-list">
            <a href="#">Мій профіль</a>
            <a href="#">Кандидати</a>
            <a href="#">Пропозиції</a>
            <a href="#">Найми</a>
          </nav>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      areLanguageVisible: false,
      options: [
        {name: 'Ua', value: 1},
        {name: 'Ru', value: 2},
        {name: 'Pl', value: 3},
      ],
      curentLanguage: '',
      showMenu: false
    }
  },
  computed: {
    sortLanguage() {
      return this.options.filter(el => {
        return el.name != this.curentLanguage ? el : ''
      })
    }
  },
  methods: {
    selectLanguage(option) {
      this.curentLanguage = option.name
    },
    changeShowMenu(){
      this.showMenu = !this.showMenu
      console.log(this.showMenu)
    }
  },
  created() {
    this.curentLanguage = this.options[0].name;
  },
}
</script>

<style lang="scss">

.header {
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: center;
  background: linear-gradient(269.72deg, #191C36 0%, #212B4C 100%);

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    cursor: pointer;
  }

  &__menu {
    &-list {
      display: flex;
      justify-content: space-between;

      &__item {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-right: 41px;
        cursor: pointer;

        &:nth-child(3) {
          margin-right: 0;
        }
      }
    }
  }

  &-client {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__language {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 47px;
      height: 27px;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      cursor: pointer;

      .selected-language {
        margin-right: 4px;
      }

      .languges__list {
        position: absolute;
        width: 47px;
        top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #FFFFFF;
        color: black;
        border-bottom: 1px solid #212B4C;
        box-sizing: border-box;

        &__item {
          cursor: pointer;

          &:hover {
            color: gray;
          }
        }
      }
    }

    &__burger {
      display: none;
    }

    .burger__menu {
      display: none;
    }

    &__bell {
      margin-left: 44px;
      cursor: pointer;
    }

    &__logo {

      display: flex;
      justify-content: center;
      align-items: center;
      width: 53px;
      height: 53px;
      border: 1px solid #FFFFFF;
      border-radius: 50%;
      box-sizing: border-box;
      margin-left: 39px;
    }

    &__menu {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      margin-left: 15px;

      span {
        display: block;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 2px solid #FFFFFF;
        position: relative;
        margin-bottom: 2px;

        &:nth-child(last) {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .header {
    &__logo {
      font-size: 30px;
    }

    &__menu {
      &-list {
        &__item {
          font-size: 15px;
          margin-right: 20px;
        }
      }
    }

    &-client {
      &__bell {
        margin-left: 20px;
      }

      &__logo {
        margin-left: 20px;
      }
    }
  }

}

@media (max-width: 767px) {
  .header {
    width: 100%;

    &__container {
      padding-left: 15px;
      padding-right: 15px;
    }

    .header__menu {
      display: none;
    }

    &-client {
      &__bell, &__menu, &__language, &__logo{
        display: none;
      }

      &__burger {
        display: block;
        position: relative;
        width: 30px;
        height: 20px;
        cursor: pointer;
        &:before, &:after {
          content: '';
          background-color: #fff;
          position: absolute;
          width: 90%;
          height: 2px;
          left: 0;
        }
        span {
          position: absolute;
          background-color: #fff;
          width: 90%;
          height: 2px;
          left: 0;
          top: 9px;
        }
        &:before {
          top: 0;
        }
        &:after {
          bottom: 0;
        }
      }
    }
    .burger__menu {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 50%;
      background: #fff;
      transition: 1s;
      .menu-close{
        cursor: pointer;
        margin-top: 20px;
        margin-left: 20px;
      }
      &-list {
        display: flex;
        flex-direction: column;
        height: 35%;
        align-items: center;
        justify-content: space-around;

        a {
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.05em;
          color: #1A1E38;
          padding-bottom: 5px;
          border-bottom: 1px solid #191C36;

        }
      }
    }

  }
}

</style>