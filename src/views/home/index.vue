<template>
  <div class="homepage-container">
    <div class="home-total">
      <div class="home-total-item" v-for="(item,index) in homeTalData" :key="index">
        <div class="wrapper-item">
          <p class="title">{{item.title}}</p>
          <p class="value digital-number" ref="countup">{{item.value}}</p>
          <color-line :id='"main"+index' :color="item.color" :optionData="item.data" width="180px" height="70px"></color-line>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHomeTal } from "@/api/home";
import   {CountUp} from "countup.js";
import ColorLine from '@/components/color-line'
export default {
  name: "home",
  components:{
      ColorLine
  },
  data() {
    return {
      homeTalData: [],
      numAnim: null
    };
  },
  created() {
    getHomeTal()
      .then(res => {
        this.homeTalData = res.data;
        console.log(res.data)
        this.initCountup();
      })
      .catch(err => {
        console.log("数据异常");
      });
  },
  methods: {
    initCountup() {
      this.$nextTick(() => {
        let countupLength = this.$refs.countup.length;
        let i = 0;
        for (i; i < countupLength; i++) {
        //     console.log(Countup)
        //   this.numAnim = new CountUp(
        //     this.$refs.countup[i],
        //     0,
        //     this.$refs.countup[i].innerText,
        //     2,
        //     1.5
        //   );

        //   this.numAnim.start();
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.homepage-container {
  min-width: 800px;
  .home-total {
    width: 100%;
    height: 160px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0 0 15px 0;
    .home-total-item {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: inline-block;
      width: 25%;
      height: 100%;
      padding: 15px 0;
      vertical-align: top;
      
      .wrapper-item {
        height: 100%;
        padding: 0 20px;
        border-right: 1px solid #ccc;
        text-align: center;
        .value {
          margin: 5px 0;
          font-size: 34px;
          color: #ffc107;
        }
        .digital-number {
          font-family: digital;
        }
      }
      &:last-child{
          .wrapper-item{
              border-right: 0;
          }
      }

    }
  }
}
</style>