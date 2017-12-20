<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationServer from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  methods: {
    async register () {
      const response = await AuthenticationServer.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
