<style scoped lang="less">
.TitleBox{
  height: 2.2rem;
  background: #264;
  padding-top: 0.1rem;
  .searchBox{
    width: 2.7rem;
    display: block;
    margin-left: 0.15rem;
  }
  .TitleLun{
    margin-top: 0.1rem;
    overflow: hidden;
  }
}
  .searchFood{
    position: absolute;
    right: 0.06rem;
    top: 0.1rem;
  }
</style>
<template>
  <div class="mainBox">
    <div class="TitleBox">
      <el-input v-model="searchName" class="searchBox" placeholder="红烧肉"></el-input>
      <el-button type="success" class="searchFood" @click="searchFood" round>搜索</el-button>
      <el-carousel height="150px" class="TitleLun" style="z-index: 22">
        <el-carousel-item v-for="item in storeMenu" :key="item.id">
          <img :src="item.albums[0]">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="HotMenu">
      <showFood :sendFood="hotFood"></showFood>
    </div>
  </div>
</template>
<script>
import * as getMoreDate from '../http/http'
import showFood from '../repeat/showFood'
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
    searchFood () {
      this.$router.push({path: '/Search'})
      this.$store.state.searchName = this.searchName // 将所搜的食物名称 赋值 给全局变量 searchName
    }
  },
  components: {
    showFood
  }
}
</script>
