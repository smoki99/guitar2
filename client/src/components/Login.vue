<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"/>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"/>
          <br>
          <div class="error" v-html="error"></div>
          <br>
          <v-btn class="cyan" dark @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServer from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  methods: {
    async login () {
      try {
        const response = await AuthenticationServer.login({
          email: this.email,
          password: this.password
        })
        debugger
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
