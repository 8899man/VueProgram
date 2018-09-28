import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const truenDate = new Vuex.Store({
  state: {
    goodId: '',
    searchName: '' // 搜索食物名称
  }
})
/**
  这样在其他地方通过 this.$store.state.goodId  就可以对全局变量 goodId 进行存储了
  记得要把 store.js 在 main.js 中进行实例化,不然还是行不通滴
 */
export default truenDate
