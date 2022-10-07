new Vue({
  el: '#app',
  data: {
    operations: ['0', '5', '10', '15', '20'],
    selected_operation: '0',
    total: 200,
    result: null
  },
  methods: {
    onChange (event) {
      //100 / this.selected_operation
      if(this.selected_operation === 0 || this.total === 0){
        this.result = null
        return
      }
      this.result = this.total * this.selected_operation / 100
      
      /*
      switch (this.selected_operation) {
          case "0":
            console.log("bahsis: 0")
            this.result = 0
            break
          case "5":
            console.log("bahsis: 5")
            this.result = ( this.total * this.selected_operation ) / 100
            break
          case "10":
            this.result = ( this.total * this.selected_operation ) / 100
            break
          case "15":
            this.result = ( this.total * this.selected_operation ) / 100
            break
          case "20":
            this.result = ( this.total * this.selected_operation ) / 100
            break
          default:
            console.log('...')
      }
      */
    }
  }
})
