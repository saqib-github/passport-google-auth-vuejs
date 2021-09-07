<template>
  <v-container fill-height fluid class="justify-center pink lighten-5">
    <v-card width="400" height="400">
      <v-container fill-height fluid>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md10>
            <h2 class="text-center">Login</h2>
            <v-container>
              <v-text-field
                label="Email"
                outlined
                dense
                v-model.trim="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                outlined
                dense
                v-model.trim="password"
              ></v-text-field>
              <v-btn color="primary" class="mr-2" @click="login">Login</v-btn>
              <v-btn color="primary" class="ml-2" @click="login" to="/register">Register</v-btn>
              <v-btn color="primary" class="mt-4"
                ><v-icon color="red" class="mr-2">{{ mdiGoogle }}</v-icon
                >Login with Google</v-btn
              >
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mdiGoogle } from "@mdi/js";
import axios from "axios";
export default {
  name: "login-component",

  data: () => ({
    mdiGoogle: mdiGoogle,

    // v-models for login input values
    email: "",
    password: "",
  }),
  methods: {
    login() {
      this.$router.push("home");
      if(this.email && this.password) {
        console.log('email', this.email)
        console.log('password', this.password)
      }
      axios.get('http://localhost:3000/auth/google');
    },
  },
};
</script>
