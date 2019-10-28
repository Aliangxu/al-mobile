<template>
  <div class="pages-tables" id="pages-tables">
    <div class="waterMask" id="watermark"></div>
    <div class="rolling-table meal-table" ref="tableBox" :style="{height: tableHeight + 'px'}">
      <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
        <tr v-for="(x,i) in titleRows" :key="i">
          <th
            class="rows"
            :class="dealClass(l,index,i)"
            v-for="(l,index) in x"
            :key="index"
            :colspan="l.colspan"
            :rowspan="l.rowspan"
          >
            <div
              class="content-table-div"
              :style="dealWidth(l)"
            >{{l.title||l.name}}</div>
          </th>
        </tr>
        <tr v-for="(l,i) in tableData" :key="i + 'a'">
          <template v-for="(x, xKey) in columns">
            <td
              v-for="(ll,yKey) in l"
              :key="yKey"
              v-if="x.field === yKey"
              :class="{'cols': (x.isFrozen)}"
            >
              <div class="content-table-div">{{ tableData[i][yKey]}}</div>
            </td>
          </template>
        </tr>
        <tr></tr>
      </table>
    </div>
  </div>
</template>
<script>
import { createIScroller, refreshScroller } from "./assets/iscrollTable";
export default {
  name: "n22-scroll-table",
  props: {
    columns: {
      type: Array,
      require: true
    },
    tableHeight: {
      type: Number,
    },
    tdWidth: {
      type: Number,
      default: 0,
    },
    tdFrozenWidth: {
      type: Number,
      default: 0,
    },
    // 特殊表头
    titleRows: {
      type: Array,
      require: true,
      default: function() {
        return [];
      }
    },
    tableData: {
      type: Array,
      require: true,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      maxHeight: "100%",
      scroll: {
        scroller: null
      },
    };
  },
  computed: {
    dealClass() {
      return (l,index,i)=>{
        return {'cross': this.getIsFrozen(l)}
      }
    },
    dealWidth() {
      return (l)=>{
        // console.log('%c xxxxxxxxxxxxxxxxxxxxxxx','color:green;',x);
        if(this.getIsFrozen(l)){//判定被锁定的列
          return {width: `${this.tdFrozenWidth}px`};
        }else{
          return {width: `${this.tdWidth!==0?this.tdWidth*l.colspan:''}px`};
        }
      }
    }
  },
  mounted() {
    this.maxHeight = window.screen.height;
    this.scroll.scroller = createIScroller(".meal-table");
    console.log('%c tableData','color:green;',this.tableData);
    // addWaterMarker(document.getElementById('watermark'))
  },
  methods: {
    getIsFrozen(l){
      for (let ci = 0; ci < this.columns.length; ci++) {
        const co = this.columns[ci];
        if(l.fields[0]===co.field&&co.isFrozen){
          return co.isFrozen;
        }
      }
    }
  },
};
</script>
<style lang="stylus" scoped>
.pages-tables {
  -webkit-overflow-scrolling: touch; // ios滑动顺畅
  position: relative;
}
.rolling-table {
  border-top: 1px solid #ddd;
  height: 100%;
  font-size: 14px;
  color: #86939a;
  background-color: #fff;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  position: relative;
  top: 0;
  overflow: hidden;
}
.rows {
  position: relative;
  z-index: 3;
}
.cross {
  position: relative;
  z-index: 5;
}
table td {
  border: 0px solid #000;
  font-size: 16px;
  background: #fff;
}
::-webkit-scrollbar {
  display: none;
}
.table {
  //   border-collapse: collapse; //去掉重复的border
  color: #86939e;
  font-size: 14px;
  border: 0px solid #000;
  min-height: 100%;
  text-align: center;
  td {
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    // white-space: nowrap;
    height: 43px;
    // line-height: 43px;
    line-height: 20px;
    padding: 0 10px;
  }
  th {
    color: #43484d;
    // white-space: nowrap;
    height: 37px;
    line-height: 25px;
    /*padding: 0 15px;*/
    // background-color: #f3f4f6;
    background-color: rgb(246, 255, 255);
    font-weight: normal;
    padding-bottom: 0;
    padding-top: 0;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
}
tr {
  position: relative;
  background-color: #fff;
  &:nth-of-type(odd) {
    td {
      // background-color: pink;
    }
  }
}

.content-table-div {
  margin: auto;
}
</style>