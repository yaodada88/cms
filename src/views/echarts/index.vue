<template>
    <div>
        <div class="echartsBox" id="echartsBox"></div>
    </div>
</template>
<script>
let echarts=require('echarts/lib/echarts');
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
    name:'ecaharts-index',
    methods:{
        excile(){
            let myEcharts=echarts.init(document.getElementById("echartsBox"));
            myEcharts.setOption({
                title:{
                    text:'echarts 入门实例'
                },
                tooltip:{},
                legend:{
                    data:['销量']
                },
                xAxis:{
                    data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
                },
                yAxis:{},
                series:[{
                    name:'销量',
                    type:'bar',
                    data:[5,20,36,10,10,20]
                }]
            })
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.excile();
        })
    }
}
</script>
<style lang="scss" scoped>
    .echartsBox{
        width: 600px;
        height: 400px;
    }
</style>