<style scoped lang="less">

</style>
<template>
  <div>
    <showFood :sendFood="storeFood"></showFood>
  </div>
</template>
<script>
  import { getallMenu } from '../http/http'
  import showFood from '../repeat/showFood'
  export default {
    data () {
      return {
        storeFood: []
      }
    },
    created () {
      this.getSearchName()
    },
    methods: {
      getSearchName () {
        let sendDate = {
          menu: this.$store.state.searchName,
          key: '9e17f73c4feb9b5164307361a3c09b8d',
          pn: '1',
          rn: '20'
        }
        getallMenu('//localhost:8090/cook/query', sendDate).then((res) => {
          console.log('搜索来的数据')
          console.log(res.data.result.data)
          this.storeFood = res.data.result.data
        })
      }
    },
    components: {
      showFood
    }
  }
</script>
