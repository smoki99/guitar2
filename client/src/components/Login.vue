<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title="Login">
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
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationServer from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  name: 'HelloWorld',
  methods: {
    async login () {
      try {
        const response = await AuthenticationServer.login({
          email: this.email,
          password: this.password
        })
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
