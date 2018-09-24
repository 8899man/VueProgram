import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const truenDate = new Vuex.Store({
  state: {
    goodId: ''
  }
})
// 这样在其他地方通过 this.truenDate.state.goodId  就可以对全局变量 goodId 进行存储了
export default truenDate
