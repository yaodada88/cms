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
    <el-row>
      <el-col :span="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">平台近6个月的交易记录</p>
          </div>
          <near-six-month width="100%"  height="100%"></near-six-month>
        </div>
      </el-col>
      <el-col :span="8" class="detail-item-wrapper">
        <div class="home-detail-item" v-for="(item,index) in homeDetailItem" :key="index" :style="{background:item.color}">
          <div class="name">{{item.name}}</div>
          <div class="value"><span class="num">{{(item.value/10000).toFixed(2)}}</span>万</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getHomeTal,getHomeDetailItem } from "@/api/home";
import   {CountUp} from "countup.js";
import ColorLine from '@/components/color-line'
import NearSixMonth from '@/components/near-six-month'
export default {
  name: "home",
  components:{
      ColorLine,
      NearSixMonth
  },
  data() {
    return {
      homeTalData: [],
      homeDetailItem:[],
      numAnim: null
    };
  },
  created() {
    getHomeTal()
      .then(res => {
        this.homeTalData = res.data;
        this.initCountup();
      })
      .catch(err => {
        console.log("数据异常");
      }),
      getHomeDetailItem().then((res)=>{
        this.homeDetailItem=res.data;
        console.log(res.data)
      }).catch(err=>{
        console.log("detailItem数据获取异常")
      })
  },
  methods: {
    initCountup() {
      this.$nextTick(() => {
        let countupLength = this.$refs.countup.length;
        let i = 0;
        for (i; i < countupLength; i++) {
          // this.numAnim = new CountUp(
          //   this.$refs.countup[i],
          //   0,
          //   this.$refs.countup[i].innerText,
          //   2,
          //   1.5
          // );
          // this.numAnim.start();
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
  .near-six-month{
    border: 1px solid #eee;
    height: 300px;
    .title{
      background: #dde3ef;
      padding: 10px 0;
      .title-value{
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &::before{
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
      }
    }
  }
  .detail-item-wrapper{
    display: flex;
    height: 300px;
    overflow: hidden;
    flex-wrap: wrap;
    flex-grow: row wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 0 10px;
    color:#fff;
    .home-detail-item{
      flex:0 0 48%;
      height: 145px;
      border: 1px solid #eee;
      background-image: linear-gradient(rgba(255, 255, 255, .1), rgba(255, 255, 255, .3)) !important;
      cursor: pointer;
      .name{
        padding: 30px 0px 10px 0px;
        text-align: center;
        font-size: 20px;
      }
      .value{
        text-align: center;
        .num{
          font-size: 28px;
        }
      }
    }
     .home-detail-item:hover{
      background-image: none !important;
    }
  }
}
</style>