<template>
  <div class="calendar">
    <!-- <v-calendar 
            :attributes='attrs'
            is-double-paned
            style="width:100%"
        >
    </v-calendar>-->
    <v-date-picker
      mode="single"
      :theme-styles="themeStyles"
      :attributes="attrs"
      v-model="selectedValue"
      @dayclick="dayClicked"
      @update:fromPage="$_updateFrompage"
      @update:toPage="$_updateTopage"
      is-inline
      style="width:100%"
    >
      <!-- 自定义header -->
      <span slot="header" slot-scope="{ year, month, movePrevMonth, moveNextMonth }">
        <div class="my_header">
          <div @click="movePrevMonth" class="calendar_left_button">
            <svg-icon class="calendar_button" icon-class="triangle"></svg-icon>
          </div>
          <div class="header_title">{{ year }}年-{{ month }}月</div>
          <div @click="moveNextMonth" class="calendar_right_button">
            <svg-icon class="calendar_button" icon-class="triangle"></svg-icon>
          </div>
        </div>
      </span>
      <!-- <span slot='header-left-button' slot-scope='{ movePrevMonth }'>
            <div @click='movePrevMonth' class="calendar_left_button">
              <svg-icon icon-class="left_button"></svg-icon>
            </div>
          </span>
          <span slot='header-title' slot-scope='{ year, month }'>
            {{ year }}年-{{ month }}月
          </span>
          <span slot='header-right-button' slot-scope='{ moveNextMonth }'>
            <div @click='moveNextMonth' class="calendar_left_button">
              <svg-icon icon-class="left_button"></svg-icon>
            </div>
      </span>-->
    </v-date-picker>
  </div>
</template>
<script>
import { formatDateTime } from "../_util";

// import Vue from 'vue';
// import { setupCalendar, Calendar} from 'v-calendar'
// import 'v-calendar/lib/v-calendar.min.css';
// // Remember to setup calendar (passing in defaults if needed)
// setupCalendar({
//   firstDayOfWeek: 2,  // Monday,
//   locale: localStorage.AL_MOBILE_PALETTE
// });
// Register component(s)
// Vue.component('v-calendar', Calendar);
export default {
  name: "n22-calendar",
  components: {
    // ['v-calendar']: Calendar
  },
  data() {
    return {
      themeStyles: {
        wrapper: {
          // background: 'linear-gradient(to bottom right, #ff5050, #ff66b3)',
          // color: '#fafafa',
          "font-size": "44px"
        },
        dayContent: {
          fontSize: "14px"
        }
      },
      selectedValue: this.value,
      attrs: []
    };
  },
  props: {
    starNum: {
      type: Number,
      default: 5
    },
    starCur: {
      type: Number,
      default: -1
    },
    attrsList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    value: {
      type: Date,
      default: () => {
        return new Date();
      }
    }
  },
  methods: {
    dealattrs(arr){
      this.attrs = [
        {
          highlight: {
            backgroundColor: "#FFC0CB	", // Turquoise background
            borderColor: "#FFC0CB	",
            borderWidth: "2px",
            borderRadius: "1px"
          },
          contentStyle: {
            color: "white" // White text
          },
          dates: [
            {
              start: new Date(2019, 1, 4), // Jan 24th
              end: new Date(2019, 1, 10) // - Jan 25th
            }
          ]
        }
      ]
      this.attrs.push(arr)
      console.log('%c this.attrs','color:green;',this.attrs)
    },
    dayClicked(day) {
      console.log(
        "%c 选中日期>>>>",
        "color:green;",
        formatDateTime(day.date, "yyyy-MM-dd")
      );
      console.log(
        "%c 选中之前日期>>>>",
        "color:green;",
        formatDateTime(this.selectedValue, "yyyy-MM-dd")
      );
      this.$emit("input", day.date);
      this.$emit("selectDate", day);
    },
    $_updateFrompage(page) {
      console.log("%c updateFrompage", "color:green;", page);
      this.$emit("selectPage", page);
    },
    $_updateTopage(page) {
      console.log("%c updateTopage", "color:green;", page);
      this.$emit("selectPage", page);
    }
  },
  mounted() {
    // this.attrsList.forEach(arr => {
    //   this.attrs.push(arr)
    // });
  },
  watch: {
    value(val) {
      this.selectedValue = val;
    },
    selectedValue(newvalue, oldvalue) {
      // this.$emit('input', newvalue)
      console.log("%c newvalue", "color:green;", newvalue);
      console.log("%c oldvalue", "color:green;", oldvalue);
    },
    attrsList: {
      handler(newValue, oldValue) {
        console.log('%c newValue','color:green;',newValue);
        newValue.forEach(arr => {
          this.dealattrs(arr)
        });
      },
      deep: true
    }
  }
};
</script>
<style lang="stylus" scoped>
.my_header {
  margin: 10px 0px;
  text-align: center;
  display: flex;
  display: -webkit-flex;
}
.calendar_left_button {
  font-size: 14px;
  height: 20px;
  margin-left: 95px;
  width: 14px;
  // @include transform(rotate(180deg));
}
.calendar_right_button {
  font-size: 14px;
  height: 20px;
  // margin-left: 89px;
  width: 14px;
}
.header_title {
  font-size: 14px;
  color: #333333;
  width: 79px;
  margin: 0 39px;
}
.calendar_button {
  color: rgb(64, 145, 251);
  height: 10px;
  width: 10px;
}
</style>
