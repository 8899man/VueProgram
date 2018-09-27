<style scoped lang="less">
.TitleBox{
  height: 2.2rem;
  background: #264;
  padding-top: 0.1rem;
  .searchBox{
    width: 2.7rem;
    display: block;
    margin: 0 auto;
  }
  .TitleLun{
    margin-top: 0.1rem;
    overflow: hidden;
  }
}
  .HotMenu{
    height: 6rem;
    .EachHotFood{
      height: 1.6rem;
      position: relative;
      background: #ccc;
      margin-bottom: 0.1rem;
      .foodImg{
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        left: 0.15rem;
        top: 50%;
        margin-top: -0.62rem;
        border-radius: 8px;
      }
      .foodName{
        left: 1.6rem;
        top: 0.22rem;
        overflow: hidden;
      }
      .foodProfid{
        left: 1.6rem;
        top: .5rem;
        height: 0.41rem;
        overflow: hidden;
        .foodNameAfter{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
      .foodBurden{
        left: 1.6rem;
        top: 1rem;
        height: 0.41rem;
        overflow: hidden;
        .foodNameAfter{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
.foodNameComeon{
  font-size: 0.16rem;
  position: absolute;
  color: #fff;
  text-align: justify;
  width: 2rem;
  height: 0.41rem;
  overflow: hidden;
}
</style>
<template>
  <div class="mainBox">
    <div class="TitleBox">
      <el-input v-model="searchName" class="searchBox" placeholder="红烧肉"></el-input>
      <el-carousel height="150px" class="TitleLun" style="z-index: 22">
        <el-carousel-item v-for="item in storeMenu" :key="item.id">
          <img :src="item.albums[0]">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="HotMenu">
      <div class="EachHotFood" v-for="item in hotFood" :key="item.id"  @click="changeToDetail(item.id)">
        <img class="foodImg" :src="item.albums[0]" alt="">
        <div class="foodName foodNameComeon">
          <span class="foodNameAfter">菜名:{{item.title}}</span>
        </div>
        <div class="foodProfid foodNameComeon">
          <span class="foodNameAfter">介绍:{{item.imtro}}</span>
        </div>
        <div class="foodBurden foodNameComeon">
          <span class="foodNameAfter">材料:{{item.burden}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as getMoreDate from '../http/http'
export default {
  data () {
    return {
      searchName: '', // 搜索名字
      hotFood: [],
      storeMenu: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      let sendData = {
        key: '9e17f73c4feb9b5164307361a3c09b8d',
        menu: '火锅',
        rn: 10,
        pn: 3
      }
      let getDate = await getMoreDate.getallMenu('//localhost:8090/cook/query', sendData)
      console.log(getDate.data.result.data)
      this.storeMenu = getDate.data.result.data.slice(0, 4)
      let hotDate = {
        key: '9e17f73c4feb9b5164307361a3c09b8d',
        menu: '牛肉',
        rn: 10,
        pn: 3
      }
      let getHotDate = await getMoreDate.getallMenu('//localhost:8090/cook/query', hotDate)
      console.log(getHotDate.data.result.data)
      this.hotFood = getHotDate.data.result.data
    },
    changeToDetail(id) {
      /*this.$router.push({path: '/goodsDetail', query: {id: id}})*/
      this.$router.push({path: '/goodsDetail'})
      this.$store.state.goodId = id
    }
  }
}
</script>
