<template>
  <div class="n22-example-child n22-example-child-input-item-0">
    <n22-field>
      <n22-input-item
        ref="input0"
        title="普通文本"
        placeholder="普通文本"
        is-amount
        :maxlength="5"
      >
        <!-- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓--我是分割箭头--[短信验证码]--↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ -->
        <template slot="right">
          <span class="slot-right-line"></span>
          <n22-button
            @click="flagShow ? getVerifyCode() : ''"
            class="getbutd-font"
            type="primary"
            :inactive="!flagShow"
          >
            <label v-if="flagShow" class="slot-right-button-text">获取短信</label>
            <label v-else class="slot-right-button-text">剩余{{ second }}s</label>
          </n22-button>
        </template>
        <!-- ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑--我是分割箭头--[短信验证码]--↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ -->
      </n22-input-item>
    </n22-field>
  </div>
</template>

<script>
import {Button, InputItem, Field} from 'al-mobile'

export default {
  name: 'input-item-demo',
  /* DELETE */
  title: '普通输入框',
  titleEnUS: 'Normal input',
  /* DELETE */
  components: {
    [Button.name]: Button,
    [InputItem.name]: InputItem,
    [Field.name]: Field,
  },
  data(){
    return {
      flagShow: true,
      second: 60,
      secondInit: 60,
    }
  },
  methods: {
    /*↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓--我是分割箭头--[获取短信验证码模块]--↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓*/
    getVerifyCode() {
      let _this = this;
      // const params = {};
      // getVerifyCode(params).then(
      //   res => {
      //     console.log("%c 数据返回成功", "color:green;", JSON.parse(JSON.stringify(res)));
      //     res = res.response;
      if (_this.flagShow) {
        _this.flagShow = false;
        let interval = window.setInterval(function() {
          _this.setStorage(_this.second);
          if (_this.second-- <= 0) {
            //缓存在页面计时存在一秒的延迟--暂且忽略
            _this.second = JSON.parse(JSON.stringify(_this.secondInit));
            _this.flagShow = true;
            window.clearInterval(interval);
          }
        }, 1000);
      }
      //   },
      //   error => {
      //     console.log("%c err", "color:red;", error);
      //   }
      // );
    },
    setStorage(parm) {
      localStorage.setItem("dalay_" + this.$route.name, parm);
      localStorage.setItem("_time_" + this.$route.name, new Date().getTime());
    },
    getStorage() {
      let localDelay = {};
      localDelay.delay = localStorage.getItem("dalay_" + this.$route.name);
      localDelay.sec = localStorage.getItem("_time_" + this.$route.name);
      return localDelay;
    },
    judgeCode() {
      let _this = this;
      let localDelay = _this.getStorage();
      let secTime = parseInt((new Date().getTime() - localDelay.sec) / 1000);
      console.log(localDelay);
      if (secTime > localDelay.delay) {
        _this.flagShow = true;
        console.log("已过期");
      } else {
        _this.flagShow = false;
        let _delay = localDelay.delay - secTime;
        _this.second = _delay;
        _this.timer = setInterval(function() {
          if (_delay > 0) {
            _delay--;
            _this.setStorage(_delay);
            _this.second = _delay;
            _this.flagShow = false;
          } else {
            _this.flagShow = true;
            window.clearInterval(_this.timer);
          }
        }, 1000);
      }
    },
    /*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑--我是分割箭头--[]--↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/
  }
}

</script>