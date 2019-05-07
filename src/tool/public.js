export const checkToken = {
  data () {
    return {
      // isSignIn: false
    }
  }
  // beforeCreate () {
  //   // 检测localStorage是否存有token
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     let params = {
  //       token
  //     }
  //     this.$axios.post('/api/user/checkUser', params)
  //       .then(res => {
  //         if (res.data.status === 1) {
  //           this.isSignIn = true
  //         } else {
  //           this.isSignIn = false
  //         }
  //       })
  //       .catch(error => {
  //         this.isSignIn = false
  //         console.log(error)
  //       })
  //   }
  // }
}
