<style scoped lang="less">
  .ReturnBck{
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    left: 0.06rem;
    top: 0.08rem;
  }
  .GoodsImgShow{
  background: #EEE;
  height: 2rem;
  margin-bottom: 0.1rem;
  span{
    font-size: 21px;
    display: block;
    border-bottom: 1px solid #264;
    height: 0.4rem;
    line-height: 0.4rem;
    font-weight: bold;
    letter-spacing: 2px;
  }
  img{
    height: 1.4rem;
    width: 1.4rem;
    margin-top: 0.1rem;
  }
}
  .Material{
    background: #EEE;
    margin-bottom: 0.1rem;
    span{
      font-size: 21px;
      display: block;
      border-bottom: 1px solid #264;
      height: 0.4rem;
      line-height: 0.4rem;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .MaterialDetail{
      font-size: 18px;
      text-align: justify;
      letter-spacing: 2px;
      padding: 20px;
    }
  }
  .MakeFodProcess{
    background: #EEE;
    span{
      font-size: 21px;
      display: block;
      border-bottom: 1px solid #264;
      height: 0.4rem;
      line-height: 0.4rem;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
</style>
<template>
  <div id="Detail">
    <img class="ReturnBck" @click="turnBackBefore" src="https://image.snaily.com.cn/turnBackMy.png" alt="">
    <div class="GoodsImgShow">
      <span>{{storeAllDate.title}}</span>
      <img :src="storeAllDate.albums[0]" alt="">
    </div>
    <div class="Material">
      <span>菜名介绍</span>
      <div class="MaterialDetail">{{storeAllDate.imtro}}</div>
    </div>
    <div class="MakeFodProcess">
      <span>图片介绍</span>
      <!--<div class="EachStep" v-for="item in makeStep">
        <div class="StepExplan">{{item.step}}</div>
        <img :src="item.img" alt="">
      </div>-->
      <detail :storeDate="makeStep" v-on:sendDateToFa="getDateFCchid"></detail>
    </div>
  </div>
</template>
<script>
import { getallMenu } from '../http/http'
import detail from '../repeat/detail'
export default {
  data () {
    return {
      name: '食物详情',
      storeAllDate: [], // 存储该菜名下的所有数据
      makeStep: [] // 详情step介绍
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      /*console.log(this.$route.query.id)// 这里是获取通过 页面跳转传递的值*/
      let sendDate = {
        id: this.$store.state.goodId,
        key: '9e17f73c4feb9b5164307361a3c09b8d' // 自己弄一个聚合数据的key
      }
      getallMenu('//localhost:8090/cook/queryid', sendDate).then((res) => {
        this.storeAllDate = res.data.result.data[0]
        console.log('获取到的详情')
        console.log(res)
        this.makeStep = res.data.result.data[0].steps // 将step 注入到makeStep中，放入列表中进行循环铺数据
      })
    },
    turnBackBefore () {
      // 返回到主页面
      this.$router.push({path: '/'})
    },
    getDateFCchid (data) {
      console.log('触发父类中的方法，并接收到传过来的数据')
      /**
       *   getDateFCchid 为父级接收子类函数传过来接收数据的函数  参数为传过来的数据
       * */
      console.log(data)
    }
  },
  components : {
    detail
  }
}
</script>
