<style scoped lang="less">
  .EachStep{
    margin: 0.1rem 0rem;
    .StepExplan{
      font-size: 18px;
      text-align: center;
      color: #e9545e;
      margin-bottom: 0.1rem;
    }
  }
</style>
<template>
  <div id="mainbox">
    <div class="EachStep" v-for="item in storeDate">
      <div class="StepExplan">{{item.step}}</div>
      <img @click="getNewDate" :src="item.img" alt="">
    </div>
  </div>
</template>
<script>
  export default ({
    props: ['storeDate'],
    data () {
      return {
        name: '菜单详情',
        newStore: []
      }
    },
    watch: {
      newStore (newValue) {
        console.log(newValue)
        /**
         *  这里只是起到一个监听数据的作用， watch 是用于监听某一个数据，而 computed 是监听到某一个数据变化，
         *  所有的变量它都要看一遍
         */
        this.newStore = newValue
      }
    },
    created () {
      this.initDate()
    },
    methods : {
      initDate () {
        console.log('初始化执行函数')
      },
      getNewDate () {
        console.log(this.storeDate)
        this.newStore = this.storeDate
        /**
         * this.$emit('传给父类的函数', 参数)
         */
        this.$emit('sendDateToFa', this.newStore)
      }
    }
  })
</script>
