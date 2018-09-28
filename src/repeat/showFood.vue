<style scoped lang="less">
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
  <div>
    <div class="EachHotFood" v-for="item in sendFood" :key="item.id"  @click="changeToDetail(item.id)">
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
</template>
<script>
  export default {
    props: ['sendFood'],
    data () {
      return {
        name: '插件'
      }
    },
    created () {
      this.getDate()
    },
    methods: {
      getDate () {
        console.log('哇哈哈哈')
      },
      changeToDetail(id) {
        /*this.$router.push({path: '/goodsDetail', query: {id: id}})*/
        this.$router.push({path: '/goodsDetail'})
        this.$store.state.goodId = id
      }
    }
  }
</script>
