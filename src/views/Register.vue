<template>
  <v-container fill-height fluid class="justify-center pink lighten-5">
    <v-card width="400" height="400">
      <v-container fill-height fluid>
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 md10>
            <h2 class="text-center">Register</h2>
            <v-container>
              <p class="red--text">{{ error_message }}</p>
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
              <v-btn color="primary" class="mr-2" @click="register"
                >Register</v-btn
              >
              <v-btn color="primary" class="ml-2" to="/">Login</v-btn>
              <v-btn color="primary" class="mt-4"
                ><v-icon color="red" class="mr-2">{{ mdiGoogle }}</v-icon
                >Register with Google</v-btn
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
import Helpers from "@/helpers/Helper.js";
import config from "@/config/config.js";
import Swal from "sweetalert2";
export default {
  name: "register-component",

  data: () => ({
    mdiGoogle: mdiGoogle,

    // v-models for register input values
    email: "",
    password: "",
    // ............
    error_message: "",
  }),
  methods: {
    register() {
      if (!this.email && this.password) {
        this.error_message = "Please enter mail";
      }
      if (!this.password && this.email) {
        this.error_message = "Please enter password";
      }
      if (!this.password && !this.email) {
        this.error_message = "Please enter email and password";
      }
      if (this.password && this.email) {
        console.log("email", this.email);
        console.log("password", this.password);
        const user = {
          email: this.email,
          password: this.password,
        };
        let url = `${config.URL_CONSTANTS}:${config.API_PORT}/api/user/register`;
        Helpers.post(url, user)
          .then((res) => {
            console.log("response", res);
            Swal.fire("Congratulation", res.data.message, "success");
          })
          .catch((err) => {
            console.log("error", err.response);
            Swal.fire("Opps", err.response.data.message, "error");
          });
      }
    },
  },
};
</script>
