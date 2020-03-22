<template>
  <div class="stars">
    <div
      v-for="(item, ind) in num"
      :key="ind"
      class="star_item"
      :style="starsStyle(ind)"
      :class="{ on: ind + 1 <= cur }"
      @mouseover="enter(ind + 1)"
      @mouseleave="out()"
      @click="ok(ind + 1)"
    ></div>
  </div>
  <!-- <div class="rating_container">
        <section class="star_container">
            <svg-icon icon-class="star" class="grey_fill" v-for="num in 5" :key="num"></svg-icon>
        </section>
        <div :style="'width:' + 3.5*2/5*100 + 'px'" class="star_overflow">
            <section class="star_container" >
                <svg-icon icon-class="star" class="orange_fill" v-for="num in 5" :key="num"></svg-icon>
            </section>
        </div>
    </div> -->
</template>
<script>export default {
  name: 'n22-star',
  data() {
    return {
      num: this.starNum,
      cur: this.value,
      flag: false,
    }
  },
  computed: {
    starsStyle() {
      return ind => {
        let sty = {
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }
        if (this.onImage && this.offImage) {
          sty.backgroundImage = ind + 1 <= this.cur ? `url(${this.onImage})` : `url(${this.offImage})`
        }
        return sty
      }
    },
  },
  props: {
    starNum: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 0,
    },
    onImage: {
      default: '',
    },
    offImage: {
      default: '',
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    enter(ind) {
      if (!this.flag) {
        this.cur = ind
      }
    },
    out() {
      if (!this.flag) {
        this.cur = 0
      }
    },
    ok(ind) {
      this.flag = true
      this.cur = ind
    },
  },
  watch: {
    value(val) {
      this.cur = val
    },
    cur(val) {
      console.log('%c 监听到单选框值变更', 'color:#00CD00', val)
      this.$emit('input', val)
      this.$emit('rating', val, this.idx)
    },
  },
}
</script>
<style lang="stylus" scoped>
.stars {
  height: 20px;
  display: inline-block;
}
.stars div {
  width: 26px;
  height: 25px;
  background: url("../_style/images/star24_off.png") no-repeat center;
  background-size: 19px;
  /* padding: 7px; */
  float: left;
}
.stars .on {
  width: 26px;
  height: 25px;
  background: url("../_style/images/star24_on.png") no-repeat center;
  background-size: 19px;
  /* padding: 7px; */
}
.star_item {
  /* margin-left: 14px; */
}

.rating_container {
  position: relative;
  top: 20px;
  width: 200px;
  height: 40px;
  // @include wh(200px, 40px);
  .star_overflow {
      overflow: hidden;
      position: relative;
      height: 100%;
  }
  .star_container {
      position: absolute;
      display: flex;
      width: 200px;
      height: 40px;
      top: -2px;
      left: -2px;
      .grey_fill {
          fill: #d1d1d1;
      }
      .orange_fill {
          fill: #ff9a0d;
      }
  }
}
</style>
